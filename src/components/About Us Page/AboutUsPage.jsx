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
  return (<>
    <div className="solution-page">
    <div className="flex items-center pt-60  mx-auto max-w-7xl px-32 py-16">
         <div className="flex flex-col gap-y-3">
           <span className="team-hero-heading">
           about our
           </span>
           <div className="w-96">
             <p className="text-white">
             VIDEO PRODUCTION AGENCY :<br />
Aim FX is a full-service video production agency in London, providing end-to-end solutions for all creative video campaigns, that provide an uplifting change of pace from the tired and overused methods seen elsewhere. </p>
           </div>
           <div className="flex gap-y-5 mt-10">
             {/* <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              choice your plan
             </Button> */}
             <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
             animated video services
             </Button>
           </div>
         </div>
         {/* ------------ Right Side Hero Section --------------- */}
         <div className="relative">
           <ServivePageVideo />
   
         </div>
       </div>
        <div className="flex items-center  mx-auto max-w-7xl px-32 py-16">
              {/* ------------ Right Side Hero Section --------------- */}
         <div className="relative">
         <ServivePageVideo />
         </div>
         <div className="flex flex-col gap-y-3 pl-6">
           <span className="team-hero-heading">
           video cost
           </span>
           <div className="w-96">
             <p className="text-white">
             VIDEO PRODUCTION COSTS:<br />
Explore our video production costs page to gain a clear understanding of investment options tailored to your creative vision and project needs.</p>
           </div>
           <div className="flex gap-y-5 mt-10">
             {/* <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              choice your plan
             </Button> */}
             <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
             video production costs
             </Button>
           </div>
         </div>
       
       </div>
       <div className="flex items-center   mx-auto max-w-7xl px-32 py-16">
         <div className="flex flex-col gap-y-3">
           <span className="team-hero-heading">
           Our capabilities
           </span>
           <div className="w-96">
             <p className="text-white">
             VIDEO PRODUCTION AGENCY:<br />
Specialising in bespoke, eye-catching video content that delivers more clicks, more sales, and more likes. </p>
           </div>
           <div className="flex gap-y-5 mt-10">
             {/* <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              choice your plan
             </Button> */}
             <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
             get a quote
             </Button>
           </div>
         </div>
         {/* ------------ Right Side Hero Section --------------- */}
         <div className="relative">
           <ServivePageVideo />
   
         </div>
       </div>
      <div className="mx-auto max-w-7xl  py-24 sm:px-2 sm:py-32 lg:px-48">
        

          <div className="mt-10 space-y-16  pt-10 sm:mt-16 sm:pt-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12  lg:gap-x-8"
              >
                <div className="mt-6 flex flex-col py-4 gap-12 justify-between lg:col-span-6 lg:mt-0 xl:col-span-6">
                 <div className=''>
                 <h1 className="text-2xl font-medium text-white">{feature.name}</h1>
                  <p className="mt-4 text-base text-white">{feature.description}</p>
                 </div>
                <div className='w-60'>
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
        <GetToKnowUs/>
        <Location/>
        <OurStory/>
        <div className=" pb-16 pt-24 px-44 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-[#2EABAF] rounded-xl pb-20 sm:pb-0 pt-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center  gap-x-8 gap-y-2 pr-6 sm:gap-y-2 lg:pr-8 xl:flex-row ">
        
            <div className="relative w-full">
             {/* <div className=''> */}
             <img
                className="  w-full absolute top-[-20rem]  object-cover"
                src={shape4}
                alt=""
              />
                {/* </div>  */}
            </div>
         
          <div className="w-full max-w-2xl py-[58px] xl:px-0 ">
            <figure className=" ">
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <Heading className="text-5xl uppercase">Let’s create our future together</Heading>
                <p className='pt-4'>
                Don’t forget to check out our career page to see available positions
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
    <LetsTalk/>
   </div>
       </>
  )
}

export default AboutUsPage;
