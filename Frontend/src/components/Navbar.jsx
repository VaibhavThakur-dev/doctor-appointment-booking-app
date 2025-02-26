import React, { useState } from "react";
import { MdOutlineClose, MdMenu } from "react-icons/md";
import Button from "./UI/Button";
import { Link } from "react-router";

const Navbar = () => {
  const [togle, settogle] = useState(false);
  return (
    <>
      <nav className="fixed w-full bg-[#e8f6ff] shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-green-500">P-Healthcare</h1>
          <ul className="hidden md:flex space-x-6 text-xl">
            <li>
              <Link to="/" className="hover:text-green-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className=" hover:text-green-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-green-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-green-500">
                Our-Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-500">
                Contact
              </Link>
            </li>
          </ul>
          <Link to="/log-In"><Button name="log-In" /></Link>
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
          <Link
            to="/"
            onClick={() => settogle(!togle)}
            className=" hover:text-green-800"
          >
            Home
          </Link>
          <Link
            to="about"
            onClick={() => settogle(!togle)}
            className="hover:text-green-800 "
          >
            About
          </Link>
          <Link
            to="services"
            onClick={() => settogle(!togle)}
            className=" hover:text-green-800"
          >
            Services
          </Link>
          <Link
            to="team"
            onClick={() => settogle(!togle)}
            className="hover:text-green-800"
          >
            Our-Team
          </Link>
          <Link
            to="contact"
            onClick={() => settogle(!togle)}
            className=" hover:text-green-800"
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
