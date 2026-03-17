import { motion } from "framer-motion";

function ProjectCard({ title, description, tech, github, demo, featured }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-700 border border-slate-600 rounded-lg p-6 shadow-sm hover:shadow-lg hover:border-slate-500 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {featured && (
          <span className="bg-yellow-900 text-yellow-200 px-2 py-1 rounded-full text-xs font-medium">
            ⭐ Featured
          </span>
        )}
      </div>

      <p className="text-slate-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 bg-slate-600 text-slate-200 rounded text-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={github}
          className="text-slate-300 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={demo}
          className="text-slate-300 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;