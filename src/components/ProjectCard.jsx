import React from "react";
import down from "../images/down.png";
import go from "../images/down.png";
function ProjectCard({name, github = "#", opacity = "opacity-100", scale = "scale-90", borderColor = "border-ctp-red", delay = "delay-0", color = "bg-ctp-peach", icons}) {
  let cursor = "hover:cursor-pointer";
  return (
    <div className={`${color} select-none transition-all ${delay} ease-in-out md:w-[10ch] lg:w-[25ch] xl:w-[30ch] 2xl:w-[40ch] duration-500 ${scale} ${opacity} bg-ctp-base py-5 rounded-3xl col-span-1 flex flex-row justify-center w-[30ch] ${ cursor } border-2 ${borderColor} shadow-inner `}>
      {icons}
      <p className="text-end text-center md:2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-ctp-crust font-extrabold">{name}</p>
      <img src={go} className="my-auto size-6 ml-1 -rotate-90"/>
    </div>
  );
}

export default ProjectCard;