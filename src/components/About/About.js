import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion/dist/framer-motion";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import "./About.css";
import SectionWrapper from "../../scrollMotion/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="serviceCardContainer">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="serviceCard green-pink-gradient"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="serviceCardContent"
        >
          <img src={icon} alt={title} className="serviceIcon" />
          <h3 className="serviceTitle">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant}
        style={{ textAlign: "center", margin: "48px auto" }}
      >
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam
        nobis nam deserunt perspiciatis mollitia ducimus eos dolorem excepturi
        ipsum voluptatum iure ipsam, eveniet autem veritatis saepe asperiores
        culpa laborum?
      </motion.p>
      <div className="serviceCards">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
