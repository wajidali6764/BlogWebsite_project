import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Model from "./Model";

const Navbar = () => {
  const [showMenue, setShowMenue] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const toogleMenue = () => {
    setShowMenue(!showMenue);
  };
  const navItems = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/services",
      link: "Services",
    },
    {
      path: "/about",
      link: "About",
    },
    {
      path: "/blogs",
      link: "Blogs",
    },
    {
      path: "/contact",
      link: "Contact",
    },
  ];
  // model details
  const openModel = () => {
    setIsModelOpen(true);
  };
  const closeModel = () => {
    setIsModelOpen(false);
  };

  return (
    <>
      <header className="bg-black text-white fixed top-0 left-0 right-0">
        <nav className="px-4 py-7 max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-white">
            Desing<span className="text-orange-500">DK</span>
          </a>
          {/* navitems */}
          <ul className="md:flex gap-12 text-lg hidden">
            {navItems.map(({ path, link }) => (
              <li className="text-white" key={path}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* navllink icon */}
          <div className="text-white lg:flex gap-4 items-center hidden">
            <a href="/" className="hover:text-orange-500">
              <FaFacebook />
            </a>
            <a href="/" className="hover:text-orange-500">
              <FaDribbble />
            </a>
            <a href="/" className="hover:text-orange-500">
              <FaTwitter />
            </a>
            <button
              onClick={openModel}
              className="bg-orange-500 px-5 py-2 font-medium rounded hover:bg-white hover:text-orange-500 tarnsiti  duration-200 ease-in"
            >
              Log in
            </button>
            {/* mobile show and hide display screeen */}
          </div>
          {/* our model components is here */}
          <Model isOpen={isModelOpen} onClose={closeModel} />
          <div className="md:hidden">
            <button onClick={toogleMenue} className="couser-ponter">
              {showMenue ? (
                <FaXmark className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
        {/* {mobile item onlly for mobile} */}
        <div>
          <ul
            className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
              showMenue
                ? "fixed to-0 left-0 w-full transition-all ease-out duration-150"
                : "hidden"
            }`}
          >
            {navItems.map(({ path, link }) => (
              <li className="text-black " key={path}>
                <NavLink onClick={toogleMenue} to={path}>
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
