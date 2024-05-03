import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

const ControlRightDiv = () => {
  const solutions = [
    {
      name: "lorem",
      href: "#",
    },
    {
      name: "Lorem",
      href: "#",
    },
    {
      name: "Team MEmber",
      href: "#",
    },
  ];

  return (
    <div className="relative">
      <div className="w-full border-t-[1px] bg-[#0B1A2880] py-4 mb-3 rounded-2xl flex items-center justify-between gap-x-1 text-sm font-semibold leading-6 ">
        <div className="flex justify-between items-center  px-3">
          <div className="flex gap-3  items-center">
            <span>
              <button className=" px-4 py-3 rounded-[50%] bg-[#00ffff]">
                TJ
              </button>
            </span>

            <div>
              <h1 className="text-[25px]">Terrence Jeffords</h1>
              <p>AIM FX member</p>
            </div>
          </div>
        </div>
        <BellIcon className="h-6 w-6 text-[#fff]" />
      </div>

      <div className=" bg-[#0B1A2880] px-6 py-5 border-t-[1px] rounded-3xl">
        {solutions.map((item) => (
          <div
            key={item.name}
            className="relative border-b-[1px] p-4 py-5 hover:bg-[#1e354b80]  flex justify-between"
          >
            <a href={item.href} className="font-semibold text-[#fff] pl-4">
              {item.name}
              <span className="absolute inset-0" />
            </a>
            <EllipsisHorizontalIcon className="h-6 w-6 text-gray-500" />
          </div>
        ))}
        <button className=" bg-[#2EABAF] hover:bg-[#15B8C7] text-white font-bold my-3 py-3 px-10 rounded-full">
          Create project
        </button>
      </div>
    </div>
  );
};

export default ControlRightDiv;
