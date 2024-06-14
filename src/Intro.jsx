import React from "react";
import down from "./images/down.png";
import { useState } from "react";
function Intro() {
  const [showDis, setShowDis] = useState(false);
  let up = "rotate-180";
  let color = "text-ctp-text";
  let size = "text-2xl";
  let height = "mt-40";
  let width = "w-[50%]";
  let dis = "opacity-1";
  if (!showDis) {
    up = "rotate-0";
    dis = "opacity-0";
    color = "text-ctp-peach";
    size = "text-sm"
    width = "w-[20%]";
    height = "mt-0";
  }

  let x = `${width} mx-auto ${height} transition-all delay-50 duration-1000 ease-in-out ${color} ${dis} ${size} `;
  let butt = `mx-auto size-10 mt-3 transition-all delay-50 duration-300 ease-in-out ${up} hover:size-12 hover:cursor-pointer`;
  
  return (
    <div className="mt-16 mx-auto text-center">
      <p className="text-7xl text-ctp-rosewater">YAHIA ELGHONIEMY</p>
      <img src={down} className={butt} onClick={() => setShowDis((prev) => !prev)} />
      <div className={x}>
        When Sarah joined a tech startup as a junior developer, she had a clear
        goal: to reach the C-suite within 10 years. She dedicated herself to
        learning new technologies, taking on challenging projects, and building
        strong relationships with her colleagues. Her hard work and dedication
        paid off. After 5 years, Sarah was promoted to team lead, and 3 years
        later, she became the head of engineering. In her 10th year with the
        company, she was appointed Chief Technology Officer. Sarah's story is a
        reminder that ambition, perseverance, and a willingness to go the extra
        mile can propel you to the top.
      </div>
    </div>
  );
}

export default Intro;
