import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Zach from "../../images/zach.png";
import Resume from "../../images/resume.pdf";

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <img src={Zach} />
      </div>
      <div className="right">
        <div className="bio">
          <h1>Zach Herwitz is...</h1>
          <Carousel className="bio-carousel">
            <Carousel.Item className="bio-item">
              <h3>
                a software engineer with expertise in front-end development and
                UI/UX design.
              </h3>
            </Carousel.Item>
            <Carousel.Item className="bio-item">
              <h3>
                a curious, collaborative, and detail oriented developer with a
                desire to pop the hood and get my hands dirty
              </h3>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="contact">
          <div className="contact-link-container">
            <a href={Resume}>Download Resume!</a>
            <a href="mailto:zachherwitz@gmail.com">Get in Touch!</a>
          </div>
        </div>
        <div className="medals">
          <div className="medal-container">
            <div className="medal">
              <i className="devicon-javascript-plain"></i>
              <p>javascript</p>
            </div>
            <div className="medal">
              <i className="devicon-react-original"></i>
              <p>react</p>
            </div>
            <div className="medal">
              <i className="devicon-nodejs-plain"></i>
              <p>nodejs</p>
            </div>
            <div className="medal">
              <i className="devicon-express-original"></i>
              <p>express.js</p>
            </div>
            <div className="medal">
              <i className="devicon-mongodb-plain"></i>
              <p>mongodb</p>
            </div>
            <div className="medal">
              <i className="devicon-postgresql-plain"></i>
              <p>postgresql</p>
            </div>
            <div className="medal">
              <i className="devicon-sass-original"></i>
              <p>sass</p>
            </div>
            <div className="medal">
              <i className="devicon-bootstrap-plain"></i>
              <p>bootstrap</p>
            </div>
            <div className="medal">
              <i className="devicon-html5-plain"></i>
              <p>html5</p>
            </div>
            <div className="medal">
              <i className="devicon-css3-plain"></i>
              <p>css3</p>
            </div>
            <div className="medal">
              <i className="devicon-git-plain"></i>
              <p>git</p>
            </div>
            <div className="medal">
              <i className="devicon-heroku-original"></i>
              <p>heroku</p>
            </div>
            <div className="medal">
              <i className="devicon-jquery-plain"></i>
              <p>jquery</p>
            </div>
            <div className="medal">
              <i className="devicon-photoshop-plain"></i>
              <p>photoshop</p>
            </div>
            <div className="medal">
              <i className="devicon-python-plain"></i>
              <p>python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
