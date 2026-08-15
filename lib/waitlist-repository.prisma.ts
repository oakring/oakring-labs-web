import { prisma } from "@/lib/db";
import type {
  WaitlistRepository,
  WaitlistSignupInput,
  WaitlistSignupResult,
} from "@/lib/waitlist-repository";

export const prismaWaitlistRepository: WaitlistRepository = {
  async addEntry(input: WaitlistSignupInput): Promise<WaitlistSignupResult> {
    try {
      await prisma.waitlistEntry.create({
        data: {
          email: input.email,
          name: input.name?.trim() || null,
        },
      });
      return { ok: true, created: true };
    } catch (error) {
      const code =
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        (error as { code: string }).code;

      if (code === "P2002") {
        return { ok: true, created: false, reason: "duplicate" };
      }

      console.error("[waitlist] database error", error);
      return { ok: false, error: "database" };
    }
  },
};

export const waitlistRepository: WaitlistRepository = prismaWaitlistRepository;
