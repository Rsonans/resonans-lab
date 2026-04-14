import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLight from "@/assets/resonans-logo-light.png";
import logoDark from "@/assets/resonans-logo-dark.png";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/#what-we-do" },
  { name: "Project", href: "/project" },
  { name: "Fellowship", href: "/fellowship" },
  { name: "Join Us", href: "/join-us" },
];

interface HeaderProps {
  variant?: "light" | "dark";
}

export function Header({ variant = "light" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const logo = variant === "dark" ? logoLight : logoDark;
  const textColor = variant === "dark" ? "text-background" : "text-foreground";
  const hoverColor = variant === "dark" ? "hover:text-accent" : "hover:text-primary";
  const bgColor = variant === "dark" ? "bg-purple-800/95" : "bg-background/95";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${bgColor} backdrop-blur-md`}>
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Resonans" className="h-10 w-auto" />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium ${textColor} ${hoverColor} transition-colors duration-200`}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <Button 
            variant={variant === "dark" ? "hero" : "default"} 
            size="sm"
            asChild
          >
            <Link to="/partner">Partner With Us</Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            type="button"
            className={`${textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${bgColor} border-t border-border/20`}
          >
            <div className="container py-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-base font-medium ${textColor} ${hoverColor} py-2`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant={variant === "dark" ? "hero" : "default"} 
                className="w-full mt-4"
                asChild
              >
                <Link to="/partner" onClick={() => setMobileMenuOpen(false)}>
                  Partner With Us
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
