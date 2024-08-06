import React from "react";
import ProjectCard from "./ProjectCard";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
    x: -13,
  },
  visable: {
    opacity: 1,
    y: 0,
    x: 0,
  },

  buttonHiddenUp: {
    scale: 0,
    y: 50,
  },

  buttonHiddenDown: {
    scale: 0,
    y: -50,
  },

  buttonVisable: {
    scale: 1,
    y:0,
    x:0,
  }
};
function ProjectWheel({
  active = 1,
  cycleUp,
  cycleDown,
  onClickProject,
  projects,
  clicked = false,
}) {
  let navigate = useNavigate()
  let verticalDisplay = screen.width/screen.height < 1
  let click = clicked;
  let butt =
    "my-5 will-change-transform transition delay-50 ease-in-out hover:cursor-pointer hover:scale-125";

  let scales = ["scale-100", "scale-[97%]", "scale-[94%]", "scale-[91%]","scale-[88%]","scale-[85%]"];
  let opacities = ["opacity-100", "opacity-50", "opacity-25", "opacity-[0.125]", "opacity-[0.075]", "opacity-[0.0325]"];
  let delays = ["delay-0", "delay-75", "delay-100", "delay-200", "delay-0"];
  
  
  if (click === "l" || click === "Enter"){
    if(projects[active].link[0] != "/")
      window.open(projects[active].link, '_blank');
    else
      navigate(projects[active].link);
  }

  let listProjects = projects.map((project, index) => (
    <motion.div
      variants={defaultAnimation}
      transition={{ type: "spring", delay: 0.2+0.2*(index) }}
      onClick={() => onClickProject(index)}
      key={index}
    >
      <ProjectCard
        onClick={() => console.log("ss")}
        icons={project.icons}
        name={project.name}
        opacity={
          active === -1
            ? opacities[1]
            : opacities[Math.min(opacities.length - 1, Math.abs(index - active))]
        }
        scale={
          active === -1
            ? scales[1]
            : scales[Math.min(scales.length - 1, Math.abs(index - active))]
        }
        borderColor={index === active ? "border-ctp-red" : "border-ctp-peach"}
        delay={
          active === -1
            ? delays[1]
            : delays[Math.min(delays.length - 1, Math.abs(index - active))]
        }

        color={
          active === index
            ? "bg-ctp-peach"
            : "bg-ctp-peach"
        }
        
      />
    </motion.div>
  ));

  return (
    <div className={`flex flex-col items-center ${verticalDisplay ? "mx-auto" : "ml-[6vw]"}`}>
      <motion.div
        initial="hidden"
        animate="visable"
      >
        {listProjects}
      </motion.div>
      {verticalDisplay && <motion.div className=" bg-ctp-green text-black px-8 mt-10 py-2 rounded-full transition delay-100 ease-in-out hover:bg-ctp-mauve hover:scale-105">
    <motion.p className="select-none">Description</motion.p>
    </motion.div>}
    </div>
  );
}

export default ProjectWheel;
