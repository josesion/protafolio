import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer reveal" id="contacto" data-reveal>
      <div>
        <p className="eyebrow">Contacto</p>
        <h2>¿Querés hablar sobre un proyecto?</h2>
      </div>

      <div className="footer-links">
        <a href="mailto:josesion1388@gmail.com">josesion1388@gmail.com</a>
        <a href="https://wa.me/543875450396" target="_blank" rel="noreferrer">
          WhatsApp: 3875450396
        </a>
        <a href="https://github.com/josesion" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
