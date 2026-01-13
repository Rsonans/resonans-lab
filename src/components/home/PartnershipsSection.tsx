import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

export function PartnershipsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Handshake className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              We Don't Do This Alone
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Real change happens when research meets action. We work with universities, companies, nonprofits, and community organizations to make solutions sustainable and scalable.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/partner">Partner With Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
