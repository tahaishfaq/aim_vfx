import React from "react";
import Camada from "../../assets/images/Camada_3.png";
import Camada4 from "../../assets/images/Camada_4.png";
import Camada2 from "../../assets/images/Camada_2.png";
import Line from "../../assets/images/Line 3.png";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Marketing = () => {
  return (
    <div className="grid lg:grid-cols-3  max-w-7xl mx-auto px-6 py-28 gap-4">
      <div>
        <div className="flex items-center">
          <img src={Camada} alt="" />
          <span className="py-1 px-1 rounded-full bg-[#56BEC2]">
            <ChevronRightIcon className="h-2 w-2 text-white" />
          </span>

          <span>
            <img src={Line} alt="" />
          </span>
          <span className="py-1 px-1 rounded-full bg-[#56BEC2]">
            <ChevronRightIcon className="h-2 w-2 text-white" />
          </span>
        </div>
        <div className="pr-10">
          <h2 className="lg:text-5xl text-3xl uppercase  text-[#56BEC2] font-normal font-tek py-6">
            Offload your <br /> assets to us
          </h2>
          <p className="text-[#fff]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id
            ex, accusamus accusantium voluptatibus
          </p>
        </div>
      </div>
      <div>
        <div className=" flex items-center">
          <img src={Camada4} alt="" className="pr-1" />
          <span className="py-1 px-1 rounded-full bg-[#56BEC2]">
            <ChevronRightIcon className="h-2 w-2 text-white" />
          </span>

          <span>
            <img src={Line} alt="" />
          </span>
          <span className="py-1 px-1 rounded-full bg-[#56BEC2]">
            <ChevronRightIcon className="h-2 w-2 text-white" />
          </span>
        </div>
        <div className="pr-10">
          <h2 className="lg:text-5xl text-3xl uppercase  text-[#56BEC2] font-normal font-tek py-6">
            Get your first edit in 1-2 business days
          </h2>
          <p className="text-[#fff]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id
            ex, accusamus accusantium voluptatibus
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={Camada2} alt="" />
        </div>
        <div>
          <h2 className="lg:text-5xl text-3xl uppercase  text-[#56BEC2] font-normal font-tek py-6">
            Make it perfect with unlimited revisions
          </h2>
          <p className="text-[#fff]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id
            ex, accusamus accusantium voluptatibus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
