import React from "react";
import SectionWrapper from "../../scrollMotion/SectionWrapper";
import "./Tech.css";
import { BallCanvas } from "../canvas";
import { technologies } from "../../constants";
const Tech = () => {
  return (
    <div className="tech">
      {technologies.map((technology) => (
        <div className="techBalls" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
