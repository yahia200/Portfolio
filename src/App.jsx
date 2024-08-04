import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Connect from "./Connect";
import ProjectPage from "./ProjectPage";
import Test from "./Test";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTimer } from "react-timer-hook";

function App() {
const [firstVisit, setFirstVisit] = useState(true)
const [color, setColor] = useState(0)
const location = useLocation();
let MINUTE_MS = 3000;
let s = [`transition-all duration-[3000ms] bg-ctp-mantle h-[100%] rounded-3xl flex justify-center flex-col items-center shadow-inner bg-[radial-gradient(#f5e0dc15_5px,#181825_1px)] bg-[size:50px_50px] bg-[center_top_0px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] rounded-3xl flex justify-center flex-col items-center shadow-inner bg-[radial-gradient(#f2cdcd15_5px,#181825_1px)] bg-[size:49px_49px] bg-[center_top_42px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] rounded-3xl flex justify-center flex-col items-center shadow-inner bg-[radial-gradient(#f5c2e715_5px,#181825_1px)] bg-[size:48px_48px] bg-[center_top_84px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] rounded-3xl flex justify-center flex-col items-center shadow-inner bg-[radial-gradient(#cba6f715_5px,#181825_1px)] bg-[size:47px_47px] bg-[center_top_126px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] rounded-3xl flex justify-center flex-col items-center shadow-inner bg-[radial-gradient(#f38ba815_5px,#181825_1px)] bg-[size:46px_46px] bg-[center_top_168px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] rounded-3xl flex justify-center flex-col items-center shadow-inner bg-[radial-gradient(#eba0ac15_5px,#181825_1px)] bg-[size:45px_45px] bg-[center_top_210px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] rounded-3xl flex justify-center flex-col items-center shadow-inner bg-[radial-gradient(#fab38715_5px,#181825_1px)] bg-[size:44px_44px] bg-[center_top_252px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] rounded-3xl flex justify-center flex-col items-center shadow-inner bg-[radial-gradient(#f9e2af15_5px,#181825_1px)] bg-[size:43px_43px] bg-[center_top_294px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] rounded-3xl flex justify-center flex-col items-center shadow-inner bg-[radial-gradient(#a6e3a115_5px,#181825_1px)] bg-[size:42px_42px] bg-[center_top_336px]`,]

React.useEffect(() => {
  if(firstVisit && location.pathname === "/")
    alert("For better experience please use the arrow keys (vim motions work)")
  setFirstVisit(false)

  const interval = setInterval(() => {
    setColor((prev) => ((prev+1) % (s.length - 1)));
    console.log(color)
  }, MINUTE_MS);

  return () => clearInterval(interval);
  }, []);

 let d =  <div className="text-ctp-text h-[100vh] border-[1.5vw] border-ctp-crust font-outfit font-semibold text-lg overflow-hidden">
      
 <div className={s[color]}>
   <NavBar/>
   <div className="text-ctp-text border-ctp-crust w-[100%] font-outfit font-semibold text-lg overflow-hidden ">
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
  
 
  return (
   d
  );
}

export default App;
