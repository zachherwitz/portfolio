import React from 'react';

import Distro from './images/distro.png';
import DistroEJS from './images/distro-ejs.png';
import HAOly from './images/haoly.png';
import RootStock from './images/rootstock.png';
import SATGen from './images/sat-gen.png';
import Zach from './images/zach.png';

import ProjectDescription from './components/ProjectDescription'


class App extends React.Component {
  state = {
    display: 'splash'
  }

  displayRoute = (e) => {
    let routeToDisplay = e.target.getAttribute('displayroute');
    this.setState({
      display:routeToDisplay,
    })
  }

  render = () => {
    return <div className="app-container">
      <nav>
        <button onClick={this.displayRoute} displayroute="zach">bio</button>
        <button onClick={this.displayRoute} displayroute="distro">distro</button>
        <button onClick={this.displayRoute} displayroute="rootstock">rootstock</button>
        <button onClick={this.displayRoute} displayroute="haoly">haoly</button>
        <button onClick={this.displayRoute} displayroute="sat-gen">satgen</button>
        <button onClick={this.displayRoute} displayroute="distro-ejs">distro-ejs</button>
      </nav>
      <div className="content-container">
        <div className="left-container">
          {this.state.display === 'splash' ? <div className="splash-text-left">
            <p>za</p>

          </div> : null}

          {this.state.display === 'zach' ? <img alt="zach herwitz" id="zach-pic" src={Zach}/> : null}

          {this.state.display === 'distro' ?
            <a target="_blank" href="https://distro-app.herokuapp.com/">
              <img src={Distro} alt="distro project"/>
            </a> : null}

          {this.state.display === 'sat-gen' ?
            <a target="_blank" href="https://enigmatic-escarpment-97432.herokuapp.com/">
              <img src={SATGen} alt="sat generator project"/>
            </a> : null}

          {this.state.display === 'rootstock' ?
            <a target="_blank" href="http://rootstock.herokuapp.com/">
              <img src={RootStock} alt="rootstock project"/>
            </a> : null}

          {this.state.display === 'distro-ejs' ?
            <a target="_blank" href="https://distro-filmtv.herokuapp.com/">
              <img src={DistroEJS} alt="distro-ejs project"/>
            </a> : null}

          {this.state.display === 'haoly' ?
            <a target="_blank" href="https://zachherwitz.github.io/chineseapp/">
              <img src={HAOly} alt="haoly chinese project"/>
            </a> : null}
        </div>

        <div className="right-container">
          {this.state.display === 'splash' ? <div className="splash-text-right">
            
            <p>ch</p>
          </div> : null}

          {this.state.display === 'zach' ? <div>
            <h1>zach herwitz is...</h1>
            <p>Bio</p>
            <iframe/>
            <button></button>
          </div> : null}

          {this.state.display === 'distro' ?
            <ProjectDescription
              name="d|STRO"
              technologies="mongoDB // Mongoose // Express // React"
              projectLink="https://distro-app.herokuapp.com/"
              projectInfo="A film-facing team management and distribution app."/> : null}

          {this.state.display === 'sat-gen' ?
            <ProjectDescription
              name="SAT Question Generator"
              technologies="PostgreSQL // PHP // React "
              projectLink="https://enigmatic-escarpment-97432.herokuapp.com/"
              projectInfo="Full CRUD on a question database and generator for quick SAT prep"/> : null}

          {this.state.display === 'rootstock' ?
            <ProjectDescription
              name="RootStock"
              technologies="mongoDB // Mongoose // Express // AngularJS"
              projectLink="http://rootstock.herokuapp.com/"
              projectInfo="Financial portfolio manager with comprehensive charts and live stock updates"/>: null}

          {this.state.display === 'distro-ejs' ?
            <ProjectDescription
              name="Distro EJS"
              technologies="mongoDB // Mongoose // Express // EJS"
              projectLink="https://distro-filmtv.herokuapp.com/"
              projectInfo="A campy and user-friendly contact management app."/>: null}

          {this.state.display === 'haoly' ?
            <ProjectDescription
              name="Hao.ly"
              technologies="JavaScript / jQuery"
              projectLink="https://zachherwitz.github.io/chineseapp/"
              projectInfo="A campy and user-friendly contact management app."/> : null}

        </div>
      </div>
    </div>
  }
}

export default App
