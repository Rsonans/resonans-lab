import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import resonanceImg from "@/assets/Resonance.png";

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
    <section
      className="relative min-h-screen flex items-center overflow-hidden w-full bg-purple-800"
      // style={{ background: "" }}
    >
      {/* Ellipse — top-left */}
      {/* <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "rgba(156, 0, 117, 0.3)" }}
      /> */}

      {/* Image — background blended out */}
      {/* <div
        className="absolute overflow-hidden rounded-2xl pointer-events-none"
        style={{
          top: "150px",
          left: "1200px",
          width: "750px",
          height: "850px",
        }}
      >
        <img
          src={resonanceImg}
          alt="Resonance"
          className="w-full h-full object-cover"
          style={{ mixBlendMode: "multiply" }}
        />
      </div> */}

      <div className="container relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 bg-black flex items-center justify-center p-3 rounded-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <img src={resonanceImg} alt="Resonans Logo" className="w-full h-full object-contain brightness-0 invert" style={{ mixBlendMode: 'screen' }} />
              </div>
              <div className="h-[1px] w-12 bg-primary"></div>
              <span
                className="text-sm font-semibold uppercase tracking-[0.2em] text-accent font-heading"
              >
                RESEARCH TO REALITY
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-heading font-bold leading-[1.2] mb-6 text-primary-foreground"
            >
              Turning research into{" "}
              <span className="relative">
                <span className="text-accent" 
                >real-world solutions.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="text-sm md:text-base max-w-lg mb-8 leading-relaxed text-primary-foreground/80"
            >
              Resonans is a research-driven innovation company that takes academic insight and translates it into practical tools, technologies, and decisions that improve lives.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 pt-2 items-start sm:items-center">
              <Button size="lg" className="group rounded-sm px-6 text-sm bg-accent text-black font-bold hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(232,205,0,0.15)]" asChild>
                <Link to="/#what-we-do">
                  Explore Resonans
                </Link>
              </Button>
              <Link to="/project" className="text-primary-foreground text-sm font-bold flex items-center gap-2 group hover:text-accent transition-colors">
                <span className="border-b border-primary group-hover:border-accent pb-0.5 transition-colors">Our Approach</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </Link>
            </motion.div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">

            <div className="relative w-full aspect-square max-w-[450px] mx-auto bg-gradient-to-br from-[#E2D4F0] to-[#C8A2E8] p-8 rounded-sm shadow-2xl">
              <div className="w-full h-full bg-[#4B0082] rounded-3xl flex items-center justify-center p-12">
                <img 
                  src={resonanceImg} 
                  alt="Resonance Concept" 
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>

              {/* Floating Metric Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -left-12 -bottom-12 bg-white rounded-md p-5 shadow-xl w-48"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-secondary/10 rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 border border-secondary relative">
                      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-secondary"></div>
                      <div className="absolute top-0 right-0 w-1 h-1 bg-secondary"></div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-black">IMPACT METRIC</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-1">84%</h3>
                <p className="text-[10px] text-gray-500 leading-tight">efficiency increase in clinical translation workflows</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
