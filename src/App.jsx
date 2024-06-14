import React from "react";
import NavBar from "./NavBar";
import Project_Ascii from "./Project_Ascii";
import Project_XO from "./project_XO";

function App() {
  return (
    <div className="text-ctp-text font-outfit font-semibold ">
      <div className="bg-ctp-base  p-5 rounded-xl w-[98%] h-[95%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <NavBar />
      <dir className="">
      <Project_Ascii />
      <Project_Ascii />
      <Project_Ascii />
      <Project_Ascii />
      </dir>
      </div>
    </div>
  );
}

export default App;
