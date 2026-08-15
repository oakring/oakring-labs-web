import { knowledgeGraph } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { KnowledgeGraphNetwork } from "@/components/ui/KnowledgeGraphNetwork";

export function KnowledgeGraph() {
  return (
    <section
      id={knowledgeGraph.id}
      className="reveal border-b border-border bg-muted/50 py-12 md:py-16"
      aria-labelledby="knowledge-graph-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <KnowledgeGraphNetwork />
          </div>
          <div className="order-1 max-w-md lg:order-2">
            <h2
              id="knowledge-graph-heading"
              className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl sm:tracking-[-0.02em]"
            >
              {knowledgeGraph.title}
            </h2>
            <p className="mt-3 font-body text-muted-foreground">
              {knowledgeGraph.lead}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
