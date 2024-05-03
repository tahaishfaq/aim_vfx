import React, { useState } from "react";
import Rectangle from "../../assets/images/Rectangle 7609.png";
import holographic from "../../assets/images/holographic_fluid_drop_shapes_illustration_02 copy 4.png";
const CareersCards2 = () => {
  const [show, setShow] = useState(false);
  const answer =
    "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad facilis repellendus.";
  const question = "Lorem ipsum, dolor sit ?";
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 md:w-[90%] xl:w-[70%] mx-auto">
        <div className="hidden opacity-50 xl:block">
          <img src={Rectangle} alt="" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center  px-7">
          <h1 className="team-hero-heading">This is what we value</h1>
          <div>
            <div
              onClick={() => setShow(!show)}
              className=" flex flex-1  justify-between px-5 py-4 cursor-pointer  rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4] hover:bg-gray-700"
            >
              <button>{question}</button>
              <span>{show ? "-" : "+"}</span>
            </div>
            {show && (
              <p className="p-2 border-t-2 rounded-3xl bg-slate-600">
                {answer}
              </p>
            )}
          </div>
          <div className="py-4">
            <div
              onClick={() => setShow(!show)}
              className=" flex flex-1  justify-between px-5 py-4 cursor-pointer  rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4] hover:bg-gray-700"
            >
              <button>{question}</button>
              <span>{show ? "-" : "+"}</span>
            </div>
            {show && (
              <p className="p-2 border-t-2 rounded-3xl bg-slate-600">
                {answer}
              </p>
            )}
          </div>
          <div className="py-4">
            <div
              onClick={() => setShow(!show)}
              className=" flex flex-1  justify-between px-5 py-4 cursor-pointer  rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4] hover:bg-gray-700"
            >
              <button>{question}</button>
              <span>{show ? "-" : "+"}</span>
            </div>
            {show && (
              <p className="p-2 border-t-2 rounded-3xl bg-slate-600">
                {answer}
              </p>
            )}
          </div>
          <div>
            <div
              onClick={() => setShow(!show)}
              className=" flex flex-1  justify-between px-5 py-4 cursor-pointer  rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4] hover:bg-gray-700"
            >
              <button>{question}</button>
              <span>{show ? "-" : "+"}</span>
            </div>
            {show && (
              <p className="p-2 border-t-2 rounded-3xl bg-slate-600">
                {answer}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="md:relative md:py-28">
        <img
          src={holographic}
          alt=""
          className="hidden 2xl:block  2xl:absolute right-0 top-[-300px]"
        />
        <div className="max-w-6xl mx-auto rounded-3xl bg-[#2EABAF] p-20 text-white">
          <h1 className="text-[30px] sm:text-[50px] pb-5 uppercase">
            our vision and mission
          </h1>
          <div className="flex flex-col sm:flex-row gap-9">
            <p>
              Lorem ipsum dolor sit amet consectetur. Vulputate mauris dolor
              ipsum volutpat fusce quis porttitor gravida. Enim orci neque risus
              vestibulum nunc eget. Facilisis facilisi id posuere bibendum
              porttitor. Convallis lectus eget sapien semper tincidunt nulla.
              Sagittis a porta enim sollicitudin vel ultrices mi urna vel. Ac
              commodo ridiculus tellus augue lacus vel.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Vulputate mauris dolor
              ipsum volutpat fusce quis porttitor gravida. Enim orci neque risus
              vestibulum nunc eget. Facilisis facilisi id posuere bibendum
              porttitor. Convallis lectus eget sapien semper tincidunt nulla.
              Sagittis a porta enim sollicitudin vel ultrices mi urna vel. Ac
              commodo ridiculus tellus augue lacus vel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersCards2;
