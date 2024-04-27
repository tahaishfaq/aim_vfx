import React from "react";
import Holographic from "../../assets/images/holographic.png";
import Rectangle7561 from "../../assets/images/Rectangle 7561.png";
import Button from "../Button/Button";

const Future2 = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 rounded-lg">
        <div>
          <img src={Holographic} alt="" />
        </div>
        <div>
          <img className="rotate-90 " src={Rectangle7561} alt="" />
        </div>
      </div>

      <div className="px-72 absolute top-80">
        <div className="grid grid-cols-2 p-4 rounded-3xl bg-[#2EABAF]">
          <div className="px-7">
            <span className="team-hero-heading">dont miss out</span>
            <p className="font-[300] text-[20px] text-[#FFF]">
              Join our community of 30,000+ who receive the best in design and
              video development content weekly.
            </p>
          </div>
          <div className="flex	items-end	justify-evenly ">
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
