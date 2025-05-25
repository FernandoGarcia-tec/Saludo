import React from 'react';
import './stilohero.css'; // importa el CSS aquí
import fotoPerfil from '../assets/foto.jpg';

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <img
            src={fotoPerfil}
            alt="Estudiante de Ingeniería Informática"
            className="hero-image"
          />
        </div>
        <h1 className="hero-title">Hola, soy [Tu Nombre]</h1>
        <p className="hero-subtitle">
          Un apasionado estudiante de Ingeniería Informática. Me especializo en desarrollo de software, sistemas embebidos y IA.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">Ver Mis Proyectos</a>
          <a href="#contact" className="btn-outline">Contacta Conmigo</a>
        </div>
        <div className="hero-scroll">
          <a href="#about" aria-label="Scroll to about section">⬇</a>
        </div>
      </div>
    </section>
  );
}