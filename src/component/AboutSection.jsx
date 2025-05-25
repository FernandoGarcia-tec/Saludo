import React from 'react';
import './About.css';

export const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="about-title">Sobre Mí</h2>
        <div className="about-grid">
          <div className="card">
            <div className="card-header">
              <span className="icon">
                {/* SVG de birrete */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.342 6.583A11.952 11.952 0 0112 20a11.952 11.952 0 01-6.502-2.839 12.083 12.083 0 01.342-6.583L12 14z" />
                </svg>
              </span>
              <h3>Educación</h3>
            </div>
            <div className="card-content">
              <div>
                <h4>Grado en Ingeniería Informática</h4>
                <p>[Tu Universidad], [Ciudad], [País] (Año Inicio - Año Fin/Actualidad)</p>
                <p className="small-text">Asignaturas: Estructuras de Datos, Algoritmos, IA, etc.</p>
              </div>
              <div>
                <h4>Certificación en Desarrollo Full-Stack</h4>
                <p>Plataforma de Cursos Online (Año)</p>
                <p className="small-text">Stack MERN, despliegue de múltiples proyectos.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="icon">
                {/* SVG de maletín */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7V4a1 1 0 00-1-1h-6a1 1 0 00-1 1v3M3 7h18a2 2 0 012 2v2H1V9a2 2 0 012-2zm0 4h18v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5z" />
                </svg>
              </span>
              <h3>Experiencia y Proyectos</h3>
            </div>
            <div className="card-content">
              <div>
                <h4>Desarrollador de Firmware (Prácticas)</h4>
                <p>Tech Solutions Innovadoras (Año - Actualidad)</p>
                <ul>
                  <li>Firmware para IoT.</li>
                  <li>Diseño de sistemas embebidos.</li>
                  <li>Metodologías ágiles.</li>
                </ul>
              </div>
              <div>
                <h4>Proyecto: Domótica con IA</h4>
                <p>Proyecto Académico/Personal (Año)</p>
                <ul>
                  <li>Sistema de control con Raspberry Pi.</li>
                  <li>IA para reconocimiento de voz.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="about-description">
          Soy un estudiante de ingeniería informática proactivo y orientado a resultados, con una gran pasión por la tecnología y la resolución de problemas complejos. Mi formación académica me ha proporcionado una sólida base en desarrollo de software, hardware y sistemas inteligentes.
        </p>
      </div>
    </section>
  );
};
