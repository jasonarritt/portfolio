import React from "react";

function Project({ project }) {
  return (
    <article
      className="project-card light-text col-sm-12 col-lg-5"
      key={project.title}
    >
      <div className="project-title center">
        {project.deployedLink.length > 0 ? (
          <a
            href={project.deployedLink}
            target="_blank"
            rel="noreferrer"
            className="my-link"
          >
            <h3>{project.title}</h3>
          </a>
        ) : (
          <h3>{project.title}</h3>
        )}
      </div>
      <div className="project-description">
        <p>{project.description}</p>
      </div>
      <div className="project-image">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="img-thumbnail-mx1"
        />
        <h6>{project.tools}</h6>
      </div>
      <div className="project-github-link center">
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          <h4>View Repository</h4>
        </a>
      </div>
    </article>
  );
}

export default Project;
