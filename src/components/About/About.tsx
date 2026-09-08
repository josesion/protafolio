import "./About.css";

const skills = [
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "ts" },
  { name: "Vite", icon: "vite" },
  { name: "Node.js", icon: "node" },
  { name: "Express", icon: "express" },
  { name: "CSS", icon: "css" },
  { name: "UX/UI", icon: "ux" },
  { name: "API REST", icon: "api" },
  { name: "Git", icon: "git" },
  { name: "Fullstack", icon: "fullstack" },
  { name: "Gestión escolar", icon: "school" },
  { name: "Sistemas", icon: "system" },
];

function TechLogo({ icon }: { icon: string }) {
  const commonProps = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  switch (icon) {
    case "react":
      return (
        <svg {...commonProps}>
          <circle
            cx="12"
            cy="12"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="8.5"
            ry="3.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="8.5"
            ry="3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="8.5"
            ry="3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            transform="rotate(-60 12 12)"
          />
        </svg>
      );
    case "ts":
      return (
        <svg {...commonProps}>
          <path
            d="M7 7.5h10M7 12h10M7 16.5h6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M18 6.5v11.5l2 1.5V6.5l-2-1.5Z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
      );
    case "vite":
      return (
        <svg {...commonProps}>
          <path
            d="M12.8 3.5 18.5 17l-6.7-2.2L5.5 17l5.7-13.5Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M9.5 13.7 5 17l7.7 3.4L19 17l-4.5-3.3"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "node":
      return (
        <svg {...commonProps}>
          <path
            d="M12 3.5 5.5 7.2v9.6L12 20.5l6.5-3.7V7.2L12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.3v7.4M8.6 10.6l6.8 2.8M15.4 10.6l-6.8 2.8"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "express":
      return (
        <svg {...commonProps}>
          <path
            d="M4 9.5c2.5-2 5.8-2 8.6 0 2.6 1.8 4.6 2.2 7.4.5v2.8c-3.5 2-6.2 1.5-8.8-.4-2.5-1.8-5.4-2.1-7.2-.9V9.5Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M6.5 14.5h11"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "css":
      return (
        <svg {...commonProps}>
          <path
            d="M5 4.5h14l-1.2 13.4L12 19l-5.8-1.1L5 4.5Z"
            fill="currentColor"
            opacity="0.92"
          />
          <path
            d="M9 8.5h6l-.4 3.6-2.4 1-2.2-1-.1-1.9"
            stroke="#0b0d10"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "ux":
      return (
        <svg {...commonProps}>
          <path
            d="M6 7.5h12v9H6z"
            stroke="currentColor"
            strokeWidth="1.5"
            rx="2"
          />
          <path
            d="M9 11.5h6M9 14.5h4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "api":
      return (
        <svg {...commonProps}>
          <path
            d="M7 8.5h10M7 12h10M7 15.5h7"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="5.5" cy="8.5" r="1.3" fill="currentColor" />
          <circle cx="5.5" cy="12" r="1.3" fill="currentColor" />
          <circle cx="5.5" cy="15.5" r="1.3" fill="currentColor" />
        </svg>
      );
    case "git":
      return (
        <svg {...commonProps}>
          <circle
            cx="8"
            cy="6.5"
            r="2.2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="16"
            cy="12"
            r="2.2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="8"
            cy="17.5"
            r="2.2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 8.7v8.6M10 6.5h4.2a2.3 2.3 0 0 1 2.3 2.3v1.2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "fullstack":
      return (
        <svg {...commonProps}>
          <rect
            x="4.5"
            y="6"
            width="15"
            height="12"
            rx="2.2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M4.5 10.5h15M9 17.5l1.5-3.5h3l1.5 3.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "school":
      return (
        <svg {...commonProps}>
          <path
            d="M4 9.2 12 5l8 4.2-8 4.2-8-4.2Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M7.5 11.2v3.1c1.2 1.5 3.2 2.2 4.5 2.2s3.3-.7 4.5-2.2v-3.1"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "system":
      return (
        <svg {...commonProps}>
          <rect
            x="5"
            y="5"
            width="14"
            height="10"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 19h6M12 15v4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
  }
}

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
              key={skill.name}
              className="skill-tag"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="skill-icon">
                <TechLogo icon={skill.icon} />
              </span>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
