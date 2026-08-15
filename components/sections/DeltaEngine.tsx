import { deltaEngine } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { DeltaDiagram } from "@/components/ui/DeltaDiagram";

export function DeltaEngine() {
  return (
    <section
      id={deltaEngine.id}
      className="reveal border-b border-border py-12 md:py-16"
      aria-labelledby="delta-engine-heading"
    >
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2
              id="delta-engine-heading"
              className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl sm:tracking-[-0.02em]"
            >
              {deltaEngine.title}
            </h2>
            <p className="mt-4 max-w-md font-body text-lg leading-relaxed text-muted-foreground">
              {deltaEngine.lead}
            </p>
          </div>
          <div className="flex items-center">
            <DeltaDiagram className="w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
