import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-slate-900 dark:text-white sm:text-6xl"
      >
        Hi, I'm Vivek ??
      </motion.h1>

      <p className="mt-4 text-base text-slate-600 dark:text-slate-200 sm:text-lg">
        Full Stack Developer | React | Node.js | TypeScript
      </p>

      <button className="mt-6 rounded-lg bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200">
        View Projects
      </button>
    </section>
  );
}

export default Hero;
