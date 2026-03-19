import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import education from "../data/education";

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section
      id="education"
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
            Education
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-gray-300">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-200 dark:bg-gray-200 p-6 rounded-lg shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-gray-900">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-700 font-medium">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-slate-600 dark:text-gray-600">{edu.year}</p>
                  <p className="text-emerald-600 dark:text-emerald-700 font-semibold">{edu.grade}</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-gray-600">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Education;