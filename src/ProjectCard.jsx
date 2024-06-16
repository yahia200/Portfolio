import React from "react";
import down from "./images/down.png";

function ProjectCard({name, github = "#", opacity = "opacity-75", scale = "scale-90", borderColor = "border-ctp-red"}) {
  let cursor = "hover:cursor-pointer";
  return (
    <div className={`transition-all ease-in-out duration-500 ${scale} ${opacity} bg-ctp-base py-10 rounded-3xl flex flex-col items-center w-[60ch] ${ cursor } border-2 ${borderColor} shadow-inner `}>
      <p className="text-end text-5xl text-ctp-rosewater font-tls mt-4">{name}</p>
      
    </div>
  );
}

export default ProjectCard;
