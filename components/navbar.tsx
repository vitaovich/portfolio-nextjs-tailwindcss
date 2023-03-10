import { useState } from "react";
import Link from "./link";
import Navbarlink from "./navbarlink";

const Navbar = () => {
  const brand = "Portfolio";
  const [isToggled, setToggle] = useState<boolean>(false);
  const [links, setLinks] = useState<Link[]>([
    new Link("About", "#about", false),
    new Link("Projects", "#projects", false),
    new Link(
      "Resume",
      "https://drive.google.com/file/d/1zLtBBGK9LRZ2dT2TA8rRznlr1-hhBAfl/view?usp=sharing",
      true
    ),
    new Link("Github", "https://github.com/vitaovich/", true),
    new Link(
      "LinkedIn",
      "https://www.linkedin.com/in/vitaliy-alekhnovich/",
      true
    ),
  ]);
  const handleHamburgerClick = () => {
    setToggle((prevIsToggled) => {
      return !prevIsToggled;
    });
  };
  
  return (
    <nav className="bg-orange-400 container p-6 rounded-b-lg">
      <div className="flex justify-between">
        <div className="flex">
          <h1>{brand}</h1>
        </div>
        <div className="hidden lg:flex items-center justify-between">
          <div className="hidden lg:flex items-center space-x-4">
            {links.map((link) => (
              <Navbarlink key={link.id} link={link}></Navbarlink>
            ))}
          </div>
        </div>
        <button
          id="menu-btn"
          className={`${
            isToggled ? "open" : ""
          } block hamburger lg:hidden focus:outline-none`}
          type="button"
          onClick={handleHamburgerClick}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <div
          id="menu"
          className="absolute p-6 rounded-lg left-6 right-6 top-20 z-100"
        >
          <div
            className={`${
              isToggled ? "" : "hidden"
            } flex flex-col items-center justify-center w-full space-y-6 py-4 font-bold bg-teal-700 text-white rounded-sm lg:hidden`}
          >
            {links.map((link) => (
              <Navbarlink key={link.id} link={link}></Navbarlink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
