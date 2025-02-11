import React from "react";

function About() {
  return (
    <>
      <div id="about" className=" w-full h-full bg-[#e8f6ff]">
      <h1 className='text-3xl font-bold text-center pt-20 pb-10'>About Us</h1>
        <div className=" flex flex-col-reverse py-16 h-60 md:h-72 w-full bg-[url('assets/StandardBanner.jpg')] bg-cover px-8 md:px-16">
          <div className=" flex space-y-2 w-full md:w-1/4 h-32 flex-col top-5 md:top-1/2  bg-[#e8f6ff]  border border-slate-800 px-4 py-4 rounded-lg shadow-lg shadow-slate-600 ">
            <h2 className="font-bold text-2xl">personal Healthcare</h2>
            <p className=" font-bold text-wrap">
              Leading Integrated Healthcare Services Provider in India
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center  bg-[#e8f6ff] py-10 px-12 gap-4 md:gap-8">
          <div className="w-full border border-slate-400 px-4 py-6 text-xl bg-white rounded-lg shadow-lg shadow-slate-600"><h4 className="text-2xl flex self-start text-slate-800">4 JCI & 26 NABH</h4> ACCREDITED HOSPITALS</div>
          <div className="w-full border border-slate-400 px-4 py-6 text-xl bg-white rounded-lg shadow-lg shadow-slate-600"><h4 className="text-2xl text-slate-800 flex self-start ">28</h4>Healthcare Facilities</div>
          <div className="w-full border border-slate-400 px-4 py-6 text-xl bg-white rounded-lg shadow-lg shadow-slate-600"><h4 className="text-2xl text-slate-800 flex self-start">4000+</h4>Operational Beds
          </div>
          <div className="w-full border border-slate-400 px-4 py-6 text-xl bg-white rounded-lg shadow-lg shadow-slate-600"><h4 className="text-2xl text-slate-800 flex self-start">100+</h4>Healthcare professionals</div>
        </div>
      </div>
      <div className="md:px-16 px-12 bg-[#e8f6ff] pb-4 md:w-2/3"><h2 className="font-bold ">P-Healtcare -</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta atque vero possimus velit error natus reprehenderit distinctio quia, sint inventore a reiciendis qui quae libero quaerat nobis necessitatibus cupiditate dignissimos iusto ullam nam nisi aliquid laboriosam quisquam. Animi, doloremque perspiciatis reprehenderit voluptas culpa dolorum ad cumque, quisquam asperiores provident deserunt!</p></div>
      <div className="md:p-2 p-8 flex md:flex-row gap-10 flex-col items-center justify-center bg-[#e8f6ff] ">
          <div className="flex flex-col justify-center border border-slate-700 px-6 py-4 bg-white rounded-lg h-[300px] md:w-[46%] shadow-lg shadow-slate-600">
            <div className="h-[50%] w-full flex items-center justify-center bg-slate-500">jkkbknb</div>
            <div className="h-[50%] w-full bg-slate-200 flex flex-col pt- text-center"><h2 className="text-2xl font-bold">Mission</h2><p>To create a world-class integrated healthcare delivery system in India, entailing the finest medical skills combined with compassionate patient care.</p> </div>
          </div>

          <div className="flex flex-col justify-center border border-slate-700 px-6 py-4 bg-white rounded-lg h-[300px] md:w-[46%] shadow-lg shadow-slate-600">
            <div className="h-[50%] w-full flex items-center justify-center bg-slate-500">jkkbknb</div>
            <div className="h-[50%] w-full flex flex-col text-center"><h2 className="text-2xl font-bold pb-3">Vission</h2><p>To create a world-class integrated healthcare delivery system in India, entailing the finest medical skills combined with compassionate patient care.</p> </div>
          </div>
      </div>
    </>
  );
}

export default About;
