import ProjectCard from "./ProjectCard";
import projects from "../data/project";

function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;