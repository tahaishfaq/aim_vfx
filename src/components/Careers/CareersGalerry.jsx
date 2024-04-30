import React from "react";
import Group469744 from "../../assets/images/Group 469744.png";
import Group469745 from "../../assets/images/Group 469745.png";
import Group469746 from "../../assets/images/Group 469746.png";
import Group469742 from "../../assets/images/Group 469742.png";
import Group469741 from "../../assets/images/Group 469741.png";
// import Group469744 from '../../assets/images/Group 469744.png'

const CareersGalerry = () => {
  const GaleryImg = [
    {
      imgsrc: Group469744,
    },
    {
      imgsrc: Group469745,
    },
    {
      imgsrc: Group469746,
    },
  ];

  return (
    <div className="promotional-section">
      <div className="text-white sm:max-w-6xl mx-auto px-3 pt-10">
        <h1 className="text-[70px] font-[500] uppercase">
          get to know our teams
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sed enim tincidunt etiam quis
          nulla pellentesque. Facilisis orci rhoncus adipiscing donec.
          Pellentesque sed sit lorem orci rutrum. Mi ac morbi convallis massa
          amet pelle
        </p>
      </div>
      <div className="grid justify-center px-3">
        {GaleryImg.map((item, ind) => {
          return (
            <div key={ind} className="border-b-[1px] py-24">
              <img src={item.imgsrc} alt="" />
            </div>
          );
        })}
        <div className=" gap-3 grid grid-cols-3 py-8">
          <img src={Group469741} alt="" />
          <img src={Group469742} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CareersGalerry;
