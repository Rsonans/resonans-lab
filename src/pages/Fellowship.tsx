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
  BookOpen
} from "lucide-react";

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
      {/* Hero section */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Fellowship Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background mb-6">
              Resonans Scholars Fellowship
            </h1>
            <p className="text-xl text-background/90 leading-relaxed">
              Turning Research Into Real-World Impact
            </p>
            <p className="text-lg text-background/75 leading-relaxed mt-6 max-w-3xl">
              The Resonans Scholars Fellowship supports students, postgraduate researchers, and early-career academics who want their work to move beyond theory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Fellows Receive */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12"
          >
            What Fellows Receive
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-muted rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium">{benefit.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12"
          >
            Who Should Apply
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibility.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center card-lift"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <p className="text-foreground font-heading font-bold">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fellowship Journey */}
      <section className="py-20 bg-purple-dark">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-background mb-12 text-center"
          >
            Fellowship Journey
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-500 hidden md:block" />
              
              <div className="space-y-6">
                {journeySteps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0 z-10 font-heading font-bold text-accent-foreground">
                      {item.step}
                    </div>
                    <div className="flex-1 bg-purple-700 rounded-xl p-6">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-background font-heading font-bold text-lg">
                          {item.title}
                        </h3>
                        {item.status && (
                          <span className="text-accent text-sm font-semibold">
                            {item.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Make Your Research Count?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Applications open soon. Join our community to be notified when the next cohort begins.
            </p>
            <Button variant="default" size="lg">
              Join the Waitlist
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Fellowship;
