import React from "react";
import ProjectWheel from "./ProjectWheel";
import ProjectPreview from "./ProjectPreview";
import { useState } from "react";
function ProjectPage() {
  let projects = [
    { name: "Ascii Engine", discription:  "Ascii Dis"},
    { name: "Tic-Tac-Toe", discription:  "Tic Dis" },
    { name: "beeeeeeeeeeb", discription:  "Beb Dis" },
    { name: "hani", discription:  "Hani Dis"}
  ];
  const [activeProjectIndex, setActiveProject] = useState(-1);
  const cycleUp = () => setActiveProject((prev) => (prev = prev === -1 ? projects.length-1 : (prev - 1 + projects.length) % projects.length));
  const cycleDown = () =>
    setActiveProject((prev) => (prev = (prev + 1 + projects.length) % projects.length));
  const onClickProject = (x) => setActiveProject((prev) => (prev = x));
  console.log(activeProjectIndex);
  return (
    <div className="flex justify-between w-full items-center">
      <ProjectWheel
        active={activeProjectIndex}
        cycleUp={cycleUp}
        cycleDown={cycleDown}
        onClickProject={onClickProject}
        projects={projects}
      />
      <ProjectPreview discription={activeProjectIndex === -1 ? "" : projects[activeProjectIndex].discription} />
    </div>
  );
}

export default ProjectPage;
