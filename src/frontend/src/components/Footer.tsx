import { GraduationCap } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="border-t border-border/40 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-lg font-display font-bold">
            <GraduationCap size={20} className="text-neon-orange" />
            <span className="text-foreground">College</span>
            <span className="gradient-text-orange">Connect</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="/about"
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </a>
            <a
              href="/contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Attribution */}
          <p className="text-sm text-muted-foreground text-center">
            © {year}. Built with <span className="text-neon-orange">♥</span>{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-teal hover:text-neon-teal/80 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
