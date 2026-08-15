import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { contactPage } from "@/lib/content";

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.description,
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-section-sm md:py-section">
        <Container className="max-w-prose">
          <h1 className="text-heading-lg font-semibold tracking-tight">
            {contactPage.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {contactPage.description}
          </p>
          <p className="mt-6">
            <a
              href={`mailto:${contactPage.email}`}
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              {contactPage.email}
            </a>
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
