import { z } from "zod";

const formString = z.preprocess(
  (value) => (typeof value === "string" ? value : ""),
  z.string(),
);

export const waitlistSchema = z.object({
  email: formString.pipe(
    z
      .string()
      .trim()
      .min(1, "Email is required")
      .email("Enter a valid email address")
      .max(320),
  ),
  name: formString.pipe(z.string().trim().max(120, "Name is too long")),
  website: formString.pipe(z.string()),
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export type WaitlistActionState =
  | { status: "idle" }
  | {
      status: "success";
      message: string;
      isNewSignup: boolean;
      kind: "created" | "duplicate";
    }
  | {
      status: "error";
      message: string;
      code: "validation" | "rate_limit" | "server";
    };

export const initialWaitlistState: WaitlistActionState = { status: "idle" };

export function validateWaitlistField(
  field: "email" | "name",
  value: string,
): string | null {
  const result = waitlistSchema.shape[field].safeParse(value);
  if (result.success) return null;
  const issue = result.error.issues[0];
  return issue?.message ?? "Invalid value";
}
