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
import aboutHero from "@/assets/about-hero.jpg";

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
              <span className="text-secondary text-sm font-semibold uppercase tracking-widest block mb-6">
                About Resonans
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8 leading-tight">
                Why We Exist
              </h1>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Across Africa, powerful research is being done every day — but much of it never leaves classrooms or journals.
                </p>
                <p className="text-foreground font-semibold text-xl relative pl-6 border-l-2 border-accent">
                  Resonans exists to change that.
                </p>
                <p>
                  We take research seriously, but we take impact even more seriously. Our work begins with understanding real problems and ends with solutions people can actually use.
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
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={aboutHero} 
                    alt="Abstract representation of research and community connection in Africa" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-secondary/30 rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Asymmetric layout */}
      <section className="py-24 bg-purple-dark">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 bg-purple-700/50 backdrop-blur-sm rounded-2xl p-10 border border-purple-500/20"
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest mb-6 block">
                Mission
              </span>
              <p className="text-background text-xl leading-relaxed">
                To bridge the gap between research and real impact by translating academic findings into practical, context-aware solutions that improve lives across Africa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-6 lg:col-start-7 lg:mt-16 bg-purple-700/50 backdrop-blur-sm rounded-2xl p-10 border border-purple-500/20"
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest mb-6 block">
                Vision
              </span>
              <p className="text-background text-xl leading-relaxed">
                A continent where research doesn't sit in journals but drives inclusive innovation across education, health, technology, and society — shaping a future built on knowledge and action.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground sticky top-32">
                What We Believe
              </h2>
            </motion.div>
            
            <div className="lg:col-span-7 lg:col-start-6 space-y-6">
              {beliefs.map((belief, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-6 p-6 bg-card rounded-xl"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-foreground text-lg leading-relaxed">{belief}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest block mb-4">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Our Approach: Translational Research
            </h2>
            <p className="text-muted-foreground text-lg">
              Every Resonans project follows a clear cycle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* Connector line */}
                {index < approachSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-secondary font-bold text-sm mb-2">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest block mb-4">
              The People
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Our Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-8 hover:bg-purple-700 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-secondary/30 flex items-center justify-center flex-shrink-0 transition-colors duration-500">
                    <role.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground group-hover:text-background text-xl mb-2 transition-colors duration-500">
                      {role.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-background/70 transition-colors duration-500">
                      {role.description}
                    </p>
                  </div>
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
