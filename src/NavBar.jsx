import React from "react";
import onion from "./images/onion.jpeg";

function NavBar() {
  let li_style =
    "px-16 transition delay-100 ease-in-out hover:text-ctp-lavender";

  return (
    <div className="bg-ctp-crust">
      <header className="flex justify-between items-center px-30px py-4">
        <a class="logo" href="/">
          <img
            src={onion}
            className="size-12 rounded-full ml-20"
            alt="logo"
          />
        </a>
        <nav>
          <ul className="flex">
            <li className={li_style}>
              <a href="#">Services</a>
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
          className=" bg-ctp-blue text-black px-8 py-2 rounded-full mr-20 transition delay-100 ease-in-out hover:bg-ctp-sapphire"
          href="#"
        >
          Contact
        </a>
      </header>
    </div>
  );
}

export default NavBar;
