import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Advisors", href: "#advisors" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-1 text-xl font-display font-bold tracking-tight"
          data-ocid="nav.link"
        >
          <span className="text-foreground">College</span>
          <span className="gradient-text-orange text-glow-orange">Connect</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200 hover:text-glow-teal"
              data-ocid="nav.link"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={() => handleNavClick("#advisors")}
            className="bg-neon-orange hover:bg-neon-orange/90 text-background font-semibold px-5 py-2 rounded-xl glow-orange transition-all duration-300 hover:shadow-neon-orange"
            data-ocid="nav.primary_button"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm font-body text-muted-foreground hover:text-foreground transition-colors py-2"
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick("#advisors")}
                className="bg-neon-orange text-background font-semibold w-full rounded-xl mt-2"
                data-ocid="nav.primary_button"
              >
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
