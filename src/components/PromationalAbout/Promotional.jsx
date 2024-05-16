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
import copy from "../../assets/images/copy 2 .png";
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
        <div className="grid lg:grid-cols-3 gap-y-10 gap-x-14  pb-28 px-6 mx-auto max-w-7xl">
          <div className="lg:col-span-2 flex flex-col gap-y-3 lg:px-10">
            <h1 className="lg:text-7xl  text-5xl font-tek font-normal text-white uppercase">
              From creative ads to multiple designs
            </h1>
            <div className="">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur. Sed enim tincidunt etiam
                quis nulla pellentesque. Facilisis orci rhoncus adipiscing
                donec. Pellentesque sed sit lorem orci rutrum. Mi ac morbi
                convallis massa amet pellentesque gravida. Sed sed nisl in diam
                arcu non nunc mi leo. <br /> Id natoque hendrerit gravida
                posuere pulvinar consectetur augue tincidunt. Commodo eu
                pharetra velit platea vestibulum purus. Bibendum mattis
                consequat dignissim morbi nibh venenatis eu felis. Non elit elit
                posuere morbi. Elit et cursus nisl egestas sed. Mi id turpis
                massa sit elementum. Malesuada enim sit et enim orci. Venenatis
                risus viverra pellentesque nec in praesent sit. A elit urna in
                nunc bibendum arcu senectus dolor. Molestie urna egestas mauris
                a volutpat. Ac turpis donec scelerisque nam lectus sit risus id.
                Aliquet mattis eget pellentesque pharetra nisl dui. Id mauris
                bibendum et eu felis eu gravida. Ultricies dignissim ac etiam
                non est faucibus feugiat.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1  col-span-full relative flex flex-col justify-center items-center ">
            <img src={Copy1} alt="" className="w-[527.34px]" />

            <div className="absolute z-10 top-28">
              <img className="" src={Screenshort} alt="" />
            </div>
            <div className="2xl:block hidden absolute -top-[500px] -left-96 -z-10 w-[900px]">
              <img src={copy} alt="img" className="w-[1895.96px]" />
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
        <div className="">
          <h1 className="text-center uppercase font-tek font-[400] text-[#fff] text-[40px] sm:text-[50px] lg:text-[100px]">
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
