import React, { useContext } from "react";
import ProjectContext from "../../context/project/projectContext";

const ProjectDisplay = () => {
  const projectContext = useContext(ProjectContext);
  const { project } = projectContext;

  return (
    <div className="project-display">
      {project && (
        <div className={`project project-${project.name}`}>
          <div
            className="project-info"
            style={{ background: project.leftColor }}
          >
            <h1>{project.name}</h1>
            {project.subtitle && <h2>{project.subtitle}</h2>}
            <h2>{project.tech}</h2>
            <h3>
              <a target="_blank" href={project.liveLink}>
                Live Link
              </a>
            </h3>
            <h3>
              <a target="_blank" href={project.githubLink}>
                GitHub Repo
              </a>
            </h3>
            {project.projectBlurbs.map((blurb, index) => {
              return <p key={index}>{blurb}</p>;
            })}
          </div>
          <div
            className="project-image"
            style={{ background: project.rightColor }}
          >
            <img src={project.image} alt={project.name} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDisplay;
