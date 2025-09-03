import React from "react";
import heroImg from "../assets/Group 6.png";

const Hero = () => {
  return (
    <section className="bg-[#e5f5fd] py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Experienced <span className="text-blue-500">mobile and web</span> <br />
            applications and website <br /> builders measuring.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            application developers, delivering dozens of completed projects.
            We build mobile apps for top platforms, including Android & iOS.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition">
              Contact us
            </button>
            <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
              View more
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img src={heroImg} alt="Hero" className="w-[400px] md:w-[500px]" />
        </div>
      </div>

      {/* 4 Containers Section */}
      <div className="container mx-auto mt-16 px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800">Web Applications</h3>
            <p className="text-gray-600 text-sm mt-2">lorem ipsum is empty</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800">SEO</h3>
            <p className="text-gray-600 text-sm mt-2">lorem ipsum is empty</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800">AR/VR Solutions</h3>
            <p className="text-gray-600 text-sm mt-2">lorem ipsum is empty</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-gray-800">Mobile Applications</h3>
            <p className="text-gray-600 text-sm mt-2">lorem ipsum is empty</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;