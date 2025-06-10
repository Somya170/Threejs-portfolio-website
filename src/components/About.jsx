import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    glareEnable={true}
    glareMaxOpacity={0.3}
    scale={1.05}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-purple-500/20 transition-all duration-300"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-black-100 transition-colors duration-300">
        <img
          src={icon}
          alt="service-icon"
          className="w-16 h-16 object-contain filter hover:brightness-110 transition-all duration-300"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Experienced in Artificial Intelligence, Machine Learning, Java (Core & Advanced), Python, and SQL, 
        with practical knowledge of Spring Boot, Hibernate, J2EE, and RESTful APIs. My strength is building 
        scalable backend systems and implementing AI/ML methods to real-world problems. I'm passionate about 
        creating intelligent solutions that make a difference.
      </motion.p>

      {/* Skills Stats */}
      <motion.div 
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-10 flex flex-wrap gap-8 justify-center"
      >
        <div className="bg-black-100 rounded-lg p-4 min-w-[120px] text-center border border-purple-500/20">
          <h4 className="text-white text-2xl font-bold">15+</h4>
          <p className="text-secondary text-sm">Projects</p>
        </div>
        <div className="bg-black-100 rounded-lg p-4 min-w-[120px] text-center border border-purple-500/20">
          <h4 className="text-white text-2xl font-bold">4+</h4>
          <p className="text-secondary text-sm">Internships</p>
        </div>
        <div className="bg-black-100 rounded-lg p-4 min-w-[120px] text-center border border-purple-500/20">
          <h4 className="text-white text-2xl font-bold">10+</h4>
          <p className="text-secondary text-sm">Technologies</p>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");