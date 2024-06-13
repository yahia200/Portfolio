import React from "react";
import ascii from "./images/ascii_test.png";
import video from "./images/t1.mp4";
import down from "./images/down.png";
import { useState } from "react";

function Project() {
  const [showPre, setShowPre] = useState(false);
  let up = "transition delay-50 ease-in-out rotate-180";
  let opacity = 1;
  let preview = "transition-all delay-150 ease-in-out mx-auto mt-10 size-1/4 opacity-1";
  if (!showPre) {
    opacity = 0;
    up="transition delay-50 ease-in-out rotate-0";
    preview = "transition-all delay-150 ease-in-out mx-auto mt-10 opacity-1 size-0";
  }
  return (
    <div className="mt-20">
      <div className="bg-ctp-crust text-center mx-auto w-1/4 rounded-xl px-5 pt-5">
        <h1 className="text-3xl text-ctp-green">Ascii Engine</h1>
        <p className="mt-10 bg-ctp-crust">
          A terminal application that takes a 3d object in ".obj" format and
          prints frames as Ascii characters
        </p>
        <div className="py-2 roundedf-xl">
          <p className="text-ctp-red">Preview</p>
          <button
            onClick={() => setShowPre((prev) => !prev)}
            className="size-3 mx-auto hover:cursor-pointer bg-transparent"
          >
            <img src={down} alt="" className={up}/>
          </button>
        </div>
      </div>

      <img
        src={ascii}
        className={preview}
      />
    </div>
  );
}

export default Project;
