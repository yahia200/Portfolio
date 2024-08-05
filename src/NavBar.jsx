import React from "react";
import onion from "./images/onion.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  },
};

function NavBar() {
  let verticalDisplay = true
  let delay = 0.2;
  let li_style =
    "px-16 transition delay-100 text-center ease-in-out hover:text-ctp-blue mt-2";
    let imgml = verticalDisplay ? "ml-5" : "ml-20";

  let liItems = verticalDisplay ? 
  <motion.nav >
    <motion.ul className="absolute top-0 right-0 h-[100svh] bg-ctp-base z-[999] mt-10 w-[70vw] flex-col content-start">
      <motion.li initial="hiddenLeft" animate="visable" className={`${li_style} py-5`} variants={defaultAnimation} transition={{delay: delay}}>
        <Link to="/gallery">Gallery</Link>
      </motion.li>
      <motion.li  initial="hiddenMid" animate="visable"className={`${li_style} py-5`} variants={defaultAnimation} transition={{delay: 0}}>
        <Link to="/projects">Projects</Link>
      </motion.li>
      <motion.li initial="hiddenRight" animate="visable" className={`${li_style} py-5`} variants={defaultAnimation} transition={{delay: delay}}>
        <Link to="/about">About</Link>
      </motion.li>
      <motion.li initial="hiddenRight" animate="visable" className={`${li_style} py-5`} variants={defaultAnimation} transition={{delay: delay}}>
        <Link to="/about">Contact</Link>
      </motion.li>
    </motion.ul>
  </motion.nav>

  : 
  <>
    <motion.nav >
    <motion.ul className="flex">
      <motion.li initial="hiddenLeft" animate="visable" className={li_style} variants={defaultAnimation} transition={{delay: delay}}>
        <Link to="/gallery">Gallery</Link>
      </motion.li>
      <motion.li  initial="hiddenMid" animate="visable"className={li_style} variants={defaultAnimation} transition={{delay: 0}}>
        <Link to="/projects">Projects</Link>
      </motion.li>
      <motion.li initial="hiddenRight" animate="visable" className={li_style} variants={defaultAnimation} transition={{delay: delay}}>
        <Link to="/about">About</Link>
      </motion.li>
    </motion.ul>
  </motion.nav>
  <Link
    to="/contact"
  >
    <motion.div initial="hiddenRight" animate="visable" variants={defaultAnimation} transition={{delay: delay*2}} className=" bg-ctp-green text-black px-8 py-2 rounded-full mr-20 transition delay-100 ease-in-out hover:bg-ctp-mauve hover:scale-105">
    <motion.p initial="hiddenTxt" animate="visable" variants={defaultAnimation} transition={{delay: 1}} className="mt-2">Contact</motion.p>
    </motion.div>
  </Link>
  </>
  return (
    
    <motion.div
    className="bg-ctp-base absolute top-[3vw] rounded-2xl h-fit font-tls"
    style={{width: "calc(100vw - 6vw)"}}
  >
    <motion.div
      className="flex justify-between items-center px-30px py-4"
    >
      <Link to="/">
        <motion.div
        initial="hiddenLeft" animate="visable"
        transition={{delay: delay*4}}
          variants={defaultAnimation}
          alt="logo">
          <img className={`size-12 rounded-full ${imgml} transition ease-in-out hover:scale-125`} src={onion}/>
          </motion.div>
      </Link>
      {liItems}
    </motion.div>
      </motion.div>
  );
}

export default NavBar;
