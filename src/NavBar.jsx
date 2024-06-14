import React from "react";
import onion from "./images/onion.jpeg";

function NavBar() {
  let li_style =
    "px-16 transition delay-100 ease-in-out hover:text-ctp-lavender hover:scale-105";

  return (
    <div className="bg-ctp-mantle rounded-2xl mt-8 h-fit w-[97%]">
      <div className="flex justify-between items-center px-30px py-4">
        <a href="/">
          <img
            src={onion}
            className="size-12 rounded-full ml-20 transition delay-100 ease-in-out hover:scale-125"
            alt="logo"
          />
        </a>
        <nav>
          <ul className="flex">
            <li className={li_style}>
              <a href="#">Introduction</a>
            </li>
            <li className={li_style}>
              <a href="#">Projects</a>
            </li>
            <li className={li_style}>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <a
          className=" bg-ctp-green text-black px-8 py-2 rounded-full mr-20 transition delay-100 ease-in-out hover:bg-ctp-mauve hover:scale-105"
          href="#"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBar;
