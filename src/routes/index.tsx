import { createFileRoute } from "@tanstack/react-router";
import { NovaBar } from "@/components/site/NovaBar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Showcase } from "@/components/site/Showcase";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blackbug.AI — Hardware & Software Projects for Engineering Students" },
      {
        name: "description",
        content:
          "Blackbug.AI builds hardware, crafts software and ships academic projects for EC & EEE students — fast turnaround, minimal cost. Embedded, IoT, robotics, AI and more.",
      },
      { property: "og:title", content: "Blackbug.AI — Engineering Projects, Delivered" },
      {
        property: "og:description",
        content: "Hardware, software, IoT, robotics and academic projects for engineering students.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <NovaBar />
      <Hero />
      <Services />
      <Showcase />
      <Contact />
      <Footer />
    </main>
  );
}
