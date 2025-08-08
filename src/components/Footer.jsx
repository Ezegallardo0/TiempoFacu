import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>2025 Tiempo Facu © Todos los derechos reservados.</p>
          Contacto {" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ezequieljoelgallardo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
          </a>
        
      </div>
    </footer>
  );
};

export default Footer;
