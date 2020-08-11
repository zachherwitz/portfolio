import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../../context/project/projectContext";

const Navbar = () => {
  const projectContext = useContext(ProjectContext);
  const { selectProject } = projectContext;

  const onClick = (project) => {
    selectProject(project);
  };

  return (
    <nav>
      <div className="title">
        <Link to="/">
          <h1>zach herwitz</h1>
        </Link>
        <h2>software engineer</h2>
      </div>
      <ul className="projects">
        {projectContext.projects.map((project, index) => {
          return (
            <li key={index}>
              <Link
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
      </ul>
      <Link to="/about">about me</Link>
    </nav>
  );
};

export default Navbar;
