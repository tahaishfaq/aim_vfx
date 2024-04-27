import React from "react";
import Article from "../../assets/images/article 1.png";
import article from "../../assets/images/article.png";
import teenyicons from "../../assets/images/teenyicons_book-solid.png";
import Vector from "../../assets/images/Vector.png";
import Group from "../../assets/images/Group.png";
import material from "../../assets/images/material-symbols_travel-rounded.png";
import Rectangle7535 from "../../assets/images/Rectangle 7535.png";
import Button from "../Button/Button";
import Artical from "../Artical/Artical";
import Design3d from "../Design3d/Design3d";
import Future from "../Future/Future";
import Future2 from "../Future/Future2";
import FooterForm from "../Footer/Footer";

const Blog = () => {
  const logo = [
    {
      img: Article,
      name: "latest articles",
    },
    {
      img: article,
      name: "creative-as-a-service",
    },
    {
      img: teenyicons,
      name: "smart bets",
    },
    {
      img: Vector,
      name: "digital advertising",
    },
    {
      img: Article,
      name: "video marketing",
    },
    {
      img: material,
      name: "brand design",
    },
    {
      img: Group,
      name: "AR & 3D design",
    },
  ];
  return (
    <div className="solution-page pt-36">
      <div className="px-48">
        <div className="text-center text-[#fff] pb-5">
          <h1 className="text-[100px] ">creative performance</h1>
          <p>
            Creative ides, practical tips and insider info...the AIM-FX blog
            helps your team get great design done at scale.
          </p>
        </div>
        <div className="grid grid-cols-7 pt-12 pb-10 gap-4 ">
          {logo.map((item, ind) => {
            return (
              <span
                className="flex flex-col p-3 items-center rounded-lg border-[3px] border-[#fff]  justify-center"
                key={ind}
              >
                <img className="w-12 h-12 object-cover" src={item.img} alt="" />
                <span className="font-[400] text-[30px] text-[#fff] text-center">
                  {item.name}
                </span>
              </span>
            );
          })}
        </div>
        <div className="flex justify-center pt-6">
          <img className="z-10" src={Rectangle7535} alt="" />
        </div>
      </div>
      <div className="relative bottom-28 promotional-section grid grid-cols-2 p-40">
        <div className="px-7">
          <span className="team-hero-heading">dont miss out</span>
          <p className="font-[300] text-[20px] text-[#FFF]">
            Join our community of 30,000+ who receive the best in design and
            video development content weekly.
          </p>
        </div>
        <div className="flex	items-end	justify-evenly ">
          <span>
            <input
              type="email"
              name="email"
              placeholder="Your base Email"
              className="px-4 py-2.5 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] "
            />
          </span>
          <span>
            <Button className="px-4 py-2.5 text-sm font-semibold text-[#100e0e] bg-[#fff] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              SEE OPENNINGS
            </Button>
          </span>
        </div>
      </div>
      <Artical />
      <Design3d />
      <Future2 />
      <Design3d />
      <Design3d />
      <Future />

      <FooterForm />
    </div>
  );
};

export default Blog;
