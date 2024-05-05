import React from "react";
import Button from "../Button/Button";
import Screenshot from "../../assets/images/Screenshot2024.png";
import ReviewsVideos from "./ReviewsVideos";
import PricingPortfolio from "../Pricing/PricingPortfolio";
import HomeTestimoal from "../HomeTestimonals/HomeTestimonals";
import Heading from "../Heading/Heading";
import Rectangle160 from "../../assets/images/Rectangle 160.png";
import FooterPricing from "../Pricing/FooterPricing";
import DateConsulation from "../DateConsulation/DateConsulation";
const Reviews = () => {
  const data = [
    {
      src: Screenshot,
    },
    {
      src: Screenshot,
    },
    {
      src: Screenshot,
    },
    {
      src: Screenshot,
    },
  ];
  return (
    <div className="solution-page pt-28">
      {/*------------ Reviews  Hero Section     ------------*/}

      <div className="px-5 sm:px-10 lg:px-20 xl:px-40 mx-auto">
        <div className=" grid xl:grid-cols-2">
          <div>
            <h1 className="py-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase">
              Top Results for real brands
            </h1>
            <p className="text-[20px]">
              Lorem ipsum dolor sit amet consectetur. Velit neque consequat id
              malesuada aenean eu fringilla varius. Risus quam enim quisque in
              turpis arcu non posuere.
            </p>
            <div className="py-8">
              <Button className="px-11 py-2.5 text-sm font-semibold text-[#273A5F]  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                see success stories
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {data.map((item, ind) => {
              return (
                <div key={ind} className="relative overflow-hidden">
                  <video controls poster={Screenshot}>
                    <source src="your-video-file.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="play-button"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" px-9 max-w-5xl mx-auto lg:py-24">
        <div className="text-center grid gap-7 grid-cols-2 md:grid-cols-4">
          <div>
            <h1 className="py-6 text-5xl font-[Teko] text-[#00ffff]">200M+</h1>
            <p>video viewa</p>
          </div>
          <div>
            <h1 className="py-6 text-5xl font-[Teko] text-[#00ffff]">335%</h1>
            <p>
              best increase in <br /> brand recall
            </p>
          </div>
          <div>
            <h1 className="py-6 text-5xl font-[Teko] text-[#00ffff]">93%</h1>
            <p>
              view rate for <br /> brand videos
            </p>
          </div>
          <div>
            <h1 className="py-6 text-5xl font-[Teko] text-[#00ffff]">+$130K</h1>
            <p>raised in one crowdfunding campaign</p>
          </div>
        </div>
      </div>
      {/*------------ Reviews Video Section     ------------*/}

      <div className="py-10 px-6">
        <ReviewsVideos />
      </div>
      {/* ---------- Testimonals Section -----------*/}
      <div className="2xl:max-w-7xl mx-auto flex flex-col gap-y-7 items-center justify-center py-20 ">
        <div className="flex flex-col items-center justify-center">
          <Heading className="text-[60px] font-tek text-white uppercase leading-tight">
            Testimonals
          </Heading>
          <p className="text-sm text-white  text-center">
            A Collection of Client Testimonials That Speak Volumes.
          </p>
          <div className=" p-4 sm:px-20 ">
            <div className="relative overflow-hidden p-6 lg:p-20 border-4 border-[#15B8C7] rounded-3xl">
              <video controls poster={Rectangle160}>
                <source src="your-video-file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="play-button"></div>
            </div>
          </div>
        </div>
        <div className="pt-8 pb-10 lg:px-0 px-3">
          <HomeTestimoal />
        </div>
        <Button className="uppercase text-white border border-[#2EABAF] px-8 py-3 rounded-full">
          Watch More
        </Button>
      </div>
      <FooterPricing />
    </div>
  );
};

export default Reviews;