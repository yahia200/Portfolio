import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Connect from "./Connect";
import ProjectPage from "./ProjectPage";
import Test from "./Test";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
 const [firstVisit, setFirstVisit] = useState(true)
const location = useLocation();
 React.useEffect(() => {
  if(firstVisit && location.pathname === "/")
    alert("For better experience please use the arrow keys (vim motions work)")
  setFirstVisit(false)
  });

 

 
  return (
    <div className="text-ctp-text h-[100vh] border-[1.5vw] border-ctp-crust font-outfit font-semibold text-lg overflow-hidden">
      <div className="bg-ctp-mantle h-[100%] rounded-3xl flex justify-center flex-col items-center shadow-inner">
        <NavBar/>
        <div className="text-ctp-text border-ctp-crust w-[100%] font-outfit font-semibold text-lg overflow-hidden">
        <Routes>
          <Route path="/" element={<Intro state={false}/>}/>
          <Route path="/about" element={<Intro state={true}/>}/>
          <Route path="/gallery" element={<Intro state={false}/>}/>
          <Route path="/projects" element={<ProjectPage />}/>
          <Route path="/contact" element={<Connect />}/>
        </Routes>
        </div>
       </div>
      {/* <Test/> */}
    </div>
  );
}

export default App;
