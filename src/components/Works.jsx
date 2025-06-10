import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

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
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.05}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:bg-black-100 transition-all duration-300 border border-purple-500/10 hover:border-purple-500/30"
      >
        <div className="relative w-full h-[230px] group">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-purple-600 transition-colors duration-300"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          {/* Project Status Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Completed
            </span>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] hover:text-purple-400 transition-colors duration-300">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color} bg-black-200 px-2 py-1 rounded-md`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Live Demo Button */}
        <div className="mt-4">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
            View Live Demo
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");