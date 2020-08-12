import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../../context/project/projectContext";

import ZachImg from "../../images/zach.png";

const Navbar = () => {
  const projectContext = useContext(ProjectContext);
  const { selectProject } = projectContext;
  const [spanStyle, setSpanStyle] = useState({
    opacity: 0,
    transition: "1s",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpanStyle({
        opacity: 1,
        transition: "1s",
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const onClick = (project) => {
    selectProject(project);
  };

  return (
    <nav>
      <div className="title">
        <a href="mailto:zachherwitz@gmail.com">
          <h1>
            zach<span style={spanStyle}>.</span>herwitz
            <span style={spanStyle}>
              @gmail.com <i className="fas fa-envelope-open"></i>
            </span>
          </h1>
        </a>
        <h2>software engineer and web developer</h2>
      </div>
      <ul className="projects">
        <h4>projects</h4>
        <div className="project-link-container">
          {projectContext.projects.map((project, index) => {
            return (
              <li key={index}>
                <Link
                  className="project-button"
                  onClick={() => {
                    onClick(project);
                  }}
                  to="/projects"
                >
                  {project.buttonName}
                </Link>
              </li>
            );
          })}
        </div>
      </ul>

      <div className="contacts-container">
        <Link className="about-me-link" to="/about">
          about me
        </Link>
        <div className="icons-container">
          <a target="_blank" href="https://github.com/zachherwitz/">
            <i className="fab fa-github-square"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/zach-herwitz/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a target="_blank" href="https://www.imdb.com/name/nm5178378/">
            <i className="fab fa-imdb"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
