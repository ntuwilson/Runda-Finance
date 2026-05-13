import Link from "next/link";
import { loanProducts, siteDetails } from "@/lib/content";

const footerLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About Runda" },
  { href: "/faqs", label: "FAQs" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
  { href: "/complaints", label: "Complaints" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#e4e8f4] bg-[#eef1ff] text-[#050505]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-medium tracking-[-0.025em]">Runda Finance</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#3f4656]">
            Clear requirements. Responsible assessment. Human loan support. Practical credit for workers, SMEs,
            suppliers, contractors, and vehicle owners in Uganda.
          </p>
          <p className="mt-5 text-sm text-[#3f4656]">License: {siteDetails.license}</p>
          <p className="mt-1 text-sm text-[#3f4656]">Address: {siteDetails.address}</p>
        </div>
        <div>
          <h3 className="font-medium">Loans</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#3f4656]">
            {loanProducts.map((loan) => (
              <li key={loan.slug}>
                <Link className="hover:text-[#050505]" href={`/loans/${loan.slug}`}>
                  {loan.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#3f4656]">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-[#050505]" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[#e4e8f4]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-[#263479] sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>Copyright {new Date().getFullYear()} Runda Finance. All rights reserved.</p>
          <p>Website content must be reviewed by legal and compliance before launch.</p>
        </div>
      </div>
    </footer>
  );
}
