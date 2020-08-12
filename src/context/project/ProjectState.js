// Dependencies
import React, { useReducer } from "react";
import ProjectContext from "./projectContext";
import ProjectReducer from "./projectReducer";

import { SELECT_PROJECT } from "../types";

// Images
// ROOTSTOCK
import RootstockImage1 from "../../images/rootstock/rootstock1.png";
import RootstockImage2 from "../../images/rootstock/rootstock2.png";
import RootstockImage3 from "../../images/rootstock/rootstock3.png";
import RootstockImage4 from "../../images/rootstock/rootstock4.png";
import RootstockImage5 from "../../images/rootstock/rootstock5.png";
import RootstockImage6 from "../../images/rootstock/rootstock6.png";

// HAOLI
import HaoliImage1 from "../../images/haoli/haoli1.jpg";
import HaoliImage2 from "../../images/haoli/haoli2.jpg";
import HaoliImage3 from "../../images/haoli/haoli3.jpg";
import HaoliImage4 from "../../images/haoli/haoli4.jpg";

// DISTRO
import DistroImage1 from "../../images/distro/distro1.png";
import DistroImage2 from "../../images/distro/distro2.png";
import DistroImage3 from "../../images/distro/distro3.png";
import DistroImage4 from "../../images/distro/distro4.png";
import DistroImage5 from "../../images/distro/distro5.png";
import DistroImage6 from "../../images/distro/distro6.png";
import DistroImage7 from "../../images/distro/distro7.png";
import DistroImage8 from "../../images/distro/distro8.png";

// ILLUSTRATED GUIDE
import IllustratedGuideImage1 from "../../images/illustrated-guide/illustrated-guide1.png";
import IllustratedGuideImage2 from "../../images/illustrated-guide/illustrated-guide2.png";
import IllustratedGuideImage3 from "../../images/illustrated-guide/illustrated-guide3.png";
import IllustratedGuideImage4 from "../../images/illustrated-guide/illustrated-guide4.png";

import ZachTestImg from "../../images/zach.png";

const ProjectState = (props) => {
  const initialState = {
    project: {
      name: "d|STRO",
      subtitle: "Film Distribution and Contact Management App",
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
      images: [
        DistroImage1,
        DistroImage2,
        DistroImage3,
        DistroImage4,
        DistroImage5,
        DistroImage6,
        DistroImage7,
        DistroImage8,
      ],
    },
    projects: [
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
        buttonName: "illustrated bar map",
        images: [
          IllustratedGuideImage1,
          IllustratedGuideImage2,
          IllustratedGuideImage3,
          IllustratedGuideImage4,
        ],
      },
      {
        name: "d|STRO",
        subtitle: "Film Distribution and Contact Management App",
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
        images: [
          DistroImage1,
          DistroImage2,
          DistroImage3,
          DistroImage4,
          DistroImage5,
          DistroImage6,
          DistroImage7,
          DistroImage8,
        ],
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
        images: [
          RootstockImage1,
          RootstockImage2,
          RootstockImage3,
          RootstockImage4,
          RootstockImage5,
          RootstockImage6,
        ],
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
        buttonName: "chinese dictionary",
        images: [HaoliImage1, HaoliImage2, HaoliImage3, HaoliImage4],
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
