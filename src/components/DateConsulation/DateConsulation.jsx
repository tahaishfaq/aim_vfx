import React from "react";
import Group469647 from "../../assets/images/Group 469647.png";
import arrow3 from "../../assets/images/arrow3.png";
const DateConsulation = () => {
  return (
    <div className=" py-20">
      <div className="px-8 max-w-7xl mx-auto grid md:grid-cols-2">
        <div className="flex  flex-col justify-center">
          <h2 className="text-3xl lg:text-6xl uppercase py-5">
            book a free consulation
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sed enim tincidunt etiam
            quis nulla pellentesque. Facilisis orci rhoncus adipiscing donec.
            Pellentesque sed sit lorem orci rutrum. Mi ac morbi convallis massa
            amet pelle
          </p>
          <div className="py-5 flex gap-3 text-[#00ffff]">
            <img src={arrow3} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. A suspendisse interdum
              phasellus dignissim. Id tellus fermentum morbi id blandit dolor
              ultrices rhoncus commodo.
            </p>
          </div>
          <div className="py-5 flex gap-3 text-[#00ffff]">
            <img src={arrow3} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. A suspendisse interdum
              phasellus dignissim. Id tellus fermentum morbi id blandit dolor
              ultrices rhoncus commodo.
            </p>
          </div>
        </div>
        <div>
          <img src={Group469647} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DateConsulation;