import React from 'react';
import './footer.css'; // Asegúrate de tener este archivo CSS para estilos
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de GitHub"
          >
            <img src="/icons/github.svg" alt="GitHub" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de Twitter"
          >
            <img src="/icons/twitter.svg" alt="Twitter" />
          </a>
        </div>
        <p className="footer-copy">
          &copy; {currentYear} [Tu Nombre]. Todos los derechos reservados.
        </p>
        <p className="footer-tech">
          Desarrollado con React. Alojado en Firebase.
        </p>
      </div>
    </footer>
  );
};
