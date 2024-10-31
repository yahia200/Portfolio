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
    { name: "SQL Engine",icons: [<RiJavaLine className="size-8 my-auto text-ctp-crust" key={0}/>], link:"https://github.com/yahia200", discription:
    <p>
      This project is a database management application implemented in Java. It includes various components to handle database operations such as creating tables, inserting data, and managing indexes using B+ trees.
      <br/><br/>
      Lessons Learned:<br/>
      <br/>
      Modular Design: The project is designed with a modular approach, where each class has a specific responsibility. This makes the code easier to maintain and extend.
      <br/>
      <br/>
      Exception Handling: Proper exception handling is crucial for robust applications. The project demonstrates the use of custom exceptions like DBAppException to handle specific error scenarios.
      <br/>
      <br/>
      Data Structures: Implementing and using data structures like B+ trees for indexing can significantly improve the performance of database operations.
      <br/>
      <br/>
      File I/O: Handling file input and output operations, such as reading from and writing to CSV files, is essential for persisting data.
      <br/>
      <br/>
      Code Documentation: Adding comments and documentation helps in understanding the code better and makes it easier for others to contribute to the project.
      <br/>
      <br/>
      Testing: Including test classes like BTreeTest helps in verifying the correctness of the implementation and ensures that the code works as expected.
      <br/>
      <br/>
      Error Handling in Data Conversion: The project includes methods to handle special characters and null values in CSV data, which is important for data integrity.
      <br/>
      <br/>
      Iterators and Collections: Using Java collections and iterators effectively to manage and manipulate data within the application.
    </p>
  },
    { name: "Tic-Tac-Toe AI",icons: [<FaPython className="size-8 my-auto text-ctp-crust" key={0}/>] ,link:"https://github.com/yahia200", discription:
  <p>This project is a simple implementation of a Tic-Tac-Toe game with an AI opponent. The game is played on a 3x3 grid, where two players take turns marking the spaces in the grid with "X" and "O". The AI uses a set of
     strategies to determine its moves, aiming to either win the game or block the opponent from winning.
     <br/><br/>
     Lessons Learned:<br/>
     <br/>
     Numpy for Game Logic: Utilizing numpy arrays simplifies the manipulation and summation of rows, columns, and diagonals, making it easier to implement game logic.
     <br/>
     <br/>
     Function Decomposition: Breaking down the game logic into smaller functions improves code readability and maintainability.
     <br/>
     <br/>
     User Interaction: Handling user input and updating the game state in a loop ensures a smooth gameplay experience.
     <br/>
     <br/>
     AI Strategy: Implementing basic AI strategies (early game, mid-game, and end-game) provides a challenging opponent for the player.
     <br/>
     <br/>
     Code Readability: Using clear variable names and comments helps in understanding the flow of the game and the purpose of each code block.
     </p>},

    

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
