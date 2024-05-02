import React from "react";
import Button from "../Button/Button";
import holographic from "../../assets/images/holographic_fluid_drop_shapes_illustration_02 copy 2 (1).png";
import Group469378 from "../../assets/images/Group 469378 (1).png";
import Persntage from "../Persentage/Persentage";
import Arrow from "../../assets/images/Arrow.png";

const CreativeaAds = () => {
  const data = Array(7).fill({ text: "Website" });
  const data1 = Array(7).fill({ text: "Website" });
  data1[1] = { span: "Agencies" };
  //   data1[3] = { span: "Freelancer" };
  return (
    <div>
      <div className="px-6 sm:max-w-5xl lg:max-w-7xl mx-auto sm:py-28  grid sm:grid-cols-2">
        <div>
          <h1 className="uppercase text-[30px] sm:text-[50px] lg:text-[70px] py-6">
            From creative ads to multiple designs
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur. Sed enim tincidunt etiam
            quis nulla pellentesque. Facilisis orci rhoncus adipiscing donec.
            Pellentesque sed sit lorem orci rutrum. Mi ac morbi convallis massa
            amet pellentesque gravida. Sed sed nisl in diam arcu non nunc mi
            leo. Id natoque hendrerit gravida posuere pulvinar consectetur augue
            tincidunt. Commodo eu pharetra velit platea vestibulum purus.
          </p>
          <div className="pt-28">
            <Button className="px-11 py-2.5 text-sm font-semibold text-gray-200  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              join us
            </Button>
          </div>
        </div>
        <div className="sm:relative py-4">
          <img
            src={holographic}
            alt=""
            className="sm:block hidden rotate-180"
          />
          <img src={Group469378} alt="" className=" sm:absolute top-5 " />
        </div>
      </div>
      <Persntage />
      <div className="px-6 sm:px-10 lg:px-40">
        <h1 className="uppercase text-[30px] sm:text-[50px] lg:text-[70px] py-10">
          aim-fx alternatives
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Egestas id rhoncus morbi
              commodo auctor. Nulla imperdiet porttitor sollicitudin vitae
              varius semper in tortor integer. Quis nulla consequat ac ut
              consequat. Lorem sem lectus eu eros varius. Quis urna fringilla
              sed.
            </p>
          </div>

          <div>
            <span className="text-[25px] font-[600]">Hiring In-House</span>
            {data1.map((item, ind) => {
              return (
                <>
                  {ind !== 1 ? (
                    <div key={ind} className=" cursor-pointer py-3">
                      <div className=" flex flex-1 justify-between px-5 py-3 rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4]  hover:bg-gray-700">
                        <button>{item.text}</button>
                        <span>
                          <img src={Arrow} alt="" />
                        </span>
                      </div>
                    </div>
                  ) : (
                    <h1 className="py-5 text-[20px]">{item.span}</h1>
                  )}
                </>
              );
            })}
          </div>

          <div>
            <span className="text-[25px] font-[600]">
              Other design subscriptions
            </span>
            {data.map((item, ind) => {
              return (
                <div key={ind} className=" cursor-pointer py-3">
                  <div className=" flex flex-1 justify-between px-5 py-3 rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4]  hover:bg-gray-700">
                    <button>{item.text}</button>
                    <span>
                      <img src={Arrow} alt="" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <span className="text-[25px] font-[600]">
              Design agencies by city
            </span>
            {data.slice(0, 5).map((item, ind) => {
              return (
                <div key={ind} className=" cursor-pointer py-3">
                  <div className=" flex flex-1 justify-between px-5 py-3 rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4]  hover:bg-gray-700">
                    <button>{item.text}</button>
                    <span>
                      <img src={Arrow} alt="" />
                    </span>
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

export default CreativeaAds;
