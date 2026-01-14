import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { 
  Search, 
  Wrench, 
  Share2,
  Users,
  Video,
  Handshake,
  Target,
  ArrowRight
} from "lucide-react";
import projectImage from "@/assets/project-inclusion.jpg";

const approaches = [
  {
    icon: Search,
    title: "Research",
    description: "Nationwide studies to understand cultural, educational, workplace, and policy barriers.",
    number: "01",
  },
  {
    icon: Wrench,
    title: "Development",
    description: "Design and build context-aware tools aligned with local sign languages and realities.",
    number: "02",
  },
  {
    icon: Share2,
    title: "Distribution",
    description: "Partner with schools, organizations, and platforms to deploy and refine solutions.",
    number: "03",
  },
];

const progressStats = [
  { icon: Users, value: "15+", label: "Researchers engaged across 14 Nigerian states" },
  { icon: Users, value: "60+", label: "Researchers active in our research community" },
  { icon: Video, value: "Multiple", label: "Webinars on translational research and innovation" },
  { icon: Handshake, value: "Strategic", label: "Partnerships with NANDS and Clarit Studio" },
];

const timeline = [
  { period: "Months 1–3", activity: "Nationwide research" },
  { period: "Months 4–6", activity: "Prototype development" },
  { period: "Months 7–12", activity: "Testing, partnerships, and refinement" },
];

const Project = () => {
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
                Our Flagship Project
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background mb-6 leading-tight">
                Resonating Beyond Sound
              </h1>
              <p className="text-xl text-background/90 leading-relaxed mb-4">
                Building Inclusion That Reflects Reality
              </p>
              <p className="text-lg text-background/70 leading-relaxed">
                For many deaf people in Nigeria, schools, workplaces, and leadership spaces are not designed with them in mind. Most existing assistive tools were built elsewhere — without African languages, culture, or lived experience.
              </p>
              <p className="text-lg text-background font-semibold mt-6 pl-6 border-l-2 border-accent/60">
                Resonating Beyond Sound starts by asking better questions, then builds better solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 lg:col-start-8"
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={projectImage} 
                    alt="Hands reaching toward sound waves representing deaf inclusion" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary/40 rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground sticky top-32">
                The Problem
              </h2>
            </motion.div>
            
            <div className="lg:col-span-6 lg:col-start-7">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-lg text-muted-foreground mb-8"
              >
                Deaf persons in Nigeria face systemic exclusion from:
              </motion.p>
              <ul className="space-y-4 mb-10">
                {["Education", "Employment", "Leadership and decision-making spaces"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 30 }}
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-8 bg-purple-700 rounded-2xl"
              >
                <p className="text-background text-lg font-semibold leading-relaxed">
                  The issue is not a lack of potential — it's the lack of research and tools grounded in local context.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
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
              Methodology
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Our Approach
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`bg-card rounded-2xl p-8 ${index === 1 ? 'lg:mt-8' : index === 2 ? 'lg:mt-16' : ''}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <approach.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-secondary font-heading font-bold text-sm">
                    {approach.number}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {approach.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {approach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress So Far */}
      <section className="py-24 bg-purple-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest block mb-4">
              Milestones
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-background">
              Progress So Far
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {progressStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-purple-700/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
              >
                <stat.icon className="w-8 h-8 text-secondary mb-6" />
                <div className="text-secondary font-heading font-bold text-3xl mb-2">
                  {stat.value}
                </div>
                <p className="text-background/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next */}
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
                Roadmap
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground sticky top-32">
                What's Next
              </h2>
            </motion.div>

            <div className="lg:col-span-7 lg:col-start-6 space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex items-center gap-8 p-8 bg-muted rounded-2xl"
                >
                  <div className="flex-shrink-0 w-28">
                    <span className="text-secondary font-heading font-bold text-lg">{item.period}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0" />
                  <p className="text-foreground text-lg">{item.activity}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Vision */}
      <section className="py-24 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest block mb-4">
              The Bigger Picture
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
              Long-Term Vision
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Success in Nigeria will serve as a blueprint for scaling accessible solutions across Africa.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Project;
