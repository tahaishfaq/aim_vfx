import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import shape1 from "../assets/127_arrow_icon_logo_with_3d_modern_style copy 2.png";
import shape2 from "../assets/127_arrow_icon_logo_with_3d_modern_style copy 3.png";
import shape3 from "../assets/1.png";
import shape4 from "../assets/5.png";
import shape5 from "../assets/holographic_fluid_drop_shapes_illustration_02 copy 3.png";
import shape6 from "../assets/holographic_fluid_drop_shapes_illustration_02 copy 3.png";
import creativity from "../assets/Creativity.png";
import excellence from "../assets/EXCELLENCE.png";
import shape7 from "../assets/127_arrow_icon_logo_with_3d_modern_style copy 1.png";
import Button from "../components/Button/Button";
import videobgImg from "../assets/holographic_fluid_drop_shapes_illustration_02 copy 5.png";
import shape10 from "../assets/holographic_fluid_drop_shapes_illustration_02 copy 2.png";
import LogoBars from "../components/LogoBars/LogoBars";
import BackgroundText from "../components/BackgroundText/BackgroundText";
import CustomVideo from "../components/CustomVideo/CustomVideo";
import Heading from "../components/Heading/Heading";
import spectularFrame from "../assets/ORH85K1 copy 1.png";
import spectuarBackgroud from "../assets/11 copy 3.png";
import robot from "../assets/Vector.png";
import ServicesCards from "../components/ServiceCards/ServiceCards";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="hero-section">
          <Navbar />
          <img src={shape1} alt="Image 1" class="image1" />
          <img src={shape2} alt="Image 2" class="image2" />
          <img src={shape3} alt="Image 3" class="image3" />
          <img src={shape4} alt="Image 4" class="image4" />
          <img src={shape5} alt="Image 5" class="image5" />
          <img src={shape6} alt="Image 6" class="image6" />
          <img src={creativity} alt="Image 7" class="creativityText" />
          <img src={excellence} alt="Image 8" class="excellenceText" />
          <img src={shape7} alt="Image 9" class="image7" />
          <p className="hero-section-heading">
            Where Creativity Meets Visual Excellence on a Monthly Basis
          </p>
          <p className="hero-section-description">
            Unleash the creative potential of your videos through our monthly
            subscription model, powered by AIM VFX a video production agency
            proficient in video editing, motion graphics, branding, and VFX.
          </p>
          <div className="hero-section-buttons flex flex-col gap-y-5 b">
            <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Pricing
            </Button>
            <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              book a call
            </Button>
          </div>
          <div className="logoBars flex flex-col items-center">
            <LogoBars />
          </div>
        </div>

        {/* Video Section  */}
        <div className="home-video-section ">
          <img src={videobgImg} alt="Logos" className="video-bg-image1" />
          <img src={videobgImg} alt="Logos" className="video-bg-image2" />

          <BackgroundText className="show-reels">
            <span>Show</span>
            <span>Reels</span>
          </BackgroundText>
          <div className="homeVideo">
            <CustomVideo />
          </div>
        </div>

        {/* Spectular Service Section */}
        <div className="">
          <div className=" flex flex-col items-center justify-center pt-10">
            <Heading className="uppercase text-7xl text-white font-tek">
              Our <span className="text-[#2EABAF]">spectacular</span> services
            </Heading>
            <p className="text-white text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="relative">
            <img src={shape7} alt="Image 4" class="spectular-bg-image" />
            <BackgroundText className="spectular-text">
              <span>SPETACULAR</span>
            </BackgroundText>

            <div className="spectularBackground">
              <img src={spectuarBackgroud} alt="Image" />
            </div>

            <div className="spectularImage ">
              <div class="image-container">
                <img src={spectularFrame} alt="Image" />
                <div className="flex flex-col items-start absolute top-[30%] left-7">
                  <div>
                    <img src={robot} alt="logo" />
                  </div>
                  <p class="text-[#2EABAF] text-[80px] font-tek">AI VIDEOS</p>
                  <p className="text-white text-sm pb-8">
                    FB ad with 2D animation <br />
                    Commercial video with 2D animation <br />
                    Product video with 2D animation{" "}
                  </p>
                  <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                    See More
                  </Button>
                </div>
              </div>
            </div>
            <div className="spectular-services overflow-x-scroll w-full scrollbar-hide">
              <ServicesCards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
