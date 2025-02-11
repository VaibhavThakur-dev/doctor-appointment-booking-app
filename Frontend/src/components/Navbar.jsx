import React, { useState } from "react";
import { MdOutlineClose, MdMenu } from "react-icons/md";
import Button from "./UI/Button";

const Navbar = () => {
  const [togle, settogle] = useState(false);
  return (
    <>
      <nav className="fixed w-full bg-[#e8f6ff] shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-green-500">P-Healthcare</h1>
          <ul className="hidden md:flex space-x-6 text-xl">
            <li>
              <a href="#home" className="hover:text-green-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className=" hover:text-green-500">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-green-500">
                Services
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-green-500">
                Our-Team
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-500">
                Contact
              </a>
            </li>
          </ul>
          <Button name="log-In" />
          {togle ? (
            <MdOutlineClose
              onClick={() => settogle(!togle)}
              className="text-3xl text-green-500 flex md:hidden "
            />
          ) : (
            <MdMenu
              onClick={() => settogle(!togle)}
              className="text-3xl text-green-500 flex md:hidden"
            />
          )}
        </div>
      </nav>

      {/* for responsive  */}
      <nav
        className={`duration-500 text-green-500 top-[62px] w-screen h-screen font-bold fixed md:hidden bg-white
              ${togle ? "left-[0]" : "left-[-100%]"} z-20`}
      >
        <div className="text-3xl gap-10 py-12 flex flex-col justify-center items-center">
          <a
            href="#home"
            onClick={() => settogle(!togle)}
            className=" hover:text-green-800"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => settogle(!togle)}
            className="hover:text-green-800 "
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => settogle(!togle)}
            className=" hover:text-green-800"
          >
            Services
          </a>
          <a
            href="#team"
            onClick={() => settogle(!togle)}
            className="hover:text-green-800"
          >
            Our-Team
          </a>
          <a
            href="#contact"
            onClick={() => settogle(!togle)}
            className=" hover:text-green-800"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
