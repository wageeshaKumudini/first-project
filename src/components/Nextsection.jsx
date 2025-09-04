import React from "react";
import { FaSmile } from "../assets/FaSmile.png";
import phoneImage from "../assets/phone.png"; 
import {FaSmile} from "react-icons/fa";
const NextSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Lorem Ipsum is simply dummy text of the printing.
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br className="hidden sm:block" />
          Lorem Ipsum has been the industry's
        </p>
      </div>

      {/* Grid layout for left & right */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* ✅ Left Column */}
        <div className="space-y-6">
          {/* Icon row */}
          <div className="flex items-center space-x-4">
            <div className="bg-cyan-500 rounded-full p-5 w-16 h-16 flex items-center justify-center">
              <FaSmile className="text-white text-2xl" />
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">
                Lorem Ipsum is simply dummy text
              </h4>
              <p className="text-sm text-gray-500">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>

          {/* Large Heading */}
          <h3 className="text-2xl font-bold text-gray-900">
            <span className="text-blue-500">Lorem Ipsum</span> is simply dummy text of the printing.
          </h3>

          {/* Paragraph */}
          <p className="text-gray-600 max-w-md">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            application developers. We build and develop mobile applications for
            several top platforms including Android & iOS.
          </p>
        </div>

        {/* ✅ Right Column - Phone image */}
        <div className="flex justify-center">
          <img
            src={phoneImage}
            alt="Phone"
            className="w-[280px] md:w-[350px] lg:w-[400px] object-contain shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default NextSection;