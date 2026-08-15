import { understandingLoop } from "@/lib/content";
import { cn } from "@/lib/cn";

export function ReflectionMock({ className }: { className?: string }) {
  return (
    <figure
      className={cn(className)}
      aria-label="Example of a MetaSpan reflection prompt"
    >
      <div className="rounded-lg border border-border bg-surface p-5 shadow-sm shadow-stone-900/5">
        <p className="font-mono text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
          Reflection
        </p>
        <p className="mt-3 font-body text-sm font-medium leading-snug text-foreground">
          {understandingLoop.mockPrompt}
        </p>
        <div
          className="mt-4 min-h-[4.5rem] rounded-md border border-dashed border-border bg-muted/40 px-3 py-2.5 font-body text-sm leading-relaxed text-muted-foreground"
          aria-hidden
        >
          {understandingLoop.mockDraft}
        </div>
        <p className="mt-3 font-mono text-[11px] text-muted-foreground">
          {understandingLoop.mockHint}
        </p>
      </div>
      <figcaption className="sr-only">
        Product mockup of writing a short reflection after a Delta.
      </figcaption>
    </figure>
  );
}
