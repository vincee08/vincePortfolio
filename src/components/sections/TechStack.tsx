"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function TechStack() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 border-y border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-black/50 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {Object.entries(portfolioData.techStack).map(([category, skills], i) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 uppercase tracking-wider flex items-center transition-colors">
                <span className="w-8 h-px bg-blue-600 dark:bg-blue-500 mr-4"></span>
                {category}
              </h3>
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-blue-500/50 transition-colors cursor-default shadow-sm dark:shadow-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
