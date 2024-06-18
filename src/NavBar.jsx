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
  let delay = 0.2;
  let li_style =
    "px-16 transition delay-100 ease-in-out hover:text-ctp-lavender mt-2";

  return (
    <motion.div
      className="bg-ctp-base rounded-2xl mt-[2.8vh] h-fit font-tls"
      style={{width: "calc(100% - 5.6vh)"}}
    >
      <motion.div
        className="flex justify-between items-center px-30px py-4"
      >
        <Link to="/">
          <motion.img
          initial="hiddenLeft" animate="visable"
          transition={{delay: delay*2.2}}
            variants={defaultAnimation}
            src={onion}
            className="size-12 rounded-full ml-20 transition delay-100 ease-in-out hover:scale-125"
            alt="logo"
          />
        </Link>
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
      </motion.div>
    </motion.div>
  );
}

export default NavBar;
