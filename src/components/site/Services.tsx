import { Cpu, Bot, Wifi, Code2, GraduationCap, FileText } from "lucide-react";

const services = [
  { icon: Cpu, title: "Embedded Systems", desc: "Microcontroller-based designs, PCB prototyping, firmware in C/C++ for EC & EEE projects." },
  { icon: Bot, title: "Robotics", desc: "Autonomous bots, line-followers, robotic arms with sensor fusion and motor control." },
  { icon: Wifi, title: "IoT & Automation", desc: "Connected devices, home automation, cloud dashboards using ESP32, MQTT and AWS." },
  { icon: Code2, title: "Software Development", desc: "Web, mobile and AI/ML applications — from MVP to deployment-ready systems." },
  { icon: GraduationCap, title: "Academic Projects", desc: "Final-year hardware & software builds with full documentation and viva support." },
  { icon: FileText, title: "PPT & Reports", desc: "Polished presentations, IEEE-format reports and demo videos delivered on time." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            // services
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            One stop for every{" "}
            <span className="text-gradient">engineering project</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hardware, software, documentation — built to spec, delivered fast.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.07]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <div className="mt-4 font-mono text-xs text-primary/70">
                  0{i + 1} / 06
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
