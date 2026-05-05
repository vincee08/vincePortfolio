"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 shadow-md shadow-black/5 dark:shadow-white/5"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative z-10 group">
          <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tighter">
            DEV<span className="text-blue-500">.</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors text-sm uppercase tracking-widest font-medium"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="px-6 py-2.5 bg-gray-900 text-white dark:bg-white dark:text-black text-sm font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all active:scale-95"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4 relative z-10">
          <ThemeToggle />
          <button
            className="text-gray-900 dark:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 p-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 text-center bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Let's Work Together
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
