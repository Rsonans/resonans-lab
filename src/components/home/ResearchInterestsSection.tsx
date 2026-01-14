import { motion } from "framer-motion";
import { 
  Accessibility, 
  GraduationCap, 
  Heart, 
  Laptop, 
  Building2 
} from "lucide-react";

const interests = [
  {
    icon: Accessibility,
    title: "Accessibility & Inclusion",
    description: "Researching and designing systems that expand access to education, work, and leadership.",
  },
  {
    icon: GraduationCap,
    title: "Education & Learning Systems",
    description: "Understanding how people learn and building tools that improve access and outcomes.",
  },
  {
    icon: Heart,
    title: "Health & MedTech",
    description: "Translating research into practical solutions that strengthen healthcare delivery.",
  },
  {
    icon: Laptop,
    title: "Technology & Society",
    description: "Studying how technology affects people and designing systems that reflect local realities.",
  },
  {
    icon: Building2,
    title: "Infrastructure & Public Systems",
    description: "Researching policy and system gaps that shape everyday life.",
  },
];

export function ResearchInterestsSection() {
  return (
    <section className="py-32 bg-muted relative">
      <div className="container">
        {/* Header with asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest block mb-4">
              Focus Areas
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Our Research Interests
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 lg:col-start-8 flex items-end"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              These focus areas guide where we apply our research — but our work is not limited to these sectors.
            </p>
          </motion.div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group bg-card rounded-2xl p-8 hover:bg-purple-700 transition-all duration-500 ${
                index === 0 || index === 3 ? 'md:row-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-secondary/30 flex items-center justify-center mb-6 transition-colors duration-500">
                <interest.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-background mb-3 transition-colors duration-500">
                {interest.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-background/70 leading-relaxed transition-colors duration-500">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
