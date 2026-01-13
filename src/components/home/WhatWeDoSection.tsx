import { motion } from "framer-motion";
import { Ear, Lightbulb, Users } from "lucide-react";

const blocks = [
  {
    icon: Ear,
    title: "We Listen First",
    description: "We begin with research — studying systems, listening to communities, and understanding what is actually broken.",
  },
  {
    icon: Lightbulb,
    title: "We Build From Insight",
    description: "We translate research findings into tools, technology, and partnerships that work in real-life contexts.",
  },
  {
    icon: Users,
    title: "We Scale With Purpose",
    description: "We collaborate with institutions and organizations to make sure solutions reach real people, not just pilot programs.",
  },
];

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-24 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            What We Do
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-xl p-8 card-lift"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <block.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                {block.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {block.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
