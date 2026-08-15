import { Resend } from "resend";
import { site } from "@/lib/content";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

export async function sendWaitlistConfirmation(params: {
  email: string;
  name?: string | null;
}): Promise<void> {
  const resend = getResend();
  const from = process.env.RESEND_FROM_EMAIL;

  if (!resend || !from) {
    return;
  }

  const greeting = params.name?.trim()
    ? `Hi ${params.name.trim()},`
    : "Hi there,";

  await resend.emails.send({
    from,
    to: params.email,
    subject: "You're on the MetaSpan waitlist",
    text: `${greeting}

Thanks for joining the waitlist for MetaSpan — the first product from ${site.name}.

We'll email you when early access opens. Until then, we're heads-down building.

— ${site.name}
${site.url}
`,
  });
}
