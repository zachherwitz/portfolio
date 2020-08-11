import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Context
import ProjectState from "./context/project/ProjectState";
import ProjectContext from "./context/project/projectContext";

// Subcomponents
import Navbar from "./components/layout/Navbar";
import ProjectDisplay from "./components/layout/ProjectDisplay";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";

const App = () => {
  const projectContext = useContext(ProjectContext);
  return (
    <ProjectState>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={ProjectDisplay} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </ProjectState>
  );
};

export default App;
