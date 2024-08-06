import React from 'react'
import alex from "../images/alex.jpg"
import avocado from "../images/avocado.jpg"
import batte5a from "../images/batte5a.jpg"
import chess from "../images/chess.jpg"
import boyghost from "../images/boyghost.jpg"
import eggpalt from "../images/eggpalt.jpg"
import onion from "../images/onion.jpg"
import { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
function Gallery() {
  const [active, setActive] = useState(0);
  let imgs = [alex, avocado, batte5a, chess, boyghost, eggpalt, onion ]
  let verticalDisplay = screen.width/screen.height < 1
  let cycleRight = () => setActive((prev) => (prev - 1 + imgs.length) % imgs.length)
  let cycleLeft = () => setActive((prev) => (prev + 1 + imgs.length) % imgs.length)

  React.useEffect(() => {
    // Attach the event listener
    window.addEventListener("keyup", handlePress, true);
    // Make sure to clean up event lis\
  }, []);
  

  const handlePress = (e) => {
    if (e.key === "ArrowRight"){
      cycleRight()
    }

    else if (e.key === "ArrowLeft"){
      cycleLeft()
    }
  }

  return (
    <div className={`${!verticalDisplay && "flex flex-between"}`}>
      <IoIosArrowUp onClick={()=>setActive((active - 1 + imgs.length) % imgs.length)} className={`${!verticalDisplay && "-rotate-90"} my-auto mx-auto`} size={50} />
      <div className={`content-center h-[60vh] ${!verticalDisplay && "w-[60vw]"} mx-auto`}>
          <img src={imgs[active]} className={`${verticalDisplay ? "max-w-[95vw]" : "max-w-[60vw] max-h-[60vh]"} h-auto select-none rounded-xl border-2 mx-auto border-ctp-crust`}/>
      </div>
      <IoIosArrowDown onClick={()=>setActive((active + 1 + imgs.length) % imgs.length)} className={`${!verticalDisplay && "-rotate-90"} my-auto mx-auto`} size={50} />
    </div>
  )
}

export default Gallery