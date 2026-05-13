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
    <section className="bg-white text-[#050505]">
      <motion.div
        className="relative min-h-[680px] overflow-hidden bg-[#263479] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "show"}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        <div className="absolute inset-0 bg-[url('/images/runda-hero.png')] bg-cover bg-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.64)_42%,rgba(0,0,0,0.22)_100%)]" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/62 to-transparent" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center">
          <motion.div variants={reveal} className="max-w-3xl">
          <p className="mb-4 text-sm font-medium text-[#f79e26]">Responsible credit for Uganda</p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-7xl">
            Clear credit, simply explained.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86">
            Compare loan options, see the basic requirements, and speak to a loan officer before submitting an application.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/loans">View loan products</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Talk to a loan officer
            </ButtonLink>
          </div>
        </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.div variants={reveal} className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium text-[#263479]">Runda Finance</p>
            <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-[-0.035em] text-[#050505] sm:text-5xl">
              Requirements, assessment, and human support in one clear path.
            </h2>
          </div>
          <div className="grid gap-4">
            {["Requirements before application", "Assessment before approval", "Human loan support"].map((item) => (
              <div key={item} className="rounded-md border border-[#e4e8f4] bg-[#eef1ff] p-6">
                <p className="text-sm font-medium text-[#263479]">Runda Finance</p>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.025em] text-[#050505]">{item}</h2>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={reveal} className="mt-16">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[#263479]">Loan products</p>
              <h2 className="mt-2 text-3xl font-medium tracking-[-0.035em] text-[#050505] sm:text-5xl">Choose the right starting point.</h2>
            </div>
            <Link href="/loans" className="hidden text-sm font-medium text-[#263479] hover:text-[#050505] sm:inline">
              See all
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {loanProducts.map((loan) => (
              <Link
                key={loan.slug}
                href={`/loans/${loan.slug}`}
                className="group rounded-md border border-[#e4e8f4] bg-white p-5 text-[#050505] transition hover:-translate-y-0.5 hover:border-[#263479] hover:bg-[#eef1ff] hover:shadow-sm"
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
