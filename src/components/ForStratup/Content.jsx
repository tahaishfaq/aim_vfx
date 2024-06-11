import React from "react";
import Vector3 from "../../assets/images/Vector3.png";
import Vector1 from "../../assets/images/Vector1.png";
import Vector2 from "../../assets/images/Vector2.png";
import Vector4 from "../../assets/images/Vector4.png";
import Vector5 from "../../assets/images/Vector5.png";
import Vector6 from "../../assets/images/Vector6.png";
import Button from "../Button/Button";

const Content = () => {
  const product = [
    {
      id: 1,
      head: "consistent content & quick delivery",
      src: Vector1,
    },
    {
      id: 2,
      head: "more engagement on your content",
      src: Vector6,
    },
    {
      id: 3,
      head: "have time to work on your business",
      src: Vector4,
    },
    {
      id: 4,
      head: "dedicated editors",
      src: Vector3,
    },
    {
      id: 5,
      head: "content curation",
      src: Vector2,
    },
    {
      id: 6,
      head: "flexibility",
      src: Vector5,
    },
  ];

  return (
    <div>
      <div className="px-10 lg:px-80 pt-28 sm:px-32 sm:gap-9 sm:grid lg:grid-cols-2 text-[#fff] items-center">
        <div className="text-[#fff]">
          <h2 className="lg:text-8xl text-5xl font-normal font-tek">
            UPSCALE YOUR BUSINESS
          </h2>
        </div>
        <div>
          <p className="text-xl font-[Rubik] font-light">
            Lorem ipsum dolor sit amet consectetur. Sed enim tincidunt etiam
            quis nulla pellentesque. Facilisis orci rhoncus adipiscing donec.
            Pellentesque sed sit lorem orci rutrum. Mi ac morbi convallis massa
            amet pelle
          </p>
        </div>
      </div>

      <div className="lg:py-28 2xl:px-72 xl:px-24 grid sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {product.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col md:gap-y-8 gap-y-4 p-10"
            >
              <img src={item.src} alt="" className="w-14 h-14" />
              <h2 className="text-[#56BEC2] md:text-[50px] text-3xl font-normal md:leading-[40.9px] font-tek uppercase">
                {item.head}
              </h2>
              <p className="text-xl font-light font-[Rubik] text-white">
                Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget
                tempus donec pellentesque vivamus felis.
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-x-16  pb-28">
        <Button className="px-8 py-2.5 text-sm font-semibold text-[#000]  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full  hover:text-[#000] hover:bg-cyan-600  focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
          Book A Call
        </Button>
        <Button className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent  border-2 border-[#fff] rounded-full hover:bg-[#69FBF17D] focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
          CHOOSE A PLAN
        </Button>
      </div>
    </div>
  );
};

export default Content;
