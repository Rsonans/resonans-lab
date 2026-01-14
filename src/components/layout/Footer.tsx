import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logoLight from "@/assets/resonans-logo-light.png";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/#what-we-do" },
  { name: "Projects", href: "/project" },
  { name: "Fellowship", href: "/fellowship" },
  { name: "Partner With Us", href: "/partner" },
];

export function Footer() {
  return (
    <footer className="bg-purple-dark text-background">
      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <img src={logoLight} alt="Resonans" className="h-10 w-auto mb-8" />
            <p className="text-background/70 max-w-md text-lg leading-relaxed mb-8">
              Resonans is a research-led organization translating knowledge into real-world impact across Africa.
            </p>
            <p className="text-background/40 text-sm italic">
              Where research meets real life
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-accent font-heading font-bold text-sm uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-secondary font-heading font-bold text-sm uppercase tracking-widest mb-6">
              Stay Updated
            </h4>
            <p className="text-background/70 mb-6">
              Stay updated on our research, projects, and impact.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email"
                className="bg-purple-700/50 border-purple-500/30 text-background placeholder:text-background/50 h-12"
              />
              <Button variant="heroSecondary" size="default" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Thin yellow divider */}
        <div className="mt-16 pt-8 border-t border-accent/30">
          <p className="text-background/50 text-sm text-center">
            © {new Date().getFullYear()} Resonans. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
