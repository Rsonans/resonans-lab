import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroAbstract from "@/assets/hero-abstract.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden w-full">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroAbstract})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/95 via-purple-700/80 to-transparent" />
      
      {/* Content with asymmetric layout */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content - takes up 7 columns */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-block mb-6"
            >
              <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
                Research, translated
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-background leading-[1.1] mb-8"
            >
              We Turn Research Into{" "}
              <span className="relative">
                <span className="text-background">Real Solutions</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/60" />
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="text-lg md:text-xl text-background/85 max-w-xl mb-12 leading-relaxed"
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
          
          {/* Right side - decorative stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              {/* Floating stat cards with asymmetric placement */}
              <div className="absolute top-0 right-0 bg-purple-700/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                <div className="text-secondary font-heading font-bold text-3xl">60+</div>
                <div className="text-background/70 text-sm mt-1">Active researchers</div>
              </div>
              <div className="absolute top-32 right-24 bg-purple-700/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                <div className="text-secondary font-heading font-bold text-3xl">14</div>
                <div className="text-background/70 text-sm mt-1">Nigerian states</div>
              </div>
              <div className="absolute top-64 right-8 bg-purple-700/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                <div className="text-secondary font-heading font-bold text-3xl">1</div>
                <div className="text-background/70 text-sm mt-1">Flagship project</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
