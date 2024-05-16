import React from "react";
import Button from "../Button/Button";
import Rectangle1 from "../../assets/images/Rectangle 7561.png";
import Rectangle2 from "../../assets/images/Rectangle 7577.png";

const Maxine = () => {
  return (
    <div className="px-4 py-10">
      <div className="grid lg:grid-cols-2 gap-y-10  gap-x-12 items-center mx-auto max-w-7xl">
        <div className="relative">
          <img src={Rectangle2} alt="" />
          <div className="absolute -z-10 top-10">
            <img src={Rectangle1} alt="img" className="-z-10" />
          </div>
        </div>
        <div className="flex flex-col gap-y-3 py-5">
          <span className="lg:text-[50px] text-3xl font-tek text-[#56BEC2] font-normal ">
            Maxine Casper
          </span>
          <span className="line font-Teko text-xl text-[#fff] font-normal ">
            CREATIVE DIRECTOR OF PROMOTIONAL VIDEOS
          </span>
          <div className=" text-white">
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur. Leo molestie velit turpis
              tellus maecenas vitae facilisis id dolor. Tellus ac nullam urna
              cursus euismod consequat. Ut ac nam morbi at sit maecenas habitant
              neque enim in id ac.
            </p>
            <br />
            <p>
              Freezing 2 times for two weeks a year If one video editor is not
              enough, then you need to buy another package. You need to pay
              monthly. You need to pay with monthly, quarterly and annual
              discounts.
            </p>
            <p className="py-1">
              Lorem ipsum dolor sit amet consectetur. Leo molestie velit turpis
              tellus maecenas vitae facilisis id dolor.
            </p>
          </div>
          <div className="flex gap-y-5 mt-10">
            <Button className="px-8 py-2.5 text-sm font-semibold text-[#FFFFFF] bg-[#2EABAF] bg-transparen  rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              book a call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maxine;
