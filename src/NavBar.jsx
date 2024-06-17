import React from "react";
import onion from "./images/onion.jpeg";
import { Link } from "react-router-dom";
function NavBar() {
  let li_style =
    "px-16 transition delay-100 ease-in-out hover:text-ctp-lavender mt-2";

  return (
    <div className="bg-ctp-base rounded-2xl mt-8 h-fit w-[97%] font-tls">
      <div className="flex justify-between items-center px-30px py-4">
        <Link to="/">
          <img
            src={onion}
            className="size-12 rounded-full ml-20 transition delay-100 ease-in-out hover:scale-125"
            alt="logo"
          />
        </Link>
        <nav>
          <ul className="flex">
            <li className={li_style}>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className={li_style}>
              <Link to="/projects">Projects</Link>
            </li>
            <li className={li_style}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Link
          className=" bg-ctp-green text-black px-8 py-2 rounded-full mr-20 transition delay-100 ease-in-out hover:bg-ctp-mauve hover:scale-105"
          to="/contact"
        >
          <p className="mt-2">Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
