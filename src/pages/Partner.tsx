import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Building2, 
  GraduationCap, 
  Users,
  Briefcase,
  Mail,
  Send
} from "lucide-react";

const partnerTypes = [
  { 
    icon: GraduationCap, 
    title: "Universities & Research Institutions",
    description: "Collaborate on research projects and access our scholar network"
  },
  { 
    icon: Building2, 
    title: "Companies & Enterprises",
    description: "Partner on innovative solutions and access research insights"
  },
  { 
    icon: Users, 
    title: "NGOs & Community Organizations",
    description: "Work together to deploy impactful solutions in communities"
  },
  { 
    icon: Briefcase, 
    title: "Government & Policy Bodies",
    description: "Leverage research for evidence-based policy making"
  },
  { 
    icon: Users, 
    title: "Individuals & Other Organizations",
    description: "We welcome partnerships beyond these sectors — reach out if you share our vision"
  },
];

const Partner = () => {
  return (
    <PageLayout headerVariant="light">
      {/* Hero section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Real change happens when research meets action. We work with universities, companies, nonprofits, and community organizations to make solutions sustainable and scalable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12"
          >
            Who We Work With
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 card-lift"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {type.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-muted-foreground text-lg">
                Tell us about your organization and how you'd like to collaborate.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                  Organization
                </label>
                <Input id="organization" placeholder="Your organization name" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  How would you like to partner?
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your goals and how we might work together..."
                  rows={5}
                />
              </div>

              <Button variant="default" size="lg" className="w-full">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Partner;
