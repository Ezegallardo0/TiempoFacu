import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Tiempo Facu</h3>
          <p>
            Tu herramienta favorita para organizar tu tiempo y estudios de manera
            sencilla y eficiente.
          </p>
          <p>© 2025 Todos los derechos reservados.</p>
        </div>

        <div className="footer-section contact">
          <h4>Contacto</h4>
          <p>
            Email:{" "}
            <a
              href="mailto:ezequieljoelgallardo@gmail.com?subject=Contacto%20desde%20TiempoFacu&body=Hola%20Ezequiel,%20quiero%20contactarte%20sobre..."
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              ezequieljoelgallardo@gmail.com
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-mail"
                style={{ marginLeft: "6px", verticalAlign: "middle" }}
              >
                <path d="M22 7L12 13 2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </a>
          </p>
          <p>Tel: +54 9 11 1234 5678</p>
        </div>

        <div className="footer-section social">
          <h4>Seguinos</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/ezequiel-gallardo-b4591a345/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-link icon-link"
            >
              {/* LinkedIn SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zm7 0h3.75v1.64h.05c.52-.98 1.78-2 3.65-2 3.9 0 4.62 2.57 4.62 5.9V20h-4v-5.3c0-1.27-.02-2.91-1.78-2.91-1.8 0-2.07 1.4-2.07 2.83V20h-4V8z" />
              </svg>
            </a>

            <a
              href="https://github.com/Ezegallardo0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer-link icon-link"
            >
              {/* GitHub SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.62.07-.61.07-.61 1 .07 1.53 1.06 1.53 1.06.89 1.54 2.34 1.1 2.9.84.1-.66.35-1.1.63-1.36-2.22-.26-4.56-1.13-4.56-5 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03A9.34 9.34 0 0112 7.87c.85 0 1.7.11 2.5.32 1.9-1.3 2.75-1.03 2.75-1.03.56 1.4.2 2.44.1 2.7.64.7 1.03 1.6 1.03 2.7 0 3.9-2.35 4.74-4.58 5 .37.32.7.96.7 1.94v2.88c0 .27.18.6.7.48A10.22 10.22 0 0022 12.22C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
