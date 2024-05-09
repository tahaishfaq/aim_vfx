import React from "react";

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
import spectularFrame from "../assets/ORH85K1 copy 1 (1).png";
import spectuarBackgroud from "../assets/11 copy 3.png";
import robot from "../assets/Vector.png";
import ServicesCards from "../components/ServiceCards/ServiceCards";
import icon1 from "../assets/clock-111.png";
import icon2 from "../assets/Group 114.png";
import icon3 from "../assets/Group 77.png";
import icon4 from "../assets/Group 78.png";
import icon5 from "../assets/icon.png";
import CustomServiceCard from "../components/CustomServiceCard/CustomServiceCard";
import HomeGallery from "../components/HomeGallery/HomeGallery";
import WorkStreamline from "../components/WorkStreamline/WorkStreamline";
import customVideoPoster from "../assets/Screenshot 2024-01-29 at 12.00 1.png";
import HomePortfolioVideo from "../components/HomePortfolioVideo/HomePortfolioVideo";
import HomeTestimoal from "../components/HomeTestimonals/HomeTestimonals";
import { FaStar, FaTrophy, FaPercent } from "react-icons/fa";
import WorkHistory from "../components/WorkHistory/WorkHistory";

import FaqSection from "../components/FAQ/FAQ";

import howitworks from "../assets/Rectangle 130 (1).png";
import FooterForm from "../components/Footer/FooterForm";
import Footer from "../components/Footer/Footer";
import footerbg from "../assets/images/footer-bg.png";



const Home = () => {
  const services = [
    {
      id: 1,
      title: "Time-Saving ",
      description:
        "Outsourcing video editing allows you to focus on your core business activities while professionals take care of the time-consuming editing process.",
      icon: icon1,
      active: true,
    },
    {
      id: 2,
      title: "Expertise",
      description:
        "Video editing experts bring a wealth of technical skills and creative insights to enhance your footage, ensuring a polished and professional end product.",
      icon: icon4,
      active: false,
    },
    {
      id: 3,
      title: "Quality",
      description:
        "Professional video editors have extensive experience and access to advanced editing tools, resulting in high-quality videos that captivate and engage your audience.",
      icon: icon2,
      active: false,
    },
    {
      id: 4,
      title: "Consistency",
      description:
        "By delegating video editing, you ensure consistency across your content, maintaining a cohesive brand identity and aesthetic that resonates with your viewers.",
      icon: icon5,
      active: false,
    },
    {
      id: 5,
      title: "Efficiency",
      description:
        "Video editing professionals work efficiently, utilizing their expertise and streamlined workflows to deliver your edited videos promptly, saving you valuable time and effort.",
      icon: icon3,
      active: false,
    },
  ];
  return (
    <>
      <div className="home-page">
        <div className="hero-section">
          <img src={shape1} alt="Image 1" class="image1 hidden md:block" />
          <img src={shape2} alt="Image 2" class="image2 hidden md:block" />
          <img src={shape3} alt="Image 3" class="image3 hidden md:block" />
          <img src={shape4} alt="Image 4" class="image4 hidden md:block" />
          <img src={shape5} alt="Image 5" class="image5 hidden md:block" />
          <img src={shape6} alt="Image 6" class="image6 hidden md:block" />
          <img
            src={creativity}
            alt="Image 7"
            class="creativityText hidden md:block"
          />
          <img
            src={excellence}
            alt="Image 8"
            class="excellenceText hidden md:block"
          />
          <img src={shape7} alt="Image 9" class="image7 hidden md:block" />

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
            <div className="lg:hidden sm:block pt-6">
              <LogoBars />
            </div>
          </div>
          <div className="logoBars hidden sm:flex flex-col items-center">
            <LogoBars />
          </div>
        </div>

        {/* Video Section  */}
        <div className="home-video-section ">
          <img
            src={videobgImg}
            alt="Logos"
            className="video-bg-image1  md:block"
          />
          <img
            src={videobgImg}
            alt="Logos"
            className="video-bg-image2  md:block"
          />
          <div className="relative w-full ">
            <BackgroundText className="flex items-center justify-center lg:text-[480px] text-[120px] uppercase font-tek show-reels overflow-hidden">
              <span>Show</span>
              <span>Reels</span>
            </BackgroundText>
            <div className="absolute inset-0 lg:top-[34.5%] sm:top-44 top-44 flex items-center justify-center">
              <CustomVideo poster={customVideoPoster} />
            </div>
          </div>
        </div>

        {/* Spectular Service Section */}
        <div className="mx-auto">
          <div className=" flex flex-col items-center justify-center">
            <Heading className="uppercase lg:text-7xl text-6xl text-white font-tek text-center">
              <span> Our </span>{" "}
              <span className="text-[#2EABAF]">spectacular</span>{" "}
              <span>services</span>
            </Heading>
            <p className="text-white lg:text-sm text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="relative overflow-hidden ">
            <img src={shape7} alt="Image 4" class="spectular-bg-image -z-50" />
            <BackgroundText className="spectular-text">
              <span>SPETACULAR</span>
            </BackgroundText>

            <div className="hidden lg:absolute lg:-top-40 lg:right-0 z-0 ">
              <img src={spectuarBackgroud} alt="Image" className="" />
            </div>

            <div className="spectularImage flex justify-center items-center px-5">
              <div class="image-container overflow-hidden flex items-center flex-row-reverse justify-between ">
                <div>
                  <img
                    src={spectularFrame}
                    alt="Image"
                    class="lg:max-w-2xl sm:object-cover sm:object-center"
                  />
                </div>
                <div class="flex lg:gap-y-4 gap-y-2 flex-col items-start  lg:pl-10 pl-2.5 w-full ">
                  <img
                    src={robot}
                    alt="logo"
                    class="w-6 h-5 md:w-12 md:h-12 lg:w-16 lg:h-16"
                  />

                  <p class="text-[#2EABAF] text-[20px] font-tek md:text-[60px] lg:text-[80px]">
                    AI VIDEOS
                  </p>
                  <p class="text-white text-[10px] lg:text-base">
                    FB ad with 2D animation <br />
                    Commercial video with 2D animation <br />
                    Product video with 2D animation
                  </p>
                  <button class="lg:px-6 lg:py-2 px-4 py-1 lg:text-sm text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase md:px-8">
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:gap-y-12 gap-y-6 items-center justify-center">
            <div className=" overflow-x-scroll w-full scrollbar-hide">
              <ServicesCards />
            </div>
            <div class="bar"></div>
          </div>
        </div>

        {/* Services Section  */}
        <div className="flex flex-col items-center justify-center py-20 ">
          <Heading className="text-white font-tek lg:text-[80px] text-5xl uppercase text-center lg:w-2/5 leading-tight">
            Why its better to deligate video editing
          </Heading>
          <p className="text-white text-sm lg:w-2/5 text-center">
            By delegating video editing, you can harness the expertise of
            professionals, save time, improve quality, and ultimately deliver
            outstanding videos that leave a lasting impression on your audience.
          </p>

          <div className="flex flex-col items-center justify-center gap-y-5 lg:pt-20 pt-6">
            <div className="flex lg:flex-row flex-col gap-y-8 gap-x-5 pt-14 justify-center">
              {services?.map((service) => (
                <CustomServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
            {/* <div class="bar"></div> */}
            <div className="pt-10 flex gap-x-4">
              <Button className="px-10 py-2.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                Pricing
              </Button>
              <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                book a call
              </Button>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mx-auto lg:px-10 lg:max-w-7xl w-full py-20">
          <div className="flex flex-col lg:gap-y-2 gap-y-4 lg:items-end items-center">
            <HomeGallery />
            <div className="flex items-center justify-center gap-x-4">
              <Button className="px-10 py-2.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                Pricing
              </Button>
              <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                book a call
              </Button>
            </div>
          </div>
        </div>

        {/* Work Streamline  */}
        <div className="flex flex-col items-center justify-center gap-y-10">
          <div className=" lg:w-2/4 flex flex-col items-center text-white text-center gap-y-3">
            <Heading className="lg:text-[80px] text-[50px] font-tek  leading-tight uppercase">
              Streamline Your Process: Never Worry About VIDEO Editing Again
              with These Simple Steps.
            </Heading>
            <span className="text-sm lg:w-2/3">
              AIM VFX offers a faster, more cost-effective alternative, saving
              you time and money, instead of hiring, retaining, and overhead
              expenses.
            </span>
          </div>
          <div className="py-10 ">
            <div className="flex items-center flex-col gap-y-20 justify-center">
              <WorkStreamline />
              <div class="bar"></div>
            </div>
          </div>
        </div>

        {/* How it works  */}
        <div className="flex flex-col gap-y-6 items-center justify-center py-20">
          <div className="flex flex-col items-center justify-center">
            <Heading className="text-[60px] font-tek text-white uppercase leading-tight">
              How it <span className="text-[#2EABAF]">works</span>
            </Heading>
            <p className="text-sm text-white w-2/3 text-center">
              Enjoy peace of mind as we handle the entire video editing process
              after you submit your footage.
            </p>
          </div>
          <CustomVideo poster={howitworks} />
          <div className="flex items-center justify-center gap-x-4 ">
            <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Read more
            </Button>
            <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              choose plan
            </Button>
          </div>
        </div>

        {/* Portfolio */}
        <div className="flex flex-col gap-y-7 items-center justify-center lg:py-20 mt-20 py-44 home-page-portfolio">
          <div className="flex flex-col items-center justify-center">
            <Heading className="text-[60px] font-tek text-white uppercase leading-tight">
              Portfolio
            </Heading>
            <p className="text-sm text-white  text-center lg:px-0 px-6">
              Uncover Our Rich Array of Work: Browse Categories Ranging from
              eLearning to Hollywood-style Productions.
            </p>
          </div>
          <div className="flex items-center justify-center lg:gap-x-4 gap-x-2">
            <Button className="lg:px-8 px-6 py-2.5 text-sm font-semibold text-black bg-white  hover:border-gray-800 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Category
            </Button>
            <Button className="lg:px-8 px-4 lg:py-2.5 py-2 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Category
            </Button>
            <Button className="lg:px-8 px-4 lg:py-2.5 py-2 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Category
            </Button>
          </div>
          <div className="pt-6 pb-10 lg:px-0 px-2">
            <HomePortfolioVideo />
          </div>
          <Button className="uppercase text-white border border-white px-8 py-3 rounded-full">
            Watch More
          </Button>
        </div>

        {/* Testimonals */}
        <div className="flex flex-col gap-y-7 items-center justify-center py-20 mt-20">
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

        {/* Awards */}
        <div className="flex items-center justify-center ">
          <div className="flex flex-col md:flex-row gap-x-8 border border-[#15B8C7] px-8 md:px-20 pt-6 md:pt-10 pb-6 rounded-[35px]">
            <div className="flex flex-col gap-y-6 ">
              <Heading className="uppercase text-2xl md:text-4xl font-bold italic text-[#15B8C7]">
                Upword Activity
              </Heading>

              <div className="flex flex-col md:flex-row md:gap-x-20">
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
            <div className="hidden md:block h-32 w-0.5 bg-gray-500"></div>{" "}
            {/* Hidden on smaller screens */}
            <div className="flex flex-col gap-y-4 mt-6 md:mt-0">
              {" "}
              {/* Added margin top for smaller screens */}
              <Heading className="uppercase text-xl md:text-2xl font-bold italic text-[#15B8C7] leading-tight">
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
        <FaqSection />
        <div className="relative">
          <div className="absolute bottom-0 -z-50 flex items-center justify-center ">
            <img
              src={footerbg}
              alt="bg"
              className="object-cover object-center"
            />
          </div>
          
          <FooterForm />
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
