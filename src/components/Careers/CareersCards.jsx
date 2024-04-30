import React from "react";
import Rectangle from "../../assets/images/Rectangle 7609.png";
import Rectangle7615 from "../../assets/images/Rectangle 7515.png";
import Rectangle7616 from "../../assets/images/Rectangle 7516.png";
import Rectangle7617 from "../../assets/images/Rectangle 7517.png";
import Rectangle7618 from "../../assets/images/Rectangle 7518.png";
import Rectangle7619 from "../../assets/images/Rectangle 7519.png";
import Rectangle7620 from "../../assets/images/Rectangle 7520.png";
import arrow6 from "../../assets/images/arrow6.png";
import CareersGalerry from "./CareersGalerry";
const CareersCards = () => {
  const GalData = [
    {
      galSrc: Rectangle7615,
      colSpan: "col-span-3",
    },
    {
      galSrc: Rectangle7616,
      colSpan: "col-span-3",
    },
    {
      galSrc: Rectangle7617,
      colSpan: "col-span-3 row-span-3 ",
    },
    {
      galSrc: Rectangle7618,
      colSpan: "col-span-2",
    },
    {
      galSrc: Rectangle7619,
      colSpan: "col-span-2",
    },
    {
      galSrc: Rectangle7620,
      colSpan: "col-span-2",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:w-[90%] xl:w-[70%] mx-auto">
        <div className="opacity-50">
          <img src={Rectangle} alt="" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center  px-7">
          <h1 className="team-hero-heading">join a native remote company</h1>
          <p className="text-white text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Platea molestie id neque
            nascetur est quis id varius. Consectetur venenatis tortor mattis a
            purus. Nibh risus varius at tellus molestie. Cras ullamcorper est
            quam ut egestas. Ac nunc nunc id dignissim. Eu proin tellus aliquam
            sapien aliquet.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:w-[90%]  xl:w-[70%] mx-auto">
        <div className="flex flex-col justify-center  px-7">
          <h1 className="team-hero-heading">embark on a growth journey</h1>
          <p className="text-white text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Platea molestie id neque
            nascetur est quis id varius. Consectetur venenatis tortor mattis a
            purus. Nibh risus varius at tellus molestie. Cras ullamcorper est
            quam ut egestas. Ac nunc nunc id dignissim. Eu proin tellus aliquam
            sapien aliquet.
          </p>
        </div>
        <div className=" flex justify-end flex-wrap">
          <img src={arrow6} alt="" className="object-cover" />
        </div>
      </div>
      <div className=" grid lg:grid-cols-4 sm:max-w-6xl mx-auto">
        <div className="p-7 col-span-3 text-white">
          <h1 className="team-hero-heading">
            be part of an international community
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sed tincidunt sem nunc proin
            volutpat gravida amet sed eu. Mauris porttitor posuere integer
            tristique auctor. Nisi quis purus augue proin integer feugiat nunc.
            Ut aliquam massa amet feugiat neque commodo magnis nullam. Tortor
            egestas fringilla bibendum gravida neque at. Fringilla id elementum
            lobortis vel non nisl risus pellentesque.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-9 gap-2 lg:gap-5">
        {GalData.map((item, ind) => {
          return (
            <div key={ind} className={item.colSpan}>
              <img src={item.galSrc} alt="" />
            </div>
          );
        })}
      </div>
      <CareersGalerry />
    </div>
  );
};

export default CareersCards;
