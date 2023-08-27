import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion/dist/framer-motion";

import { styles } from "../../styles";
import { github } from "../../assets";
import SectionWrapper from "../../scrollMotion/SectionWrapper";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import "./Work.css";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="projectCard"
      >
        <div className="cardContent">
          <img src={image} alt="project_image" className="cardImage" />

          <div className="projectContent card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient sourceLink"
            >
              <img src={github} alt="source code" className="gitHubIcon" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "12px" }}>
          <h3 className="projectName">{name}</h3>
          <p className="projectDesc">{description}</p>
        </div>

        <div className="projectTag">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`tagContent ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        style={{ textAlign: "center", margin: "48px auto" }}
        variants={textVariant()}
      >
        <p className="sectionSubText">My work</p>
        <h2 className="sectionHeadText">Projects.</h2>
      </motion.div>

      <div style={{ width: "100%", display: "flex", textAlign: "center" }}>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="description">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="tags">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
