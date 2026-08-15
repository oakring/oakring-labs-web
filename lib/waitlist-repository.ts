export type WaitlistSignupInput = {
  email: string;
  name?: string | null;
};

export type WaitlistSignupResult =
  | { ok: true; created: true }
  | { ok: true; created: false; reason: "duplicate" }
  | { ok: false; error: string };

export interface WaitlistRepository {
  addEntry(input: WaitlistSignupInput): Promise<WaitlistSignupResult>;
}
