"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors"
          >
            Featured <span className="text-blue-600 dark:text-blue-500">Systems</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 transition-colors"
          >
            A selection of complex applications I've engineered, ranging from IoT hardware integrations to AI-powered SaaS platforms.
          </motion.p>
        </div>

        <div className="flex flex-col space-y-16">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
