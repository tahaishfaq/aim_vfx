import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import shape7 from "../assets/127_arrow_icon_logo_with_3d_modern_style copy 1.png";
import Button from "../components/Button/Button";
import solution from "../assets/Solution.png";
import calendar from "../assets/Calendar.png";
import ServivePageVideo from "../components/CustomVideo/ServicePageVideo";
import SolutionCard from "../components/ServiceSolutionCards/SolutionCard";
import ServiceLogoBar from "../components/LogoBars/ServiceLogoBar";
import SerRatesVideo from "../components/CustomVideo/SerRatesVideo";
import ServicesBenefits from "../components/ServiceSolutionCards/ServiceBenefits";
import ServiceRateSection from "../components/RateSection/ServiceRateSection";
import Heading from "../components/Heading/Heading";
import { Divider } from "@mui/material";
import ServiceRateDesc from "../components/RateSection/ServiceRateDesc";
import ServiceRatesCount from "../components/RateSection/RatesCount";
import HowItWorks from "../components/ServiceComponents/HowItWorks";
import ServicePortfolioVideo from "../components/ServiceComponents/ServicePortfolio";
import HomeTestimoal from "../components/HomeTestimonals/HomeTestimonals";
import { FaPercent, FaStar, FaTrophy } from "react-icons/fa";
import WorkHistory from "../components/WorkHistory/WorkHistory";
import FaqSection from "../components/FAQ/FAQ";
import FooterForm from "../components/Footer/Footer";

const Services = () => {
  const descriptions = [
    [
      "Releasing that overwhelming pressure to get through your editing backlog",
      "Getting more leisure time and enjoying it more with one less thing to worry about",
      "Getting more joy out of creating content with freedom to explore your creative side",
    ],
    [
      "Using your skills and focusing your expertise to create better, more unique content",
      "Pursuing held-back ideas to reach your full potential as a content creator",
    ],
  ];

  return (
    <div className="service-page">
      <div className="service-top-section">
        <Navbar />
        <div className="service-hero-section">
          <img src={solution} alt="Image 7" class="solutionText" />

          <div className="service-hero-left-part">
            <span className="service-hero-heading">
              the video editing service for content creators
            </span>
            <div className="services-list">
              <span>
                <img src={shape7} alt="img" className="w-7" />
                For Startups
              </span>
              <span>
                <img src={shape7} alt="img" className="w-7" />
                For Productions
              </span>
              <span>
                <img src={shape7} alt="img" className="w-7" />
                For Agencies
              </span>
              <span>
                <img src={shape7} alt="img" className="w-7" />
                For Enterprise
              </span>
              <span>
                <img src={shape7} alt="img" className="w-7" />
                For Creators
              </span>
              <span>
                <img src={shape7} alt="img" className="w-7" />
                For Enterpreneurs
              </span>
            </div>
            <div className="service-hero-buttons flex gap-y-5">
              <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                Choose a plan
              </Button>
              <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                book a call
              </Button>
            </div>
          </div>
          {/* ------------ Right Side Hero Section --------------- */}
          <div className="service-video-section">
            <img src={shape7} alt="img" className="side-image" />
            <div className="service-video-img">
              <ServivePageVideo />
            </div>
          </div>
        </div>
        <div className="logoBars-service flex flex-col items-center">
          <ServiceLogoBar />
        </div>
      </div>
      {/* ============================================ */}
      {/* ------------- Solution Section ------------- */}
      {/* ============================================ */}

      <div className="solution-section">
        <div className="solution-content">
          <h3 className="solution-heading">Solutions</h3>
          <p className="sol-desc">
            For Startup, For Enterprise, For Agencies/Production, For Creators,
            For Enterprenuers
          </p>
        </div>
      </div>

      {/* --------------- Solution Section ----------- */}

      <div className="solution-cards">
        <SolutionCard />
      </div>

      {/* --------------- Calendar Section ----------- */}

      <div className="calendar-section">
        <div className="calendar-container">
          <div className="calendar-content">
            <h2 className="bookCallText">book a call now</h2>
            <h4 className="nextStepText">
              To discuss details and take the next step
            </h4>
            <p className="mainText">
              Lorem ipsum dolor sit amet consectetur. Mollis in vestibulum et
              sit duis viverra. Purus lacus amet mollis aenean fringilla. Diam
              ornare in purus viverra. Nullam amet neque in consectetur
              suspendisse sem elit vel. Arcu lorem nulla risus dis. Eu euismod
              hac amet enim aliquet tristique. Donec nunc id eget et sit. Purus
              nam elementum nunc ipsum augue luctus amet risus massa.
            </p>
          </div>
          <div className="calendar">
            <img src={calendar} alt="Calendar" class="h-200" />
          </div>
        </div>
      </div>

      {/* --------------- Rates Section ----------- */}

      <div className="rates-section">
        <div className="rates-container">
          <div className="rates-top">
            <h1 className="rate-heading">
              better rates than hiring a creative in house
            </h1>
            <div className="rates-video">
              <SerRatesVideo />
            </div>
          </div>
        </div>
        <ServiceRatesCount />
        <div className="third-count-content">
          <h1 className="countDesc">
            All benefits of getting your video editing done for you, without the
            headaches of hiring, managing or spending $$$ on equipment and
            software
          </h1>
        </div>

        <div className="service-benefits-section">
          <ServicesBenefits />
        </div>
      </div>

      {/* --------------- Time Section -------------- */}

      <div className="save-time-section">
        <ServiceRateSection />
        <div className="dividerStyle">
          <Divider sx={{ backgroundColor: "#d9d9d9" }} />
        </div>
        <div className="rate-bottom-content">
          <Heading className="rate-bottom-content-heading uppercase text-white font-tek">
            imagine not doing any of the above while still producing on-brand
            videos you can be proud of...
          </Heading>
          <p className="rate-bottom-content-para">
            Lorem ipsum dolor sit amet consectetur. Mollis in vestibulum et sit
            duis viverra. Purus lacus amet mollis aenean fringilla. Diam ornare
            in purus viverra. Nullam amet neque in consectetur suspendisse sem
            elit vel. Arcu lorem nulla risus dis. Eu euismod hac amet enim
            aliquet tristique. Donec nunc id eget et sit. Purus nam elementum
            nunc ipsum augue luctus amet risus massa.
          </p>
        </div>
        {/* ---------- Service Rate Description ------------ */}
        <ServiceRateDesc descriptions={descriptions} />

        <div className="rate-button flex gap-y-5">
          <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            book a call
          </Button>
          <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            Choose a plan
          </Button>
        </div>

        <div className="dividerStyle">
          <Divider sx={{ backgroundColor: "#d9d9d9" }} />
        </div>
        {/* -------------- How it Works Section ---------- */}
        <div className="how-it-work-ser">
          <Heading className="how-it-work-heading uppercase text-white text-center font-tek">
            how it works
          </Heading>
          <div className="ser-work-sec">
            <HowItWorks />
            <div className="how-work-btn">
              <Button className="how-work-btn-style px-8 py-2.5 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                schedule a free consulation
              </Button>
            </div>
          </div>
        </div>
        {/*   ---------- portFolio Section ----------- */}

        <div className="flex flex-col gap-y-7 items-center justify-center py-20 ">
          <div className="flex flex-col items-center justify-center">
            <Heading className="text-[60px] font-tek text-white uppercase leading-tight">
              Portfolio
            </Heading>
            <p className="text-sm text-white  text-center">
              Uncover Our Rich Array of Work: Browse Categories Ranging from
              eLearning to Hollywood-style Productions.
            </p>
          </div>
          <div className="flex items-center justify-center gap-x-4">
            <Button className="px-8 py-2.5 text-sm font-semibold text-black bg-white  hover:border-gray-800 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Category
            </Button>
            <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Category
            </Button>
            <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Category
            </Button>
          </div>
          <div className="pt-6 pb-10">
            <ServicePortfolioVideo />
          </div>
          <Button className="uppercase text-white border border-white px-8 py-3 rounded-full">
            Watch More
          </Button>
        </div>

        {/* ---------- Testimonals Section -----------*/}
        <div className="flex flex-col gap-y-7 items-center justify-center py-20 mt-20">
          <div className="flex flex-col items-center justify-center">
            <Heading className="text-[60px] font-tek text-white uppercase leading-tight">
              Testimonals
            </Heading>
            <p className="text-sm text-white  text-center">
              A Collection of Client Testimonials That Speak Volumes.
            </p>
          </div>
          <div className="pt-8 pb-10">
            <HomeTestimoal />
          </div>
          <Button className="uppercase text-white border border-[#2EABAF] px-8 py-3 rounded-full">
            Watch More
          </Button>
        </div>

        {/* ----------- Awards Section ---------- */}
        <div className="flex items-center justify-center ">
          <div className="flex gap-x-8 border border-[#15B8C7] px-20 pt-10 pb-6 rounded-[35px]">
            <div className="flex flex-col  gap-y-6 ">
              <Heading className="uppercase text-4xl font-bold italic text-[#15B8C7]">
                Upword Activity
              </Heading>

              <div className="flex gap-x-20">
                <div className="flex flex-col text-white">
                  <span className="text-gray-300">Hourly Rate</span>
                  <span className="font-bold">$25.00 - $50.00</span>
                </div>
                <div className="flex flex-col text-white">
                  <span className="text-gray-300">Minimum project size</span>
                  <span className="font-bold">$1K+</span>
                </div>
                <div className="flex flex-col text-white">
                  <span className="text-gray-300">Total earned</span>
                  <span className="font-bold">$100K+</span>
                </div>
              </div>
            </div>

            <div class="h-32 w-0.5 bg-gray-500"></div>
            <div className="flex flex-col gap-y-4">
              <Heading className="uppercase text-2xl font-bold italic text-[#15B8C7] leading-tight">
                Awards
              </Heading>
              <div className="flex flex-col gap-y-3 -mt-2">
                <div className="flex flex-col text-white text-sm">
                  <span className="flex items-center gap-x-1.5">
                    <FaStar />
                    Cannes Lions
                  </span>
                  <span className="flex items-center gap-x-1.5">
                    <FaStar />
                    Red Apple
                  </span>
                </div>
                <div className="flex flex-col text-[#15B8C7]">
                  <span className="flex items-center gap-x-1.5">
                    {" "}
                    <FaTrophy />
                    100% success rate
                  </span>
                  <span className="flex items-center gap-x-1.5">
                    <FaPercent />
                    Top Rated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WorkHistory />
      </div>
      <FaqSection />
      <FooterForm />
    </div>
  );
};

export default Services;
