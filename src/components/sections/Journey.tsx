"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-32 relative bg-white dark:bg-black transition-colors duration-300 border-y border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Project <span className="text-blue-600 dark:text-blue-500">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            My real progression from foundational development to advanced intelligent systems.
          </motion.p>
        </div>

        <div className="relative border-l-2 border-gray-200 dark:border-white/10 ml-4 md:ml-8 space-y-16">
          {portfolioData.journey.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-10 md:pl-16"
            >
              {/* Timeline Dot & Icon */}
              <div className="absolute -left-[21px] top-1 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 border-4 border-white dark:border-black text-blue-600 dark:text-blue-400">
                {index === portfolioData.journey.length - 1 ? <GraduationCap size={18} /> : <Briefcase size={18} />}
              </div>

              {/* Content Box */}
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 rounded-2xl hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-sm font-bold whitespace-nowrap self-start">
                    {item.year}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-6">
                  {item.description}
                </p>

                <ul className="space-y-3">
                  {item.achievements.map((achieve, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm md:text-base">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{achieve}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
