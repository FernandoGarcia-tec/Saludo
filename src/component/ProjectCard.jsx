import React from 'react';

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="tech-stack">
        {project.techStack.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
      <div className="project-buttons">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">👁 Ver</a>
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">📂 Repositorio</a>
      </div>
    </div>
  );
};
