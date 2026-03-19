import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const ref = useRef(null);
  const form = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text);
      setMessage('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      setMessage('Failed to send message. Please try again.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      style={{ opacity }}
      className="py-20 bg-slate-800"
    >
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
                  <p className="text-slate-400">vikarp91@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-slate-400">Gurugram, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                  📱
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-slate-400">+91 8582913331</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-slate-400 mb-4">
                Available for freelance & full-time opportunities
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/vik1991/" className="text-slate-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/vmlead" className="text-slate-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  Twitter
                </a>
                <a
              href="/react-proje/Resume-Mar26FE.pdf"
              download
              className="inline-block hover:bg-green-700 text-white font-bold px-4 rounded transition duration-300"
            >
              Resume
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
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 resize-none"
              ></textarea>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-100 text-slate-950 py-3 rounded-lg hover:bg-slate-200 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {message && (
              <div className={`mt-4 p-3 rounded-lg text-sm ${
                message.includes('successfully')
                  ? 'bg-green-800 text-green-200'
                  : 'bg-red-800 text-red-200'
              }`}>
                {message}
              </div>
            )}
            <p className="text-sm text-slate-500 mt-4">
              Your message is secure and confidential. I'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;