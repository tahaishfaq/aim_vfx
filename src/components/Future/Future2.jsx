import React from "react";
import Holographic from "../../assets/images/holographic.png";
import Rectangle7561 from "../../assets/images/Rectangle 7561.png";
import Button from "../Button/Button";

const Future2 = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 rounded-lg">
        <div>
          <img src={Holographic} alt="" className="lg:block hidden"/>
        </div>
        <div>
          <img alt="" src={Rectangle7561} className="lg:block hidden rotate-90 " />
        </div>
      </div>

      <div className="lg:px-72 px-3 lg:absolute lg:top-80">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:p-4 px-3 py-6 rounded-3xl bg-[#2EABAF]">
          <div className="px-7 flex flex-col items-start justify-center gap-y-4">
          <span className="lg:text-[80px] text-[50px] text-white uppercase font-tek leading-tight">dont miss out</span>
            <p className="font-[300] text-[20px] text-[#FFF]">
              Join our community of 30,000+ who receive the best in design and
              video development content weekly.
            </p>
          </div>
          <div className="flex	lg:items-end	lg:justify-evenly lg:flex-row flex-col items-start gap-y-4 px-3 mt-4">
            <span>
              <input
                type="email"
                name="email"
                placeholder="Your base Email"
                className="px-4 py-2.5 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] "
              />
            </span>
            <span>
              <Button className="px-4 py-2.5 text-sm font-semibold text-[#100e0e] bg-[#fff] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                SEE OPENNINGS
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future2;
