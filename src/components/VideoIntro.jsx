import { motion } from "framer-motion";

function VideoIntro() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get to Know Me
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Watch my personal introduction and learn more about my journey as a developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎥</div>
              <p className="text-slate-400">Personal Introduction Video</p>
              <p className="text-sm text-slate-500 mt-2">
                Audio Enabled - Learn about my passion for development
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoIntro;