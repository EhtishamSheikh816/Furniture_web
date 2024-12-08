import Image from "next/image";
import React from "react";

const RocketSingleSeater = () => {
  return (
    <div className="bg-[#FBEBB5] min-h-screen flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-center w-full max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-[64px] font-medium text-gray-800 leading-tight">
            Rocket single <br /> seater
          </h1>
          <a
            href="#"
            className="inline-block mt-4 text-lg text-[#000000]  decoration-2 hover:text-gray-600"
          >
            Shop Now
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-end items-center">
          <div className="rounded-lg  w-full max-w-[500px] md:max-w-[863px] sm:mx-auto">
            <Image
              src="/sofa.png"
              alt="Rocket Single Seater"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketSingleSeater;
