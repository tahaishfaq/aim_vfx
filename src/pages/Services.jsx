import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import shape7 from "../assets/127_arrow_icon_logo_with_3d_modern_style copy 1.png";
import video from "../assets/video.jpg";
import Button from "../components/Button/Button";

const Services = () => {
  return (
    <div className="service-top-section">
      <Navbar />
      <div className="service-hero-section">
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
          <div className="service-hero-buttons flex gap-y-5 p-10">
            <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Choose a plan
            </Button>
            <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              book a call
            </Button>
          </div>
        </div>
        <div className="service-hero-img">
          <img src={shape7} alt="Image 9" className="side-image" />
          <img
            src={video}
            alt="Image 9"
            className="video-img w-[581.37px] h-[292px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
