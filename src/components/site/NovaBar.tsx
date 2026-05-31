import { useEffect, useState } from "react";
import { Cpu, Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#showcase", label: "Showcase" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function NovaBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`glass flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
          scrolled ? "glow-ring scale-[0.98]" : ""
        }`}
      >
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-primary/20">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="absolute inset-0 rounded-lg animate-pulse-glow bg-primary/20" />
          </span>
          <span className="text-sm tracking-wider">
            BLACKBUG<span className="text-primary">.AI</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_30px_oklch(0.7_0.22_245/0.5)] transition-transform hover:scale-105 md:inline-flex"
        >
          Get Project
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass absolute top-20 mx-4 w-[calc(100%-2rem)] max-w-5xl rounded-2xl p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Get Project
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
