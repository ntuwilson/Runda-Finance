import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/business-loan", destination: "/loans/business-loan", permanent: true },
      { source: "/business-loan/", destination: "/loans/business-loan", permanent: true },
      { source: "/salary-loan", destination: "/loans/salary-loan", permanent: true },
      { source: "/salary-loan/", destination: "/loans/salary-loan", permanent: true },
      { source: "/sme-loans", destination: "/loans/sme-loan", permanent: true },
      { source: "/sme-loans/", destination: "/loans/sme-loan", permanent: true },
      { source: "/logbook-financing", destination: "/loans/logbook-financing", permanent: true },
      { source: "/logbook-financing/", destination: "/loans/logbook-financing", permanent: true },
      { source: "/lpo-financing", destination: "/loans/lpo-financing", permanent: true },
      { source: "/lpo-financing/", destination: "/loans/lpo-financing", permanent: true },
      { source: "/weekendi-loan", destination: "/loans/weekendi-loan", permanent: true },
      { source: "/weekendi-loan/", destination: "/loans/weekendi-loan", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/our-team", destination: "/about/team", permanent: true },
      { source: "/our-team/", destination: "/about/team", permanent: true },
      { source: "/ceo-message", destination: "/about/managing-director-message", permanent: true },
      { source: "/ceo-message/", destination: "/about/managing-director-message", permanent: true },
      { source: "/news", destination: "/insights", permanent: true },
      { source: "/news/", destination: "/insights", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
