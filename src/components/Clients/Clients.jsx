import React from "react";
import Group469461 from "../../assets/images/Group 469461.png";
import Arrow from "../../assets/images/Arrow.png";
const Clients = () => {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="font-tek font-[400] text-[#fff] text-[40px] sm:text-[50px] lg:text-[100px]">
          why clients love aimfx
        </h1>
      </div>
      <div className=" xl:px-60 lg:px-36 md:px-28 grid lg:grid-cols-10 items-center">
        <div className="hidden lg:block  col-span-1">
          <img className="rotate-180" src={Arrow} alt="" />
        </div>
        <div className="col-span-8 grid  lg:grid-cols-2 gap-3 p-4 border-[2px] rounded-3xl border-[#15B8C7]">
          <div className="col-span-1 p-5">
            <img src={Group469461} alt="" />
          </div>
          <div className="text-[#fff] col-span-1 p-5">
            <p className="font-Rubik ">
              Lorem ipsum dolor sit amet consectetur. Dictum ac in leo aliquam
              scelerisque nulla rhoncus mi. Mauris felis varius justo aliquam
              penatibus volutpat aenean vel fermentum. Aliquet id id ut sed in.
              Aliquam in urna eget mi morbi. Interdum nibh malesuada eget enim
              scelerisque lorem adipiscing. Montes adipiscing purus etiam diam.
              Mauris sit sit sed nunc. Egestas eget velit rhoncus egestas ac a
              scelerisque fusce. Velit libero eleifend erat mauris.
            </p>
            <p className="font-[700] italic text-[32px]">Dmitriy Gladenko</p>
            <p className="text-[24px]">Company VideoFx</p>
          </div>
        </div>
        <div className="hidden md:block col-span-1 lg:flex justify-end">
          <img src={Arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
