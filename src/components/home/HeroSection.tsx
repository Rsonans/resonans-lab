import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe2, Activity, Users } from "lucide-react";
import heroAbstract from "@/assets/hero-abstract.jpg";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden w-full pt-20 pb-16">
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none bg-background">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.03] dark:opacity-10 dark:mix-blend-lighten mix-blend-multiply transition-opacity duration-700"
          style={{ backgroundImage: `url(${heroAbstract})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      {/* Ambient Glows */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/15 blur-[120px]" style={{ animation: "pulse 8s infinite alternate" }} />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-accent/10 blur-[150px]" style={{ animation: "pulse 12s infinite alternate-reverse" }} />
        
        {/* Modern Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at center, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Area */}
          <motion.div 
            className="flex flex-col space-y-8 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemVariants} className="self-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md hover:bg-foreground/10 transition-colors duration-300">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-foreground/80 text-sm font-bold tracking-widest uppercase">
                  Research, Translated
                </span>
              </div>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-[5.5rem] font-heading font-extrabold tracking-tight text-foreground leading-[1.05]">
              We Turn Research Into{" "}
              <span className="relative inline-block mt-2 md:mt-0">
                <span className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-xl animate-pulse"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                  Real Solutions
                </span>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">
              Resonans helps researchers move their ideas out of journals and into the real world — building tools, systems, and partnerships that solve everyday problems across Africa.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="xl" className="group rounded-full px-8 text-base bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)]" asChild>
                <Link to="/#what-we-do">
                  See What We're Building
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full px-8 text-base border-foreground/20 bg-background/50 backdrop-blur-sm hover:bg-muted transition-all hover:scale-105 text-foreground" asChild>
                <Link to="/project">Our First Project</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content Area - Interactive Display */}
          <div className="relative h-[600px] w-full hidden lg:block perspective-1000 mt-8 lg:mt-0">
            {/* Center abstract shape/glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 blur-[80px] mix-blend-screen" style={{ animation: "spin 20s linear infinite" }} />
              <div className="w-full h-full rounded-full border border-foreground/10 bg-background/30 backdrop-blur-xl flex items-center justify-center relative shadow-2xl overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                 <Globe2 className="w-56 h-56 text-foreground/20 absolute object-cover group-hover:scale-105 transition-transform duration-700 ease-out" strokeWidth={0.5} />
              </div>
            </motion.div>

            {/* Stat Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: [-8, 8, -8] }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.8 },
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
              }}
              className="absolute top-10 right-0 bg-background/80 backdrop-blur-xl rounded-2xl p-6 border border-foreground/10 shadow-2xl min-w-[210px] group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">+12%</div>
                </div>
                <div className="text-4xl font-heading font-extrabold text-foreground mb-1">60+</div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Active Researchers</div>
              </div>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: [8, -8, 8] }}
              transition={{ 
                opacity: { duration: 0.8, delay: 1 },
                y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }
              }}
              className="absolute bottom-24 left-4 bg-background/80 backdrop-blur-xl rounded-2xl p-6 border border-foreground/10 shadow-2xl min-w-[210px] group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                    <Activity className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-4xl font-heading font-extrabold text-foreground mb-1">14</div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Nigerian States</div>
              </div>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [5, -10, 5] }}
              transition={{ 
                opacity: { duration: 0.8, delay: 1.2 },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }
              }}
              className="absolute -bottom-6 right-16 bg-background/80 backdrop-blur-xl rounded-2xl p-6 border border-foreground/10 shadow-2xl min-w-[210px] group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-accent/20 text-accent">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-4xl font-heading font-extrabold text-foreground mb-1">1</div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Flagship Project</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
