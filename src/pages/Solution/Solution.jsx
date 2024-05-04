import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import shape7 from "../../assets/video bubbles (1).png";
import shape1 from "../../assets/127_arrow_icon_logo_with_3d_modern_style copy 1.png";
import Button from "../../components/Button/Button";
import solution from "../../assets/Solution.png";
import calendar from "../../assets/Calendar.png";
import { Divider } from "@mui/material";
import ServivePageVideo from "../../components/CustomVideo/ServicePageVideo";
import ServiceLogoBar from "../../components/LogoBars/ServiceLogoBar";
import { FaPercent, FaStar, FaTrophy } from "react-icons/fa";
import "./Solution.css";
import Heading from "../../components/Heading/Heading";
import ServicesCards from "../../components/ServiceCards/ServiceCards";
import ServiceIcon from "../../components/ServiceWithIcon/ServiceIcon";
import SolutionCard from "../../components/ServiceSolutionCards/SolutionCard";
import SerRatesVideo from "../../components/CustomVideo/SerRatesVideo";
import ServiceRatesCount from "../../components/RateSection/RatesCount";
// import ServiceBenefits from "../../components/ServiceSolutionCards/ServiceBenefits";
import ServiceRateSection from "../../components/RateSection/ServiceRateSection";
import ServiceRateDesc from "../../components/RateSection/ServiceRateDesc";
import HowItWorks from "../../components/ServiceComponents/HowItWorks";
import HomePortfolioVideo from "../../components/HomePortfolioVideo/HomePortfolioVideo";
import HomeTestimoal from "../../components/HomeTestimonals/HomeTestimonals";
import FaqSection from "../../components/FAQ/FAQ";
import FooterForm from "../../components/Footer/Footer";
import WorkHistory from "../../components/WorkHistory/WorkHistory";
import ServiceBenefits from "../../components/ServiceSolutionCards/ServiceBenefits";

const Solution = () => {
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
    <div className="solution-page">
      <div className="relative lg:h-[120vh] h-auto">
        <div className="flex lg:flex-row flex-col items-center gap-y-6 lg:px-40 lg:py-40 pt-32 pb-10 px-3">
          <div className="flex flex-col gap-y-3">
            <span className="lg:text-[80px] text-[50px] font-tek leading-tight text-white uppercase z-10">
              design services for ambitious brands
            </span>
            <div className="w-96">
              <p className="text-white lg:text-base text-sm">
                Teams at fast-growing companies use AIMFX to get quality graphic
                design done at scale. Book a call today and get acess to your
                dedicated design team.
              </p>
            </div>
            <div className="flex gap-y-5 lg:mt-10 mt-6">
              <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                Choose a plan
              </Button>
              <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                book a call
              </Button>
            </div>
          </div>
          {/* ------------ Right Side Hero Section --------------- */}
          <div className="relative flex items-center justify-center ">
            <img src={shape7} alt="img" className="lg:block hidden" />
            <div className="lg:absolute lg:top-10 ">
              <ServivePageVideo />
            </div>
          </div>
        </div>
        <div className="flex lg:flex-col flex-col-reverse gap-y-10 items-center">
          <div>
            <p className="text-gray-400 lg:text-md text-sm ">
              80.082 design projects delivered to 450+ happy clients.
            </p>
          </div>
          <div>
            <ServiceLogoBar />
          </div>
        </div>
      </div>
      {/* ============================================ */}
      {/* ------------- Solution Section ------------- */}
      {/* ============================================ */}

      <div className="flex items-center flex-col justify-center lg:py-0 py-10">
        <div className="">
          <Heading className="text-[70px] uppercase font-tek text-white">
            Services
          </Heading>
        </div>
        <div className=" overflow-x-scroll w-full scrollbar-hide">
          <ServicesCards />
        </div>
      </div>

      <section className="text-white py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center ">
            <div className="lg:relative lg:overflow-hidden hidden lg:block">
              <img src={shape1} alt="Image" className="w-full h-full z-20" />
              <img
                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg"
                alt="image"
                className="rounded-lg w-24 absolute top-10 left-[45%] -z-10"
              />
              <img
                src="https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?cs=srgb&dl=pexels-photomix-company-212372.jpg&fm=jpg"
                alt="image"
                className="rounded-lg w-32 absolute top-[42%] left-[69%]"
              />
              <img
                src="https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?cs=srgb&dl=pexels-photomix-company-212372.jpg&fm=jpg"
                alt="image"
                className="rounded-lg w-20 absolute top-[78%] left-[52%] blur-sm -z-10"
              />
              <img
                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg"
                alt="image"
                className="rounded-lg w-36 absolute top-[70%] left-[10%]"
              />
              <img
                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg"
                alt="image"
                className="rounded-lg w-24 absolute top-[20%] left-[12%]  -z-10 blur-sm"
              />
            </div>
            <div className="lg:max-w-md w-full ">
              <div className="lg:px-0 px-3">
                <h2 className="text-4xl text-[#00FFFF] w-2/3 uppercase font-tek mb-2">
                  get graphic design, print, motion, video and more
                </h2>
                <p className="text-sm text-[#B6B6B6] ">
                  Lorem ipsum dolor sit amet consectetur. Sodales euismod vel
                  pharetra non imperdiet. Feugiat imperdiet faucibus est elit
                  tortor. Eleifend enim scelerisque proin purus et. Ornare
                  ultricies in lacinia integer ultricies in in magnis
                  pellentesque. Sem netus eget purus condimentum neque nunc.
                  Malesuada ullamcorper donec felis nam curabitur pulvinar
                  luctus ipsum urna. Amet tincidunt eget ac aliquam nibh id.
                  Urna laoreet consectetur convallis ultrices pellentesque purus
                  et vulputate. Nisi purus nam viverra id morbi ultrices
                  molestie.
                  <br />
                  <br />
                  Nisl lectus massa neque mattis. Integer at leo elementum.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 lg:mx-auto lg:max-w-3xl max-w-full">
            <div className="flex lg:flex-row flex-col items-center gap-x-10 justify-center lg:px-0 px-3">
              <h2 className="text-3xl font-tek uppercase w-full">
                What makes our design services different?
              </h2>
              <p className="text-xs text-[#B6B6B6]">
                Lorem ipsum dolor sit amet consectetur. Vitae risus sed nulla
                mattis eget sed. Morbi sem lorem mauris nulla nullam egestas
                ultricies id a. Nullam pretium viverra sem adipiscing maecenas
                facilisi. Tempus mattis est ante lacus condimentum. A volutpat
                nibh ipsum sed nunc vestibulum eu nunc. Viverra et magna ac
                venenatis suspendisse. At ipsum commodo interdum euismod laoreet
                in ipsum. Sed sit nunc facilisis ut velit sed. Luctus et nunc
                tellus.
              </p>
            </div>
          </div>
          <div className="lg:mt-20 mt-10 lg:max-w-3xl lg:mx-auto">
            <div className="lg:px-0 px-3">
              <ServiceIcon />
            </div>
          </div>
        </div>
      </section>

      {/* --------------- Rates Section ----------- */}

      <div className="rates-section">
        <div className="rates-container">
          <div className="rates-top">
            <h1 className="lg:text-[80px] text-[50px] text-white font-tek uppercase leading-tight">
              better rates than hiring a creative in house
            </h1>
            <div className="flex items-center justify-center pt-6">
              <SerRatesVideo />
            </div>
          </div>
        </div>
        <ServiceRatesCount />
        <div className="flex items-center justify-center lg:p-10 py-4 px-3">
          <h1 className="italic lg:text-3xl text-xl font-semibold">
            All benefits of getting your video editing done for you, without the
            headaches of hiring, managing or spending $$$ on equipment and
            software
          </h1>
        </div>

        <div className="lg:px-10 px-3">
          <ServiceBenefits />
        </div>
      </div>

      {/* --------------- Time Section -------------- */}

      <div className="save-time-section">
        <ServiceRateSection />
        <div className="dividerStyle">
          <Divider sx={{ backgroundColor: "#d9d9d9" }} />
        </div>
        <div className="rate-bottom-content">
          <Heading className="lg:text-[80px] text-[50px] uppercase text-white font-tek leading-tight">
            imagine not doing any of the above while still producing on-brand
            videos you can be proud of...
          </Heading>
          <p className="text-white text-center text-sm pt-4">
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
        <div className="py-10">
          <Heading className="lg:text-[80px] text-[50px] uppercase text-white text-center font-tek">
            how it works
          </Heading>
          <div className="lg:px-40 lg:pt-10">
            <HowItWorks />
            <div className="how-work-btn">
              <Button className="how-work-btn-style px-8 py-2.5 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                schedule a free consulation
              </Button>
            </div>
          </div>
        </div>
        {/*   ---------- portFolio Section ----------- */}

        <div className="flex flex-col gap-y-7 items-center justify-center lg:py-10  py-6 ">
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

        {/* ---------- Testimonals Section -----------*/}
        <div className="flex flex-col gap-y-7 items-center justify-center py-20 ">
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

        {/* ----------- Awards Section ---------- */}
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

        <div className="lg:pb-20 pb-40">
          <WorkHistory />
        </div>
      </div>

      <FaqSection />
      <FooterForm />
    </div>
  );
};

export default Solution;
