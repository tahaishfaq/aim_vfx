import React from "react";
import ControlLeftDiv from "./ ControlLeftDiv";
import ControlRightDiv from "./ControlRightDiv";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Production from "./Production";

const ControlFreelancer = () => {
  const data = [
    {
      num: +99,
      text: "All",
    },
    {
      num: 8,
      text: "Ongoing",
    },
    {
      num: 10,
      text: "Draft",
    },
    {
      num: 2,
      text: "Completed",
    },
    {
      num: 2,
      text: "In Review",
    },
  ];

  return (
    <div className="solution-page py-28 text-white">
      <div className="px-10 grid lg:grid-cols-8 gap-6 text-white">
        <div className=" col-span-full md:col-span-6 sm:col-span-full lg:col-span-2">
          <ControlLeftDiv />
        </div>
        <div className="col-span-full lg:col-span-4">
          <div className="w-full gap-y-4 bg-[#0B1A2880] flex md:flex-row flex-col  items-center justify-between px-3 py-5 rounded-lg ring-1 ring-gray-400">
            <div className="flex items-center gap-x-5 ">
              <span className="text-[35px] uppercase">Projects</span>
            </div>
            <div className="flex items-center">
              <p>Hide Filters</p>
              <div className="flex items-center border-[1px] rounded-full py-2 px-3">
                <MagnifyingGlassIcon className="h-6 w-6 text-white" />

                <input
                  type="text"
                  placeholder="Search for name"
                  className="outline-none placeholder:text-[#FFFFFF] w-full bg-inherit "
                />
              </div>
            </div>
          </div>

          <div className="py-6">
            <div className=" grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5  lg:flex justify-between">
              {data.map((item, ind) => {
                return (
                  <span key={ind} className=" py-2.5 rounded-md bg-[#0B1A2880]">
                    <span className="px-3 py-3 rounded-md bg-gradient-to-bl from-[#02363a] to-[#2cb2b6]">
                      {item.num}
                    </span>
                    <span className="pl-2">{item.text}</span>
                  </span>
                );
              })}
            </div>
            <Production />
            <Production />
            <Production />
          </div>
        </div>
        <div className="w-full col-span-full lg:col-span-2">
          <ControlRightDiv />
        </div>
      </div>
    </div>
  );
};

export default ControlFreelancer;
