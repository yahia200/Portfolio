import React from "react";
import down from "./images/down.png";
import { useState, useEffect } from "react";
import ReactDom from 'react-dom';
import { motion } from "framer-motion";
import { useNavigate, useLocation, Link } from "react-router-dom";

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visable: {
    opacity: 1,
    y: 0,
  },
  hiddenButton: {
    opacity: 0,
    scale: 0.7,
    y: -210,
  },

  visableButton: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};
function Intro({ state }) {
  const [showDis, setShowDis] = useState(state);
  const location = useLocation();
  let s = location.pathname === "/about";
  const navigate = useNavigate();
  if (state !== showDis) {
    setShowDis(state);
  }
  let discription =
    "When Sarah joined a tech startup as a junior developer, she had a clear goal: to reach the C-suite within 10 years. She dedicated herself to learning new technologies, taking on challenging projects, and building strong relationships with her colleagues. Her hard work and dedication paid off. After 5 years, Sarah was promoted to team lead, and 3 years later, she became the head of engineering. In her 10th year with the company, she was appointed Chief Technology Officer. Sarah's story is a reminder that ambition, perseverance, and a willingness to go the extra mile can propel you to the top.";
  let up = "rotate-180";
  let color = "text-ctp-text";
  let size = "text-3xl";
  let height = "mt-40";
  let width = "w-[50%]";
  let dis = "opacity-1";
  let nameSpacing = "tracking-normal";
  let nameSize = "text-7xl";
  let nameMargine = "mt-0";
  let buttonSize = "size-10";
  let butonHoversize = "size-24";
  if (!showDis) {
    up = "rotate-0";
    dis = "opacity-0";
    color = "text-ctp-peach";
    height = "mt-80";
    nameSpacing = "tracking-normal";
    nameSize = "text-9xl";
    nameMargine = "mt-52";
    buttonSize = "size-24";
    butonHoversize = "size-28";
  }

  let x = `will-change-transform ${width} mx-auto ${height} transition-all delay-50 duration-1000 ease-in-out hover:cursor-default ${color} ${dis} ${size}`;
  let butt = `mx-auto ${buttonSize} mt-3 transition-all delay-1000 duration-1000 ease-in-out ${up} hover:cursor-pointer`;
  let name = ` font-tls will-change-transform transition-all delay-50 duration-1000 ease-in-out ${nameSize} text-ctp-rosewater ${nameSpacing}`;

  useEffect(() => {
    window.addEventListener("keyup", handelPress, true);
  }, []);

  const handelPress = (e) => {
    if (e.key === "ArrowDown" || e.key === "j") {
      if(!s){
        navigate("/about")
        s=true
    }
      else{
        navigate("/projects");
        window.removeEventListener("keyup", handelPress, true);
      }
    } else if (e.key === "ArrowUp" || e.key === "k") {
      navigate("/")
      s=false;
    }
  };

  return (
    <div className="mt-16 mx-auto text-center flex flex-col overflow-hidden">
      <motion.span
        initial="hidden"
        animate="visable"
        className={name}
        transition={{ staggerChildren: 0.1 }}
      >
        {"YAHIA ELGHONIEMY".split("").map((char, index) => (
          <motion.span
            key={index}
            className={`transition-all delay-150 ease-in-out duration-1000 inline-block ${nameMargine}`}
            variants={defaultAnimation}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
      <motion.div
        initial="hiddenButton"
        animate="visableButton"
        variants={defaultAnimation}
        transition={{ delay: 2.5, duration: 2, type: "spring", bounce: 0.3}}
      >
        <Link className="transition duration-200 hover:scale-125" to={ s ? "/" : "/about"}>
          <img
            src={down}
            className={butt}
            
          />
        </Link>
      </motion.div>

      <div className={x}>{discription}</div>
      <div className="absolute right-2 bottom-0 text-xs font-normal">
        {"For better experience please use the arrow keys (vim motions work)"}
      </div>
    </div>
  );
}

export default Intro;
