import { motion } from "framer-motion";
import { Ear, Lightbulb, Users } from "lucide-react";

const blocks = [
  {
    icon: Ear,
    title: "We Listen First",
    description: "We begin with research — studying systems, listening to communities, and understanding what is actually broken.",
    number: "01",
  },
  {
    icon: Lightbulb,
    title: "We Build From Insight",
    description: "We translate research findings into tools, technology, and partnerships that work in real-life contexts.",
    number: "02",
  },
  {
    icon: Users,
    title: "We Scale With Purpose",
    description: "We collaborate with institutions and organizations to make sure solutions reach real people, not just pilot programs.",
    number: "03",
  },
];

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-32 bg-purple-dark relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-600/10 to-transparent" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest block mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-background max-w-xl">
            What We Do
          </h2>
        </motion.div>

        {/* Staggered card layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {blocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`bg-purple-600/60 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-purple-500/20 ${
                index === 1 ? 'lg:mt-12' : index === 2 ? 'lg:mt-24' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <block.icon className="w-7 h-7 text-secondary" />
                </div>
                <span className="text-purple-300 font-heading font-bold text-sm">
                  {block.number}
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-background mb-4">
                {block.title}
              </h3>
              <p className="text-background/70 leading-relaxed text-lg">
                {block.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
