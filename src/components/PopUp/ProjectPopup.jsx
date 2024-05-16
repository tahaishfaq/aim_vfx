import React from "react";
import chevron from "../../assets/images/chevron-right (1).png";
import Group from "../../assets/images/Group 469477.png";
import Rectangle7590 from "../../assets/images/Rectangle 7590.png";
import Rectangle7591 from "../../assets/images/Rectangle 7591.png";
import Rectangle7592 from "../../assets/images/Rectangle 7592.png";
import Rectangle7593 from "../../assets/images/Rectangle 7593.png";
import Rectangle7594 from "../../assets/images/Rectangle 7594.png";
import Rectangle7595 from "../../assets/images/Rectangle 7595.png";
import Rectangle7596 from "../../assets/images/Rectangle 7596.png";
import Rectangle7597 from "../../assets/images/Rectangle 7597.png";
import Rectangle7598 from "../../assets/images/Rectangle 7598.png";
import Rectangle7510 from "../../assets/images/Rectangle 7510.png";
import Rectangle7511 from "../../assets/images/Rectangle 7511.png";
import Rectangle7512 from "../../assets/images/Rectangle 7512.png";
import Rectangle7513 from "../../assets/images/Rectangle 7513.png";
import Rectangle7514 from "../../assets/images/Rectangle 7514.png";
import Rectangle750 from "../../assets/images/Rectangle 7510.png";
import Group469614 from "../../assets/images/Group 469614.png";
import PopUpVideo from "./PopUpVideo";
const ProjectPopup = () => {
  const imgData = [
    {
      id: 1,
      src: Rectangle7591,
      src2: Rectangle7510,
    },
    {
      id: 2,
      src: Rectangle7592,
      src2: Rectangle7511,
    },
    {
      id: 3,
      src: Rectangle7593,
      src2: Rectangle7512,
    },
    {
      id: 4,
      src: Rectangle7594,
      src2: Rectangle7513,
    },
    {
      id: 5,
      src: Rectangle7595,
      src2: Rectangle7514,
    },
    {
      id: 6,
      src: Rectangle7596,
    },
    {
      id: 7,
      src: Rectangle7597,
    },
    {
      id: 8,
      src: Rectangle7598,
    },
  ];
  return (
    <div className="">
      <div className="max-w-6xl  py-9 lg:px-24 px-4 mx-auto text-white  ">
        <div className="flex items-center mt-2 py-4">
          <span>Our Works</span>
          <span>
            <img src={chevron} alt="" />
          </span>
          <span className="text-[#00FFFF] font-[500]">Bolt</span>
        </div>
        <div className="pb-4">
          <video controls poster={Group}>
            <source src="your-video-file.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-y-6 pt-10 ">
            <div className="col-span-2 lg:pr-16  flex flex-col justify-center gap-3">
              <h1 className="font-medium font-tek lg:text-[50px] text-3xl uppercase">
                Bolt Bets on Video to Generate Brand Awareness
              </h1>
              <p className="font-light text-xl font-[Rubik]">
                Bolt requested a video to showcase their unique offering of
                making customer checkouts quick, easy, and painless. The brand’s
                Electric Dynamism reflects the excitement and instantaneity of a
                one-click checkout process through the use of dramatic
                wide-angle lenses, energetic movement
              </p>
            </div>
            <div className="w-full">
              <img src={Rectangle7590} alt="" className="w-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 uppercase py-10">
            <div className=" flex flex-col justify-center gap-4">
              <h1 className="font-medium font-tek lg:text-[50px] text-3xl uppercase pb-4">
                YEAR
              </h1>
              <span className="font-light text-[#00FFFF] font-tek lg:text-8xl text-5xl uppercase">
                2024-2025
              </span>
            </div>
            <div className=" flex flex-col justify-center gap-3">
              <h1 className="font-medium font-tek lg:text-[50px] text-3xl uppercase pb-4">
                industry
              </h1>
              <span className="font-light text-[#00FFFF] font-tek lg:text-8xl text-5xl uppercase">
                SOFTWARE
              </span>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {imgData.slice(0, 8).map((item, ind) => {
              return (
                <div
                  key={item.id}
                  className={
                    ind < 4
                      ? "col-span-3"
                      : ind === 4
                      ? "col-span-full"
                      : "col-span-2"
                  }
                >
                  <img src={item.src} alt="" />
                </div>
              );
            })}
          </div>
          <p className="px-10 py-14 text-xl">
            Lorem ipsum dolor sit amet consectetur. Curabitur rhoncus vitae
            posuere sit pharetra. Purus donec enim sagittis parturient imperdiet
            mauris cras. Urna morbi imperdiet dolor amet. Mi et aliquam
            elementum vestibulum risus velit. Quam aliquet morbi id nisl nunc.
          </p>
          <div className="grid grid-cols-6 gap-4">
            {imgData.slice(0, 5).map((item, ind) => {
              return (
                <div
                  key={item.id}
                  className={
                    ind < 1
                      ? "col-span-full"
                      : ind <= 2
                      ? "col-span-3"
                      : ind === 3
                      ? "col-span-2"
                      : "col-span-4"
                  }
                >
                  <img src={item.src2} alt="" />
                </div>
              );
            })}
          </div>
          <p className="px-10 py-14 text-xl">
            Lorem ipsum dolor sit amet consectetur. Curabitur rhoncus vitae
            posuere sit pharetra. Purus donec enim sagittis parturient imperdiet
            mauris cras. Urna morbi imperdiet dolor amet. Mi et aliquam
            elementum vestibulum risus velit. Quam aliquet morbi id nisl nunc.
          </p>
        </div>

        <div>
          <img src={Group469614} alt="" />
        </div>
        <h1 className="font-[500] text-3xl py-14">
          DISCOVER MORE AMAZING PROJECTS
        </h1>
        <PopUpVideo />
      </div>
    </div>
  );
};

export default ProjectPopup;
