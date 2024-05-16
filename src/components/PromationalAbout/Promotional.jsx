import React from "react";
import shape7 from "../../assets/video bubbles (1).png";
// import Copy from "../../assets/images/Copy.png";
import Copy1 from "../../assets/images/Copy1.png";
import Screenshort from "../../assets/images/Screenshot.png";
import Promotional1 from "../Promotional1/Promotional1";
import Maxine from "../Maxine/Maxine";
import Persntage from "../Persentage/Persentage";
import Helpus from "../Helpus/Helpus";
import Vfx from "../VFX/Vfx";
import Promotionalimage from "../PromotionalVideo/Promotionalimage";
import Hero from "./Hero";
import Frame from "../../assets/images/Frame 308.png";
import Logos from "../../assets/images/LOGOS.png";
import FooterForm from "../Footer/FooterForm";
import Question from "../PromationalAbout/Question";
import Clients from "../Clients/Clients";
import Promotionalvideo from "../PromotionalVideo/Promotionalvideo";
import Footer from "../Footer/Footer";
const Promotional = () => {
  return (
    <div className="solution-page">
      <Hero />
      <div>
        <img src={Frame} alt="" />
        <img src={Logos} alt="" />
      </div>
      <Vfx />
      <div>
        <div className="flex items-center p-32 mx-auto max-w-7xl">
          <div className="flex flex-col gap-y-3">
            <span className="team-hero-heading">
              From creative ads to multiple designs
            </span>
            <div className="w-96">
              <p className="text-white">
                JUST THE SUBHEAD HERE:
                <br />
                Freezing 2 times for two weeks a year If one video editor is not
                enough, then you need to buy another package. You need to pay
                monthly. You need to pay with monthly, quarterly and annual
                discounts.
              </p>
            </div>
          </div>
          <div className="relative ">
            <img src={shape7} alt="img" className="" />
            <div className="p-16">
              <div className=" absolute top-10  p-12">
                <img src={Copy1} alt="" />
              </div>
              <div className="">
                <img
                  className="absolute top-28 p-16 left-9"
                  src={Screenshort}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Promotional1 />
      <Maxine />
      <Promotionalvideo />
      <Persntage />
      <Helpus />
      <div>
        <div className="text-center">
          <h1 className="font-tek font-[400] text-[#fff] text-[40px] sm:text-[50px] lg:text-[100px]">
            why clients love aimfx
          </h1>
          <Clients />
        </div>
      </div>
      <Question />
      <Promotionalimage />
      <FooterForm />
      <Footer />
    </div>
  );
};
// <Mxine2 />
// <BlogPost />

export default Promotional;
