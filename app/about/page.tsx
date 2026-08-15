import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { aboutPage, site } from "@/lib/content";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.description,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-section-sm md:py-section">
        <Container className="max-w-prose">
          <p className="text-sm text-muted-foreground">{site.name}</p>
          <h1 className="mt-2 text-heading-lg font-semibold tracking-tight">
            {aboutPage.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {aboutPage.description}
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {aboutPage.metaSpanNote}
          </p>
          <Link
            href="/#waitlist"
            className="mt-8 inline-block text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            Join the MetaSpan waitlist
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
