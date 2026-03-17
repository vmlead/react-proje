import { motion } from "framer-motion";

const certifications = [
  {
    title: "React: Creating and Hosting a Full-Stack Site",
    issuer: "LinkedIn Learning",
    date: "2022",
    skills: ["React", "JavaScript", "Web Development"]
  },
  {
    title: "Atlassian Agile Project Management Professional Certificate",
    issuer: "Atlassian",
    date: "2025",
    skills: ["Agile Methodologies", "Project Management"]
  },
  {
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "2024",
    skills: ["Generative AI",  "AI Technologies"]
  }
];

function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Certifications & Skills
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Professional certifications and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-slate-400 mb-4">
                {cert.issuer} • {cert.date}
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Responsive Design", "Version Control", "API Development", "Database Design", "Agile Methodologies"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;