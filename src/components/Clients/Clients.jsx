import React from "react";
import Group469461 from "../../assets/images/Group 469461.png";
import Arrow from "../../assets/images/Arrow.png";
const Clients = () => {
  return (
    <div className="xl:px-28 md:px-40 mx-auto px-6 grid lg:grid-cols-10 py-8 items-center">
      <div className="hidden xl:block  col-span-1">
        <img className="rotate-180" src={Arrow} alt="" />
      </div>
      <div className="xl:col-span-8 col-span-full grid p-8  xl:grid-cols-2 gap-x-16  border-[2px] rounded-3xl border-[#15B8C7]">
        <div className="w-full relative overflow-hidden ">
          <video
            controls
            poster={Group469461}
            className="object-cover w-full rounded-3xl   "
          >
            <source src="video-file.mp4" type="video/mp4" />
          </video>
          <div className="play-icon"></div>
        </div>
        <div className="text-[#fff] flex flex-col justify-between py-2">
          <p className="font-[Rubik]  text-xl font-light ">
            Lorem ipsum dolor sit amet consectetur. Dictum ac in leo aliquam
            scelerisque nulla rhoncus mi. Mauris felis varius justo aliquam
            penatibus volutpat aenean vel fermentum. Aliquet id id ut sed in.
            Aliquam in urna eget mi morbi. Interdum nibh malesuada eget enim
            scelerisque lorem adipiscing. Montes adipiscing purus etiam diam.
            Mauris sit sit sed nunc. Egestas eget velit rhoncus egestas ac a
            scelerisque fusce. Velit libero eleifend erat mauris.
          </p>
          <div className="py-2">
            <h2 className="font-bold italic text-3xl font-[Rubik]">
              Dmitriy Gladenko
            </h2>
            <p className="text-[24px]">Company VideoFx</p>
          </div>
        </div>
      </div>
      <div className="hidden col-span-1 xl:flex justify-end">
        <img src={Arrow} alt="" />
      </div>
    </div>
  );
};

export default Clients;
