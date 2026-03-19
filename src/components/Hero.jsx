import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import meImage from "../assets/me.png";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <motion.section
      id="home"
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center px-4 py-16"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Hi, I'm Vivek
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-slate-300">
            Full Stack Developer
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400 max-w-2xl">
            Passionate Full Stack Developer specializing in React, Vue, Node.js, and modern web technologies.
            I create scalable, user-friendly applications with clean code and innovative solutions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">6+</div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-sm text-slate-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-sm text-slate-400">Companies</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-200"
            >
              Let's Work Together
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 shadow-sm transition hover:bg-slate-800"
            >
              View Projects
            </a>
          </div>

          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <a href="https://linkedin.com/in/vivek" className="text-slate-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/vivek" className="text-slate-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:vikarp91@gmail.com" className="text-slate-400 hover:text-white">
              Email
            </a>
            <a
              href="/react-proje/Resume-Mar26FE.pdf"
              download
              className="inline-block hover:bg-green-700 text-white font-bold px-4 rounded transition duration-300"
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
