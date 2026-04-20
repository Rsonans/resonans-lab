import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import resonanceImg from "@/assets/Resonance.png";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAECFA] text-center">
      <div className="container max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 bg-[#350A5E] rounded-2xl flex items-center justify-center p-4 shadow-lg mb-8"
        >
          <img 
            src={resonanceImg} 
            alt="Resonans Logo" 
            className="w-full h-full object-contain brightness-0 invert" 
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-[44px] font-heading font-bold text-[#2C0052] mb-6 tracking-tight"
        >
          Ready to translate your research?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#594B6B] text-lg lg:text-xl leading-relaxed max-w-2xl mb-12"
        >
          Join our lab or partner with us to bring your intellectual breakthrough to the forefront of industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/partner"
            className="bg-[#2C0052] text-white font-bold py-4 px-8 rounded flex items-center justify-center hover:bg-[#1C0033] transition-colors shadow-lg"
          >
            Partner with Us
          </Link>
          <Link
            to="/lab"
            className="text-[#2C0052] font-bold py-4 px-2 border-b-2 border-[#E8CD00] hover:text-[#000] transition-colors"
          >
            Explore the Lab
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
