import React from "react";
import ServivePageVideo from "../CustomVideo/ServicePageVideo";
import Button from "../Button/Button";

import shape4 from "../../assets/holographic_fluid_drop_shapes_illustration_02 copy 4.png";
import shape7 from "../../assets/video bubbles (1).png";
import OurStory from "./OurStory";
import Heading from "../Heading/Heading";
import LetsTalk from "../Team Page/LetsTalk";
import GetToKnowUs from "../GetToKnowUs/GetToKnowUs";
import Location from "../Location/Location";
const features = [
  {
    name: "Dmitriy Gladenko ",
    description: "Company VideoFx.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-03.jpg",
    imageAlt: "case study",
  },
  {
    name: "Dmitriy Gladenko ",
    description: "Company VideoFx",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-01.jpg",
    imageAlt: "case study",
  },
  {
    name: "Dmitriy Gladenko ",
    description: "Company VideoFx",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-02.jpg",
    imageAlt: "case study",
  },
];
const AboutUsPage = () => {
  return (
    <>
      <div className="solution-page">
        <div className="flex flex-col items-center justify-center lg:gap-y-20 gap-y-6">
        <div className="flex lg:flex-row justify-center flex-col gap-y-6 items-center lg:pt-60 pt-28 mx-auto max-w-7xl lg:px-32 px-3 pb-10 lg:pb-16">
          <div className="flex flex-col gap-y-3">
            <span className="team-hero-heading">about our</span>
            <div className="lg:w-96 lg:mt-0 -mt-5">
              <p className="text-white">
                VIDEO PRODUCTION AGENCY :<br />
                <span className="lg:text-base text-sm">
                Aim FX is a full-service video production agency in London,
                providing end-to-end solutions for all creative video campaigns,
                that provide an uplifting change of pace from the tired and
                overused methods seen elsewhere.{" "}</span>
              </p>
            </div>
            <div className="flex gap-y-5 lg:mt-10 mt-4">
              <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                animated video services
              </Button>
            </div>
          </div>
          {/* ------------ Right Side Hero Section --------------- */}
          <div className="lg:relative">
            <ServivePageVideo />
          </div>
        </div>

        <div className="flex  lg:flex-row justify-center flex-col-reverse gap-y-6 items-center  mx-auto max-w-7xl lg:px-32 px-3 pb-10 lg:pb-16">
          {/* ------------ Right Side Hero Section --------------- */}
          <div className="lg:relative">
            <ServivePageVideo />
          </div>
          <div className="flex flex-col gap-y-3 px-3 lg:pl-6">
            <span className="team-hero-heading">video cost</span>
            <div className="lg:w-96 lg:mt-0 -mt-4">
              <p className="text-white">
                VIDEO PRODUCTION COSTS:
                <br />
                <span className="lg:text-base text-sm">
                Explore our video production costs page to gain a clear
                understanding of investment options tailored to your creative
                vision and project needs.
                </span>
              </p>
            </div>
            <div className="flex gap-y-5 lg:mt-10 mt-4">
              <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                video production costs
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:flex-row flex-col gap-y-6 mx-auto max-w-7xl lg:px-32 px-3 pb-10 lg:pb-16 gap-x-3">
          <div className="flex flex-col gap-y-3 ">
            <span className="team-hero-heading">Our capabilities</span>
            <div className="lg:w-96 lg:mt-0 -mt-4">
              <p className="text-white">
                VIDEO PRODUCTION AGENCY:
                <br />
                <span className="lg:text-base text-sm">
                Specialising in bespoke, eye-catching video content that
                delivers more clicks, more sales, and more likes.{" "}
                </span>
              </p>
            </div>
            <div className="flex gap-y-5 lg:mt-10 mt-4">
              <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                get a quote
              </Button>
            </div>
          </div>
          {/* ------------ Right Side Hero Section --------------- */}
          <div className="lg:relative">
            <ServivePageVideo />
          </div>
        </div>

        </div>

        
        <div className="mx-auto max-w-7xl  lg:py-32 lg:px-48 px-3 py-10">
          <div className="lg:space-y-16  flex flex-col gap-y-10">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12  lg:gap-x-8"
              >
                <div className=" flex flex-col py-4 lg:gap-12 gap-6 justify-between lg:col-span-6 mt-0 xl:col-span-6">
                  <div className="">
                    <h1 className="text-2xl font-medium text-white">
                      {feature.name}
                    </h1>
                    <p className="mt-4 text-base text-white">
                      {feature.description}
                    </p>
                  </div>
                  <div className="w-60">
                    <Button className="px-4 py-2.5  text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                      {feature.imageAlt}
                    </Button>
                  </div>
                </div>
                <div className="flex-auto lg:col-span-5 xl:col-span-6">
                  <ServivePageVideo />
                </div>
              </div>
            ))}
          </div>
        </div>


        <GetToKnowUs />
        <Location />
        <OurStory />
        <div className=" lg:pb-16 pb-10 lg:pt-24 pt-10 lg:px-44 px-3">
          <div className="bg-[#2EABAF] rounded-xl pb-10 lg:pb-14 px-0 ">
            <div className="flex flex-col lg:flex-row lg:items-center items-start justify-center gap-x-40 gap-y-6">
              <div className="w-1/2">
                <img
                  className="  w-auto  object-cover"
                  src={shape4}
                  alt=""
                />
              </div>

              <div className="w-full px-3">
                <figure className=" ">
                  <blockquote className="text-white leading-tight">
                    <Heading className="lg:text-[60px] text-[40px] uppercase font-tek">
                      Let’s create our future together
                    </Heading>
                    <p className="lg:text-base text-sm pt-4">
                      Don’t forget to check out our career page to see available
                      positions
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 text-base">
                    <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                      Available positions
                    </Button>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <LetsTalk />
      </div>
    </>
  );
};

export default AboutUsPage;
