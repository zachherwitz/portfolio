import React from 'react';

import Distro from './images/distro.jpg';

import DistroEJS from './images/distro-ejs.jpg';

import HAOly from './images/haoly.jpg';

import RootStock from './images/rootstock.jpg';

import SATGen from './images/sat-gen.jpg';

import Zach from './images/zach.jpg';

class App extends React.Component {
  state = {
    left: 'splash',
    right: 'splash'
  }

  displayRoute = (e) => {
    let routeToDisplay = e.target.getAttribute('displayroute');
    this.setState({
      left:routeToDisplay,
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
          {this.state.left === 'splash' ? <div className="splash-text-left">
            <p>hi</p>
            <p>im</p>
          </div> : null}

          {this.state.left === 'zach' ? <img id="zach-pic" src={Zach}/> : null}

          {this.state.left === 'distro' ?
            <a target="_blank" href="https://distro-app.herokuapp.com/">
              <img src={Distro}/>
            </a> : null}

          {this.state.left === 'sat-gen' ?
            <a target="_blank" href="https://enigmatic-escarpment-97432.herokuapp.com/">
              <img src={SATGen}/>
            </a> : null}

          {this.state.left === 'rootstock' ?
            <a target="_blank" href="http://rootstock.herokuapp.com/">
              <img src={RootStock}/>
            </a> : null}

          {this.state.left === 'distro-ejs' ?
            <a target="_blank" href="https://distro-filmtv.herokuapp.com/">
              <img src={DistroEJS}/>
            </a> : null}

          {this.state.left === 'haoly' ?
            <a target="_blank" href="https://zachherwitz.github.io/chineseapp/">
              <img src={HAOly}/>
            </a> : null}
        </div>
        <div className="right-container">

        </div>
      </div>
    </div>
  }
}

export default App
