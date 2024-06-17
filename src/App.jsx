import React from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Connect from "./Connect";
import ProjectPage from "./ProjectPage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="text-ctp-text h-[100vh] border-[2.8vh] border-ctp-crust font-outfit font-semibold text-lg">
      <div className="bg-ctp-mantle h-[100%] rounded-3xl flex flex-col items-center shadow-inner">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Intro state={false}/>}/>
          <Route path="/about" element={<Intro state={true}/>}/>
          <Route path="/gallery" element={<Intro state={false}/>}/>
          <Route path="/projects" element={<ProjectPage />}/>
          <Route path="/contact" element={<Connect />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
