import React from 'react';
import { ProjectCard } from './ProjectCard';

const sampleProjects = [
  {
    id: '1',
    title: 'Este Portafolio Web',
    imageUrl: 'https://placehold.co/600x400.png',
    description:
      'Portafolio personal desarrollado con React, CSS y herramientas modernas. Presenta mis trabajos, habilidades y trayectoria profesional.',
    techStack: ['React', 'JavaScript', 'CSS', 'HTML'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: '2',
    title: 'Controlador IoT para Domótica',
    imageUrl: 'https://placehold.co/600x400.png',
    description:
      'Sistema basado en ESP32 para automatizar un hogar. Incluye control remoto por web y sensores conectados vía MQTT.',
    techStack: ['C++', 'ESP32', 'MQTT', 'HTML'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: '3',
    title: 'Sistema de Reconocimiento Facial',
    imageUrl: 'https://placehold.co/600x400.png',
    description:
      'App en Python y OpenCV que identifica rostros en tiempo real. Incluye entrenamiento con modelos de ML.',
    techStack: ['Python', 'OpenCV', 'Flask'],
    liveLink: '#',
    repoLink: '#',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="projects-grid">
          {sampleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
