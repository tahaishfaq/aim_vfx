import React from "react";
import Button from "../Button/Button";
import Arrow from "../../assets/images/arrow logo.png";
const Future = () => {
  return (
    <div className=" lg:p-64  ">
      <div className="grid grid-cols-2 py-4 rounded-3xl bg-[#2EABAF]">
        <div className="relative">
          <div className=" absolute top-[-240px]">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div>
          <span className="team-hero-heading">
            let’s create our future together
          </span>
          <p className="text-[#fff]">
            Don't forget to check out our careers page to see available
            ositions.
          </p>

          <Button className="px-8 py-2.5 text-sm font-semibold text-[#100e0e] bg-[#fff] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            SEE OPENNINGS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Future;
