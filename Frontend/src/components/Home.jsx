import React from "react";
import { FaPhone, FaRegCalendarDays } from "react-icons/fa6";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Team from "./Team";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <div
        id="home"
        className="w-full h-screen pt-[64px] flex flex-col items-center  bg-green-300">
        <div className="h-[70%] w-full bg-[url('assets/hospital.webp')] bg-cover"></div>
        <div className="w-full flex items-center  justify-center text-center pt-8 gap-2">
          <div className=" duration-500 flex items-center  py-2 px-3 border border-slate-900 rounded-3xl bg-green-400 hover:bg-green-600">
            <FaPhone className="mr-1" />
            <button>Request a CallBack</button>
          </div>
          <div className="duration-500 flex items-center  py-2 px-3 border border-slate-900 rounded-3xl bg-green-400 hover:bg-green-600">
            <FaRegCalendarDays className="mr-1" />
            <Link to="/book-appointment"><button>Book an Appointment</button></Link>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-evenly font-medium px-20 md:px-32 py-10 text-2xl gap-20 bg-green-300">
          <h1 className="font-bold">P-Healthcare, INDIA</h1>
          <div className="duration-200 flex items-center px-3 py-2 bg-green-700 rounded-md hover:bg-green-600 text-white">
            <Link to="team"><button>Find a Doctor</button></Link>
          </div>
        </div>
      </div>
       <About/>
      <Services />
      <Team />
      <Contact />
    </>
  );
}

export default Home;
