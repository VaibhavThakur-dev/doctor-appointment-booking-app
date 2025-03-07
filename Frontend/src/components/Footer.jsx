import React from 'react';
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrServices } from "react-icons/gr";
import { RiTeamLine, RiContactsFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className='w-full py-4 bg-gray-800 text-white text-center flex flex-col justify-center items-center'>
        <ul className="hidden md:flex text-xl flex-col justify-center items-start">
            <li className='flex justify-center items-center gap-2'>
            <FaHome /><Link to="/" className="hover:text-green-500">Home</Link>
            </li>
            <li className='flex justify-center items-center gap-2'>
            <FcAbout />
              <Link to="/about" className=" hover:text-green-500">
                About
              </Link>
            </li>
            <li className='flex justify-center items-center gap-2'>
            <GrServices />
            <Link to="/services" className="hover:text-green-500">
                Services
              </Link>
            </li>
            <li className='flex justify-center items-center gap-2'>
            <RiTeamLine />
            <Link to="/team" className="hover:text-green-500">
                Our-Team
              </Link>
            </li>
            <li className='flex justify-center items-center gap-2'>
            <RiContactsFill /><Link to="/contact" className="hover:text-green-500">
                Contact
              </Link>
            </li>
          </ul>
        <div>
            <ul>
                <li>Contact No: <span>7042347183</span></li>
                <li>Email Add: <span>rajeshsaini7042@gmail.com</span></li>
            </ul>
        </div>
      <p>&copy; 2025 Doctor Appointment Booking App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;