import React from "react";
import Button from "../Button/Button";
import arrow3 from "../../assets/images/arrow3.png";
import baseline1 from "../../assets/images/baseline1.png";
import baseline2 from "../../assets/images/baseline2.png";
import baseline3 from "../../assets/images/baseline3.png";
import baseline4 from "../../assets/images/baseline4.png";

const Creative = () => {
  const data = [
    {
      src: baseline1,
      span: "top-quality creatives",
      text: "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
    {
      src: baseline2,
      span: "speed",
      text: "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
    {
      src: baseline3,
      span: "flexibility",
      text: "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
    {
      src: baseline4,
      span: "cost-efficiency",
      text: "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
  ];
  return (
    <div className="promotional-section ">
      <div className="px-5 sm:max-w-5xl lg:max-w-7xl mx-auto">
        <div className=" grid lg:grid-cols-3">
          <div className="col-span-2">
            <h1 className="text-[50px] uppercase py-4">
              aim-fx is the better way to get creative done
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Egestas id rhoncus morbi
              commodo auctor. Nulla imperdiet porttitor sollicitudin vitae
              varius semper in tortor integer. Quis nulla consequat ac ut
              consequat. Lorem sem lectus eu eros varius. Quis urna fringilla
              sed.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 py-5">
              <p className="flex items-center text-[#00FFFF] text-[20px] font-[400]">
                <img src={arrow3} alt="" />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </p>
              <p className="flex items-center text-[#00FFFF] text-[20px] font-[400]">
                <img src={arrow3} alt="" />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </p>
              <p className="flex items-center text-[#00FFFF] text-[20px] font-[400]">
                <img src={arrow3} alt="" />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </p>
              <p className="flex items-center text-[#00FFFF] text-[20px] font-[400]">
                <img src={arrow3} alt="" />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </p>
              <p className="flex items-center text-[#00FFFF] text-[20px] font-[400]">
                <img src={arrow3} alt="" />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </p>
              <p className="flex items-center text-[#00FFFF] text-[20px] font-[400]">
                <img src={arrow3} alt="" />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="pt-28">
              <Button className="px-11 py-2.5 text-sm font-semibold text-gray-200  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                book a demo
              </Button>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 py-10 gap-5">
          {data.map((item, ind) => {
            return (
              <div key={ind}>
                <img src={item.src} alt="" />
                <p className="text-[#18565c] text-[30px] py-5 uppercase">
                  {item.span}
                </p>
                <p className="text-[#E4E4E4]">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Creative;
