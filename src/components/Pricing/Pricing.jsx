import React from "react";
import Things from "../../assets/images/Things Below Heading.png";
import { TagIcon } from "@heroicons/react/24/outline";
import PricingCard from "./PricingCard";
import GuaranteCard from "./GuaranteCard";
import PageTestimonals from "../PageTestimonals/PageTestimals";
import Button from "../Button/Button";
import HomeTestimoal from "../HomeTestimonals/HomeTestimonals";
import Heading from "../Heading/Heading";
import FooterPricing from "./FooterPricing";
import PricingPortfolio from "./PricingPortfolio";
import PopUpForm from "../PopUpForm/PopUpForm";
import PricingArrow from "../../assets/images/PricingArrow.png";
const Pricing = () => {
  return (
    <div className="solution-page pt-28 text-white">
      <div className=" relative ">
        <img src={PricingArrow} alt="" className="absolute right-0 -z-50" />

        <div className="py-14 lg:max-w-5xl mx-auto  text-center ">
          <h2 className="text-[35px] sm:text-[45px] font-[500] lg:text-[60px] uppercase">
            Manage All Your Social Media Profiles From One Place.
          </h2>
          <div className="pt-8">
            <img src={Things} alt="" />
          </div>
          <div className="flex gap-4 justify-center  text-slate-800 py-14">
            <span className="flex items-center gap-x-4 font-[500] rounded-xl bg-white py-1 px-2 cursor-pointer">
              <button className="pr-2 border-r-[.5px] ">Monthly plan</button>
              <span className="flex gap-1">
                <button>Quarterly </button>
                <span className="pl-2 text-[#0E2140]">10% OFF</span>
              </span>
              <span className="font-[500] flex gap-4 bg-[#00ffff] py-4 rounded-xl ">
                <button className="px-2 text-[#0E2140]">Yearly</button>
                <button className="px-2 text-[#0E2140] flex">
                  <TagIcon className="h-6 w-6 text-[#0E2140]" />
                  Get 1 month free
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>
      <PricingCard />
      <PricingPortfolio />
      {/* ---------- Pricing Form Section -----------*/}

      <div className="promotional-section py-20">
        <div className="mx-auto max-w-5xl">
          <PopUpForm />
        </div>
      </div>
      <GuaranteCard />

      {/* ---------- Testimonals Section -----------*/}
      <div className="2xl:max-w-7xl mx-auto flex flex-col gap-y-7 items-center justify-center py-20 ">
        <div className="flex flex-col items-center justify-center">
          <Heading className="text-[60px] font-tek text-white uppercase leading-tight">
            Testimonals
          </Heading>
          <p className="text-sm text-white  text-center">
            A Collection of Client Testimonials That Speak Volumes.
          </p>
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

export default Pricing;
