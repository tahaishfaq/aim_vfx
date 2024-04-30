import React from "react";
import Search from "../../assets/images/search.png";
import FooterForm from "../Footer/Footer";
import Arrow from "../../assets/images/Arrow.png";
import chevron from "../../assets/images/chevron-right (1).png";
import Screenshot from "../../assets/images/Screenshot 2025.png";
import Group from "../../assets/images/Group 469378.png";
import Rectangle7583 from "../../assets/images/Rectangle 7583.png";
import TurnAround from "./TurnAround";

const HelpTutorial = () => {
  return (
    <div className="solution-page pt-28">
      <div className=" px-5 sm:px-10 md:px-20 lg:px-40 xl:px-40 2xl:px-96 py-24">
        <h1 className="text-[#fff] text-[35px] py-4 font-[500] ">
          Advice and answers from the AIM-FX Team
        </h1>
        <div className="flex justify-between p-2 px-4 bg-[#fff] rounded-full">
          <input
            className="w-full  outline-0"
            type="text"
            placeholder="Search for articles"
          />
          <img src={Search} alt="" />
        </div>
      </div>
      <div className="promotional-section px-5 py-36 sm:px-10 md:px-20 lg:px-40 xl:px-40 2xl:px-96">
        <div className="grid   lg:grid-cols-5 gap-">
          <div className="col-span-4">
            <div className="text-[#fff] ">
              <div className="flex">
                <span>All Collections</span>
                <img src={chevron} alt="" />
                <span className="text-[#00FFFF] font-[400]">
                  AIM-FX Tutorials and FAQ
                </span>
              </div>
              <h1 className="text-[40px] lg:text-[70px] py-2 uppercase">
                all in one aim-fx tutorial
              </h1>
              <p className="pb-3">
                Lorem ipsum dolor sit amet consectetur. Nunc sit amet rutrum
                ullamcorper lacinia consequat.
              </p>
            </div>
            <div>
              <video controls poster={Screenshot}>
                <source src="your-video-file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex justify-between items-center gap-2 pt-3">
                <div className="flex items-center gap-2 ">
                  <span className="flex flex-wrap">
                    <img src={Rectangle7583} alt="" />
                  </span>
                  <span>
                    <span className="italic text-[#fff] font-[700]">
                      Dean Collins
                    </span>
                    <p className="font-[300] text-[#00FFFF] text-[18px]">
                      Director of Brand Design
                    </p>
                  </span>
                </div>
                <p className="text-[#fff] lg:pr-28">Postes 2 weeks ago</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 border-l-2 text-[#fff] pl-4">
            <ul className="lg:flex lg:flex-col gap-y-4">
              <li>Chapter 01</li>
              <li>Chapter 02</li>
              <li>Chapter 03</li>
              <li>Chapter 04</li>
              <li>Chapter 05</li>
              <li>Chapter 06</li>
              <li>Chapter 07</li>
              <li>Chapter 08</li>
              <li>Chapter 09</li>
              <li>Chapter 10</li>
              <li>Chapter 11</li>
            </ul>
          </div>
        </div>
      </div>
      <TurnAround />
      <FooterForm />
    </div>
  );
};

export default HelpTutorial;
