import { howItWorks, understandingLoop } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { ReflectionMock } from "@/components/ui/ReflectionMock";

/** Steps + reflection — sequential pair, no decorative diagram. */
export function LoopSection() {
  return (
    <section
      id={howItWorks.id}
      className="reveal border-b border-border py-12 md:py-14"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h2
              id="how-it-works-heading"
              className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl sm:tracking-[-0.02em]"
            >
              {howItWorks.title}
            </h2>
            <ol className="relative mt-8">
              <span
                className="absolute top-3 bottom-3 left-[1.15rem] w-px bg-foreground/20"
                aria-hidden
              />
              {howItWorks.steps.map((step) => (
                <li key={step.step} className="relative flex gap-5 pb-7 last:pb-0">
                  <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-mono text-xs font-medium text-foreground">
                    {step.step}
                  </span>
                  <p className="pt-2 font-body text-base font-medium text-foreground sm:text-lg">
                    {step.title}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 font-body text-sm text-muted-foreground">
              {howItWorks.delivery}
            </p>
          </div>

          <div id={understandingLoop.id}>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {understandingLoop.title}
            </h2>
            <p className="mt-3 font-body leading-relaxed text-muted-foreground">
              {understandingLoop.lead}
            </p>
            <ReflectionMock className="mt-6" />
          </div>
        </div>
      </Container>
    </section>
  );
}
