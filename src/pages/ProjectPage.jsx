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
    // { name: "Back", link: "/", discription:  "", icons: []},
    { name: "Last of us legacy",icons: [<RiJavaLine className="size-8 my-auto text-ctp-crust" key={0}/>] , link:"https://github.com/yahia200", discription:  <p>This project is a
       Java-based game that simulates a survival scenario involving heroes and zombies. The game includes various types of heroes such as Explorers,
        Fighters, and Medics, each with unique abilities and actions. The game is designed with a graphical user interface (GUI) to provide an interactive experience for the player.<br/>
        <br/>Lessons Learned:<br/>
        <br/>Object-Oriented Design:

        The project demonstrates the importance of using object-oriented principles such as inheritance and polymorphism. Different types of heroes inherit from a common Hero class,
        allowing for code reuse and easier maintenance.<br/>
        <br/>Exception Handling:

        Custom exceptions are used to handle specific game-related errors, improving the robustness and readability of the code.<br/>
        <br/>File I/O:

        The project involves reading hero data from CSV files, showcasing how to handle file input/output operations in Java.<br/>
        <br/>GUI Development:

        The GameGUI class illustrates how to create a graphical user interface using Java Swing, including handling user inputs and updating the display.<br/>
        <br/>Game Logic:

        Managing game state, including turns, actions, and interactions between characters, provides insights into designing and implementing complex game logic.<br/>
        <br/>Testing:

        The inclusion of unit tests highlights the importance of testing in software development to ensure the correctness and reliability of the code.</p>},
    
    { name: "Ascii 3D Engine", icons: [<img src={cIcon} className="size-8 my-auto" key={0}/>], link:"https://github.com/yahia200", discription:  <p>This project is a 3D graphics engine implemented in C,
       utilizing the ncurses library for rendering. The engine is capable of performing various matrix operations, handling 3D transformations, and rendering 3D meshes on a 2D terminal screen.
      The project is structured into multiple files, each handling different aspects of the engine.<br/><br/>
      Lessons Learned:<br/>
      <br/>Matrix Mathematics: This project provided hands-on experience with matrix multiplication, rotation, translation, and projection.<br/>
      <br/>3D Transformations: Learning how to apply various transformations to 3D objects and project them onto a 2D plane was a key takeaway.<br/>
          This includes understanding the concepts of view matrices and perspective projection.
          <br/> Concurrency: The project uses threading to improve performance, particularly in the rendering process. This involved learning how to create and manage threads in C using the pthread library.<br/>
          <br/>Graphics Rendering: Implementing a basic graphics pipeline, including vertex transformations, clipping, and rasterization, provided a deeper understanding of how 3D rendering works at a low level.<br/>
          <br/> Code Organization: Structuring the project into \n multiple files with clear responsibilities helped in managing the complexity and improving code readability and maintainability.<br/>
          <br/>Debugging and Optimization: Working with low-level graphics and threading introduced challenges in debugging and optimizing the code for performance and correctness.</p>},
    
    { name: "Gallery",icons: [<SiBlender className="size-8 my-auto text-ctp-crust" key={0}/>], link:"/gallery", discription:  ""},
    { name: "SQL Engine",icons: [<RiJavaLine className="size-8 my-auto text-ctp-crust" key={0}/>], link:"https://github.com/yahia200", discription:  " Please LIKE & SHARE to keep our generators available! Click Like The coin hovered in the air, spinning over and over again. It reached its peak and began to descend. Both boys were pleading with it to land a certain way but the coin had already made up its mind on what it was going to do."},
    { name: "Tic-Tac-Toe AI",icons: [<FaPython className="size-8 my-auto text-ctp-crust" key={0}/>] ,link:"https://github.com/yahia200", discription:  "Greg understood that this situation would make Michael terribly uncomfortable. Michael simply had no idea what was about to come and even though Greg could prevent it from happening, he opted to let it happen. It was quite ironic, really. It was something Greg had said he would never wish upon anyone a million times, yet here he was knowingly letting it happen to one of his best friends. He rationalized that it would ultimately make Michael a better person and that no matter how uncomfortable, everyone should experience racism at least once in their lifetime." },

    

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
