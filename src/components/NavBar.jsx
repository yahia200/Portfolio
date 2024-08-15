import React from "react";
import onion from "../images/onion.jpeg";
import menu from "../images/menu.svg";
import clos from "../images/close.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Socials from "./Socials";
const defaultAnimation = {
  hiddenMid: {
    scale:0,
  },

  hiddenLeft: {
    scale:0,
  },

  hiddenRight: {
    scale:0,
  },

  hiddenTxt: {
    scale:0,
  },

  visable: {
    scale:1,
    opacity:1,
  },

  hiddenMenu: {
    opacity:0,
  },
};

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  let verticalDisplay = screen.width/screen.height < 1
  let delay = 0.2;
  let li_style =
    "px-16 transition delay-100 text-center ease-in-out hover:text-ctp-blue mt-2";
    let imgml = verticalDisplay ? "ml-5" : "ml-20";

  let liItems = verticalDisplay ? 
  <motion.nav initial="hiddenMenu" animate="visable" variants={defaultAnimation} transition={{duration: 0.05}}>
    <motion.ul onClick={() => setMenuOpen(false)} className={`absolute top-0 right-0 h-[92vh] rounded-2xl bg-ctp-base z-[100] mt-10 w-[94vw] flex-col content-start`}>
      <motion.li initial="hiddenMenu" animate="visable" className={`${li_style} my-10 mt-16`} variants={defaultAnimation} transition={{delay: 0}}>
        <Link to="/gallery">Gallery</Link>
      </motion.li>
      <motion.li  initial="hiddenMenu" animate="visable"className={`${li_style} my-10`} variants={defaultAnimation} transition={{delay: (delay - 0.12)}}>
        <Link to="/projects">Projects</Link>
      </motion.li>
      <motion.li initial="hiddenMenu" animate="visable" className={`${li_style} my-10`} variants={defaultAnimation} transition={{delay: (delay - 0.12) * 2}}>
        <Link to="/about">About</Link>
      </motion.li>
      <motion.li initial="hiddenMenu" animate="visable" className={`${li_style} my-10`} variants={defaultAnimation} transition={{delay: (delay - 0.12) * 3}}>
        <Link to="/about">Contact</Link>
      </motion.li>
    </motion.ul>
    <Socials inNav={true}/>
  </motion.nav>

  : 
  <>
    <motion.nav className="z-[10]">
    <motion.ul className="flex">
      <motion.li initial="hiddenLeft" animate="visable" className={li_style} variants={defaultAnimation} transition={{delay: delay}}>
        <Link to="/gallery">Gallery</Link>
      </motion.li>
      <motion.li onClick={() => setMenuOpen(false)} initial="hiddenMid" animate="visable"className={li_style} variants={defaultAnimation} transition={{delay: 0}}>
        <Link to="/projects">Projects</Link>
      </motion.li>
      <motion.li onClick={() => setMenuOpen(false)} initial="hiddenRight" animate="visable" className={li_style} variants={defaultAnimation} transition={{delay: delay}}>
        <Link to="/about">About</Link>
      </motion.li>
    </motion.ul>
  </motion.nav>
  <Link
  className="z-[10]"
    to="/contact"
  >
    <motion.div initial="hiddenRight" animate="visable" variants={defaultAnimation} transition={{delay: delay*2}} className=" bg-ctp-green text-black px-8 py-2 rounded-full mr-20 transition delay-100 ease-in-out hover:bg-ctp-mauve hover:scale-105">
    <motion.p initial="hiddenTxt" animate="visable" variants={defaultAnimation} transition={{delay: 1}} className="select-none">Contact</motion.p>
    </motion.div>
  </Link>
  </>
  return (
    
    <motion.div
    className="bg-ctp-base absolute top-[3vw] rounded-2xl h-fit font-bold"
    style={{width: "calc(100vw - 6vw)"}}
  >
    <motion.div
      className="flex justify-between items-center px-30px py-4"
    >
      <Link className="z-[10]" to="/">
        <motion.div
        initial="hiddenLeft" animate="visable"
        transition={{delay: delay*4}}
          variants={defaultAnimation}
          alt="logo">
          <img className={`size-12 rounded-full ${imgml} ${menuOpen ? "opacity-0" : "transition ease-in-out opacity-1"} hover:scale-125`} src={onion}/>
          </motion.div>
      </Link>
      {verticalDisplay && <motion.div
        initial="hiddenLeft" animate="visable"
        transition={{delay: delay*4}}
          variants={defaultAnimation}
          className="absolute right-0 z-[115]"
          alt="logo">
          <img onClick={() => setMenuOpen((prev) => !prev)} className={`size-10 rounded-full mr-5 z-[115] transition ease-in-out`} src={menuOpen ? clos : menu}/>
          </motion.div>}
      { (menuOpen || !verticalDisplay) && liItems}
    </motion.div>
      </motion.div>
  );
}

export default NavBar;
