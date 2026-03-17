import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Building the Future with Code
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Your Trusted Technology Partner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
          <p className="text-lg leading-relaxed text-slate-400 mb-6">
            I'm a passionate Full Stack Developer with experience in React, Node.js, and modern web technologies.
            I specialize in creating scalable, maintainable applications that solve real-world problems.
          </p>
          <p className="text-lg leading-relaxed text-slate-400 mb-6">
              My expertise spans across frontend and backend development, with a focus on delivering
              high-quality solutions that drive business value.
            </p>
            <a
              href="/react-proje/Resume-Mar26FE.pdf"
              download
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 mb-6"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <div className="text-3xl font-bold text-white">6+</div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <div className="text-3xl font-bold text-white">20+</div>
              <div className="text-sm text-slate-400">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm text-slate-400">Technologies</div>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-slate-400">Commitment</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            🏆 Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="font-semibold text-white">Project Success</h4>
              <p className="text-sm text-slate-400 mt-2">
                Successfully delivered multiple web applications with modern technologies
              </p>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="font-semibold text-white">Innovation</h4>
              <p className="text-sm text-slate-400 mt-2">
                Implemented innovative solutions using React and Node.js
              </p>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="font-semibold text-white">Performance</h4>
              <p className="text-sm text-slate-400 mt-2">
                Optimized applications for better user experience and performance
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;