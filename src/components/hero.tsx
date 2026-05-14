import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";

type HeroProps = {
  eyebrow?: string;
  title: string;
  body: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  placeholder?: string;
};

export function Hero({ eyebrow, title, body, primary, secondary, placeholder = "[Office Photo]" }: HeroProps) {
  return (
    <section className="border-b border-[#d9dde3] bg-white">
      <div className="mx-auto grid min-h-[360px] w-full max-w-7xl items-center gap-8 px-4 py-10 sm:min-h-[430px] sm:px-6 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <Reveal className="min-w-0">
          {eyebrow && <p className="mb-4 text-sm font-medium text-[#263479]">{eyebrow}</p>}
          <h1 className="max-w-5xl text-3xl font-medium leading-[1.08] text-[#050505] min-[380px]:text-4xl sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#3f4656] sm:text-lg">{body}</p>
          {(primary || secondary) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primary && <ButtonLink href={primary.href}>{primary.label}</ButtonLink>}
              {secondary && (
                <ButtonLink href={secondary.href} variant="ghost">
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          )}
        </Reveal>
        <Reveal delay={0.08} className="min-h-[220px] overflow-hidden rounded-md bg-[linear-gradient(135deg,#eef1ff_0%,#ffffff_48%,#e8ecff_100%)] p-4 sm:min-h-[280px]">
          <div className="flex h-full min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#b8c0df] bg-white/72 px-4 text-center text-sm font-medium text-[#263479] sm:min-h-[260px]">
            {placeholder}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
