import React from "react";
import ProjectCard from "./ProjectCard";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

function ProjectWheel({active = 1, cycleUp, cycleDown, onClickProject, projects}) {
  let otherOpacity = "opacity-70";
  let scales = projects.map(() => "scale-90");
  let borderColors = projects.map(() => "border-ctp-red");

  
  let mid = (projects.length / 2).toFixed(0);
  let butt =
    "my-5 will-change-transform transition delay-50 ease-in-out hover:cursor-pointer hover:scale-125";


  let listProjects = projects.map((project, index) => (
    <div onClick={() => onClickProject(index)} key={index}>
    <ProjectCard onClick={() => console.log("ss")} name={project.name} opacity={index === active ? "opacity-100" : "opacity-45"} scale={index === active ? "scale-100" : "scale-90"} borderColor={index === active ? "border-ctp-red" : "border-ctp-mauve"} />
    </div>
  ));

  return (
    <div className="flex flex-col items-center ml-10">
      <div
        className={butt}
        onClick={() => cycleUp()
        }
      >
        <IoIosArrowUp size={50} />
      </div>
      {listProjects}

      <div
        className={butt}
        onClick={() => cycleDown()}
      >
        <IoIosArrowDown size={50} />
      </div>
    </div>
  );
}

export default ProjectWheel;
