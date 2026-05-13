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
    <header className="sticky top-0 z-50 border-b border-[#dfe3ee] bg-white/92 backdrop-blur-xl">
      <div className="border-b border-[#e4e8f4] bg-[#eef1ff] text-[#263479]">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Licensed and regulated: {siteDetails.license}</p>
          <p>Need guidance? Call {siteDetails.phones[0]}</p>
        </div>
      </div>
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-medium tracking-[-0.02em] text-[#050505]" aria-label="Runda Finance home" onClick={() => setOpen(false)}>
          Runda Finance
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-[#3f4656] transition hover:text-[#263479] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f79e26]",
                pathname === item.href && "text-[#263479]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/contact" variant="ghost">
            Talk to a Loan Officer
          </ButtonLink>
          <ButtonLink href="/start-application">Start Application</ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 items-center rounded-md border border-[#dfe3ee] px-4 text-sm font-medium text-[#050505] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f79e26] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-[#d7dce2] bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-[#050505] hover:bg-[#eef1ff]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2">
              <ButtonLink href="/start-application">Start Application</ButtonLink>
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
