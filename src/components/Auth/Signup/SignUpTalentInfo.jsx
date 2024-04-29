import React, { useState } from "react";
import "./Signup.css";
import Heading from "../../Heading/Heading";
import Button from "../../Button/Button";
import googleicon from "../../../assets/icons/flat-color-icons_google.png";
import back1 from "../../../assets/holographic_fluid_drop_shapes_illustration_02 copy 3 (1).png";
import svg1 from "../../../assets/icons/Group 469320 (1).png";
import svg2 from "../../../assets/icons/flowbite_microphone-solid.png";
import svg3 from "../../../assets/icons/foundation_graph-pie.png";
import svg4 from "../../../assets/icons/mdi_stars.png";
import svg5 from "../../../assets/icons/ph_video-fill.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpTalentInfo = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="signup-talentinfo-page ">
      <div className="flex items-center justify-center relative pt-32 overflow-hidden lg:px-0 px-3 lg:pb-0 pb-8">
        <img
          src={back1}
          alt="bg-image"
          className="absolute -z-10 bg-image-form lg:block hidden"
        />
        <div className="absolute top-[25%] right-[22.5%] form-svg lg:block hidden">
          <img src={svg2} alt="bg-image" className="w-7 h-7" />
        </div>
        <div className="absolute top-[40%] left-[21%] form-svg2 lg:block hidden">
          <img src={svg1} alt="bg-image" className="w-8 h-8" />
        </div>
        <div className="absolute top-[35%] left-[12%] form-svg3 lg:block hidden">
          <img src={svg4} alt="bg-image" className="w-5 h-5" />
        </div>
        <div className="absolute top-[68%] left-[18%] form-svg4 lg:block hidden">
          <img src={svg5} alt="bg-image" className="w-8 h-8" />
        </div>
        <div className="absolute top-[65%] right-[20%] form-svg5 lg:block hidden">
          <img src={svg3} alt="bg-image" className="w-5 h-5" />
        </div>
        <div className="singup-onboarding-form-border lg:w-auto w-full">
          <div className="lg:px-12 pt-6  pb-8 w-full flex items-start justify-center flex-col">
            <Heading className="uppercase text-[50px] font-tek text-white ">
              Sign up
            </Heading>
            <div className="flex flex-col items-center justify-center gap-y-6 w-full mt-4">
              <div className="flex gap-x-4 lg:flex-row flex-col gap-y-2 w-full">
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Enter Your Country"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    Contact Phone
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="+1"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
              </div>
              <div className="flex gap-x-4 lg:flex-row flex-col gap-y-2 w-full">
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Enter Your City"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Address"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
              </div>
              <div className="flex gap-x-4 lg:flex-row flex-col gap-y-2 w-full">
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    English Proficiency
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Design"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    What services do you provide?
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Adobe Premiere Pro"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
              </div>
              <div className="flex gap-x-4 lg:flex-row flex-col gap-y-2 w-full">
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    Short Bio
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Your Bio"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    Link to your showreel
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="https://"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
              </div>

              <div className="flex gap-x-4 lg:flex-row flex-col gap-y-2 w-full">
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    How many years of experience?
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="1 years of experience"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    What’s your hourly rate in U.S. dollars?
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="$25 per hour"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
              </div>

              <div className="flex gap-x-4 lg:flex-row flex-col gap-y-2 w-full">
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    Type of job commitment
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="10 hours a week"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    What skills do you have?
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Adobe Premiere Pro"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
              </div>

            
              <div className="my-2 flex flex-col items-center gap-y-1.5">
                <span className="text-[#D4E7F5] text-xs">
                  By signing up you agree with the </span>
                  <div className="text-xs">
                  <span className="text-[#15B8C7]">Terms of Service</span>{" "}
                  <span className="text-[#D4E7F5]"> & </span>
                  <span className="text-[#15B8C7]">Privacy Policy.</span>
                  </div>
              </div>
              <div className="mt-8 flex flex-col items-center justify-center gap-y-3">
                <Button className="uppercase text-white bg-[#2EABAF] px-12 py-2.5 rounded-full text-sm">
                  Submit
                </Button>
              </div>

              <div className="mt-4">
                <span className="font-light text-[#D4E7F5]">
                  Already have an account?{" "}
                  <span className="underline text-[#00FFFF] font-light">
                    Sign in.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpTalentInfo;
