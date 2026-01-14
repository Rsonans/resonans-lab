import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import projectImage from "@/assets/project-inclusion.jpg";

export function FlagshipProjectSection() {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Image column - offset to the left edge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src={projectImage} 
                  alt="Hands reaching toward sound waves representing deaf inclusion" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame offset */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary/30 rounded-2xl -z-10" />
            </div>
          </motion.div>
          
          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest mb-6 block">
              Our Flagship Project
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Resonating Beyond Sound
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Millions of deaf people across Nigeria are excluded from education, jobs, and leadership — not because of ability, but because existing tools don't reflect local languages or realities.
            </p>
            <p className="text-foreground text-base leading-relaxed mb-10">
              Resonating Beyond Sound is our first major project, focused on changing that through research-led, context-aware solutions.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/project">
                Explore the Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
