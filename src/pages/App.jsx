import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Intro from "./Intro";
import Socials from "../components/Socials";
import Connect from "../components/Connect";
import ProjectPage from "./ProjectPage";
import Gallery from "./Gallery";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTimer } from "react-timer-hook";

function App() {
const [firstVisit, setFirstVisit] = useState(true)
const [color, setColor] = useState(0)
const location = useLocation();
let MINUTE_MS = 3000;
let verticalDisplay = screen.width/screen.height < 1
let s = [
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#f2cdcd65_6px,#181825_1px)]" : "bg-[radial-gradient(#f2cdcd50_4px,#181825_1px)]"} bg-[size:69px_69px] bg-[center_top_23px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#f5c2e765_6px,#181825_1px)]" : "bg-[radial-gradient(#f5c2e750_4px,#181825_1px)]"} bg-[size:66px_66px] bg-[center_top_46px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#cba6f765_6px,#181825_1px)]" : "bg-[radial-gradient(#cba6f750_4px,#181825_1px)]"} bg-[size:63px_63px] bg-[center_top_69px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#f38ba865_6px,#181825_1px)]" : "bg-[radial-gradient(#f38ba850_4px,#181825_1px)]"} bg-[size:60px_60px] bg-[center_top_92px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#eba0ac65_6px,#181825_1px)]" : "bg-[radial-gradient(#eba0ac50_4px,#181825_1px)]"} bg-[size:57px_57px] bg-[center_top_115px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#fab38765_6px,#181825_1px)]" : "bg-[radial-gradient(#fab38750_4px,#181825_1px)]"} bg-[size:54px_54px] bg-[center_top_138px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#f9e2af65_6px,#181825_1px)]" : "bg-[radial-gradient(#f9e2af50_4px,#181825_1px)]"} bg-[size:51px_51px] bg-[center_top_161px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#a6e3a165_6px,#181825_1px)]" : "bg-[radial-gradient(#a6e3a150_4px,#181825_1px)]"} bg-[size:48px_48px] bg-[center_top_184px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#f9e2af65_6px,#181825_1px)]" : "bg-[radial-gradient(#f9e2af50_4px,#181825_1px)]"} bg-[size:51px_51px] bg-[center_top_161px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#fab38765_6px,#181825_1px)]" : "bg-[radial-gradient(#fab38750_4px,#181825_1px)]"} bg-[size:54px_54px] bg-[center_top_138px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#eba0ac65_6px,#181825_1px)]" : "bg-[radial-gradient(#eba0ac50_4px,#181825_1px)]"} bg-[size:57px_57px] bg-[center_top_115px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#f38ba865_6px,#181825_1px)]" : "bg-[radial-gradient(#f38ba850_4px,#181825_1px)]"} bg-[size:60px_60px] bg-[center_top_92px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#cba6f765_6px,#181825_1px)]" : "bg-[radial-gradient(#cba6f750_4px,#181825_1px)]"} bg-[size:63px_63px] bg-[center_top_69px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#f5c2e765_6px,#181825_1px)]" : "bg-[radial-gradient(#f5c2e750_4px,#181825_1px)]"} bg-[size:66px_66px] bg-[center_top_46px]`,
`transition-all duration-[3000ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#f2cdcd65_6px,#181825_1px)]" : "bg-[radial-gradient(#f2cdcd50_4px,#181825_1px)]"} bg-[size:69px_69px] bg-[center_top_23px]`,]
console.log(location.pathname);
React.useEffect(() => {

  const interval = setInterval(() => {
    setColor((prev) => ((prev+1) % (s.length - 1)));
  }, MINUTE_MS);

  return () => clearInterval(interval);
  }, []);
  let boarder = verticalDisplay ? "border-[0vw]" : "border-[1.5vw]";
 let d =  <div className={`text-ctp-text h-[100vh] ${boarder} border-ctp-crust font-outfit font-semibold text-lg overflow-hidden`}>
 <div className={location.pathname === "/gallery" ? `transition-all duration-[500ms] ease-linear bg-ctp-mantle h-[100%] ${verticalDisplay ? "" : "rounded-3xl"} flex justify-center flex-col items-center shadow-inner ${verticalDisplay ? "bg-[radial-gradient(#f5e0dc08_6px,#181825_1px)]" : "bg-[radial-gradient(#f5e0dc05_4px,#181825_1px)]"} bg-[size:48px_48px] bg-[center_top_184px]` : s[color]}>
   <NavBar/>
   <div className="text-ctp-text border-ctp-crust w-[100%] font-outfit font-semibold text-lg overflow-hidden ">
   {!verticalDisplay ? <Socials/> : <></>}
   <Routes>
     <Route path="/" element={<Intro state={false}/>}/>
     <Route path="/about" element={<Intro state={true}/>}/>
     <Route path="/gallery" element={<Gallery/>}/>
     <Route path="/projects" element={<ProjectPage />}/>
     <Route path="/contact" element={<Connect />}/>
   </Routes>
   </div>
  </div>
</div>
  
 
  return (
   d
  );
}

export default App;
