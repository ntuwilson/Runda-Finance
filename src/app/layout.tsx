import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { absoluteUrl } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: "Runda Finance | Regulated Loans for Workers and SMEs in Uganda",
    template: "%s",
  },
  description:
    "Runda Finance provides salary loans, SME loans, business loans, logbook financing, LPO financing, and short-term credit solutions for qualified borrowers in Uganda.",
  openGraph: {
    siteName: "Runda Finance",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Runda Finance" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-[#0b1f3a]" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
