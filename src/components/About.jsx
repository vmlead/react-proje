import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section
      id="about"
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
            Building the Future with Code
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-gray-300">
            Your Trusted Technology Partner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
          <p className="text-lg leading-relaxed text-slate-600 dark:text-gray-300 mb-6">
            I'm a passionate Full Stack Developer with experience in React, Node.js, and modern web technologies.
            I specialize in creating scalable, maintainable applications that solve real-world problems.
          </p>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-gray-300 mb-6">
              My expertise spans across frontend and backend development, with a focus on delivering
              high-quality solutions that drive business value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="text-center p-6 bg-slate-200 dark:bg-gray-200 rounded-lg">
              <div className="text-3xl font-bold text-black dark:text-gray-900">6+</div>
              <div className="text-sm text-slate-600 dark:text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-slate-200 dark:bg-gray-200 rounded-lg">
              <div className="text-3xl font-bold text-black dark:text-gray-900">20+</div>
              <div className="text-sm text-slate-600 dark:text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-slate-200 dark:bg-gray-200 rounded-lg">
              <div className="text-3xl font-bold text-black dark:text-gray-900">5+</div>
              <div className="text-sm text-slate-600 dark:text-gray-600">Technologies</div>
            </div>
            <div className="text-center p-6 bg-slate-200 dark:bg-gray-200 rounded-lg">
              <div className="text-3xl font-bold text-black dark:text-gray-900">100%</div>
              <div className="text-sm text-slate-600 dark:text-gray-600">Commitment</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-black dark:text-white mb-8 text-center">
            🏆 Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-200 dark:bg-gray-200 rounded-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="font-semibold text-black dark:text-gray-900">Project Success</h4>
              <p className="text-sm text-slate-600 dark:text-gray-600 mt-2">
                Successfully delivered multiple web applications with modern technologies
              </p>
            </div>
            <div className="text-center p-6 bg-slate-200 dark:bg-gray-200 rounded-lg">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="font-semibold text-black dark:text-gray-900">Innovation</h4>
              <p className="text-sm text-slate-600 dark:text-gray-600 mt-2">
                Implemented innovative solutions using React and Node.js
              </p>
            </div>
            <div className="text-center p-6 bg-slate-200 dark:bg-gray-200 rounded-lg">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="font-semibold text-black dark:text-gray-900">Performance</h4>
              <p className="text-sm text-slate-600 dark:text-gray-600 mt-2">
                Optimized applications for better user experience and performance
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;