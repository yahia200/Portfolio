import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const defaultAnimation = {
    hiddenMenu: {
      scale:0,
    },
  
    visable: {
      scale:1,
    },
  };
  let delay = 0.2;
  let li_style =
    "transition delay-100 text-center ease-in-out hover:text-ctp-blue px-8";
function Socials({inNav = false}) {
  return (
    <div className="fixed bottom-0 scale-75  z-[110] left-1/2 transform -translate-x-1/2">
    <motion.ul className={`flex ${inNav ? "mb-7" : "mb-0"}`}>
      <motion.li className={li_style} initial="hiddenMenu" animate="visable"variants={defaultAnimation} transition={{delay: 0}}>
        <Link to="https://www.facebook.com/yahia.amr.948/" target='_blank'><FaFacebookF size={20}/></Link>
      </motion.li>
      <motion.li  className={li_style}  initial="hiddenMenu" animate="visable" variants={defaultAnimation} transition={{delay: (delay - 0.12)}} >
        <Link to="https://www.instagram.com/yahiaelghoniemy/" target='_blank'><FaInstagram size={20}/></Link>
      </motion.li>
      <motion.li className={li_style}  initial="hiddenMenu" animate="visable"  variants={defaultAnimation} transition={{delay: (delay - 0.12) * 2}} >
        <Link to="https://www.linkedin.com/in/yahia-el-ghoniemy-553255249/" target='_blank'><FaLinkedin size={20}/></Link>
      </motion.li>
      <motion.li className={li_style}  initial="hiddenMenu" animate="visable"  variants={defaultAnimation} transition={{delay: (delay - 0.12) * 3}} >
        <Link to="https://github.com/yahia200" target='_blank'><FaGithub size={20}/></Link>
      </motion.li>
    </motion.ul>
    </div>
  )
}

export default Socials