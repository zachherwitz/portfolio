// Dependencies
import React, { useReducer } from "react";
import ProjectContext from "./projectContext";
import ProjectReducer from "./projectReducer";

import { SELECT_PROJECT } from "../types";

// Images
import DistroImage from "../../images/distro.png";
import RootstockImage from "../../images/rootstock.png";
import HaoliImage from "../../images/haoli.png";
import IllustratedGuideImage from "../../images/illustrated-guide.jpg";

const ProjectState = (props) => {
  const initialState = {
    project: null,
    projects: [
      {
        name: "d|STRO",
        subtitle: "Film/TV Distribution and Contact Management App",
        tech: "mongoDB // Mongoose // Express // React",
        liveLink: "https://distro-app.herokuapp.com/",
        githubLink: "https://github.com/zachherwitz/Distro-Front",
        projectBlurbs: [
          "Developed a film-facing management and distribution app using the MERN stack and ReactJS libraries",
          "Designed an authentication and authorization system using bcrypt, express-session, and MongoDB",
        ],
        leftColor: "#332f2f",
        rightColor: "#E5B455",
        buttonName: "distro",
        image: DistroImage,
      },
      {
        name: "RootStock",
        subtitle: "Interactive Financial Portfolio Generator",
        tech: "mongoDB // Mongoose // Express // AngularJS",
        liveLink: "http://rootstock.herokuapp.com/",
        githubLink: "https://github.com/zachherwitz/RootStock",
        projectBlurbs: [
          "Collaborated with a group by creating user onboarding, using Figma, Adobe XD, and AngularJS.",
          "Designed and implemented a full CRUD API using ExpressJS and MongoDB, deployed to Heroku.",
        ],
        leftColor: "#CAA742",
        rightColor: "#6CA39C",
        buttonName: "rootstock",
        image: RootstockImage,
      },
      {
        name: "Hao.li",
        subtitle: "Chinese Dictionary and Flashcards App",
        tech: "JavaScript / jQuery",
        liveLink: "https://zachherwitz.github.io/chineseapp/",
        githubLink:
          "https://github.com/zachherwitz/zachherwitz.github.io/tree/master/chineseapp",
        projectBlurbs: [
          "Developed a simple and meditative Chiense dictionary with built-in flashcards using jQuery and a Chinese text API",
        ],
        leftColor: "#CEAE56",
        rightColor: "#596937",
        buttonName: "chinese dict",
        image: HaoliImage,
      },
      {
        name: "An Illustrated Guide to Black-Owned Bars",
        subtitle: "",
        tech: "ReactJS / Hooks / ContextAPI / Google Maps API",
        liveLink: "https://zachherwitz.github.io/chineseapp/",
        githubLink:
          "https://github.com/zachherwitz/zachherwitz.github.io/tree/master/chineseapp",
        projectBlurbs: [
          "Worked with clients to design and develop a mobile-first, responsive bar tracker, deployed to Netlify.",
        ],
        leftColor: "#2F8EB1",
        rightColor: "#CE8956",
        buttonName: "illustrated map",
        image: IllustratedGuideImage,
      },
    ],
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // Select Project
  const selectProject = (project) => {
    dispatch({ type: SELECT_PROJECT, payload: project });
  };

  return (
    <ProjectContext.Provider
      value={{
        project: state.project,
        projects: state.projects,
        selectProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
