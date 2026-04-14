import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { 
  BookOpen, 
  Users, 
  Lightbulb 
} from "lucide-react";

const opportunities = [
  {
    icon: BookOpen,
    title: "For Researchers",
    description: "Work on real problems and build solutions from your research.",
  },
  {
    icon: Users,
    title: "For Partners",
    description: "Collaborate on projects that translate research into impact.",
  },
  {
    icon: Lightbulb,
    title: "For Innovators",
    description: "Be part of a new generation building from insight, not assumption.",
  }
];

const JoinUs = () => {
  return (
    <PageLayout headerVariant="light">
      <section className="relative pt-32 pb-24 bg-background overflow-hidden min-h-screen flex items-center">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest block mb-4">
              Get Involved
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              JOIN US
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 hover:bg-purple-700 transition-all duration-500 group border border-border/50 shadow-sm hover:shadow-2xl hover:border-purple-600 flex flex-col items-center text-center hover:-translate-y-2"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary/10 group-hover:bg-secondary/20 flex items-center justify-center mb-8 transition-colors duration-500 shadow-sm">
                  <opp.icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-500" />
                </div>
                <h3 className="font-heading font-bold text-foreground group-hover:text-background text-2xl mb-4 transition-colors duration-500">
                  {opp.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-background/90 transition-colors duration-500 leading-relaxed text-lg">
                  {opp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      </section>
    </PageLayout>
  );
};

export default JoinUs;
