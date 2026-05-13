import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-12 text-[#050505] sm:py-16", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <Reveal className="mb-8 max-w-3xl">
            {eyebrow && <p className="mb-3 text-sm font-medium text-current opacity-75">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-medium leading-tight tracking-[-0.035em] text-current sm:text-5xl">{title}</h2>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
