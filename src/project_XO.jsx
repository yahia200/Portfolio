import React from "react";

import down from "./images/down.png";
import { useState } from "react";

function Project_Ascii() {
  return (
    <div className="flex justify-between items-center">
    <div className=" w-11/12  my-32">
      <div className="bg-ctp-crust text-center mx-10 w-1/4 rounded-xl px-5 py-5">
        <h1 className="text-3xl text-ctp-peach">Tic-Tac-Toe AI</h1>
        <div className="flex justify-between items-center w-20 mx-auto">
          <a
            href="https://github.com/yahia200/Tic-Tac-Toe-AI"
            className="text-ctp-red text-center"
          >
            Git-Hub
          </a>
          <a
            href="https://github.com/yahia200/Tic-Tac-Toe-AI"
            className="size-3 mx-auto hover:cursor-pointer bg-transparent mt-0.5"
          >
            <img src={down} alt="" className="-rotate-90" />
          </a>
        </div>
        {/* <p className="mt-5 bg-ctp-crust">A Python AI using min-max.</p>
        <div className="py-2 roundedf-xl"></div> */}
      </div>
    </div>
    </div>
  );
}

export default Project_Ascii;
