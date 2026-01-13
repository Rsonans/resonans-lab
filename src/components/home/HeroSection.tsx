import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden w-full">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-background leading-tight mb-6"
          >
            We Turn Research Into{" "}
            <span className="text-accent">Real Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="text-lg md:text-xl text-background/85 max-w-2xl mb-10 leading-relaxed"
          >
            Resonans helps researchers move their ideas out of journals and into the real world — building tools, systems, and partnerships that solve everyday problems across Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/#what-we-do">
                See What We're Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/project">Our First Project</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute -right-32 top-1/3 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute -left-32 bottom-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
    </section>
  );
}
