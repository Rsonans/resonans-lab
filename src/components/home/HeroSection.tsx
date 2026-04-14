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
      className="relative min-h-screen flex items-center overflow-hidden w-full"
      style={{ background: "#EFEFEF" }}
    >
      {/* Ellipse — top-left */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "rgba(156, 0, 117, 0.3)" }}
      />

      {/* Image — background blended out */}
      <div
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
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-block mb-6"
            >
              <span
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: "#4B0082" }}
              >
                Research, translated
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] mb-8"
              style={{ color: "#4B0082" }}
            >
              We Turn Research Into{" "}
              <span className="relative">
                <span style={{ color: "#4B0082" }}>Real Solutions</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
              style={{ color: "rgba(75, 0, 130, 0.85)" }}
            >
              Resonans helps researchers move their ideas out of journals and
              into the real world — building tools, systems, and partnerships
              that solve everyday problems across Africa.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="xl" className="group rounded-full px-8 text-base bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)]" asChild>
                <Link to="/#what-we-do">
                  See What We're Building
                  <ArrowRight className="ml-2 h-5 w-5" style={{ color: "#4B0082" }} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full px-8 text-base border-foreground/20 bg-background/50 backdrop-blur-sm hover:bg-muted transition-all hover:scale-105 text-foreground" asChild>
                <Link to="/project">Our First Project</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
