"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="/nishanth.jpg"
            height={300}
            width={200}
            alt="Nishanth"
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-6 mt-6 cursor-pointer text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Nishanth Y
        </div>
        <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            Computer Science Student
          </span>
          {"  "} 🖥️
        </p>
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Dedicated computer science student and avid programming enthusiast.
          Passionate about coding and constantly expanding my knowledge. Eager
          to contribute to the ever-evolving tech world.
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:nishanthy1411@gmail.com")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
