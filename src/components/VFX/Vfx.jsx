import React from "react";
import Group from "../../assets/images/Group1.png";
import Screenshot2024 from "../../assets/images/Screenshot2024.png";
import Button from "../Button/Button";

const Vfx = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-y-10 px-4 py-40 mx-auto items-center max-w-7xl">
      <div className="flex justify-center  col-span-2 relative">
        <div className=" ">
          <img src={Screenshot2024} alt="" className="w-[560px]" />
        </div>
        <div className="2xl:block hidden absolute -top-60 -z-20">
          <img src={Group} alt="img" className="" />
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="lg:text-7xl  text-5xl font-tek font-normal text-white uppercase ">
          better rates than hiring in-house designers
        </h1>
        <div className="">
          <p className="text-white font-[Rubik] font-light">
            We have worked together with a ton of different companies from
            around the world, providing top quality videos and creatives.
          </p>
        </div>
        <div className=" flex items-center gap-x-3">
          <Button className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent hover:bg-gray-700 border-2 border-[#fff] rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            Book A Call
          </Button>
          <Button className="px-8 py-2.5 text-sm font-semibold text-gray-200 bg-cyan-500 rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            CHOOSE A PLAN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Vfx;
