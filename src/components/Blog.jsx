import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const blogPosts = [
  {
    title: "Building Modern React Applications",
    excerpt: "Learn best practices for building scalable React applications with modern tools and techniques.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React"
  },
  {
    title: "Node.js Performance Optimization",
    excerpt: "Tips and tricks for optimizing Node.js applications for better performance and scalability.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Node.js"
  },
  {
    title: "TypeScript Best Practices",
    excerpt: "Essential TypeScript patterns and practices for writing maintainable code.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "TypeScript"
  }
];

function Blog() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section
      id="blog"
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
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Latest Insights
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Sharing knowledge about modern web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
                  {post.category}
                </span>
                <span className="text-sm text-slate-500">{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {post.title}
              </h3>
              <p className="text-slate-400 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">{post.readTime}</span>
                <button className="text-white hover:underline">
                  Read More
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-slate-400 mb-6">
            Get exclusive articles about cutting-edge technologies delivered to your inbox.
          </p>
          <button className="bg-slate-100 text-slate-950 px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors">
            Subscribe to Newsletter
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Blog;