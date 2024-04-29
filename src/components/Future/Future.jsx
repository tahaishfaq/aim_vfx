import React from "react";
import Button from "../Button/Button";
import Arrow from "../../assets/images/arrow logo.png";
const Future = () => {
  return (
    <div className=" lg:px-64  px-3">
      <div className="grid lg:grid-cols-2 grid-cols-1  py-10 rounded-3xl bg-[#2EABAF] px-3 ">
        <div className="relative">
          <div className=" absolute -inset-y-10  lg:block hidden">
            <img src={Arrow} alt="" className="w-96 h-96" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <span className="lg:text-[80px] text-[50px] text-white uppercase font-tek leading-tight">
            let’s create our future together
          </span>
          <p className="text-[#fff] lg:mt-0 -mt-3">
            Don't forget to check out our careers page to see available
            ositions.
          </p>

          <Button className="px-8 py-2.5 mt-2 text-sm font-semibold text-[#100e0e] bg-[#fff] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            SEE OPENNINGS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Future;
