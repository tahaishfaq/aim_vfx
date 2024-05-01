import React from "react";
import Group469764 from "../../assets/images/Group 469764.png";
import Group469766 from "../../assets/images/Group 469766.png";
import Group469765 from "../../assets/images/Group 469765.png";

import Rectagle7604 from "../../assets/images/Rectangle 7604.png";
import Rectagle7605 from "../../assets/images/Rectangle 7605.png";

const CheckOut = () => {
  return (
    <div className="solution-page text-white pt-28">
      <div className=" px-6 grid md:grid-cols-5 xl:px-60 gap-5 lg:gap-x-16">
        <div className="col-span-2 text-[20px]">
          <div className="text-[40px] font-[400] uppercase font-tek border-b-[1px] border-gray-400 flex justify-between py-5">
            <span>subtotal</span>
            <span>$0.00</span>
          </div>
          <div className="text-[20px] font-[400] font-tek border-b-[1px] border-gray-400  flex items-center justify-between py-5">
            <span>Due Today</span>
            <span className="text-[40px]">$0.00</span>
          </div>
          <h1 className="text-[30px] uppercase py-5">
            choose your video editing plan
          </h1>

          <div className="bg-[#15B8C7] px-4 border-[1px] rounded-full flex justify-between items-center py-3">
            <span className="flex gap-3 items-center">
              <span className="h-4 w-4 rounded-sm bg-white flex justify-center items-center">
                <img src={Rectagle7605} alt="" />
              </span>

              <p>Scale Plan (Monthly)</p>
            </span>
            <span className="text-[25px] font-tek">$1,999.00</span>
          </div>
          <div className=" px-4 mt-4 border-[#2EABAF] border-[1px] rounded-full flex justify-between items-center py-3">
            <span className="flex items-center gap-x-3">
              <span className="h-4 w-4 rounded-sm  flex justify-center items-center">
                {" "}
                <img src={Rectagle7604} alt="" />
              </span>
              <p>Scale Plan (Monthly)</p>
            </span>
            <span className="text-[25px] font-tek">$1,999.00</span>
          </div>
          <div className="flex justify-between py-8 font-Rubik">
            <span className="text-[25px] uppercase">add-ons</span>
            <p>Include in your subscription.</p>
          </div>
          <div className="border-r-2 border-e-gray-400">
            <img src={Group469764} alt="" />
            <img src={Group469764} alt="" />
          </div>
        </div>
        <div className="col-span-3 ring-1 ring-slate-400 rounded-3xl p-6 sm:p-20 bg-[#0B1A28CC] text-white">
          <h1 className="text-[40px] uppercase pb-8 font-tek">
            payment method
          </h1>
          <form>
            <div className="grid max-w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div className="sm:col-span-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 "
                >
                  Card NUmber
                </label>
                <div className="mt-2">
                  <input
                    id="Number"
                    name="number"
                    type="text"
                    placeholder="Enter number."
                    className="block w-full px-4 rounded-full border-0 py-1.5 placeholder:text-[#1666B0] text-[#1666B0] shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full lg:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6"
                >
                  Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name=""
                    id=""
                    placeholder="given-name"
                    className="block w-full px-6 rounded-full border-0 py-1.5 text-[#1666B0] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full lg:col-span-3">
                <label
                  htmlFor="CVC"
                  className="block text-sm font-medium leading-6"
                >
                  CVC
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="CVC"
                    id="CVC"
                    placeholder="Enter CVC number"
                    className="block w-full px-6 t rounded-full border-0 py-1.5 text-[#1666B0] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1666B0] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 "
                >
                  Cardholder Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter name as written on card"
                    className="block w-full px-4 rounded-full border-0 py-1.5 placeholder:text-[#1666B0] text-[#1666B0] shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <p className="text-center py-10">
              By continuing you agree with the{" "}
              <span className="text-[#00ffff]">Terms of Service</span> &
              <span className="text-[#00ffff]">Privacy Policy</span>.
            </p>

            <div className="flex justify-center">
              <button
                type="submit"
                className=" bg-[#2EABAF] hover:bg-[#15B8C7] text-white font-bold py-3 px-20 mt-5 rounded-full"
              >
                BOOK A CALL
              </button>
            </div>
          </form>

          <div className="border-t-2 mt-10 border-[#2EABAF] pt-12 flex justify-center">
            <div>
              <img src={Group469766} alt="" className="py-6" />
              <img src={Group469765} alt="" className="pt-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
