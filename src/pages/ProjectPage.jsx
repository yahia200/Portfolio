import React from "react";
import ProjectWheel from "../components/ProjectWheel";
import ProjectPreview from "../components/ProjectPreview";
import { useState } from "react";
import cIcon from "../images/c-programming.svg"
import { FaPython } from "react-icons/fa6";
import { RiNextjsFill, RiJavaLine  } from "react-icons/ri";
import { SiBlender } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useScrollCounter } from "../components/useScrollCount";
function ProjectPage() {
  let verticalDisplay = screen.width/screen.height < 1
  let navigate = useNavigate()
  let projects = [
    // { name: "Back", link: "/", discription:  "", icons: []},
    { name: "Score A* Website",icons: [<RiNextjsFill  className="size-8 my-auto text-ctp-crust" key={0}/>] , link:"https://score-beta.vercel.app", discription:  <p>
      An educational website where teachers can create personalized quizzes for there students. Also, student are given detailed feedback about their performance.
    </p>},
    
    { name: "Baksh Website",icons: [<RiNextjsFill className="size-8 my-auto text-ctp-crust" key={0}/>] ,link:"https://baksh-game.vercel.app", discription:
  <p>A multiplayer web-hosted game (in "franko") where players try to catch the bad guys and avoid imprisoning any of the good guys (a turn-based Among Us
     </p>},
    
       { name: "Gallery",icons: [<SiBlender className="size-8 my-auto text-ctp-crust" key={0}/>], link:"/gallery", discription:  ""},
       
    { name: "Ascii 3D Engine", icons: [<img src={cIcon} className="size-8 my-auto" key={0}/>], link:"https://github.com/yahia200", discription:  <p>This project is a 3D graphics engine implemented in C,
       utilizing the ncurses library for rendering. The engine is capable of performing various matrix operations, handling 3D transformations, and rendering 3D meshes on a 2D terminal screen.
      The project is structured into multiple files, each handling different aspects of the engine.</p>},
    
    { name: "SQL Engine",icons: [<RiJavaLine className="size-8 my-auto text-ctp-crust" key={0}/>], link:"https://github.com/yahia200", discription:
    <p>
      This project is a database management application implemented in Java. It includes various components to handle database operations such as creating tables, inserting data, and managing indexes using B+ trees.
     
    </p>
  },

    

  ];
  const [activeProjectIndex, setActiveProject] = useState(2);
  const [clicked, setClicked] = useState("");
  const cycleUp = () => setActiveProject((prev) => (prev = prev === -1 ? projects.length-1 : (prev - 1 + projects.length) % projects.length));
  const cycleDown = () =>
    setActiveProject((prev) => (prev = (prev + 1 + projects.length) % projects.length));
  const onClickProject = (x) => {
    if (x === activeProjectIndex)
      if(projects[x].link[0] != "/")
        window.open(projects[x].link, '_blank');
      else
        navigate(projects[x].link);
    console.log(projects[x].link)
    setActiveProject(x);};

  React.useEffect(() => {
    // Attach the event listener
    window.addEventListener("keyup", handlePress, true);
    // Make sure to clean up event lis\
  }, []);
  

  const handlePress = (e) => {
    setClicked(e.key)
    if (e.key === "ArrowDown" || e.key === "j"){
        cycleDown();
    }

    else if (e.key === "ArrowUp" || e.key === "k"){
      cycleUp();
    }
    
    
  }


    useScrollCounter(1,(dir) => {
      if (dir === "down") {
        cycleDown();
    }

    else if (dir === "up") {
      cycleUp();
    }
    });

  return (
    <div className="flex justify-between justify-items-center w-[100%] items-center content-center 2xl:mt-20 3xl:mt-0">
      <ProjectWheel
        active={activeProjectIndex}
        cycleUp={cycleUp}
        cycleDown={cycleDown}
        onClickProject={onClickProject}
        projects={projects}
        clicked={clicked}
      />
      {verticalDisplay ? <></> : <ProjectPreview discription={activeProjectIndex === -1 || verticalDisplay ? "" : projects[activeProjectIndex].discription} />}

    </div>
  );
}

export default ProjectPage;
