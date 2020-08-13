import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../../context/project/projectContext";

const Footer = () => {
  const projectContext = useContext(ProjectContext);
  const { selectProject } = projectContext;

  const onClick = (project) => {
    selectProject(project);
  };

  return (
    <footer>
      <ul className="footer-projects">
        <div className="footer-project-link-container">
          {projectContext.projects.map((project, index) => {
            return (
              <li key={index}>
                <Link
                  className="footer-project-button"
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
        <h4>projects</h4>
      </ul>
    </footer>
  );
};

export default Footer;
