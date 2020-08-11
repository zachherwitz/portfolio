import React, { useContext } from "react";
import ProjectContext from "../../context/project/projectContext";
import Carousel from "react-bootstrap/Carousel";

const ProjectDisplay = () => {
  const projectContext = useContext(ProjectContext);
  const { project } = projectContext;

  return (
    <div className="project-display">
      {project && (
        <div className={`project project-${project.name}`}>
          <div
            className="project-image"
            style={{ background: project.leftColor }}
          >
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={project.images[0]}
                  alt={project.name}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={project.images[1]}
                  alt={project.name}
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div
            className="project-info"
            style={{ background: project.rightColor }}
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
        </div>
      )}
    </div>
  );
};

export default ProjectDisplay;
