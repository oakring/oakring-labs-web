import { whyDifferent, companyVision, site } from "@/lib/content";
import { Container } from "@/components/ui/Container";

/** Closing pair: differentiation + company vision. */
export function Closing() {
  return (
    <section
      id={whyDifferent.id}
      className="reveal border-b border-border py-12 md:py-14"
      aria-labelledby="why-different-heading"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h2
              id="why-different-heading"
              className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl sm:tracking-[-0.02em]"
            >
              {whyDifferent.title}
            </h2>
            <ul className="mt-6 space-y-3">
              {whyDifferent.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 font-body text-muted-foreground"
                >
                  <span className="text-foreground/40" aria-hidden>
                    —
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div id={companyVision.id} className="md:border-l md:border-border md:pl-14">
            <p className="font-display text-sm font-semibold text-foreground">
              {site.name}
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground">
              {companyVision.title}
            </h2>
            <p className="mt-3 font-body leading-relaxed text-muted-foreground">
              {companyVision.body}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
