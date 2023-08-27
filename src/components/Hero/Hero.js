import React from "react";
import "./Hero.css";
//import { motion } from "framer-motion";
import { motion } from "framer-motion/dist/framer-motion";
import { styles } from "../../styles";
import { ComputersCanvas } from "../canvas";
const Hero = () => {
  return (
    <section className="heroSection">
      <div className="mainDesc">
        <div className="mainDescBarContainer">
          <div className="barBall" />
          <div className="barStick violet-gradient" />
        </div>
        <div>
          <h1 className="heroHeadText">
            Hi, I'm <span>Abdee</span>
          </h1>
          <p className="heroSubText">
            I devlop 3D visuals ,user
            <br className="HeroBar" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="flowBottom">
        <a href="#about">
          <div className="flowBottomMotion">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="motionStyles"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
