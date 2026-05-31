import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 grid-pattern" />

      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="animate-fade-up">
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-muted-foreground">
              Built for engineering students · EC &amp; EEE
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            <span className="text-gradient">Building hardware.</span>
            <br />
            <span className="text-gradient">Crafting software.</span>
            <br />
            <span className="text-foreground/90">
              Solving real-world problems.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            From IoT and robotics to full-stack software and academic
            reports — Blackbug.AI delivers end-to-end engineering projects
            with <span className="text-foreground">fast turnaround</span> and{" "}
            <span className="text-foreground">minimal cost</span>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_oklch(0.55_0.22_250/0.35)] transition-transform hover:scale-105"
            >
              Get your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors hover:bg-white"
            >
              Explore services
            </a>
          </div>

          <dl className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              ["500+", "Projects"],
              ["120+", "Colleges"],
              ["4.9★", "Rated"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-mono text-2xl font-semibold text-primary">
                  {k}
                </dt>
                <dd className="text-xs text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
