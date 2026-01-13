import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { 
  Search, 
  Palette, 
  Hammer, 
  TrendingUp,
  Users,
  Code,
  Megaphone,
  UserCheck
} from "lucide-react";

const beliefs = [
  "Research should solve problems, not just explain them",
  "Solutions work best when built with local context in mind",
  "Communities should help shape the tools designed for them",
  "Collaboration across academia, industry, and society drives lasting change",
];

const approachSteps = [
  { icon: Search, title: "Research", description: "Understand the problem deeply" },
  { icon: Palette, title: "Design", description: "Translate insight into practical ideas" },
  { icon: Hammer, title: "Build", description: "Develop tools, systems, or partnerships" },
  { icon: TrendingUp, title: "Scale", description: "Test, refine, and expand impact" },
];

const teamRoles = [
  { 
    icon: Users, 
    title: "Researchers", 
    description: "Lead studies, analyze systems, and design evidence-based interventions" 
  },
  { 
    icon: Code, 
    title: "Engineers & Product Designers", 
    description: "Build research-driven technologies and platforms" 
  },
  { 
    icon: Megaphone, 
    title: "Creative Communications Team", 
    description: "Translate research into stories that inform and inspire action" 
  },
  { 
    icon: UserCheck, 
    title: "Advisory Network", 
    description: "Experienced researchers and industry leaders guiding strategy" 
  },
];

const About = () => {
  return (
    <PageLayout headerVariant="light">
      {/* Hero section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8">
              Why We Exist
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Across Africa, powerful research is being done every day — but much of it never leaves classrooms or journals.
              </p>
              <p className="text-foreground font-semibold text-xl">
                Resonans exists to change that.
              </p>
              <p>
                We take research seriously, but we take impact even more seriously. Our work begins with understanding real problems and ends with solutions people can actually use.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-xl p-8"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Mission
              </span>
              <p className="text-foreground text-lg leading-relaxed">
                To bridge the gap between research and real impact by translating academic findings into practical, context-aware solutions that improve lives across Africa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-purple-700 rounded-xl p-8"
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Vision
              </span>
              <p className="text-background text-lg leading-relaxed">
                A continent where research doesn't sit in journals but drives inclusive innovation across education, health, technology, and society — shaping a future built on knowledge and action.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12"
          >
            What We Believe
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-lg border border-border"
              >
                <div className="w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                <p className="text-foreground text-lg">{belief}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-purple-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-background mb-4">
              Our Approach: Translational Research
            </h2>
            <p className="text-background/70 text-lg">
              Every Resonans project follows a clear cycle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-secondary font-bold text-2xl mb-2">{index + 1}</div>
                <h3 className="text-background font-heading font-bold text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-background/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12"
          >
            Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-card rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <role.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-1">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground">{role.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
