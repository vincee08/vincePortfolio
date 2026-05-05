"use client";

import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="py-32 relative bg-gray-50 dark:bg-[#030303] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Professional <span className="text-blue-600 dark:text-blue-500">Credibility</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Continuous learning and official recognitions that validate my expertise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Image Preview */}
              <div className="w-full aspect-[4/3] relative bg-gray-100 dark:bg-black/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-700">
                  <Award size={64} className="opacity-20" />
                </div>
                {/* Fallback image if user hasn't added the real image yet */}
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{cert.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 flex items-center gap-2">
                  <Award size={16} />
                  {cert.issuer}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={14} className="mr-2" />
                  Issued {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
