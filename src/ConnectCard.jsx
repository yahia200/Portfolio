import React from "react";
import go from "./images/down.png";
function ConnectCard() {
  return (
    <div className="bg-ctp-base w-[30vh] rounded-xl py-5 flex m-32">
      <a href="https://github.com/yahia200" target="_blank" className="mx-auto flex">
        <p className="text-4xl text-center text-ctp-red">Git-Hub</p>
        <img src={go} className="my-auto size-5 ml-1 -rotate-90" />
      </a>
    </div>
  );
}

export default ConnectCard;
