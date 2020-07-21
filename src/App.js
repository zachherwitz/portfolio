import React from 'react';

// IMAGES //

import Distro from './images/distro.jpg';
import Distro2 from './images/distro2.jpg';

import DistroEJS from './images/distro-ejs.jpg';
import DistroEJS2 from './images/distro-ejs2.jpg';

import HAOly from './images/haoly.jpg';
import HAOly2 from './images/haoly2.jpg';

import RootStock from './images/rootstock.jpg';
import RootStock2 from './images/rootstock2.jpg';

import SATGen from './images/sat-gen.jpg';
import SATGen2 from './images/sat-gen2.jpg';

import Zach from './images/zach.jpg';

class App extends React.Component {
  state = {
    display:'rootstock'
  }

  displayRoute = (e) => {
    let routeToDisplay = e.target.getAttribute('routetodisplay');
    this.setState({
      display:routeToDisplay
    })
  }

  render = () => {
    return <div className="app-container">
      <div className="display-container">
        {this.state.display === 'zach' ? <img src={Zach}/> : null}

        {this.state.display === 'distro' ?
          <a target="_blank" href="https://distro-app.herokuapp.com/">
            <img src={Distro}/>
            <img src={Distro2}/>
          </a> : null}

        {this.state.display === 'sat-gen' ?
          <a target="_blank" href="https://enigmatic-escarpment-97432.herokuapp.com/">
            <img src={SATGen}/>
            <img src={SATGen2}/>
          </a> : null}

        {this.state.display === 'rootstock' ?
          <a target="_blank" href="http://rootstock.herokuapp.com/">
            <img src={RootStock}/>
            <img src={RootStock2}/>
          </a> : null}

        {this.state.display === 'distro-ejs' ?
          <a target="_blank" href="https://distro-filmtv.herokuapp.com/">
            <img src={DistroEJS}/>
            <img src={DistroEJS2}/>
          </a> : null}

        {this.state.display === 'haoly' ?
          <a target="_blank" href="https://zachherwitz.github.io/chineseapp/">
            <img src={HAOly}/>
            <img src={HAOly2}/>
          </a> : null}

      </div>
      <div className="project-button-container">
        <button onClick={this.displayRoute} routetodisplay="zach">ZACH</button>
        <button onClick={this.displayRoute} routetodisplay="distro">DISTRO</button>
        <button onClick={this.displayRoute} routetodisplay="rootstock">ROOTSTOCK</button>
        <button onClick={this.displayRoute} routetodisplay="sat-gen">SAT-GEN</button>
        <button onClick={this.displayRoute} routetodisplay="distro-ejs">DISTRO-EJS</button>
        <button onClick={this.displayRoute} routetodisplay="haoly">HAOLY</button>
      </div>
    </div>
  }
}

export default App;
