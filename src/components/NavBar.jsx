import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import { links } from "../data/content";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const toggleNavigation = () => {
    console.log(nav);
    setNav((prev) => {
      return !prev;
    });
  };

  return (
    <div className="w-full fixed left-0 top-0 mx-auto flex justify-between items-center bg-black text-white p-5 z-10">
      <span className="font-signature text-4xl">tInfinity</span>
      <ul className="hidden md:flex space-x-5 italic">
        {links.map((link) => {
          return (
            <li
              className="cursor-pointer capitalize text-gray-400 hover:scale-125 duration-500"
              key={link.id}
            >
              {/* <a href="#">{link.name}</a> */}
              <Link to={link.name} smooth={true} duration={500}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={toggleNavigation}
        className="md:hidden cursor-pointer text-gray-400"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        {nav && (
          <ul className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center space-y-5 bg-gradient-to-b from-black to-gray-800 -z-10">
            {links.map((link) => {
              return (
                <li className="text-2xl capitalize" key={link.id}>
                  {/* <a href="">{link.name}</a> */}
                  <Link
                    onClick={toggleNavigation}
                    to={link.name}
                    smooth={true}
                    duration={500}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default NavBar;
