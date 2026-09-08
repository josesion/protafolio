import "./About.css";

const skills = [
  "Fullstack",
  "React",
  "TypeScript",
  "Vite",
  "Node.js",
  "Express",
  "CSS",
  "UX/UI",
  "API REST",
  "Git",
  "Gestión escolar",
  "Sistemas",
];

export function About() {
  return (
    <section className="about" id="sobre-mi" data-reveal>
      <div className="section-heading left reveal" data-reveal>
        <p className="eyebrow">Sobre mí</p>
        <h2>
          Combino análisis, tecnología y soluciones prácticas para negocios
          reales.
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-copy reveal" data-reveal>
          <p>
            Soy Fullstack Developer con enfoque en análisis de sistemas,
            desarrollo de soluciones digitales y optimización de procesos. Me
            interesa construir aplicaciones que conecten frontend, backend y
            lógica de negocio de forma clara y eficiente.
          </p>
          <p>
            El proyecto presentado está enfocado en una academia de baile con
            gestión de inscripciones, control de caja, horarios, asistencia y un
            sistema de kiosco para atención rápida y organizada. Está en
            constante desarrollo y pensado para crecer con la operación real.
          </p>
        </div>

        <div className="skills-box reveal" data-reveal>
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="skill-tag"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
