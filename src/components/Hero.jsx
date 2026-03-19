import { motion } from "framer-motion";
import meImage from "../assets/me.png";

function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center px-4 py-16"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl font-bold text-black dark:text-white sm:text-6xl lg:text-7xl">
            Hi, I'm Vivek
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-slate-700 dark:text-gray-300">
            Full Stack Developer
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-gray-300 max-w-2xl">
            Passionate Full Stack Developer specializing in React, Vue, Node.js, and modern web technologies.
            I create scalable, user-friendly applications with clean code and innovative solutions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-black dark:text-white">6+</div>
              <div className="text-sm text-slate-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black dark:text-white">20+</div>
              <div className="text-sm text-slate-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black dark:text-white">4</div>
              <div className="text-sm text-slate-600 dark:text-gray-400">Companies</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
            >
              Let's Work Together
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-200 dark:border-slate-300 dark:text-white dark:hover:bg-slate-700"
            >
              View Projects
            </a>
          </div>

          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <a href="https://linkedin.com/in/vivek" className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-blue-400 hover:text-white dark:bg-slate-700 dark:text-white dark:hover:bg-blue-600" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/vivek" className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-gray-400 hover:text-white dark:bg-slate-700 dark:text-white dark:hover:bg-gray-600" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:vikarp91@gmail.com" className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-red-400 hover:text-white dark:bg-slate-700 dark:text-white dark:hover:bg-red-600">
              Email
            </a>
            <a
              href="/react-proje/Resume-Mar26FE.pdf"
              download
              className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-green-400 hover:text-white dark:bg-slate-700 dark:text-white dark:hover:bg-green-600"
            >
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
            <img
              src={meImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
