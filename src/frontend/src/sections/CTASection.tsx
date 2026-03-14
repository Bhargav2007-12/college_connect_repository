import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users } from "lucide-react";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section id="cta" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Multi-color gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 20% 50%, oklch(0.67 0.19 40 / 0.12), transparent 60%), radial-gradient(ellipse 60% 80% at 80% 50%, oklch(0.78 0.15 175 / 0.1), transparent 60%), radial-gradient(ellipse 40% 60% at 50% 20%, oklch(0.72 0.16 230 / 0.08), transparent 60%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.6 0.01 265) 1px, transparent 1px), linear-gradient(90deg, oklch(0.6 0.01 265) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass neon-border-orange rounded-full px-5 py-2 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-neon-orange animate-pulse" />
            <span className="text-foreground/80">
              500+ advisors waiting to help you
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6">
            Find Your College
            <br />
            <span className="gradient-text-multi">Advisor Now</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Make the most important educational decision of your life with
            clarity and confidence. One session could change everything.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() =>
                document
                  .querySelector("#advisors")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-neon-orange hover:bg-neon-orange/90 text-background font-bold px-10 py-4 h-14 rounded-xl text-base glow-orange hover:shadow-neon-orange transition-all duration-300 group w-full sm:w-auto"
              data-ocid="cta.primary_button"
            >
              <GraduationCap size={18} className="mr-2" />
              Browse Advisors
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-neon-teal/40 hover:border-neon-teal text-neon-teal hover:bg-neon-teal/10 px-10 py-4 h-14 rounded-xl text-base transition-all duration-300 w-full sm:w-auto"
              data-ocid="cta.secondary_button"
            >
              <Users size={18} className="mr-2" />
              Become an Advisor
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-border/30">
            {[
              "✓ No subscription required",
              "✓ Book in under 2 minutes",
              "✓ Verified student advisors",
              "✓ Satisfaction guaranteed",
            ].map((item) => (
              <span key={item} className="text-sm text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
