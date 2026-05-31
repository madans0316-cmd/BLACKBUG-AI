import { MessageCircle, Mail, Phone, Instagram, ArrowRight } from "lucide-react";

// TODO: replace placeholders with real contact info
const WHATSAPP = "https://wa.me/919741561603";
const EMAIL = "madans0316@gmail.com";
const PHONE = "+91 9741561603";
const INSTAGRAM = "https://instagram.com/blackbug.ai";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with our team",
    href: WHATSAPP,
    cta: "Open chat",
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    cta: "Send email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: PHONE,
    href: `tel:${PHONE.replace(/\s/g, "")}`,
    cta: "Call now",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@blackbug.ai",
    href: INSTAGRAM,
    cta: "Follow us",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 md:p-14 glow-ring">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />

          <div className="relative text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              // contact
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
              Contact &amp; <span className="text-gradient">get your project</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Tell us your idea, deadline and budget. We'll reply within hours
              with a tailored quote and timeline.
            </p>
          </div>

          <div className="relative mt-12 grid gap-4 md:grid-cols-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group glass relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-1 break-words text-base font-medium">{c.value}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary">
                  {c.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
