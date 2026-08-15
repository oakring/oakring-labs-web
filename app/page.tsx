import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { DeltaEngine } from "@/components/sections/DeltaEngine";
import { KnowledgeGraph } from "@/components/sections/KnowledgeGraph";
import { LoopSection } from "@/components/sections/LoopSection";
import { Closing } from "@/components/sections/Closing";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} — Practical AI products`,
  description: site.description,
  openGraph: {
    title: `${site.name} — Practical AI products`,
    description: site.description,
    url: site.url,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main-content">
        {/* Brand + waitlist */}
        <Hero />
        {/* MetaSpan + philosophy */}
        <ProductIntro />
        {/* Only diagrams kept: Delta + Knowledge graph */}
        <DeltaEngine />
        <KnowledgeGraph />
        {/* Steps + reflection */}
        <LoopSection />
        {/* Why different + vision */}
        <Closing />
      </main>
      <Footer />
    </>
  );
}
