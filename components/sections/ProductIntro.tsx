import { whatIsMetaSpan, knowledgeNotContent } from "@/lib/content";
import { Container } from "@/components/ui/Container";

/** MetaSpan intro + philosophy — paired left/right, no diagram. */
export function ProductIntro() {
  return (
    <section
      id={whatIsMetaSpan.id}
      className="reveal border-b border-border py-12 md:py-14"
      aria-labelledby="what-is-metaspan-heading"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.08em] text-muted-foreground uppercase">
              First product
            </p>
            <h2
              id="what-is-metaspan-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:tracking-[-0.02em]"
            >
              {whatIsMetaSpan.title}
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
              {whatIsMetaSpan.lead}
            </p>
          </div>
          <div id={knowledgeNotContent.id} className="md:border-l md:border-border md:pl-14">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl sm:tracking-[-0.02em]">
              {knowledgeNotContent.title}
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
              {knowledgeNotContent.lead}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
