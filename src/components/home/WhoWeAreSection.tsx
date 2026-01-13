import { motion } from "framer-motion";

export function WhoWeAreSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Research shouldn't stop at publishing.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Resonans is a research-led company that turns academic findings into real solutions. We use research to uncover real-world problems, then work with experts and communities to build the tools and systems that solve them — starting in Africa.
              </p>
              <p>
                Our approach starts where most organizations stop: we begin with research to deeply understand context, then move into development to create solutions that respond to what communities actually need. This method — translational research in action — defines everything we do.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-purple-700 rounded-xl p-8 md:p-10"
          >
            <h3 className="text-accent font-heading font-bold text-xl mb-4">
              Why this matters now
            </h3>
            <p className="text-background/90 text-lg leading-relaxed">
              Across Africa, research output is growing — but impact isn't keeping pace. Resonans exists to close that gap.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
