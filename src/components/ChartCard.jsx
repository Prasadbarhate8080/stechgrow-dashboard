"use client";
import { ArrowUpRight } from "lucide-react";

export function ChartCard({ title, subtitle, legend, children }) {
  return (
    <section className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-[0_1px_0_0_var(--color-border)]">
      <header className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight text-card-foreground">{title}</h2>
        <button
          type="button"
          aria-label={`Expand ${title}`}
          className="grid size-8 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowUpRight className="size-4" />
        </button>
      </header>

      {legend && legend.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {legend.map((item) => (
            <li
              key={item.label + item.color}
              className="flex items-center gap-2 text-sm text-card-foreground"
            >
              <span className="size-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              {item.label}
            </li>
          ))}
        </ul>
      )}

      {subtitle && <p className="mt-3 text-sm text-muted-foreground">{subtitle}</p>}

      <div className="mt-2 min-h-0 flex-1">{children}</div>
    </section>
  );
}