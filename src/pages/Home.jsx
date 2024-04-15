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
import FAQ from "../components/FAQ/FAQ";
import FaqSection from "../components/FAQ/FAQ";
import FooterForm from "../components/Footer/Footer";
import howitworks from "../assets/Rectangle 130 (1).png"
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
            <CustomVideo poster={customVideoPoster} />
          </div>
        </div>

        {/* Spectular Service Section */}
        <div className="">
          <div className=" flex flex-col items-center justify-center ">
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

        {/* Services Section  */}
        <div className="flex flex-col items-center justify-center py-20">
          <Heading className="text-white font-tek text-[80px]  uppercase text-center w-2/5 leading-tight">
            Why its better to deligate video editing
          </Heading>
          <p className="text-white text-sm w-2/5 text-center">
            By delegating video editing, you can harness the expertise of
            professionals, save time, improve quality, and ultimately deliver
            outstanding videos that leave a lasting impression on your audience.
          </p>

          <div className="flex flex-col items-center gap-y-5 pt-20">
            <div className="flex gap-x-5 pt-14">
              {services?.map((service) => (
                <CustomServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
            <div class="bar"></div>
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
        <div className="mx-auto px-10 max-w-7xl py-20">
          <div className="flex flex-col gap-y-2 items-end">
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
          <div className=" w-2/4 flex flex-col items-center text-white text-center gap-y-3">
            <Heading className="text-[80px] font-tek  leading-tight uppercase">
              Streamline Your Process: Never Worry About VIDEO Editing Again
              with These Simple Steps.
            </Heading>
            <span className="text-sm w-2/3">
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
          <div className="flex items-center justify-center gap-x-4">
            <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Read more
            </Button>
            <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              choose plan
            </Button>
          </div>
        </div>

        {/* Portfolio */}
        <div className="flex flex-col gap-y-7 items-center justify-center py-20 mt-20 home-page-portfolio">
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
          <div className="pt-8 pb-10">
            <HomeTestimoal />
          </div>
          <Button className="uppercase text-white border border-[#2EABAF] px-8 py-3 rounded-full">
            Watch More
          </Button>
        </div>

        {/* Awards */}
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
        <FaqSection />
        <FooterForm />
      </div>
    </>
  );
};

export default Home;
