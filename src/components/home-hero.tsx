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
    <section className="bg-[#263479] text-white">
      <motion.div
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "show"}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.div variants={reveal} className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium text-[#f79e26]">Responsible credit for Uganda</p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-7xl">
            Clear credit, simply explained.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/82">
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
          <div className="min-h-[360px] rounded-lg bg-[linear-gradient(135deg,#ffffff1f_0%,#121b4d_52%,#050505_100%)] p-6 ring-1 ring-white/18 sm:p-8">
            <div className="flex h-full min-h-[300px] items-center justify-center rounded-md border border-dashed border-white/45 bg-white/8 text-center text-sm font-medium text-white">
              [Verified Runda office, staff, or customer support image]
            </div>
          </div>
          <div className="grid gap-4">
            {["Requirements before application", "Assessment before approval", "Human loan support"].map((item) => (
              <div key={item} className="rounded-lg border border-white/18 bg-white/10 p-6">
                <p className="text-sm font-medium text-[#f79e26]">Runda Finance</p>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.025em] text-white">{item}</h2>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={reveal} className="mt-16">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[#f79e26]">Loan products</p>
              <h2 className="mt-2 text-3xl font-medium tracking-[-0.035em] text-white sm:text-5xl">Choose the right starting point.</h2>
            </div>
            <Link href="/loans" className="hidden text-sm font-medium text-white/82 hover:text-white sm:inline">
              See all
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {loanProducts.map((loan) => (
              <Link
                key={loan.slug}
                href={`/loans/${loan.slug}`}
                className="group rounded-lg border border-white/18 bg-white p-5 text-[#050505] transition hover:border-[#f79e26] hover:bg-[#fff8ef]"
              >
                <h3 className="text-xl font-medium tracking-[-0.02em] text-[#050505]">{loan.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#3f4656]">{loan.bestFor}</p>
                <p className="mt-6 text-sm font-medium text-[#263479]">Check requirements <span aria-hidden="true">→</span></p>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
