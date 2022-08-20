import React from "react";

function Project({ project }) {
  return (
    <article
      className="project-card w-50 col-md-4 col-sm-12"
      key={project.name}
    >
      <div className="project-title">
        {project.deployedLink.length > 0 ? (
          <a href={project.deployedLink} target="_blank" rel="noreferrer">
            <h2>{project.title}</h2>
          </a>
        ) : (
          <h2>{project.title}</h2>
        )}
      </div>
      <div className="project-image">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="img-thumbnail-mx1"
        />
        <h6>{project.tools}</h6>
      </div>
      <div className="project-github-link">
        <h4>
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            View Repository
          </a>
        </h4>
      </div>
    </article>
  );
}

export default Project;
