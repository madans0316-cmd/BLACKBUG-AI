import { Zap, Wallet, ShieldCheck, Clock } from "lucide-react";

const points = [
  { icon: Zap, title: "Fast turnaround", desc: "Most projects ship in 7–14 days, including hardware procurement and testing." },
  { icon: Wallet, title: "Student-friendly pricing", desc: "Transparent, minimal cost packages tailored to college budgets." },
  { icon: ShieldCheck, title: "End-to-end ownership", desc: "We handle build, debug, documentation and viva prep — you focus on learning." },
  { icon: Clock, title: "On-time, every time", desc: "Milestone-based delivery with daily updates over WhatsApp." },
];

export function Showcase() {
  return (
    <>
      <section id="showcase" className="relative py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              // why blackbug
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              <span className="text-gradient">Fast work.</span>{" "}
              <span className="text-foreground">Minimal cost.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Engineered to enhance your academic and professional output
              without burning your wallet. Built by engineers, for engineers.
            </p>
          </div>

          <div id="why" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {points.map((p) => (
              <div key={p.title} className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1">
                <p.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-sm font-semibold">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />
    </>
  );
}

function Marquee() {
  const items = [
    "ESP32", "Arduino", "Raspberry Pi", "PCB Design", "ROS",
    "React", "Node.js", "Python", "TensorFlow", "Flutter",
    "MQTT", "Computer Vision", "MATLAB", "VHDL", "AWS IoT",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-border bg-muted/40 py-6">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-12 animate-marquee">
          {doubled.map((t, i) => (
            <span
              key={i}
              className="font-mono text-sm uppercase tracking-widest text-muted-foreground"
            >
              ◆ {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
