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
            <Carousel className="img-carousel">
              {project.images.map((image, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={project.images[index]}
                      alt={project.name}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <div
            className="project-info-container"
            style={{ background: project.rightColor }}
          >
            <div className="project-info">
              <h1>{project.name}</h1>
              <hr></hr>
              {project.subtitle && <h2>{project.subtitle}</h2>}
              <h3>{project.tech}</h3>
              <h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.liveLink}
                >
                  Live Link
                </a>
              </h4>
              <h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.githubLink}
                >
                  GitHub Repo
                </a>
              </h4>
              {project.projectBlurbs.map((blurb, index) => {
                return <p key={index}>{blurb}</p>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDisplay;
