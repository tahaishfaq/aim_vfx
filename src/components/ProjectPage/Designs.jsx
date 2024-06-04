import React, { useState } from "react";
import Designimg from "../../assets/images/Designimg.png";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import { PhotoIcon } from "@heroicons/react/24/outline";
const Designs = () => {
  const [open, setOpen] = useState(false);
  const data = [
    {
      img: Designimg,
      id: 1,
      title: "Project Title",
      date: "Created 03/03/2024",
    },
    {
      img: Designimg,
      id: 2,
      title: "Project Title",
      date: "Created 03/03/2024",
    },
    {
      img: Designimg,
      id: 3,
      title: "Project Title",
      date: "Created 03/03/2024",
    },
    {
      img: Designimg,
      id: 4,
      title: "Project Title",
      date: "Created 03/03/2024",
    },
    {
      img: Designimg,
      id: 5,
      title: "Project Title",
      date: "Created 03/03/2024",
    },
    {
      img: Designimg,
      id: 6,
      title: "Project Title",
      date: "Created 03/03/2024",
    },
    {
      img: Designimg,
      id: 7,
      title: "Project Title",
      date: "Created 03/03/2024",
    },
    {
      img: Designimg,
      id: 8,
      title: "Project Title",
      date: "Created 03/03/2024",
    },
    {
      img: Designimg,
      id: 9,
      title: "Project Title",
      date: "Created 03/03/2024",
    },
  ];
  const array = [
    {
      text: "Needs Revision",
      cat: "dinner",
    },
    {
      text: "Project Title",
      cat: "barakfast",
    },
    {
      text: "Needs Revision",
      cat: "lunch",
    },
    {
      text: "Approved",
      cat: "barakfast",
    },
  ];
  const uniqueitem = [...new Set(array.map((item) => item.cat)), "All"];
  console.log(uniqueitem);
  const [item, setitem] = useState(array);
  const Gonavigate = (cat) => {
    if (cat === "All") {
      setitem(array);
      return;
    }
    setitem(
      array.filter((item) => {
        return item.cat === cat;
      })
    );
  };
  return (
    <div className=" max-w-6xl mx-auto text-white">
      <div className="px-8  py-9 flex-wrap gap-y-5  border-setting bg-[#0B1A2880] rounded-lg">
        <h1 className=" pb-10 font-tek lg:text-[50px] text-3xl leading-10 font-normal uppercase ">
          Delivered designs
        </h1>
        <div className="h-[750px] overflow-y-scroll  grid lg:grid-cols-3 md:grid-cols-2  items-center justify-center gap-x-5 gap-y-5">
          {data.map((item, ind) => {
            return (
              <div
                key={ind}
                onClick={() => {
                  setOpen(true);
                }}
                className="w-[328px]"
              >
                <div className="relative p-4 border-[4px] rounded-[40px] border-[#15B8C7]">
                  {ind % 3 === 0 ? (
                    <span className="px-4 rounded-l-full absolute right-2 top-8 bg-[#15B8C7]">
                      In Reviews
                    </span>
                  ) : ind % 3 === 1 ? (
                    <span className="px-4 rounded-l-full absolute right-2 top-8 bg-[#55B947]">
                      Approved
                    </span>
                  ) : (
                    <span className="px-4 rounded-l-full absolute right-2 top-8 bg-[#EC1740]">
                      Needs Revision
                    </span>
                  )}
                  <img src={item.img} alt="" />
                  <h2 className="italic font-bold text-xl font-[Rubik] py-1">
                    {item.title}
                  </h2>
                  <p className="font-light text-base font-[Rubik] ">
                    {item.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-8 mt-10 py-9 flex-wrap gap-y-5  border-setting bg-[#0B1A2880] rounded-lg">
        <h1 className=" font-tek lg:text-[50px] text-3xl  font-normal uppercase ">
          resources
        </h1>
        <div>
          <div className="mt-2 flex justify-center items-center rounded-lg border border-dashed border-gray-100 px-6 h-60">
            <div className="text-center">
              <PhotoIcon
                className="mx-auto h-12 w-12 text-gray-300"
                aria-hidden="true"
              />

              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <p className="pl-1 text-center">
                  Drag files here to add them to this project, or
                </p>
              </div>
              <div className="flex gap-x-12">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer "
                >
                  <span className="text-[#00ffff] underline">
                    Upload from computer
                  </span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer "
                >
                  <span className="text-[#00ffff] underline">
                    Import from Brand Assests
                  </span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-6">
          {uniqueitem.map((item) => (
            <button onClick={() => Gonavigate(item)}>{item}</button>
          ))}
        </div>
        {item.map((item, ind) => {
          return <p>{item.text}</p>;
        })}
      </div>
      <ProjectTitle open={open} setOpen={setOpen} />
    </div>
  );
};

export default Designs;
