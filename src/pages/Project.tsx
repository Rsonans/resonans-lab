import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { 
  Search, 
  Wrench, 
  Share2,
  Users,
  MapPin,
  Video,
  Handshake,
  Target
} from "lucide-react";

const approaches = [
  {
    icon: Search,
    title: "Research",
    description: "Nationwide studies to understand cultural, educational, workplace, and policy barriers.",
  },
  {
    icon: Wrench,
    title: "Development",
    description: "Design and build context-aware tools aligned with local sign languages and realities.",
  },
  {
    icon: Share2,
    title: "Distribution",
    description: "Partner with schools, organizations, and platforms to deploy and refine solutions.",
  },
];

const progressStats = [
  { icon: Users, value: "15+", label: "Researchers engaged across 14 Nigerian states" },
  { icon: Users, value: "60+", label: "Researchers active in our research community" },
  { icon: Video, value: "Multiple", label: "Webinars on translational research and innovation" },
  { icon: Handshake, value: "Strategic", label: "Partnerships with NANDS, Clarit studio" },
];

const timeline = [
  { period: "Months 1–3", activity: "Nationwide research" },
  { period: "Months 4–6", activity: "Prototype development" },
  { period: "Months 7–12", activity: "Testing, partnerships, and refinement" },
];

const Project = () => {
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
              Our Flagship Project
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background mb-6">
              Resonating Beyond Sound
            </h1>
            <p className="text-xl text-background/90 leading-relaxed mb-6">
              Building Inclusion That Reflects Reality
            </p>
            <p className="text-lg text-background/75 leading-relaxed max-w-3xl">
              For many deaf people in Nigeria, schools, workplaces, and leadership spaces are not designed with them in mind. Most existing assistive tools were built elsewhere — without African languages, culture, or lived experience.
            </p>
            <p className="text-lg text-background/90 font-semibold mt-6">
              Resonating Beyond Sound starts by asking better questions, then builds better solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                The Problem
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Deaf persons in Nigeria face systemic exclusion from:
              </p>
              <ul className="space-y-4">
                {["Education", "Employment", "Leadership and decision-making spaces"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 text-foreground text-lg"
                  >
                    <div className="w-3 h-3 rounded-full bg-secondary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <p className="text-lg text-foreground font-semibold mt-8 p-6 bg-muted rounded-lg">
                The issue is not a lack of potential — it's the lack of research and tools grounded in local context.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12"
          >
            Our Approach
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-card rounded-xl p-8 card-lift"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <approach.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  {approach.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {approach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress So Far */}
      <section className="py-20 bg-purple-dark">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-background mb-12"
          >
            Progress So Far
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {progressStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-purple-700 rounded-xl p-6"
              >
                <stat.icon className="w-8 h-8 text-accent mb-4" />
                <div className="text-accent font-heading font-bold text-2xl mb-2">
                  {stat.value}
                </div>
                <p className="text-background/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center"
            >
              What's Next
            </motion.h2>

            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex items-center gap-6 p-6 bg-muted rounded-xl"
                >
                  <div className="w-24 flex-shrink-0">
                    <span className="text-primary font-heading font-bold">{item.period}</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-foreground">{item.activity}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Vision */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Target className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Long-Term Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Success in Nigeria will serve as a blueprint for scaling accessible solutions across Africa.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Project;
