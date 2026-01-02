import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  "Industrial Scrap Recycling",
  "Total Scrap Pickup",
  "Metal Trading",
  "Aluminium Ingot Manufacturing",
  "Sustainability Support",
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.1)_25%,hsl(var(--primary)/0.1)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.1)_75%)] bg-[length:60px_60px]" />
      </div>

      <div className="container-industrial relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <img
                src={logo}
                alt="PMK Iron & Steel"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              A trusted trader and recycler of ferrous & non-ferrous metals, 
              shaping a sustainable industrial future through responsible recycling practices.
            </p>
            <div className="space-y-3">
              <a href="mailto:pmksteel1@gmail.com" className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                pmksteel1@gmail.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-secondary-foreground/70 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6">Our Location</h4>
            <div className="flex items-start gap-3 text-sm text-secondary-foreground/70">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
              <address className="not-italic leading-relaxed">
                Plot No-27, Court Road,<br />
                Diwan Udyog Industrial Area,<br />
                Chintupada, Palghar,<br />
                Maharashtra – 401404
              </address>
            </div>
            <div className="mt-6">
              <a
                href="https://maps.google.com/?q=Palghar,Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                View on Google Maps
                <span className="text-lg">→</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-secondary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/50">
            © {new Date().getFullYear()} PMK Iron & Steel. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
