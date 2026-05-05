"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Services() {
  return (
    <section id="services" className="py-32 relative bg-gray-50 dark:bg-[#050505] overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none transition-colors" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors"
          >
            Areas of <span className="text-blue-600 dark:text-blue-500">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors"
          >
            Delivering end-to-end solutions that solve real business problems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-3xl hover:bg-gray-50 dark:hover:bg-white/10 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
