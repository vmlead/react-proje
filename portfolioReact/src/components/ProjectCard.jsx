function ProjectCard({ title, description, github, demo }) {
  return (
    <div className="border rounded-lg p-5 shadow hover:shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="text-gray-600 mt-2">{description}</p>

      <div className="flex gap-4 mt-4">
        <a href={github}>GitHub</a>
        <a href={demo}>Live Demo</a>
      </div>
    </div>
  );
}

export default ProjectCard;