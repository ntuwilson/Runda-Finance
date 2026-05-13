import { baseUrl, siteDetails } from "@/lib/content";

export function SchemaScript({ type = "Organization" }: { type?: "Organization" | "FinancialService" | "LocalBusiness" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name: siteDetails.name,
    url: baseUrl,
    address: siteDetails.address,
    telephone: siteDetails.phones,
    email: siteDetails.email,
    areaServed: "Uganda",
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
