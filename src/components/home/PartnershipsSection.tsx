import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import partnershipsImage from "@/assets/partnerships-network.jpg";

export function PartnershipsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${partnershipsImage})` }}
      />
      <div className="absolute inset-0 bg-purple-800/85" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-widest block mb-6">
              Partnerships
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background mb-8 leading-tight">
              We Don't Do This Alone
            </h2>
            <p className="text-background/80 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              Real change happens when research meets action. We work with universities, companies, nonprofits, and community organizations to make solutions sustainable and scalable.
            </p>
            <Button variant="heroSecondary" size="xl" asChild>
              <Link to="/partner">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
