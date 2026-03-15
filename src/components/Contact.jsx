import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's Work Together
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                  📧
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-slate-400">your.email@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-slate-400">Your City, Country</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                  📱
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-slate-400">+1 (123) 456-7890</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-slate-400 mb-4">
                Available for freelance & full-time opportunities
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com" className="text-slate-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="https://github.com" className="text-slate-400 hover:text-white">
                  GitHub
                </a>
                <a href="https://twitter.com" className="text-slate-400 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-slate-100 text-slate-950 py-3 rounded-lg hover:bg-slate-200 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
            <p className="text-sm text-slate-500 mt-4">
              Your message is secure and confidential. I'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;