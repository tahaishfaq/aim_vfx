import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { NavLink, Outlet } from "react-router-dom";
import Rectangle from "../../assets/images/Rectangle 131.png";
const CreateProject = () => {
  const data = [
    {
      poster1: Rectangle,
      poster2: Rectangle,
      poster3: Rectangle,
      title1: "Branding & Visual identity",
      title2: "Digital Marketing Consulting",
      title3: "Digital & Social Media Ads",
    },
    {
      poster1: Rectangle,
      poster2: Rectangle,
      poster3: Rectangle,
      title1: "Branding & Visual identity",
      title2: "Digital Marketing Consulting",
      title3: "Digital & Social Media Ads",
    },
    {
      poster1: Rectangle,
      poster2: Rectangle,
      poster3: Rectangle,
      title1: "Branding & Visual identity",
      title2: "Digital Marketing Consulting",
      title3: "Digital & Social Media Ads",
    },
  ];
  return (
    <div className=" solution-page pt-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-5xl px-4 mx-auto text-white pt-20 ">
          {/*----------------------------head Project Section --------------------------*/}
          <div className="px-4 py-6 flex flex-wrap gap-y-5  border-setting items-center justify-between bg-[#0B1A2880] rounded-lg">
            <div className="flex items-center gap-x-4">
              <ChevronLeftIcon className="h-4 w-4 text-white" />
              <h1 className="font-tek text-[50px] leading-10 font-normal uppercase ">
                new project
              </h1>
            </div>
            <p className="text-base font-light font-[Rubik]">Predefinition 1</p>
            <p className="text-base font-light font-[Rubik]">Predefinition 2</p>
            <p className="text-base font-light font-[Rubik]">Predefinition 3</p>
            <p className="text-base font-light font-[Rubik]">Predefinition 4</p>
            <span className="py-1 px-2 font-medium rounded-full bg-[#15B8C7]">
              TJ
            </span>
          </div>
        </div>

        <div className=" lg:px-12 px-4 py-6 text-white items-center justify-between  rounded-lg">
          <h1 className="font-tek py-8 lg:text-[50px] text-3xl font-normal uppercase">
            Create your brief
          </h1>
          <div className="flex flex-col flex-wrap  gap-y-3">
            {data.map((item, ind) => {
              return (
                <div className="flex flex-wrap lg:flex-nowrap justify-center gap-x-4">
                  <div className="p-3 border-setting bg-[#15B8C7] rounded-2xl">
                    <img src={item.poster1} alt="" className="h-44 w-[363px]" />
                    <h2 className="py-6 px-2 font-bold font-[Rubik] text-base">
                      {item.title1}
                    </h2>
                  </div>
                  <div className="p-3 border-setting bg-[#15B8C7] rounded-2xl">
                    <img src={item.poster1} alt="" className="h-44 w-[363px]" />
                    <h2 className="py-6 px-2 font-bold font-[Rubik] text-base">
                      {item.title2}
                    </h2>
                  </div>
                  <div className="p-3 border-setting bg-[#15B8C7] rounded-2xl">
                    <img src={item.poster1} alt="" className="h-44 w-[363px]" />
                    <h2 className="py-6 px-2 font-bold font-[Rubik] text-base">
                      {item.title3}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
