import React from "react";
import ProjectWheel from "../components/ProjectWheel";
import ProjectPreview from "../components/ProjectPreview";
import { useState } from "react";
import cIcon from "../images/c-programming.svg"
import { FaPython } from "react-icons/fa6";
import { RiJavaLine } from "react-icons/ri";
import { SiBlender } from "react-icons/si";
import { useNavigate } from "react-router-dom";
function ProjectPage() {
  let verticalDisplay = screen.width/screen.height < 1
  let navigate = useNavigate()
  let projects = [
    { name: "Back", link: "/", discription:  "", icons: []},
    { name: "Ascii 3D Engine", icons: [<img src={cIcon} className="size-8 my-auto mr-2" key={0}/>], link:"https://github.com/yahia200", discription:  "Sometimes it's the first moment of the day that catches you off guard. That's what Wendy was thinking. She opened her window to see fire engines screeching down the street. While this wasn't something completely unheard of, it also wasn't normal. It was a sure sign of what was going to happen that day. She could feel it in her bones and it wasn't the way she wanted the day to begin."},
    { name: "Tic-Tac-Toe AI",icons: [<FaPython className="size-8 my-auto mr-2 text-ctp-crust" key={0}/>] ,link:"https://github.com/yahia200", discription:  "Greg understood that this situation would make Michael terribly uncomfortable. Michael simply had no idea what was about to come and even though Greg could prevent it from happening, he opted to let it happen. It was quite ironic, really. It was something Greg had said he would never wish upon anyone a million times, yet here he was knowingly letting it happen to one of his best friends. He rationalized that it would ultimately make Michael a better person and that no matter how uncomfortable, everyone should experience racism at least once in their lifetime." },
    { name: "Last of us legacy",icons: [<RiJavaLine className="size-8 my-auto mr-2 text-ctp-crust" key={0}/>] , link:"https://github.com/yahia200", discription:  "Terrance knew that sometimes it was simply best to stay out of it. He kept repeating this to himself as he watched the scene unfold. He knew that nothing good would come of him getting involved. It was far better for him to stay on the sidelines and observe. He kept yelling this to himself inside his head as he walked over to the couple and punched the man in the face." },
    { name: "SQL Engine",icons: [<RiJavaLine className="size-8 my-auto mr-2 text-ctp-crust" key={0}/>], link:"https://github.com/yahia200", discription:  " Please LIKE & SHARE to keep our generators available! Click Like The coin hovered in the air, spinning over and over again. It reached its peak and began to descend. Both boys were pleading with it to land a certain way but the coin had already made up its mind on what it was going to do."},
    { name: "Gallery",icons: [<SiBlender className="size-8 my-auto mr-2 text-ctp-crust" key={0}/>], link:"/gallery", discription:  ""},

  ];
  const [activeProjectIndex, setActiveProject] = useState(0);
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
