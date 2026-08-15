export async function notifyFounderNewWaitlistSignup(params: {
  email: string;
  name?: string | null;
}): Promise<void> {
  const url = process.env.FOUNDER_NOTIFY_WEBHOOK_URL;
  if (!url) {
    return;
  }

  const payload = {
    text: `New MetaSpan waitlist signup: ${params.email}${
      params.name ? ` (${params.name})` : ""
    }`,
  };

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
