import React from "react";

function Project({ project }) {
  return (
    <article className="project-card w-50 col-md-4 col-sm-6" key={project.name}>
      <div className="project-title">
        {project.deployedLink.length > 0 ? (
          <a href={project.deployedLink} target="_blank" rel="noreferrer">
            <h3>{project.title}</h3>
          </a>
        ) : (
          <h3>{project.title}</h3>
        )}
      </div>
      <div className="project-image">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="img-thumbnail-mx1"
        />
      </div>
      <div className="project-github-link">
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          GitHub Repository
        </a>
      </div>
    </article>
  );
}

export default Project;
