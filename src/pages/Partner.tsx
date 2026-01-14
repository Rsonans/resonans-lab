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
  Send,
  Heart
} from "lucide-react";
import partnershipsImage from "@/assets/partnerships-network.jpg";

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
    icon: Heart, 
    title: "Individuals & Other Organizations",
    description: "We welcome partnerships beyond these sectors — reach out if you share our vision"
  },
];

const Partner = () => {
  return (
    <PageLayout headerVariant="dark">
      {/* Hero section with background */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${partnershipsImage})` }}
        />
        <div className="absolute inset-0 bg-purple-800/90" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-6 block">
              Partnerships
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background mb-8 leading-tight">
              Partner With Us
            </h1>
            <p className="text-xl text-background/80 leading-relaxed">
              Real change happens when research meets action. We work with universities, companies, nonprofits, and community organizations to make solutions sustainable and scalable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <span className="text-secondary text-sm font-semibold uppercase tracking-widest block mb-4">
                Collaboration
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground sticky top-32">
                Who We Work With
              </h2>
            </motion.div>

            <div className="lg:col-span-7 lg:col-start-6 space-y-6">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-muted rounded-2xl p-8 hover:bg-purple-700 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-secondary/30 flex items-center justify-center flex-shrink-0 transition-colors duration-500">
                      <type.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-background mb-2 transition-colors duration-500">
                        {type.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-background/70 leading-relaxed transition-colors duration-500">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <span className="text-secondary text-sm font-semibold uppercase tracking-widest block mb-4">
                Contact
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Tell us about your organization and how you'd like to collaborate. We're always open to exploring new partnership opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 lg:col-start-7"
            >
              <form className="bg-card rounded-2xl p-8 md:p-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-3">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Doe" className="h-12" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-3">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" className="h-12" />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-3">
                    Organization
                  </label>
                  <Input id="organization" placeholder="Your organization name" className="h-12" />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-3">
                    How would you like to partner?
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your goals and how we might work together..."
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button variant="default" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Partner;
