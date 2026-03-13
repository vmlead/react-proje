function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-gradient-to-br from-slate-950/40 via-slate-900/30 to-slate-950/40 p-10 shadow-xl ring-1 ring-white/10 backdrop-blur">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          About Me
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-200">
          I&apos;m a <span className="font-semibold text-white">Full Stack Developer</span> who loves turning ideas into
          production-ready applications. I build end-to-end solutions with a focus
          on <span className="font-bold">React</span>, <span className="font-bold">Node.js</span>, and
          modern backend APIs (Express, GraphQL, REST).
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-200">
          My work emphasizes <span className="font-bold">responsive, accessible UI</span> and
          pixel-perfect experiences using <span className="font-bold">Tailwind CSS</span>,
          component-driven architecture, and performance best practices.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-200">
          I collaborate cross-functionally, prioritize clean code and testability,
          and leverage <span className="font-bold">CI/CD</span>, <span className="font-bold">Git</span>, and
          automated testing to ship reliable software fast.
        </p>
      </div>
    </section>
  );
}

export default About;