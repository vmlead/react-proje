const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "HTML",
  "CSS",
  "Git",
];

function Skills() {
  return (
    <section id="skills" className="py-20 text-center">
      <h2 className="text-3xl font-bold">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {skills.map((skill) => (
          <span key={skill} className="bg-gray-200 px-4 py-2 rounded">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;