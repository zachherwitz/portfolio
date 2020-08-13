import React, { useContext } from "react";
import ProjectContext from "../../context/project/projectContext";

import Slide from "react-reveal/Slide";

const Home = () => {
  // const [flipLeft, setFlipLeft] = useState(false);
  // const [flipRight, setFlipRight] = useState(false);
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
        allImages.map((src, index) => {
          return (
            <img
              alt="preload"
              key={index}
              style={{ display: "none" }}
              src={src}
            />
          );
        })}
      <Slide left>
        <div className="left" half="left">
          <p onClick={onClick} half="left">
            za
          </p>
        </div>
      </Slide>
      <Slide right>
        <div className="right" half="right">
          <p half="right" onClick={onClick}>
            ch
          </p>
        </div>
      </Slide>
    </div>
  );
};

export default Home;
