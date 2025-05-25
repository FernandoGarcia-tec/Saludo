import React from 'react';
import heroImage from '../assets/foto.jpg'; // Asegúrate de tener esta imagen

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>¡Hola! Soy Juan Pérez</h1>
        <h2>Desarrollador Full Stack</h2>
        <p>Apasionado por crear soluciones web eficientes y escalables.</p>
        <div className="hero-links">
          <a href="#proyectos">Ver Proyectos</a>
          <a href="#contacto">Contáctame</a>
        </div>
      </div>
      <img src={heroImage} alt="Foto de Juan Pérez" className="hero-photo" />
    </section>
  );
};

export default Hero;