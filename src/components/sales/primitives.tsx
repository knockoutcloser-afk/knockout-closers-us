import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";


export function SectionShell({
  id,
  eyebrow,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative border-b border-white/5 px-6 py-28 md:py-36",
        className,
      )}
    >
      <div className="mx-auto max-w-3xl">
        {eyebrow ? (
          <div className="mb-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-white/40">
            <span className="h-px w-8 bg-gradient-to-r from-transparent via-white/40 to-white/60" />
            <span>{eyebrow}</span>
          </div>
        ) : null}
        <div className="prose-editorial space-y-6 text-[17px] leading-[1.75] text-white/70 md:text-[18px]">
          {children}
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-10 max-w-[22ch] text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl">
      {children}
    </h2>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <figure className="my-16 border-l border-white/10 pl-6 md:pl-10">
      <blockquote className="gradient-text text-2xl font-medium leading-[1.25] tracking-tight md:text-4xl">
        {children}
      </blockquote>
    </figure>
  );
}

export function HighlightBlock({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="glass-card shadow-card-premium relative my-16 overflow-hidden rounded-3xl p-8 md:p-12">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/60 to-transparent" />
      {label ? (
        <div className="mb-4 text-[11px] uppercase tracking-[0.32em] text-white/40">
          {label}
        </div>
      ) : null}
      <div className="text-xl font-medium leading-snug text-white md:text-2xl">
        {children}
      </div>
    </div>
  );
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  if (variant === "secondary") {
    return (
      <a
        href={href}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.02] px-7 py-4 text-sm font-medium tracking-wide text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8B5CF6]/50 hover:bg-white/[0.05]",
          className,
        )}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      className={cn(
        "btn-titanium group inline-flex items-center justify-center gap-3 text-[13px]",
        className,
      )}
    >
      <ArrowLeft
        size={18}
        strokeWidth={3}
        className="relative z-10 text-[#7C3AED] transition-transform duration-300 group-hover:-translate-x-1"
      />
      <span className="relative z-10">{children ?? "Asegurar mi lugar en Temporada 1"}</span>
      <ArrowRight
        size={18}
        strokeWidth={3}
        className="relative z-10 text-[#7C3AED] transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}

export function AtmosphericBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#05070D]" />
      <div
        className="absolute -top-1/3 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.10] blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, #6D3EFF 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-20%] right-[-10%] h-[700px] w-[700px] rounded-full opacity-[0.08] blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, #2563FF 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[40%] left-[-15%] h-[600px] w-[600px] rounded-full opacity-[0.06] blur-[130px]"
        style={{
          background:
            "radial-gradient(closest-side, #8B5CF6 0%, transparent 70%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.025]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function Divider() {
  return (
    <div
      aria-hidden
      className="mx-auto my-16 h-px w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent"
    />
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="max-w-[68ch]">{children}</p>;
}

export function Emph({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-[68ch] text-white/90 md:text-[19px]">{children}</p>
  );
}