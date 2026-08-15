"use client";

import { track } from "@vercel/analytics";

export function trackWaitlistSubmitted(): void {
  track("waitlist_submitted");
}
