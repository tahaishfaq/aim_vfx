import React from "react";
import Button from "../Button/Button";
import Rectangle1 from "../../assets/images/Rectangle 7561.png";
import Rectangle2 from "../../assets/images/Rectangle 7577.png";

const Maxine = () => {
  return (
    <div className=" ">
      <div className="flex items-center p-32 mx-auto max-w-7xl">
        <div className="relative">
          <img src={Rectangle1} alt="img" className="" />
          <div className="absolute top-10">
            <img src={Rectangle2} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-y-3 py-5">
          <span className="text-[40px] text-[#56BEC2] font-[400] ">
            Maxine Casper
          </span>
          <span className="line font-Teko text-[#fff]">
            CREATIVE DIRECTOR OF PROMOTIONAL VIDEOS
          </span>
          <div className="w-96 text-white">
            <p className="-light">
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
