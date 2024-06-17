import React from "react";
import ProjectCard from "./ProjectCard";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";


const defaultAnimation = {
  hidden:{
    opacity: 0,
    y: 100,
    x:-13,
  },
  visable: {
    opacity: 1,
    y: 0,
    x: 0,
  },
}
function ProjectWheel({
  active = 1,
  cycleUp,
  cycleDown,
  onClickProject,
  projects,
}) {

  let butt =
    "my-5 will-change-transform transition delay-50 ease-in-out hover:cursor-pointer hover:scale-125";

  let listProjects = projects.map((project, index) => (
    <motion.div variants={defaultAnimation} transition={{ type: "spring"}} onClick={() => onClickProject(index)} key={index}>
      <ProjectCard
        onClick={() => console.log("ss")}
        name={project.name}
        opacity={index === active ? "opacity-100" : "opacity-45"}
        scale={index === active ? "scale-100" : "scale-90"}
        borderColor={index === active ? "border-ctp-peach" : "border-ctp-mauve"}
      />
    </motion.div>
  ));

  return (
    <div className="flex flex-col items-center ml-10">
      <div className={butt} onClick={() => cycleUp()}>
        <IoIosArrowUp size={50} />
      </div>
      <motion.div initial="hidden" animate="visable" transition={{ staggerChildren: 0.3}}>{listProjects}</motion.div>
      <div className={butt} onClick={() => cycleDown()}>
        <IoIosArrowDown size={50} />
      </div>
    </div>
  );
}

export default ProjectWheel;
