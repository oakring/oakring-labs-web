import { site } from "@/lib/content";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    logo: `${site.url.replace(/\/$/, "")}/logo.svg`,
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.productName,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, WhatsApp",
    description:
      "An AI knowledge companion that learns what you know and chooses what you should learn next.",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
    </>
  );
}
