import { motion } from "framer-motion";

export function WhoWeAreSection() {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container">
        {/* Asymmetric grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column - offset positioning */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:pt-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Research shouldn't stop at{" "}
              <span className="text-primary">publishing.</span>
            </h2>
          </motion.div>
          
          {/* Right column - body content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Resonans is a research-led company that turns academic findings into real solutions. We use research to uncover real-world problems, then work with experts and communities to build the tools and systems that solve them — starting in Africa.
              </p>
              <p>
                Our approach starts where most organizations stop: we begin with research to deeply understand context, then move into development to create solutions that respond to what communities actually need. This method — <span className="text-foreground font-semibold">translational research in action</span> — defines everything we do.
              </p>
            </div>
            
            {/* Highlight callout with accent border */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 relative pl-6 border-l-2 border-accent"
            >
              <h3 className="text-secondary font-heading font-bold text-lg mb-2">
                Why this matters now
              </h3>
              <p className="text-foreground text-lg leading-relaxed">
                Across Africa, research output is growing — but impact isn't keeping pace. Resonans exists to close that gap.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
