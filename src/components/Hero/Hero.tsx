import "./Hero.css";

const miniStats = [
  { value: "1", label: "Proyecto principal" },
  { value: "Vite", label: "React + TS" },
  { value: "En", label: "Desarrollo" },
];

const metrics = [
  { label: "Especialidad", value: "Fullstack • Sistemas" },
  { label: "Stack", value: "React • Node • TypeScript" },
  { label: "Proyecto", value: "Academia de baile" },
];

export function Hero() {
  return (
    <section className="hero reveal" id="inicio" data-reveal>
      <div className="hero-copy reveal" data-reveal>
        <p className="eyebrow">Fullstack Developer</p>
        <h1>
          Desarrollo soluciones digitales para <span>negocios, instituciones y</span>{" "}
          academias con claridad y eficiencia.
        </h1>
        <p className="lead">
          Soy <strong>José Manuel López</strong>, Fullstack Developer y analista
          en sistemas del Instituto del Milagro en Salta. Me especializo en
          crear aplicaciones funcionales, escalables y útiles para resolver
          procesos reales en instituciones, negocios y entornos de gestión.
        </p>

        <div className="cta-row">
          <a className="primary" href="#proyectos">
            Ver proyecto
          </a>
          <a className="secondary" href="#sobre-mi">
            Conóceme
          </a>
        </div>

        <div className="mini-stats">
          {miniStats.map((stat, index) => (
            <div
              key={stat.label}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-card reveal" data-reveal>
        <div className="profile-panel">
          <div className="avatar">JL</div>
          <div>
            <h2>José Manuel López</h2>
            <p>Analista en Sistemas</p>
          </div>
        </div>

        <div className="metrics">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
