import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users2, Award, ArrowRight } from "lucide-react";
import fellowshipImage from "@/assets/fellowship-scholars.jpg";

export function CommunitySection() {
  return (
    <section className="py-32 bg-purple-dark overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content side */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-accent text-sm font-semibold uppercase tracking-widest block mb-4">
                Community
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-background">
                Join Our Community
              </h2>
            </motion.div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Users2 className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-background mb-2">
                    Community of Scholars
                  </h3>
                  <p className="text-background/70 leading-relaxed">
                    A closed WhatsApp community of African researchers learning, collaborating, and building solutions together.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-background mb-2">
                    Scholars Fellowship
                  </h3>
                  <p className="text-background/70 leading-relaxed mb-4">
                    A guided program supporting students and early-career researchers to translate their research into real-world impact.
                  </p>
                  <Button variant="heroOutline" className="border-accent" size="sm" asChild>
                    <Link to="/fellowship">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={fellowshipImage} 
                  alt="African scholars collaborating together" 
                  className="w-full h-full object-cover"
                />
                {/* Purple overlay */}
                <div className="absolute inset-0 bg-purple-700/30" />
              </div>
              {/* Stat overlay */}
              <div className="absolute -bottom-6 -left-6 bg-purple-800/90 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                <div className="text-secondary font-heading font-bold text-4xl">60+</div>
                <div className="text-background/70 text-sm mt-1">Active community members</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
