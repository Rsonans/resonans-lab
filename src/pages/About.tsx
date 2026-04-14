import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { 
  Search, 
  FileText,
  Lightbulb,
  Hammer, 
  Rocket,
  Target
} from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const cycleSteps = [
  { icon: Search, title: "Understanding the problem" },
  { icon: FileText, title: "Generating evidence" },
  { icon: Lightbulb, title: "Translating insights" },
  { icon: Hammer, title: "Building solutions" },
  { icon: Rocket, title: "Testing and distributing them" },
];

const About = () => {
  return (
    <PageLayout headerVariant="light">
      {/* Hero section with image */}
      <section className="relative pt-32 pb-24 bg-background overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <span className="text-secondary text-sm font-semibold uppercase tracking-widest block mb-4">
                Who We Are
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Resonans exists to solve a simple problem:
              </h1>
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p className="text-foreground font-semibold text-2xl lg:text-3xl relative pl-6 border-l-4 border-accent py-2 leading-tight">
                  Too much valuable research never leaves papers.
                </p>
                <p className="text-xl">
                  We identify real-world challenges, conduct structured research, and translate findings into solutions that people can actually use.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={aboutHero} 
                    alt="Abstract representation of research and community connection" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-secondary/30 rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-32 bg-purple-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-secondary/20 text-secondary text-sm font-semibold uppercase tracking-widest mb-8 border border-secondary/30">
                What makes us different
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background mb-8 leading-tight">
                We don’t treat research as the final output. <br className="hidden md:block" />
                <span className="text-secondary block mt-4">We treat it as the starting point.</span>
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Cycle */}
      <section className="py-24 bg-muted relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl mb-6 text-primary shadow-inner">
               <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Every project we run moves through a <span className="text-primary relative inline-block mx-2">
                full cycle
                <span className="absolute bottom-1 left-0 w-full h-3 bg-secondary/30 -z-10 rounded-full"></span>
              </span>
            </h2>
          </motion.div>

          {/* Cycle Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 gap-y-12">
            {cycleSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group bg-card rounded-2xl p-8 hover:bg-purple-700 transition-all duration-500 shadow-sm border border-border/50 hover:border-purple-600 hover:shadow-2xl flex flex-col items-center text-center -mt-2 hover:-translate-y-2"
              >
                {/* Visual Connector for desktop */}
                {index < cycleSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[40%] -right-3 w-6 h-0.5 bg-border group-hover:bg-accent/50 transition-colors z-0" />
                )}
                
                <div className="w-20 h-20 rounded-2xl bg-secondary/10 group-hover:bg-background/10 flex flex-col items-center justify-center mb-6 transition-colors duration-500 relative z-10 shadow-sm">
                  <step.icon className="w-10 h-10 text-secondary group-hover:text-background transition-colors duration-500" />
                </div>
                
                <div className="absolute top-4 right-6 text-6xl font-black text-muted-foreground/5 group-hover:text-background/10 transition-colors pointer-events-none font-heading">
                  {index + 1}
                </div>
                
                <h3 className="font-heading font-bold text-foreground group-hover:text-background text-lg transition-colors duration-500 leading-snug">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
