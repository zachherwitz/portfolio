import React, { useState, useContext } from "react";
import ProjectContext from "../../context/project/projectContext";

import Slide from "react-reveal/Slide";

import ZachImage from "../../images/zach.png";

const Home = () => {
  const [flipLeft, setFlipLeft] = useState(false);
  const [flipRight, setFlipRight] = useState(false);
  const projectContext = useContext(ProjectContext);

  const { allImages } = projectContext;

  const onClick = (e) => {
    // disabled for now
    // let half = e.target.attributes.half.value;
    // {
    //   half === "left" ? setFlipLeft(true) : setFlipRight(true);
    // }
  };

  return (
    <div className="home">
      {allImages &&
        allImages.map((src) => {
          return <img style={{ display: "none" }} src={src} />;
        })}
      <Slide left>
        <div className="left" half="left">
          {flipLeft ? (
            <p className="bio">
              I am a curious, detail oriented developer with an eye for team
              dynamics and a desire to pop the hood and get my hands dirty. I
              bring the drive, stamina, and communication skills needed to
              succeed both in sprints and marathons. As someone who has worked
              their way through the film industry and the New York night life
              scene, I am a self starter that can lead by example, or elevate a
              team through collaboration.
            </p>
          ) : (
            <p onClick={onClick} half="left">
              za
            </p>
          )}
        </div>
      </Slide>
      <Slide right>
        <div className="right" half="right">
          {flipRight ? (
            <img src={ZachImage} />
          ) : (
            <p half="right" onClick={onClick}>
              ch
            </p>
          )}
        </div>
      </Slide>
    </div>
  );
};

export default Home;
