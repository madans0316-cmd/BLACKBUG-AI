import { Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="flex items-center gap-2 text-sm">
          <Cpu className="h-4 w-4 text-primary" />
          <span className="font-semibold tracking-wider">
            BLACKBUG<span className="text-primary">.AI</span>
          </span>
          <span className="text-muted-foreground">
            · Building. Innovating. Repeating.
          </span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Blackbug.AI — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
