import React from "react";
import heroImg from "../assets/Group 6.png"; 
 

const Hero = () => {
  return (
   <section className="bg-[#e5f5fd] py-16">

      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-700 leading-tight">
            Experienced <span className="text-sky-600">mobile and web</span> <br />
            applications and website <br /> builders measuring.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            application developers, delivering dozens of completed projects.
            We build mobile apps for top platforms, including Android & iOS.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button className="bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:text-sky-600 transition">
              Contact us
            </button>
            <button className="border border-text-[#60bbf0]0 text-blue-500 px-6 py-3 rounded-lg font-medium hover:text-[#60bbf0]" >
              View more
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img src={heroImg} alt="Hero" className="w-[400px] md:w-[500px]" />
        </div>
      </div>
      <div>
        
      </div>
    </section>
    
  );
};

export default Hero;