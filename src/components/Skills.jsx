import { motion } from "framer-motion";

const techStack = {
  Frontend: ["React", "JavaScript", "TypeScript", "HTML5/CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Python", "REST APIs"],
  "Tools & Platforms": ["Git", "VS Code", "Figma", "Postman"],
  "Currently Focusing On": ["Next.js", "TypeScript", "Performance Optimization"]
};

function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;