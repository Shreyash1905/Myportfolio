import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: <Github className="w-5 h-5" />, href: "https://github.com/Shreyash1905" },
  { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/shreyash-sahukar-6a73b5327/" },
  { name: "Email", icon: <Mail className="w-5 h-5" />, href: "mailto:shreyaswadi987@gmail.com" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-display text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">Sahukar Shreyash</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-muted-foreground hover:text-primary hover:bg-white/20 hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] transition-all duration-300"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Made by Sahukar Shreyash
          </p>
        </div>
      </div>
    </footer>
  );
};
