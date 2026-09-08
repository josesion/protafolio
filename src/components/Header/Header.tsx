import "./Header.css";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyecto", href: "#proyectos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  return (
    <header className="topbar">
      <div className="brand">JL</div>

      <nav className="nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="nav-button" href="#contacto">
        Contactar
      </a>
    </header>
  );
}
