import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion/dist/framer-motion";
import { Canvas } from "@react-three/fiber";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";
import SectionWrapper from "../../scrollMotion/SectionWrapper";
import { textVariant } from "../../utils/motion";
import "./Experience.css";
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="exIconContainer">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="exIcon"
          />
        </div>
      }
    >
      <div>
        <h3 className="exTitle">{experience.title}</h3>
        <p className="exCompany" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="exPointContainer">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="exPoint">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div
        variant={textVariant()}
        style={{ textAlign: "center", margin: "48px auto" }}
      >
        <p className="sectionSubText">What I have done so far</p>
        <h2 className="sectionHeadText">Work Experience</h2>
      </motion.div>
      <div className="timeLineContainer">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
