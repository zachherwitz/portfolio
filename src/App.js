import React from 'react';

import Distro from './images/distro.png';
import DistroEJS from './images/distro-ejs.png';
import HAOly from './images/haoly.png';
import Resume from './images/resume.jpg'
import ResumePDF from './images/resume.pdf'
import RootStock from './images/rootstock.png';
import SATGen from './images/sat-gen.png';
import Zach from './images/zach.png';

import ProjectDescription from './components/ProjectDescription'


class App extends React.Component {
  state = {
    display: 'splash',
    showResume: false,
    leftColor: '#4894B0',
    rightColor: '#446E92'
  }

  displayRoute = (e) => {
    let routeToDisplay = e.target.getAttribute('displayroute');
    let leftColor = e.target.getAttribute('leftcolor');
    let rightColor = e.target.getAttribute('rightcolor');
    this.setState({
      display:routeToDisplay,
      leftColor: leftColor,
      rightColor: rightColor
    })
  }

  showBio = () => {
    this.setState({
      showResume: false
    })
  }

  showResume = () => {
    this.setState({
      showResume: true
    })
  }

  render = () => {
    return <div className="app-container">
      <nav>
        <div className="nav-name">
          <h1>zach herwitz</h1>
          <h2>herwitz</h2>
        </div>
        <div className="nav-projects">
          <p>projects</p>
          <div className="nav-button-container">
            <button
              onClick={this.displayRoute}
              displayroute="distro"
              leftcolor="#332f2f"
              rightcolor="#E5B455">distro</button>
            <button
              onClick={this.displayRoute}
              displayroute="rootstock"
              leftcolor="#CAA742"
              rightcolor="#6CA39C">rootstock</button>
            <button
              onClick={this.displayRoute}
              displayroute="haoly"
              leftcolor="#CEAE56"
              rightcolor="#596937">haoly</button>
            <button
              onClick={this.displayRoute}
              displayroute="sat-gen"
              leftcolor="#CE8956"
              rightcolor="#2F8EB1">satgen</button>
            <button
              onClick={this.displayRoute}
              displayroute="distro-ejs"
              leftcolor="#261C0D"
              rightcolor="#859152">distro-ejs</button>
          </div>
        </div>
        <div className="nav-personals">
          <button
            onClick={this.displayRoute}
            displayroute="zach"
            leftcolor="#BB8378"
            rightcolor="#59A4C0">about me</button>
          <a target="_blank" href="https://github.com/zachherwitz/"><i className="fab fa-github-square"></i></a>
          <a target="_blank" href="https://www.imdb.com/name/nm5178378/"><i className="fab fa-imdb"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/zach-herwitz/"><i className="fab fa-linkedin"></i></a>
        </div>
      </nav>


      <div className="content-container">

        <div style={{background:this.state.leftColor}} className="left-container">
          {this.state.display === 'splash' ? <div className="splash-text-left">
            <p>za</p>
          </div> : null}

          {this.state.display === 'zach' ?
            <a target="_blank" href="https://www.linkedin.com/in/zach-herwitz/">
              <img alt="zach herwitz" id="zach-pic" src={Zach}/>
            </a> : null}

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

        <div style={{background:this.state.rightColor}} className="right-container">
          {this.state.display === 'splash' ? <div className="splash-text-right">
            <p>ch</p>
          </div> : null}

          {this.state.display === 'zach' ? <div>
            <div className="bio-button-container">
              <button onClick={this.showResume}>resume</button>
              <button onClick={this.showBio}>bio</button>
            </div>
            {this.state.showResume ? <a target="_blank" href={ResumePDF} className="resume-container">
              <img className="resume" src={Resume}/>
            </a> :
            <div className="bio">
              <h1>zach herwitz is...</h1>
              <p>a curious, detail oriented developer with an eye for team dynamics and a desire to pop the hood and get my hands dirty. I bring the drive, stamina, and communication skills needed to succeed both in sprints and marathons. As someone who has worked their way up through the film industry and the New York night life scene, I am a self starter that can lead by example, or elevate a team through collaboration!</p>
            </div>}
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
      <footer>
        <button
          onClick={this.displayRoute}
          displayroute="distro"
          leftcolor="#332f2f"
          rightcolor="#E5B455">distro</button>
        <button
          onClick={this.displayRoute}
          displayroute="rootstock"
          leftcolor="#CAA742"
          rightcolor="#6CA39C">rootstock</button>
        <button
          onClick={this.displayRoute}
          displayroute="haoly"
          leftcolor="#CEAE56"
          rightcolor="#596937">haoly</button>
        <button
          onClick={this.displayRoute}
          displayroute="sat-gen"
          leftcolor="#CE8956"
          rightcolor="#2F8EB1">satgen</button>
        <button
          onClick={this.displayRoute}
          displayroute="distro-ejs"
          leftcolor="#261C0D"
          rightcolor="#859152">distro-ejs</button>
      </footer>
    </div>
  }
}

export default App
