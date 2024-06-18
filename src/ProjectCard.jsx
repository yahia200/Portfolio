import React from "react";
import down from "./images/down.png";
import go from "./images/down.png";

function ProjectCard({name, github = "#", opacity = "opacity-75", scale = "scale-90", borderColor = "border-ctp-red", delay = "delay-0", zIndex = "z-0"}) {
  let cursor = "hover:cursor-pointer";
  return (
    <div className={`${zIndex} transition-all ${delay} ease-in-out duration-500 ${scale} ${opacity} bg-ctp-base py-5 rounded-3xl flex flex-row justify-center w-[30ch] ${ cursor } border-2 ${borderColor} shadow-inner `}>
      <p className="text-end text-center text-4xl text-ctp-rosewater font-tls mt-4">{name}</p>
      <img src={go} className="my-auto size-6 ml-1 -rotate-90" />
      
    </div>
  );
}

export default ProjectCard;
