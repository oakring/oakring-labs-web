import { hero } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

export function Hero() {
  return (
    <section className="border-b border-border py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="flex flex-col items-start">
            <div className="fade-in flex items-center gap-3 sm:gap-4">
              <LogoMark size={56} className="h-14 w-14" decorative={false} />
              <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl md:tracking-[-0.03em]">
                {hero.brand}
              </h1>
            </div>
            <p className="fade-in fade-in-delay-1 mt-5 max-w-md font-body text-lg text-muted-foreground sm:text-xl">
              {hero.tagline}
            </p>
            <p className="fade-in fade-in-delay-2 mt-4 max-w-md font-body text-base leading-relaxed text-foreground/85">
              {hero.productLine}
            </p>
            <div className="fade-in fade-in-delay-3 mt-8">
              <ButtonLink href={hero.secondaryCtaHref} variant="secondary">
                {hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <div className="fade-in fade-in-delay-2 w-full max-w-md lg:max-w-none lg:justify-self-end">
            <WaitlistForm embedded />
          </div>
        </div>
      </Container>
    </section>
  );
}
