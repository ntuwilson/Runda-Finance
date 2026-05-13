"use client";

import Link from "next/link";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/button-link";
import { loanProducts } from "@/lib/content";

const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white">
      <motion.div
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "show"}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.div variants={reveal} className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium text-[#667085]">Responsible credit for Uganda</p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#111827] sm:text-7xl">
            Clear credit, simply explained.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#475467]">
            Compare loan options, see the basic requirements, and speak to a loan officer before submitting an application.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/loans">View loan products</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Talk to a loan officer
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div variants={reveal} className="mt-14 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="min-h-[360px] rounded-xl bg-[#f5f5f7] p-6 sm:p-8">
            <div className="flex h-full min-h-[300px] items-center justify-center rounded-lg border border-dashed border-[#c8cdd5] bg-white text-center text-sm font-medium text-[#667085]">
              [Verified Runda office, staff, or customer support image]
            </div>
          </div>
          <div className="grid gap-4">
            {["Requirements before application", "Assessment before approval", "Human loan support"].map((item) => (
              <div key={item} className="rounded-xl bg-[#f5f5f7] p-6">
                <p className="text-sm font-medium text-[#667085]">Runda Finance</p>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.025em] text-[#111827]">{item}</h2>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={reveal} className="mt-16">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[#667085]">Loan products</p>
              <h2 className="mt-2 text-3xl font-medium tracking-[-0.035em] text-[#111827] sm:text-5xl">Choose the right starting point.</h2>
            </div>
            <Link href="/loans" className="hidden text-sm font-medium text-[#111827] hover:text-[#475467] sm:inline">
              See all
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {loanProducts.map((loan) => (
              <Link
                key={loan.slug}
                href={`/loans/${loan.slug}`}
                className="group rounded-xl border border-[#e5e7eb] bg-white p-5 transition hover:bg-[#f5f5f7]"
              >
                <h3 className="text-xl font-medium tracking-[-0.02em] text-[#111827]">{loan.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#475467]">{loan.bestFor}</p>
                <p className="mt-6 text-sm font-medium text-[#111827]">Check requirements <span aria-hidden="true">→</span></p>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
