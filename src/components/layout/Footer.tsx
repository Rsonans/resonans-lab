import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logoYellow from "@/assets/resonans-logo-yellow.png";

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
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img src={logoYellow} alt="Resonans" className="h-10 w-auto mb-6" />
            <p className="text-background/80 max-w-md text-base leading-relaxed">
              Resonans is a research-led organization translating knowledge into real-world impact across Africa.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-accent font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-accent font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className="text-background/70 mb-4 text-sm">
              Stay updated on our research, projects, and impact.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email"
                className="bg-purple-700 border-purple-600 text-background placeholder:text-background/50"
              />
              <Button variant="hero" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-purple-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Resonans. All rights reserved.
            </p>
            <p className="text-background/40 text-sm italic">
              Where research meets real life
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
