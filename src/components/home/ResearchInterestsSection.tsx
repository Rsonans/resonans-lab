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
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Research Interests
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These focus areas guide where we apply our research — but our work is not limited to these sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <interest.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {interest.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
