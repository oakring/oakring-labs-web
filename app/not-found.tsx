import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/content";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 py-section-sm md:py-section">
        <Container className="max-w-prose">
          <p className="text-sm font-medium text-muted-foreground">{site.name}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            Page not found
          </h1>
          <p className="mt-4 text-muted-foreground">
            That URL doesn’t exist. Head home, or jump to the waitlist if you’re
            looking for MetaSpan early access.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/">Back home</ButtonLink>
            <ButtonLink href="/#waitlist" variant="secondary">
              Join waitlist
            </ButtonLink>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Or{" "}
            <Link
              href="/contact"
              className="underline underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
            >
              contact us
            </Link>
            .
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
