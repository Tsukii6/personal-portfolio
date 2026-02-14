import { Button } from "@/components/Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" }
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 bg-transparent py-5 right-0">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary text-white">
          SH<span className="text-primary">.</span>
        </a>
        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="px-4 px-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
              {link.label}
            </a>
          ))}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* MOBILE NAV */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </nav>

      {/* Mobile menu (hidden by default) */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
           {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-lg text-muted-foreground hover:text-foreground py-2">
              {link.label}
            </a>
          ))}
          <Button size="sm">Contact Me</Button>
        </div>
      </div>
      )}
      
    </header>
  );
};