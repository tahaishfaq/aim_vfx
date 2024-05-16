import React from "react";
import Illustration from "../../assets/images/Illustration.png";
import Rectangle3 from "../../assets/images/Rectangle 7562.png";
import Button from "../Button/Button";

const Helpus = () => {
  return (
    <div className="flex items-center flex-wrap lg:flex-nowrap gap-y-10 px-4 py-32 mx-auto max-w-7xl">
      <div className="flex flex-col gap-y-3">
        <span className="lg:text-8xl font-tek text-5xl uppercase font-normal  tracking-tight text-[#ffffff]">
          find out how we can help you
        </span>
        <div className="w-96">
          <p className="text-white">
            We have worked together with a ton of different companies from
            around the world, providing top quality videos and creatives.
          </p>
        </div>
        <div className="sm:flex sm:items-center  gap-x-3">
          <Button className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent hover:bg-gray-700 border-2 border-[#fff] rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            Book A Call
          </Button>
          <Button
            onClick={() => navigate("/signin")}
            className="px-8 py-2.5 text-sm font-semibold text-gray-200 bg-cyan-500 rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase"
          >
            CHOOSE A PLAN
          </Button>
        </div>
      </div>
      <div className="relative">
        <img src={Rectangle3} alt="img" className="" />
        <div className=" absolute top-10 object-cover  "></div>
      </div>
    </div>
  );
};

export default Helpus;
