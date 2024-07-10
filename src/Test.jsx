import React from 'react'
import { motion, useAnimate } from 'framer-motion';
import { useState } from 'react';

let defaultAnimations = {

    "2": {
        scale: 0,
        opacity: 0,
        y: -200,
    },

   "1": {
        scale: 0.7,
        opacity: 0.7,
        y: -100,
    },

    "0": {
        scale: 1,
        opacity: 1,
        y: 0,
    },
    s: {
        scale: 1,
        opacity: 1,
        y: 0,
    },

    "-1": {
        scale: 0.7,
        opacity: 0.7,
        y: 100,
    },

   
    "-2": {
        scale: 0,
        opacity: 0,
        y: 200,
    },
}

function Test() {
    let active = 1;
    let projects = ["a","b","c","d","e","f"];
    const [scope, animate] = useAnimate();
//   const [projectsList, setprojectsList] = useState(
//     [
//       <motion.div key={1} initial="-2"  variants={defaultAnimations} className='absolute'>
//         {projects[0]}
//       </motion.div>,

//       <motion.div key={2} initial="-2" variants={defaultAnimations} className='absolute' ref={scope2}>
//       {projects[1]}
//     </motion.div>,
    
//     <motion.div key={3} initial="-2" variants={defaultAnimations} className='absolute' ref={scope3}>
//         {projects[2]}
//       </motion.div>,
      
//       <motion.div key={4} initial="-2" variants={defaultAnimations} className='absolute' ref={scope4}>
//         {projects[3]}
//       </motion.div>,
      
//       <motion.div key={5} initial="-2" variants={defaultAnimations} className='absolute' ref={scope5}>
//         {projects[4]}
//       </motion.div>,
      
//       <motion.div key={6} initial="-2" variants={defaultAnimations} className='absolute' ref={scope6}>
//         {projects[5]}
//       </motion.div>,
//     ]
// )


const s = () => {
 animate(scope.current, {opacity: 0});
}
s();
// animate2();
// animate3();
// animate4();
// animate5();
// animate6();

return (
  <motion.div className='text-5xl text-ctp-text mt-52'>
    {projectsList}
    <div ref={scope}>
        {projects[0]}
      </div>
  </motion.div>
)
}

export default Test