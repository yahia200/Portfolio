import React from "react";
import videowebm from "./images/t1.webm";
import down from "./images/down.png";
import { useState } from "react";

function Project_Ascii() {
  const [showPre, setShowPre] = useState(false);
  let up = "transition delay-50 ease-in-out rotate-180";
  let opacity = 1;
  let rot ="rotate-90";
  let preview =
    "-z-50 transition-all delay-150 ease-in-out mx-auto fixed top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-5/12 opacity-1 brightness-104";
  if (!showPre) {
    rot = "-rotate-90"
    opacity = 0;
    up = "transition delay-50 ease-in-out rotate-0";
    preview = "-z-50 transition-all delay-150 ease-in-out fixed top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-5/12 opacity-0 brightness-104";
  }
  return (
    <div className="flex justify-between items-center w-11/12 my-10">
      <div className="w-11/12">
        <div className="bg-ctp-crust text-center mx-10 w-1/4 rounded-xl px-5 py-5">
        <div className="flex justify-between items-center w-fit mx-auto">
          <h1 onClick={() => setShowPre((prev) => !prev)} className=" text-center text-3xl text-ctp-peach hover:cursor-pointer">Ascii Engine</h1>
          <img onClick={() => setShowPre((prev) => !prev)} src={down} alt="" className={`transition delay-150 ease-in-out w-6 mx-auto hover:cursor-pointer bg-transparent mt-1 ${rot}`} />
          </div>
          <div className="flex justify-between mt-4 items-center w-20 mx-auto">
            <a
              href="https://github.com/yahia200/Ascii-Engine"
              className="text-ctp-red text-center"
            >
              Git-Hub
            </a>
            <a
              href="https://github.com/yahia200/Ascii-Engine"
              className="size-3 mx-auto hover:cursor-pointer bg-transparent mt-0.5"
            >
              <img src={down} alt="" className="-rotate-90" />
            </a>
          </div>
          {/* <p className="mt-5 bg-ctp-crust">
          A terminal application that takes a 3d object in ".obj" format and
          prints frames as Ascii characters.
        </p>
        <div className="py-2 roundedf-xl">
          <p className="text-ctp-red pb-0">Preview</p>
          <button
            onClick={() => setShowPre((prev) => !prev)}
            className="size-3 mx-auto hover:cursor-pointer bg-transparent"
          >
            <img src={down} alt="" className={up}/>
          </button>
        </div> */}
        </div>

        {/* <img
        src={ascii}
        className={preview}
      /> 
      <video src={videowebm} width="750" height="500" className={preview} autoPlay loop muted>
        
      </video> */}
      </div>
      <div><video src={videowebm} className={preview} autoPlay loop muted>
        
        </video></div>
    </div>
  );
}

export default Project_Ascii;
