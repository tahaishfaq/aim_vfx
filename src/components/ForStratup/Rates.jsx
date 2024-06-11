import React from "react";
import Rectangle130 from "../../assets/images/Rectangle 130.png";
import Rectangle7583 from "../../assets/images/Rectangle 7583.png";
import Design3d from "../Design3d/Design3d";
import Promotionalimage from "../PromotionalVideo/Promotionalimage";
import Rateimage from "./RateImages";

const Rates = () => {
  return (
    <div className="promotional-section py-40 sm:20">
      <div className="sm:px-28 md:px-40 px-6 2xl:px-80 xl:px-40 lg:px-10 lg:pt-24  grid lg:grid-cols-2 gap-y-10 text-[#fff]  gap-x-14">
        <div className="relative overflow-hidden">
          <video controls poster={Rectangle130} className="object-cover">
            <source src="video-file.mp4" type="video/mp4" />
          </video>
          <div className="play-icon"></div>
        </div>
        <div className="text-[#fff]">
          <h2 className="lg:text-[50px] text-3xl font-tek font-medium">
            Hands down the best way to create consistent video content!
          </h2>
          <p className="text-xl  font-normal font-[Rubik]">
            Lorem ipsum dolor sit amet consectetur. Lectus fusce sit amet cursus
            dignissim viverra aliquam orci. Elit viverra nunc ut mauris amet
            amet egestas tortor. Eros.
          </p>
          <div className="flex gap-2 pt-3">
            <span>
              <img src={Rectangle7583} alt="" />
            </span>
            <span>
              <span className="italic font-[700]">Dean Collins</span>
              <p className="font-[300] text-[#00FFFF] text-[18px]">
                Director of Brand Design
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="sm:px-28 2xl:px-80 xl:px-40 lg:px-10 pt-28 px-6">
        <h2 className=" max-w-2xl text-white text-5xl font-tek font-normal uppercase lg:text-8xl">
          EDITING SERVICES FOR BUSINESS OWNERS
        </h2>
      </div>
      <Rateimage />
    </div>
  );
};

export default Rates;
