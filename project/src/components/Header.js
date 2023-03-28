import React, { useState, useEffect } from "react";
import logo from "../img/logo.svg";
import hamburger from "../img/icon-hamburger.svg";
import close from "../img/icon-close-menu.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(width >= 768);
  }, [width]);

  return (
    <>
      <header className="absolute flex items-center justify-between px-5 py-8 w-full">
        <div>
          <img src={logo} alt="" />
        </div>
        {isOpen && (
          <nav className="absolute w-9/12 ml-16 mt-56 md:relative md:mt-0 md:w-auto md:ml-0">
            <ul className="shadow-2xl rounded-2xl py-3 md: bg-transparent md:shadow-none md:rounded-none md:pu-0 md:flex">
              <li className="py-3 border-b border-gray-300 px-5 cursor-pointer md:px-0 md:py-0 md:border-none md:text-white md:mx-3">
                About
              </li>
              <li className="py-3 border-b border-gray-300 px-5 cursor-pointer md:px-0 md:py-0 md:border-none md:text-white md:mx-3 ">
                Discover
              </li>
              <li className="py-3 px-5 cursor-pointer md:px-0 md:py-0 md:border-none md:text-white md:mx-3">
                Get Started
              </li>
            </ul>
          </nav>
        )}

        <div className="md:hidden">
          {isOpen ? (
            <img
              src={close}
              alt=""
              className="w-6 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <img
              src={hamburger}
              alt=""
              className="w-6 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
