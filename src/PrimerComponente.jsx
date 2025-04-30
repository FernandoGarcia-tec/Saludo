import React from 'react'
import "./styles/PrimerComponente.css"
import fotoPerfil from "./assets/foto.jpg"

export const DatosPersonales = () => {
    return (
        <div className="portfolio-container">
        <header className="hero">
          <img src={fotoPerfil} alt="Foto de perfil" className="hero-photo" />
          <div className="hero-text">
            <h1>José Fernando Garcia Quintero</h1>
            <h2>Desarrollador </h2>
            <p>Transformo ideas en productos digitales funcionales y modernos.</p>
            <div className="hero-links">
              <a href="https://github.com/juanperez" target="_blank">GitHub</a>
              <a href="https://linkedin.com/in/juanperez" target="_blank">LinkedIn</a>
              <a href="mailto:juan.perez@email.com">Email</a>
            </div>
          </div>
        </header>
  
        <section className="about">
          <h2>Sobre mí</h2>
          <p>
            Soy un desarrollador apasionado por crear experiencias web eficientes, atractivas y funcionales.
            Trabajo con tecnologías modernas como React, Node.js y MongoDB. Me encanta aprender, colaborar y construir soluciones que realmente aporten valor.
          </p>
        </section>
  
        <section className="skills">
          <h2>Habilidades</h2>
          <div className="skill-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Git</span>
            <span>Express.js</span>
          </div>
        </section>
  
        <section className="projects">
          <h2>Proyectos</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Dashboard de Ventas</h3>
              <p>Visualiza datos de ventas en tiempo real. React + Chart.js</p>
              <a href="#">Ver más</a>
            </div>
            <div className="project-card">
              <h3>Blog Técnico</h3>
              <p>Blog personal con temas de desarrollo. Gatsby + Markdown</p>
              <a href="#">Ver más</a>
            </div>
            <div className="project-card">
              <h3>Gestor de Tareas</h3>
              <p>App CRUD con MongoDB, Express y React</p>
              <a href="#">Ver más</a>
            </div>
          </div>
        </section>
  
        <section className="timeline">
          <h2>Trayectoria</h2>
          <ul>
            <li>
              <strong>TechCorp</strong> – Front-end Developer (2021 - Presente)
            </li>
            <li>
              <strong>DevSolutions</strong> – Web Developer Junior (2019 - 2021)
            </li>
            <li>
              <strong>UTEM</strong> – Ingeniería en Sistemas (2015 - 2019)
            </li>
          </ul>
        </section>
  
        <footer className="contact">
          <p>¿Listo para colaborar? 📩 <strong>juan.perez@email.com</strong></p>
        </footer>
      </div>
    );
  };