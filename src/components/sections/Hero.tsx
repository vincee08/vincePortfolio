"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (theme === "system" ? resolvedTheme : theme) : "dark";
  const isDark = currentTheme === "dark";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-3xl transition-colors duration-500" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-3xl transition-colors duration-500" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] transition-colors duration-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Profile Image with Seamless Crossfade Transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            boxShadow: isDark 
              ? "0 0 40px rgba(59, 130, 246, 0.3)" 
              : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
          className="relative w-32 h-32 md:w-40 md:h-40 mb-8 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-500 transition-all duration-500"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-black transition-colors duration-500">
            {/* Dark Theme Image */}
            <motion.div
              animate={{ 
                opacity: isDark ? 1 : 0,
                scale: isDark ? 1 : 1.05,
                filter: isDark ? "blur(0px)" : "blur(4px)"
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={portfolioData.personal.profileImage}
                alt={portfolioData.personal.name}
                fill
                priority
                sizes="(max-width: 768px) 128px, 160px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Light Theme Image */}
            <motion.div
              animate={{ 
                opacity: !isDark ? 1 : 0,
                scale: !isDark ? 1 : 1.05,
                filter: !isDark ? "blur(0px)" : "blur(4px)"
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={(portfolioData.personal as any).profileImageLight}
                alt={portfolioData.personal.name}
                fill
                priority
                sizes="(max-width: 768px) 128px, 160px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm transition-colors duration-300"
        >
          <Terminal size={16} className="text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Hi, I'm {portfolioData.personal.name}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 max-w-5xl text-gray-900 dark:text-white transition-colors duration-300"
        >
          Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Intelligent</span> Systems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed transition-colors duration-300"
        >
          {portfolioData.personal.subtitle} Building high-performance web applications, IoT ecosystems, and automation tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center space-x-2 bg-gray-900 text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg"
          >
            <span>View My Work</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center space-x-2 bg-transparent border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
          >
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>

    </section>
  );
}
