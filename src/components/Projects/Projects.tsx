import "./Projects.css";

const projects = [
  {
    title: "Academia de Baile",
    category: "Vite + React + TS",
    description:
      "Sistema para gestión de academias de baile con inscripción, control de caja, horarios, asistencia y panel de administración.",
    tags: ["Inscripciones", "Caja", "Horarios", "Asistencia"],
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  },
];

export function Projects() {
  return (
    <section className="projects" id="proyectos" data-reveal>
      <div className="section-heading reveal" data-reveal>
        <p className="eyebrow">Portafolio</p>
        <h2>Proyecto destacado</h2>
      </div>

      <div className="projects-grid single-project">
        {projects.map((project, index) => (
          <article
            className="project-card reveal"
            key={project.title}
            data-reveal
            style={{ transitionDelay: `${index * 140}ms` }}
          >
            <div className="project-visual">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <span className="badge">{project.category}</span>
            </div>

            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                className="project-link"
                href="https://academias-client-production.up.railway.app/"
                target="_blank"
                rel="noreferrer"
              >
                Ver proyecto en línea
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
