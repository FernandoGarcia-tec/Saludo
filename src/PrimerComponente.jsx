import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './stilo.css';
import fotoPerfil from "./assets/foto.jpg";
import portafolioImagen from "./assets/portafolio.png";


export const DatosPersonales = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0); // <-- fuerza al tope
  }, []);


  return (
    <div className="portfolio-container">

      <nav className="navbar">
        <div className="navbar-logo">JF</div>
        <ul className="navbar-links">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#timeline">Trayectoria</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>

      <header className="hero" data-aos="fade-up">
        <div className="hero-text">
          <h1>José Fernando García Quintero</h1>
          <h2>Desarrollador Web y Movil</h2>
          <p>🎓 Estudiante de Ingeniería Informática</p>
          <p>📍Colima, México</p>
          <p>📱Tel: 3122193244</p>

          <div className="hero-links">
            <a href="https://github.com/FernandoGarcia-tec" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/fernandogarciaq" target="_blank">LinkedIn</a>
            <a href="mailto:garciaquintero00@gmail.com">Email</a>
          </div>
        </div>
        <img src={fotoPerfil} alt="Foto de perfil" className="hero-photo" />
      </header>

      <section id='about' className="about" data-aos="fade-left">
        <h2>Sobre mí</h2>
        <p>
          Soy un estudiante de Ingeniería Informática motivado por el aprendizaje constante y el deseo de desarrollar soluciones tecnológicas que generen impacto. Me interesa seguir creciendo en áreas como la programación, ciencia de datos y desarrollo de videojuegos, combinando teoría y práctica para fortalecer mis habilidades. Busco oportunidades que me permitan adquirir experiencia, colaborar con otros profesionales y ampliar mis conocimientos en entornos reales de trabajo.
        </p>
      </section>

      <div class="section-separator"></div>

      <section id='skills' className="skills" data-aos="zoom-in">
        <h2>Habilidades</h2>
        <div className="skill-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>Java</span>
          <span>SQL</span>
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Git</span>
        </div>
      </section>

      <div class="section-separator"></div>

      <section id='projects' className="projects" data-aos="fade-up">
        <h2>Proyectos</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src={portafolioImagen} />
            <h3>Portafolio</h3>

            <p>Mi portafolio web personal, donde se encuentran algunos de mis proyectos más destacados, mis habilidades técnicas y un poco sobre mi formación.</p>
            <div class="project-buttons">
              <a href="https://saludo-ctym.vercel.app/"><span>👁</span> VER</a>
              <a href="https://github.com/FernandoGarcia-tec/Saludo"><span>📂</span> REPOSITORIO</a>
            </div>
          </div>
          <div className="project-card">
            <img src={portafolioImagen} />
            <h3>Portafolio</h3>

            <p>Mi portafolio web personal, donde se encuentran algunos de mis proyectos más destacados, mis habilidades técnicas y un poco sobre mi formación.</p>
            <div class="project-buttons">
              <a href="https://saludo-ctym.vercel.app/"><span>👁</span> VER</a>
              <a href="https://github.com/FernandoGarcia-tec/Saludo"><span>📂</span> REPOSITORIO</a>
            </div>
          </div>
          <div className="project-card">
            <img src={portafolioImagen} />
            <h3>Portafolio</h3>

            <p>Mi portafolio web personal, donde se encuentran algunos de mis proyectos más destacados, mis habilidades técnicas y un poco sobre mi formación.</p>
            <div class="project-buttons">
              <a href="https://saludo-ctym.vercel.app/"><span>👁</span> VER</a>
              <a href="https://github.com/FernandoGarcia-tec/Saludo"><span>📂</span> REPOSITORIO</a>
            </div>
          </div>
          <div className="project-card">
            <img src={portafolioImagen} />
            <h3>Portafolio</h3>

            <p>Mi portafolio web personal, donde se encuentran algunos de mis proyectos más destacados, mis habilidades técnicas y un poco sobre mi formación.</p>
            <div class="project-buttons">
              <a href="https://saludo-ctym.vercel.app/"><span>👁</span> VER</a>
              <a href="https://github.com/FernandoGarcia-tec/Saludo"><span>📂</span> REPOSITORIO</a>
            </div>
          </div>
        </div>
      </section>

<div class="section-separator"></div>

      <section id='timeline' className="timeline" data-aos="fade-right">
        <h2>Trayectoria</h2>
        <ul>
          <li><strong>Ingeniería Informática</strong> – Instituto Tecnológico de Colima (2020 – Actualidad (en curso))</li>
          <li><strong>Técnico en Programación</strong> – Centro de Bachillerato Tecnológico Industrial y de Servicios No. 157 (2014 – 2017)</li>
          <li><strong>Diplomado en Física Cuántica</strong> – Tecnológico Nacional de México (2025 - Actualidad (en curso))</li>
          <li><strong>Diplomado en Ciencia de Datos</strong> – Tecnológico Nacional de México (2023 - 2024)</li>
          <li><strong>Certificado: Master Mobile Game Development with Godot 4</strong> – Udemy(2024)</li>
          <li><strong>Reconocimiento: Participación destacada en el concurso “Tu Videojuego SACMEX”</strong> – Ciudad de México, organizado por SACMEX</li>
          <li><strong>Curso en Administrador de bases de datos</strong> – Fundación Carlos Slim (2023)</li>
          <li><strong>Curso en Finder</strong> – Fundación Carlos Slim (2020)</li>
          <li><strong>Curso en Desarrollador de videojuegos</strong> – Fundación Carlos Slim (2020)</li>
          <li><strong>Curso en Ciudadano global</strong> – Fundación Carlos Slim (2019)</li>
          <li><strong>Curso en Curador de datos</strong> – Fundación Carlos Slim (2019)</li>
          <li><strong>Curso en Técnico en informática (Ofimática)</strong> – Fundación Carlos Slim (2019)</li>

        </ul>
      </section>
<div class="section-separator"></div>
      <footer id='contact' className="contact" >
        <p>¿Listo para colaborar? 📩 <strong>garciaquintero00@gmail.com</strong></p>
      </footer>

    </div>
  );
};
