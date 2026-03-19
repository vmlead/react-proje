import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const techStack = {
  Frontend: ["React", "Vuejs", "JavaScript", "TypeScript", "HTML5/CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Java", "REST APIs"],
  "Tools & Platforms": ["Git", "VS Code", "Figma", "Postman"],
  "Currently Focusing On": ["Next.js", "TypeScript", "Performance Optimization"]
};

function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section
      id="skills"
      ref={ref}
      style={{ opacity }}
      className="py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-gray-300">
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
              className="bg-slate-200 dark:bg-gray-200 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-black dark:text-gray-900 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-300 dark:bg-gray-300 text-slate-700 dark:text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;