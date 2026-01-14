import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Lightbulb, 
  Building2, 
  MessageSquare,
  DollarSign,
  GraduationCap,
  UserCheck,
  Briefcase,
  BookOpen,
  ArrowRight
} from "lucide-react";
import fellowshipImage from "@/assets/fellowship-scholars.jpg";

const benefits = [
  { icon: Users, title: "Research mentorship" },
  { icon: Lightbulb, title: "Training in translational research" },
  { icon: Building2, title: "Exposure to industry, policy, and innovation" },
  { icon: MessageSquare, title: "Research communication and storytelling skills" },
  { icon: DollarSign, title: "Access to funding and partnership opportunities (where available)" },
];

const eligibility = [
  { icon: GraduationCap, title: "Undergraduate researchers" },
  { icon: UserCheck, title: "Postgraduate students" },
  { icon: Briefcase, title: "Early-career academics" },
  { icon: BookOpen, title: "Independent researchers" },
];

const journeySteps = [
  { step: 1, title: "Applications open", status: "Opens soon" },
  { step: 2, title: "Review and selection", status: "" },
  { step: 3, title: "Fellowship onboarding", status: "" },
  { step: 4, title: "Program delivery", status: "" },
];

const Fellowship = () => {
  return (
    <PageLayout headerVariant="dark">
      {/* Hero section with image */}
      <section className="relative pt-32 pb-24 bg-hero-gradient overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest mb-6 block">
                Fellowship Program
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background mb-6 leading-tight">
                Resonans Scholars Fellowship
              </h1>
              <p className="text-xl text-background/90 leading-relaxed mb-4">
                Turning Research Into Real-World Impact
              </p>
              <p className="text-lg text-background/70 leading-relaxed">
                The Resonans Scholars Fellowship supports students, postgraduate researchers, and early-career academics who want their work to move beyond theory.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 lg:col-start-8"
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={fellowshipImage} 
                    alt="African scholars collaborating together" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-purple-700/20" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary/40 rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Fellows Receive */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <span className="text-secondary text-sm font-semibold uppercase tracking-widest block mb-4">
                Benefits
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground sticky top-32">
                What Fellows Receive
              </h2>
            </motion.div>

            <div className="lg:col-span-7 lg:col-start-6 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-6 p-6 bg-muted rounded-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium text-lg">{benefit.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-24 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest block mb-4">
              Eligibility
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Who Should Apply
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {eligibility.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center group hover:bg-purple-700 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/20 group-hover:bg-secondary/30 flex items-center justify-center mx-auto mb-6 transition-colors duration-500">
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-foreground group-hover:text-background font-heading font-bold transition-colors duration-500">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fellowship Journey */}
      <section className="py-24 bg-purple-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest block mb-4">
              The Process
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-background">
              Fellowship Journey
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {journeySteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Connector */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-purple-500/50 -translate-x-1/2" />
                  )}
                  
                  <div className="bg-purple-700/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 text-center">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6 font-heading font-bold text-2xl text-purple-800">
                      {item.step}
                    </div>
                    <h3 className="text-background font-heading font-bold text-lg mb-2">
                      {item.title}
                    </h3>
                    {item.status && (
                      <span className="text-secondary text-sm font-semibold">
                        {item.status}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to Make Your Research Count?
            </h2>
            <p className="text-muted-foreground text-xl mb-10">
              Applications open soon. Join our community to be notified when the next cohort begins.
            </p>
            <Button variant="default" size="xl">
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Fellowship;
