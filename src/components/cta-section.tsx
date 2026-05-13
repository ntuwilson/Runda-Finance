import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";

export function CTASection({
  title,
  body,
  primaryLabel = "Start Application",
  primaryHref = "/start-application",
  secondaryLabel = "Talk to a Loan Officer",
}: {
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="border-y border-[#e5e7eb] bg-[#f5f5f7] py-14 text-[#111827]">
      <Reveal className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-5xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-[#475467]">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={primaryHref} variant="secondary">
            {primaryLabel}
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            {secondaryLabel}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
