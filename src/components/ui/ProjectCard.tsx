import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tags: string[];
    highlights: string[];
    liveUrl: string;
    githubUrl: string;
  };
  index: number;
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl transition-all duration-500"
    >
      {/* Project Image */}
      <div className="w-full md:w-1/2 aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Project Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="mb-4">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">{project.title}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium transition-colors">{project.subtitle}</p>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="mb-6 space-y-2">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 mr-3" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-200 dark:bg-white/10 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-transparent dark:border-white/5 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white dark:bg-white dark:text-black rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-sm"
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
          >
            <GithubIcon size={18} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
