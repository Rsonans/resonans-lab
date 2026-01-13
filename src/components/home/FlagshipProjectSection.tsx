import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FlagshipProjectSection() {
  return (
    <section className="py-24 bg-purple-dark">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Flagship Project
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-background mb-6">
              Resonating Beyond Sound
            </h2>
            <p className="text-background/80 text-lg leading-relaxed mb-8">
              Millions of deaf people across Nigeria are excluded from education, jobs, and leadership — not because of ability, but because existing tools don't reflect local languages or realities.
            </p>
            <p className="text-background/70 text-base leading-relaxed mb-8">
              Resonating Beyond Sound is our first major project, focused on changing that through research-led, context-aware solutions.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/project">
                Explore the Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-purple-300 p-1">
              <div className="w-full h-full rounded-xl bg-purple-700 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👐</div>
                  <p className="text-accent font-heading font-bold text-xl">
                    Building Inclusion
                  </p>
                  <p className="text-background/70 mt-2">
                    That Reflects Reality
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
