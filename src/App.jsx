import React from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Connect from "./Connect";
function App() {
  return (
    <div className="text-ctp-text h-[100vh] border-[2.8vh] border-ctp-crust font-outfit font-semibold text-lg">
      <div className="bg-ctp-mantle h-[100%] rounded-3xl flex flex-col items-center shadow-md">
        <NavBar />
          <Intro />
          {/* <Connect /> */}
      </div>
    </div>
  );
}

export default App;
