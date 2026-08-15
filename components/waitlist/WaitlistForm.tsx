"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import {
  initialWaitlistState,
  validateWaitlistField,
  waitlistSchema,
} from "@/components/waitlist/waitlist.schema";
import { waitlist } from "@/lib/content";
import { joinWaitlist } from "@/lib/actions/waitlist";
import { trackWaitlistSubmitted } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/cn";

type WaitlistFormProps = {
  /** Compact card for hero (no outer section) */
  embedded?: boolean;
  className?: string;
};

export function WaitlistForm({ embedded = false, className }: WaitlistFormProps) {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialWaitlistState,
  );
  const trackedRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);

  useEffect(() => {
    if (
      state.status === "success" &&
      state.isNewSignup &&
      !trackedRef.current
    ) {
      trackedRef.current = true;
      trackWaitlistSubmitted();
    }
  }, [state]);

  function handleBlur(
    field: "email" | "name",
    event: React.FocusEvent<HTMLInputElement>,
  ) {
    const message = validateWaitlistField(field, event.target.value);
    if (field === "email") setEmailError(message);
    else setNameError(message);
  }

  function handleChange(
    field: "email" | "name",
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const value = event.target.value;
    if (field === "email" && emailError) {
      setEmailError(validateWaitlistField("email", value));
    }
    if (field === "name" && nameError) {
      setNameError(validateWaitlistField("name", value));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "");
    const name = String(formData.get("name") ?? "");

    const nextEmailError = validateWaitlistField("email", email);
    const nextNameError = validateWaitlistField("name", name);
    setEmailError(nextEmailError);
    setNameError(nextNameError);

    if (nextEmailError || nextNameError) {
      event.preventDefault();
      return;
    }

    const parsed = waitlistSchema.safeParse({
      email,
      name,
      website: formData.get("website") ?? "",
    });
    if (!parsed.success) {
      event.preventDefault();
    }
  }

  function handleRetry() {
    formRef.current?.requestSubmit();
  }

  const showSuccess = state.status === "success";
  const isDuplicate = showSuccess && state.kind === "duplicate";

  const body = showSuccess ? (
    <div
      className="rounded-lg border border-border bg-surface p-5"
      role="status"
      aria-live="polite"
    >
      <p className="font-display text-sm font-semibold text-foreground">
        {isDuplicate ? waitlist.duplicateTitle : waitlist.successTitle}
      </p>
      <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
        {state.message}
      </p>
    </div>
  ) : (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
    >
      <Input
        name="name"
        label={waitlist.nameLabel}
        placeholder={waitlist.namePlaceholder}
        autoComplete="name"
        error={nameError ?? undefined}
        onBlur={(e) => handleBlur("name", e)}
        onChange={(e) => handleChange("name", e)}
        aria-invalid={Boolean(nameError)}
      />
      <Input
        name="email"
        type="email"
        label={waitlist.emailLabel}
        placeholder={waitlist.emailPlaceholder}
        autoComplete="email"
        required
        error={emailError ?? undefined}
        onBlur={(e) => handleBlur("email", e)}
        onChange={(e) => handleChange("email", e)}
        aria-invalid={Boolean(emailError)}
      />
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <Button
        type="submit"
        disabled={pending}
        className="w-full"
        aria-busy={pending}
      >
        {pending ? waitlist.submitting : waitlist.submit}
      </Button>

      {state.status === "error" ? (
        <div
          className="rounded-md border border-red-200 bg-red-50 px-3 py-3"
          role="alert"
        >
          <p className="text-sm text-red-800">{state.message}</p>
          {state.code !== "rate_limit" ? (
            <Button
              type="button"
              variant="secondary"
              className="mt-3"
              onClick={handleRetry}
              disabled={pending}
            >
              {waitlist.retry}
            </Button>
          ) : null}
        </div>
      ) : null}
    </form>
  );

  if (embedded) {
    return (
      <div
        id={waitlist.id}
        className={cn(
          "w-full rounded-xl border border-border bg-surface p-6 shadow-sm shadow-stone-900/5",
          className,
        )}
      >
        <h2
          id="waitlist-heading"
          className="font-display text-xl font-semibold tracking-tight text-foreground"
        >
          {waitlist.title}
        </h2>
        <p className="mt-1.5 font-body text-sm text-muted-foreground">
          {waitlist.description}
        </p>
        <div className="mt-6">{body}</div>
      </div>
    );
  }

  return (
    <section
      id={waitlist.id}
      className={cn(
        "reveal border-b border-border py-12 md:py-14",
        className,
      )}
      aria-labelledby="waitlist-heading"
    >
      <div className="mx-auto w-full max-w-md px-6">
        <h2
          id="waitlist-heading"
          className="font-display text-2xl font-semibold tracking-tight text-foreground"
        >
          {waitlist.title}
        </h2>
        <p className="mt-2 font-body text-sm text-muted-foreground">
          {waitlist.description}
        </p>
        <div className="mt-8">{body}</div>
      </div>
    </section>
  );
}
