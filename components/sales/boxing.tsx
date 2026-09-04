import { cn } from "@/lib/utils";

const TITANIUM = "#C7CCD6";

/* Ring ropes — decorative horizontal band (titanium) */
export function RingRopes({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none relative h-10 w-full", className)}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute left-0 right-0 h-[2px]"
          style={{
            top: `${8 + i * 12}px`,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(199,204,214,0.10) 8%, rgba(199,204,214,0.55) 50%, rgba(199,204,214,0.10) 92%, transparent 100%)",
          }}
        />
      ))}
    </div>
  );
}

/* White corner protectors + titanium frame for the ring-corner video */
export function RingCornerFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div
        className="relative overflow-hidden rounded-3xl"
        style={{
          border: `1px solid ${TITANIUM}`,
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.06), 0 40px 90px -40px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.12)",
          background:
            "linear-gradient(180deg, rgba(11,23,54,0.6) 0%, rgba(5,7,13,0.9) 100%)",
        }}
      >
        {children}
      </div>
      {(
        [
          ["-top-2", "-left-2", "rounded-tl-3xl border-l-2 border-t-2"],
          ["-top-2", "-right-2", "rounded-tr-3xl border-r-2 border-t-2"],
          ["-bottom-2", "-left-2", "rounded-bl-3xl border-b-2 border-l-2"],
          ["-bottom-2", "-right-2", "rounded-br-3xl border-b-2 border-r-2"],
        ] as const
      ).map(([y, x, shape]) => (
        <span
          key={`${y}${x}`}
          aria-hidden
          className={cn("pointer-events-none absolute h-10 w-10", y, x, shape)}
          style={{ borderColor: "rgba(255,255,255,0.9)" }}
        />
      ))}
    </div>
  );
}

/* Minimal titanium divider */
export function RingDivider({ label }: { label?: string }) {
  return (
    <div
      aria-hidden
      className="relative mx-auto my-16 flex max-w-md items-center gap-4"
    >
      <span className="titanium-hairline h-px flex-1" />
      {label ? (
        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C7CCD6]/70">
          {label}
        </span>
      ) : null}
      <span className="titanium-hairline h-px flex-1" />
    </div>
  );
}
