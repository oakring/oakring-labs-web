"use server";

import { headers } from "next/headers";
import { waitlist } from "@/lib/content";
import { sendWaitlistConfirmation } from "@/lib/email";
import { notifyFounderNewWaitlistSignup } from "@/lib/notify";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { waitlistRepository } from "@/lib/waitlist-repository.prisma";
import {
  waitlistSchema,
  type WaitlistActionState,
} from "@/components/waitlist/waitlist.schema";

async function runSideEffects(params: {
  email: string;
  name?: string | null;
}) {
  await Promise.allSettled([
    sendWaitlistConfirmation(params),
    notifyFounderNewWaitlistSignup(params),
  ]);
}

export async function joinWaitlist(
  _prevState: WaitlistActionState,
  formData: FormData,
): Promise<WaitlistActionState> {
  const raw = {
    email: formData.get("email"),
    name: formData.get("name"),
    website: formData.get("website"),
  };

  const parsed = waitlistSchema.safeParse(raw);
  if (!parsed.success) {
    const message =
      parsed.error.flatten().fieldErrors.email?.[0] ??
      parsed.error.flatten().fieldErrors.name?.[0] ??
      waitlist.error;
    return { status: "error", message, code: "validation" };
  }

  if (parsed.data.website?.trim()) {
    return {
      status: "success",
      message: waitlist.success,
      isNewSignup: false,
      kind: "created",
    };
  }

  const headerStore = await headers();
  const ip = getClientIp(headerStore.get("x-forwarded-for"));
  const { allowed } = checkRateLimit(`waitlist:${ip}`);
  if (!allowed) {
    return {
      status: "error",
      message: waitlist.rateLimited,
      code: "rate_limit",
    };
  }

  const email = parsed.data.email.toLowerCase();
  const name = parsed.data.name || null;

  const result = await waitlistRepository.addEntry({ email, name });

  if (!result.ok) {
    return { status: "error", message: waitlist.error, code: "server" };
  }

  if (!result.created && result.reason === "duplicate") {
    return {
      status: "success",
      message: waitlist.duplicate,
      isNewSignup: false,
      kind: "duplicate",
    };
  }

  void runSideEffects({ email, name });

  return {
    status: "success",
    message: waitlist.success,
    isNewSignup: true,
    kind: "created",
  };
}
