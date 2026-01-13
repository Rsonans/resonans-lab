import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users2, Award } from "lucide-react";

export function CommunitySection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Join Our Community
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-xl p-8 card-lift"
          >
            <Users2 className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
              Community of Scholars
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A growing network of African researchers learning, collaborating, and building solutions together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-xl p-8 card-lift"
          >
            <Award className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
              Scholars Fellowship
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A guided program supporting students and early-career researchers to translate their research into real-world impact.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/fellowship">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
