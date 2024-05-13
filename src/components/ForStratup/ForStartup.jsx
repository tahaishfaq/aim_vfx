import React from "react";
import arrow2 from "../../assets/images/arrow2.png";
import arrow3 from "../../assets/images/arrow3.png";
import Frame from "../../assets/images/Frame 308.png";
import Logos from "../../assets/images/LOGOS.png";
import Group469378 from "../../assets/images/Group 469378.png";
import Button from "../Button/Button";
import Content from "./Content";
import Rates from "./Rates";
import Marketing from "../Marketing/Marketing";
import PageTestimonals from "../PageTestimonals/PageTestimals";
import ForStartVideo from "./ForStartVideo";
import Question from "../PromationalAbout/Question";
import FooterForm from "../Footer/FooterForm";
import Footer from "../Footer/Footer";
import Promotionalimage from "../PromotionalVideo/Promotionalimage";
import gameicon1 from "../../assets/images/game-icon1.png";
import gameicon2 from "../../assets/images/game-icon2.png";
import gameicon3 from "../../assets/images/game-icon3.png";
import gameicon4 from "../../assets/images/game-icon4.png";
import gameicon5 from "../../assets/images/game-icon5.png";
import gameicon6 from "../../assets/images/game-icon6.png";
import gameicon7 from "../../assets/images/game-icon7.png";
import Socialmedia from "../../assets/images/Socialmedia.png";
import socialicon1 from "../../assets/images/socialicon1.png";
import socialicon2 from "../../assets/images/socialicon2.png";
import socialicon3 from "../../assets/images/socialicon3.png";
import socialicon4 from "../../assets/images/socialicon4.png";
import socialicon5 from "../../assets/images/socialicon5.png";

const ForStartup = () => {
  const logo = [
    {
      img: gameicon1,
      name: "stock footage",
      social: "Facebook",
    },
    {
      img: gameicon2,
      name: "proof-read camptions",
      social: "Instagram",
    },
    {
      img: gameicon3,
      name: "design templates",
      social: "Tiktok",
    },
    {
      img: gameicon4,
      name: "up to 9 assets per order",
      social: "Youtube",
    },
    {
      img: gameicon5,
      name: "submitting instantly",
      social: "Vimeo",
    },
    {
      img: gameicon6,
      name: "unlimited brand accounts",
      social: "You name it...",
    },
    {
      img: gameicon7,
      name: "friendly customer support",
    },
  ];
  return (
    <div className="solution-page">
      <div className="grid lg:grid-cols-2  gap-y-10 py-40 mx-auto 2xl:px-52">
        <div className="flex flex-col justify-center gap-y-3 px-6">
          <span className="lg:text-8xl text-5xl font-tek uppercase text-white">
            OUR TAILORED SOLUTIONS FOR STARTUPS
          </span>
          <p className="text-white">
            Freezing 2 times for two weeks a year If one video editor is not
            enough, then you need to buy another package. You need to pay
            monthly. You need to pay with monthly, quarterly and annual
            discounts.
          </p>
          <br />
          <p className="flex items-center text-[#00FFFF] text-xl font-normal font-[Rubik] py-2">
            <img src={arrow3} alt="" />
            <span>Real time collaboration with your editor via Slack</span>
          </p>
          <p className="flex items-center text-[#00FFFF] text-xl font-normal font-[Rubik] py-2">
            <img src={arrow3} alt="" />
            <span>Real time collaboration with your editor via Slack</span>
          </p>
          <div className="flex sitems-center  gap-x-16  pt-5">
            <Button className="px-8 py-2.5 text-sm font-semibold text-[#000]  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full  hover:text-[#000] hover:bg-cyan-600  focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Book A Call
            </Button>
            <Button className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent  border-2 border-[#fff] rounded-full hover:bg-[#69FBF17D] focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              CHOOSE A PLAN
            </Button>
          </div>
        </div>
        <div className="relative sm:px-12 flex items-center ">
          <img
            src={arrow2}
            alt="img"
            className="xl:block hidden  absolute -top-20"
          />
          <div className="relative overflow-hidden">
            <video controls poster={Group469378} className="object-cover">
              <source src="video-file.mp4" type="video/mp4" />
            </video>
            <div className="play-icon"></div>
          </div>
        </div>
      </div>
      <p className="text-center text-[#fff] uppercase">
        80.082 design projects delivered to 450+ happy clients.
      </p>
      <div>
        <img className="" src={Frame} alt="" />
        <img className="" src={Logos} alt="" />
      </div>
      <Content />
      <Rates />
      <div className="pt-32 text-center">
        <h2 className="font-tek lg:text-8xl text-5xl font-normal uppercase text-white ">
          how it works
        </h2>
      </div>
      <Marketing />
      <div className="pt-32 text-center">
        <h2 className="lg:text-8xl text-5xl font-tek  text-[#fff] uppercase">
          real people, real businesses, real results
        </h2>
      </div>

      <div className="flex flex-col gap-y-7 items-center justify-center py-20 mt-20 pb-40">
        <div className="pt-8 pb-10">
          <PageTestimonals />
        </div>
        <Button className="uppercase text-white border border-[#2EABAF] px-8 py-3 rounded-full">
          Watch More
        </Button>
      </div>

      {/* ------------------------------ Logo or editing section   ---------------------------------------- */}
      <h1 className="text-center lg:text-[50px] text-3xl py-10 text-white font-tek font-normal">
        Every video editing plan includes:
      </h1>
      <div className="grid lg:grid-cols-7 px-6 lg:px-0 md:grid-cols-4 gap-y-8 grid-cols-2 max-w-7xl mx-auto py-10 gap-x-8 ">
        {logo.map((item, ind) => {
          return (
            <span className="flex flex-col gap-y-5 items-center " key={ind}>
              <img className=" object-cover" src={item.img} alt="" />
              <span className="font-normal leading-7 font-tek uppercase text-[32px] text-[#fff] text-center">
                {item.name}
              </span>
            </span>
          );
        })}
      </div>

      {/*------------------  ForStartVideos Section  -----------------------------*/}

      <div className="py-10 lg:px-0 px-4">
        <h1 className="lg:px-60 lg:text-[50px] text-3xl py-10 text-white font-tek font-normal">
          Take a look at some of our works
        </h1>
        <ForStartVideo />
      </div>

      {/*------------------  Social Media Plate Section  -----------------------------*/}
      <div className=" max-w-7xl mx-auto grid lg:grid-cols-2 lg:px-0 px-6">
        <div className="relative ">
          <img src={Socialmedia} alt="" />

          <div className="absolute top-[15%] left-[40%] w-28 flex justify-center items-center rounded-[40px] border-[2px] border-[#00FFFF] h-28 bg-[#0513378C]">
            <img src={socialicon1} alt="" className="w-9 h-9" />
          </div>
          <div className="absolute top-[30%] left-[70%] w-28 flex justify-center items-center rounded-[40px] border-[2px] border-[#00FFFF] h-28 bg-[#0513378C]">
            <img src={socialicon2} alt="" className="" />
          </div>
          <div className="absolute top-[40%] left-[10%] w-28 flex justify-center items-center rounded-[40px] border-[2px] border-[#00FFFF] h-28 bg-[#0513378C]">
            <img src={socialicon3} alt="" className="" />
          </div>
          <div className="absolute top-[70%] left-[30%] w-28 flex justify-center items-center rounded-[40px] border-[2px] border-[#00FFFF] h-28 bg-[#0513378C]">
            <img src={socialicon4} alt="" className=" " />
          </div>
          <div className="absolute  top-[65%] left-[60%] w-28 flex justify-center items-center rounded-[40px] border-[2px] border-[#00FFFF] h-28 bg-[#0513378C]">
            <img src={socialicon5} alt="" className="" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="lg:text-8xl text-5xl uppercase text-white font-tek font-normal ">
            all social media formats
          </h1>
          <p className="text-white text-xl font-[Rubik] font-light py-5">
            Lorem ipsum dolor sit amet consectetur. Phasellus aliquam mi mattis
            ultrices scelerisque. Mattis malesuada sapien aenean odio venenatis
            quis.
          </p>
          <div className="flex flex-wrap gap-x-4 max-w-xl pr-6 gap-y-6">
            {logo.slice(0, 6).map((item, ind) => {
              return (
                <button
                  key={ind}
                  className="text-xl font-semibold font-[Rubik] text-white py-2.5 px-7 border-[1px] border-[#15B8C7] rounded-full bg-[#0B1A28] "
                >
                  {item.social}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <Question />
      <div className="">
        <Promotionalimage />
      </div>
      <FooterForm />
      <Footer />
    </div>
  );
};

export default ForStartup;
