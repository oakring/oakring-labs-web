import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { privacyPage } from "@/lib/content";

export const metadata: Metadata = {
  title: privacyPage.title,
  description: "How OakRing Labs handles waitlist and analytics data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-section-sm md:py-section">
        <Container className="max-w-prose">
          <h1 className="text-heading-lg font-semibold tracking-tight">
            {privacyPage.title}
          </h1>
          <div className="mt-10 space-y-8">
            {privacyPage.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-heading-md font-semibold text-foreground">
                  {section.heading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
