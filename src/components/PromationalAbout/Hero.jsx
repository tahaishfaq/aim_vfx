import React from "react";
import Holographic1 from "../../assets/images/holographic1.png";
import Rectangle7549 from "../../assets/images/Rectangle 7549.png";
import Rectangle7550 from "../../assets/images/Rectangle 7550.png";
import Rectangle7553 from "../../assets/images/Rectangle 7553.png";
import Rectangle7554 from "../../assets/images/Rectangle 7554.png";

import Bolb from "../../assets/images/blob.png";
import Button from "../Button/Button";
import Arrow from "../../assets/images/arrow logo.png";

const Hero = () => {
  return (
    <div className="relative">
      <img className=" absolute -z-20" src={Holographic1} alt="" />
      <div className="pt-28 grid grid-cols-5">
        <div className="2xl:block hidden col-span-1">
          <img src={Bolb} alt="" />
        </div>
        <div className="col-span-full 2xl:col-span-2 pt-11">
          <div className="px-4 lg:px-14">
            <span className="team-hero-heading ">promotional videos</span>
            <p className="font-[300] text-[20px] text-[#FFF]">
              Get on-brand promotional videos designed to enhance your website,
              digital campaigns, presentation and ads. Plug a fully-stacked
              design team into your marketing and creative reams and level up
              yor efforts with next-gen videos.
            </p>
          </div>
          <div className="flex py-7 gap-x-6 px-14	items-end	justify-between ">
            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Your base Email"
                className="w-full px-4 py-2.5 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] "
              />
            </div>
            <span>
              <Button className="px-4 text-nowrap py-2.5 text-sm font-semibold text-[#fff] bg-[#2EABAF] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                SEE OPENNINGS
              </Button>
            </span>
          </div>
        </div>
        <div className="2xl:block hidden col-span-2 relative">
          <img src={Rectangle7554} alt="" />
          <img src={Arrow} alt="" className=" absolute -top-16 right-72" />
          <img
            src={Rectangle7549}
            alt=""
            className="w-80 absolute top-0 right-24 "
          />
          <img
            src={Rectangle7550}
            alt=""
            className="w-96 absolute top-80 right-40 z-10"
          />
          <img
            src={Rectangle7553}
            alt=""
            className="w-64 absolute right-0 top-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
