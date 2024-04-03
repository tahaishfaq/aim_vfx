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

const Services = () => {
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

      {/* ============================================ */}
      {/* --------------- Solution Section ----------- */}
      {/* ============================================ */}

      <div className="solution-cards">
        <SolutionCard />
      </div>
      {/* ============================================ */}
      {/* --------------- Calendar Section ----------- */}
      {/* ============================================ */}
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

      {/* ============================================ */}
      {/* --------------- Rates Section ----------- */}
      {/* ============================================ */}
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
        <div className="rates-count">
          <div className="rate-count-content">
            <h3 className="count-head">MUCH FASTER</h3>
            <h1 className="count-nmbr">20x</h1>
            <p className="count-text">Faster than hiring creatives in-house</p>
          </div>
          <div className="rate-count-content">
            <h3 className="count-head">CUT COSTS</h3>
            <h1 className="count-nmbr">50%</h1>
            <p className="count-text">Reduction in average of cost per asset</p>
          </div>
          <div className="rate-count-content">
            <h3 className="count-head">Ship Faster</h3>
            <h1 className="count-nmbr">70%</h1>
            <p className="count-text">
              Lower turnaround time for digital assets
            </p>
          </div>
          <div className="rate-count-content">
            <h3 className="count-head">Stress Less</h3>
            <h1 className="count-nmbr">9.6</h1>
            <p className="count-text">Average rating from customers.</p>
          </div>
        </div>

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

      {/* ============================================ */}
      {/* --------------- Rates Section -------------- */}
      {/* ============================================ */}

      <div className="save-time-section">
        <div className="save-time-head">
          <h1>how much time you save with aim fx?</h1>
        </div>
        <div className="">
          <div className="flex items-center justify-between">
            <p className="text-[#00FFFF]">
              You save hundreds of collective hours by not doing your own video
              editing:
            </p>

            <div className="time-save">
              <div className="time"> Cutting</div>
              <div> Color Correction</div>
              <div> Adding Subtitles</div>
            </div>
            <div>
              <div>Slicing</div>
              <div>Fixing Audio</div>
              <div>Transitions</div>
            </div>
          </div>
          <div className="flex">
            <p>
              You save hundreds of collective hours by not doing your own video
              editing:
            </p>
            <div className="flex">
              <div>Cutting</div>
              <div>Slicing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
