import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import trademark14021431 from "../../assets/images/trademark_14021431 1.png";

import FooterForm from "../Footer/Footer";
import DateConsulation from "../DateConsulation/DateConsulation";
const ContactUs = () => {
  return (
    <div className="solution-page pt-24 text-[#fff]">
      <div className="px-10 md:max-w-5xl rounded-3xl mx-auto bg-[#0B1A2880]">
        <h1 className="text-6xl lg:text-8xl uppercase  font-[Teko] text-center py-6">
          contact us
        </h1>

        <div className="lg:px-28">
          <div className=" grid sm:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h2 className="py-6 text-lg font-[Montserrat]">EMAIL</h2>
              <p>hello@aimfx.com</p>
            </div>
            <div>
              <h2 className="py-6 text-lg font-[Montserrat]">PHONE</h2>
              <p>00 000 000</p>
            </div>
            <div>
              <h2 className="py-6 text-lg font-[Montserrat]">MESSENGER</h2>
              <p>hello@aimfx.com</p>
            </div>
            <div>
              <h2 className="py-6 text-xl font-[Montserrat]">
                SOCIALIZE WITH AIM FX
              </h2>
              <div>
                <span>Icon</span>
              </div>
            </div>
          </div>
          <form>
            <div className=" grid sm:grid-cols-2 gap-7  ">
              <div>
                <input
                  type="text"
                  name="frist-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="frist-name"
                  className=" w-full  px-4 bg-[#D4E7F5] outline-none rounded-full border-0 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="given-name"
                  placeholder="Last name"
                  className=" w-full px-4 bg-[#D4E7F5] outline-none rounded-full border-0 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="col-span-full">
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="given-name"
                  placeholder="Email"
                  className=" w-full  px-4 bg-[#D4E7F5] outline-none rounded-full border-0 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="sutdio"
                  id="studio"
                  autoComplete="given-name"
                  placeholder="Studio Name"
                  className=" w-full  px-4 bg-[#D4E7F5] outline-none rounded-full border-0 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="sic=ze"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Studio Size "
                  className=" w-full  px-4 bg-[#D4E7F5] outline-none rounded-full border-0 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="studio-website"
                  id="studio-website"
                  autoComplete="given-name"
                  placeholder="Studio Website"
                  className=" w-full  px-4 bg-[#D4E7F5] outline-none rounded-full border-0 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="given-name"
                  placeholder="Studio Phone Number"
                  className=" w-full  px-4 bg-[#D4E7F5] outline-none rounded-full border-0 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="col-span-full">
                <input
                  type="text"
                  name="country"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="What service area can we help you with?"
                  className=" w-full  px-4 bg-[#D4E7F5] outline-none rounded-full border-0 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="col-span-full">
                <textarea
                  type="text"
                  name="country"
                  id="first-name"
                  rows="8"
                  autoComplete="given-name"
                  placeholder="Message"
                  className=" w-full  px-4 bg-[#D4E7F5] outline-none rounded-2xl border-0 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex justify-center pt-14">
              <button className="text-center bg-[#2EABAF] hover:bg-[#15B8C7] text-white font-bold py-3 px-14 rounded-full uppercase">
                ASK FOR QUOTE
              </button>
            </div>
          </form>
        </div>
      </div>

      {/*----------------------------   TradeMarke Section    ------------------------------*/}
      <div className="lg:px-40 mx-auto lg:py-20">
        <h1 className="text-6xl uppercase  text-[Teko]">in need of video</h1>
        <div className=" px-5 py-14 grid md:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-36">
          <div className="flex flex-col justify-end">
            <h1 className="text-xl uppercase ">book a meeting</h1>
            <p className="pt-10 text-base font-[Rubik]">
              Lorem ipsum dolor sit amet consectetur. Malesuada interdum tellus
              viverra ut nulla placerat tincidunt velit scelerisque.
            </p>
            <span className="flex items-center gap-3 pt-10 ">
              <h1 className=" text-xl uppercase">book a meeting</h1>
              <ArrowLongRightIcon className=" h-8 8-6 text-gray-100 hover:ml-1" />
            </span>
          </div>
          <div className="flex flex-col justify-end">
            <h1 className="text-xl uppercase ">book a meeting</h1>
            <p className="pt-10 text-base font-[Rubik]">
              Lorem ipsum dolor sit amet consectetur. Malesuada interdum tellus
              viverra ut nulla placerat tincidunt velit scelerisque.
            </p>
            <span className="flex items-center gap-3 pt-10 ">
              <h1 className=" text-xl uppercase">book a meeting</h1>
              <ArrowLongRightIcon className=" h-8 8-6 text-gray-100 hover:ml-1" />
            </span>
          </div>
          <div className="flex flex-col justify-end">
            <h1 className="text-xl uppercase  ">book a meeting</h1>
            <p className="pt-10 text-base font-[Rubik]">
              Lorem ipsum dolor sit amet consectetur. Malesuada interdum tellus
              viverra ut nulla placerat tincidunt velit scelerisque.
            </p>
            <span className="flex items-center gap-3 pt-10  ">
              <h1 className=" text-xl uppercase">book a meeting</h1>
              <ArrowLongRightIcon className=" h-8 8-6 text-gray-100 hover:ml-1" />
            </span>
          </div>
          <div>
            <img src={trademark14021431} alt="" />
          </div>
        </div>
      </div>
      {/*----------------------------  Date Consulation Section    ------------------------------*/}
      <div className="promotional-section">
        <DateConsulation />
      </div>
      <FooterForm />
    </div>
  );
};

export default ContactUs;
