import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import ServivePageVideo from "../CustomVideo/ServicePageVideo";
import Button from "../../components/Button/Button";
import shape7 from "../../assets/video bubbles (1).png";
import shape2 from "../../assets/127_arrow_icon_logo_with_3d_modern_style copy 1.png";
import shape4 from "../../assets/holographic_fluid_drop_shapes_illustration_02 copy 4.png";
import "./team.css";
import Heading from "../Heading/Heading";
import LetsTalk from "./LetsTalk";
import FooterForm from "../Footer/Footer";
import GetToKnowUs from "../GetToKnowUs/GetToKnowUs";
import Location from "../Location/Location";

export const TeamPage = () => {
  const callouts = [
    {
      name: "Self-Improvement",
      description: "Journals and note-taking",
      imageSrc: shape2,
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
    },
  ];

  return (
    <div className="solution-page ">
      <div className="flex items-center p-32 mx-auto max-w-7xl">
        <div className="flex flex-col gap-y-3">
          <span className="team-hero-heading">Title text block</span>
          <div className="w-96">
            <p className="text-white">
              JUST THE SUBHEAD HERE:
              <br />
              Freezing 2 times for two weeks a year If one video editor is not
              enough, then you need to buy another package. You need to pay
              monthly. You need to pay with monthly, quarterly and annual
              discounts.
            </p>
          </div>
          <div className="flex gap-y-5 mt-10">
            {/* <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
               choice your plan
              </Button> */}
            <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              choice your plan
            </Button>
          </div>
        </div>
        {/* ------------ Right Side Hero Section --------------- */}
        <div className="relative">
          <img src={shape7} alt="img" className="" />
          <div className="absolute top-10">
            <ServivePageVideo />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <h2
          id="details-heading"
          className="text-3xl font-bold tracking-tight uppercase text-white sm:text-5xl"
        >
          who are us?
        </h2>
        <p className="mt-3 max-w-3xl text-lg text-white">
          Lorem ipsum dolor sit amet consectetur. Scelerisque habitant elementum
          lectus quis risus viverra. Commodo sit imperdiet consectetur fermentum
          non nunc. In et quam vehicula lectus sed leo hac lectus. Pretium et
          egestas nisi in.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex justify-center items-center max-w-3xl py-10 sm:py-10 lg:max-w-none lg:py-10">
          <div className="group flex flex-col items-center w-full ">
            <div className="relative w-full overflow-hidden rounded-lg mb-8 lg:mb-0 lg:w-1/2 lg:mr-4 ">
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-center w-2/5">
                <h1 className="text-4xl uppercase text-white mb-4">Vision</h1>
                <p className="text-base text-white font-semibold ">
                  Lorem ipsum dolor sit amet consectetur. Scelerisque habitant
                  elementum lectus quis risus viverra. Commodo sit imperdiet
                  consectetur fermentum non nunc. In et quam vehicula lectus sed
                  leo hac lectus. Pretium et egestas nisi in.
                </p>
              </div>
              <img
                src={shape2}
                alt="shape2"
                className="h-[40rem] w-full object-cover object-center"
              />
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 text-center w-2/5">
                <h1 className="text-4xl uppercase text-white mb-4">Mission</h1>
                <p className="text-base text-white font-semibold">
                  Lorem ipsum dolor sit amet consectetur. Scelerisque habitant
                  elementum lectus quis risus viverra. Commodo sit imperdiet
                  consectetur fermentum non nunc. In et quam vehicula lectus sed
                  leo hac lectus. Pretium et egestas nisi in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetToKnowUs/>
       <Location/>  

      <div className="px-4 sm:px-6 lg:px-8 pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32 mx-auto max-w-7xl">
        <div className="bg-[#2EABAF] rounded-xl overflow-hidden sm:flex sm:items-center">
          <img
            className="w-full sm:max-w-md sm:w-auto object-cover"
            src={shape4}
            alt=""
          />
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-5xl uppercase text-white font-semibold leading-tight mb-4">
              Let’s create our future together
            </h2>
            <p className="text-white text-lg sm:text-xl mb-6">
              Don’t forget to check out our career page to see available
              positions
            </p>
            <button className="px-8 py-3 text-sm sm:text-base font-semibold text-white bg-transparent hover:bg-white hover:text-[#2EABAF] border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray uppercase">
              Available positions
            </button>
          </div>
        </div>
      </div>

      <LetsTalk />
      <FooterForm/>
    </div>
  );
};
