"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { navigation, siteDetails } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#263479]/95 text-white backdrop-blur-xl transition-colors">
      <div className="border-b border-white/12 bg-[#121b4d] text-white/82">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Licensed and regulated: {siteDetails.license}</p>
          <p>Need guidance? Call {siteDetails.phones[0]}</p>
        </div>
      </div>
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-medium tracking-[-0.02em] text-white" aria-label="Runda Finance home" onClick={() => setOpen(false)}>
          Runda Finance
        </Link>
        <div className="hidden items-center gap-4 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-sm px-1 py-2 text-sm font-medium text-white/72 transition duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f79e26] after:absolute after:inset-x-1 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#f79e26] after:transition-transform hover:after:scale-x-100",
                (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))) &&
                  "font-medium text-white after:scale-x-100",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/contact" variant="ghost">
            Talk to a Loan Officer
          </ButtonLink>
          <ButtonLink href="/start-application" variant="secondary">Start Application</ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 items-center rounded-md border border-white/25 px-4 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f79e26] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-white/12 bg-[#263479] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-white hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2">
              <ButtonLink href="/start-application" variant="secondary">Start Application</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Talk to a Loan Officer
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
