import React, { useState } from "react";
import logo from "../../assets/LOGO ORIGINAL GREEN.png";
import logoImg from "../../assets/127_arrow_icon_logo_with_3d_modern_style copy 7.png";
import clutch from "../../assets/Group 236.png";
import trust from "../../assets/Group.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import bg1 from "../../assets/127_arrow_icon_logo_with_3d_modern_style copy 1 (1).png";
const Footer = () => {
  return (
    <>
      <footer className=" text-white pt-40 lg:pb-52 pb-10 relative overflow-hidden">
        <div className="absolute top-[36%] blur">
          <img
            src={bg1}
            alt="bg"
            className="max-w-sm hidden lg:block md:block"
          />
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 items-center pt-20 mx-auto max-w-6xl ">
          {/* Logo and Rating Section */}
          <div className="flex flex-col  items-center lg:items-start justify-center gap-y-2 lg:border-r border-[#2EABAF] lg:px-10">
            <div className="flex items-center">
              <img className="block  h-16 w-auto" src={logoImg} alt="Logo" />
              <img className="block h-7 w-auto -ml-2.5" src={logo} alt="Logo" />
            </div>
            <div className="flex items-center gap-2.5 ml-2">
              <img src={trust} alt="Trustpilot" />
              <img src={clutch} alt="Clutch" />
            </div>
            <Button className="mt-4 bg-transparent font-medium text-sm border border-[#2EABAF] rounded-full py-3 px-6 hover:bg-white hover:text-[#004E64] transition-colors">
              BOOK A CALL
            </Button>
          </div>

          <div className=" lg:border-r border-[#2EABAF] px-10 py-5">
            <div className="flex gap-y-2 flex-col  items-center">
              <Link to="/" className="mb-2 hover:text-gray-300">
                HOME
              </Link>
              <Link to="/pricing" className="mb-2 hover:text-gray-300">
                PRICING
              </Link>
              <Link to="/solution" className="mb-2 hover:text-gray-300">
                SOLUTION
              </Link>
              <Link to="/services" className="hover:text-gray-300">
                SERVICES
              </Link>
            </div>
          </div>

          <div className=" lg:border-r border-[#2EABAF] px-10 py-5">
            {/* Column 1 */}
            <div className="flex gap-y-2 flex-col items-center">
              <Link to="/" className="mb-2 hover:text-gray-300">
                HOME
              </Link>
              <Link to="/pricing" className="mb-2 hover:text-gray-300">
                PRICING
              </Link>
              <Link to="/solution" className="mb-2 hover:text-gray-300">
                SOLUTION
              </Link>
              <Link to="/services" className="hover:text-gray-300">
                SERVICES
              </Link>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center lg:items-end lg:gap-y-2 gap-y-1">
            <h3 className="font-semibold mb-4">SOCIALIZE WITH AIM FX</h3>

            <div className="flex gap-x-2 ">
              <FaFacebookF className=" bg-[#2EABAF] p-2 w-8 h-8 rounded-full" />
              <FaTwitter className=" bg-[#2EABAF] p-2 w-8 h-8 rounded-full" />
              <FaLinkedinIn className=" bg-[#2EABAF] p-2 w-8 h-8 rounded-full" />
              <FaYoutube className=" bg-[#2EABAF] p-2 w-8 h-8 rounded-full" />
              <FaInstagram className=" bg-[#2EABAF] p-2 w-8 h-8 rounded-full" />
            </div>

            <button className="mt-4 bg-[#2EABAF] rounded-full py-2 px-6 hover:bg-[#0084b4] transition-colors">
              Форма обратной связи
            </button>
          </div>
        </div>

        <div className="text-center mt-10 border-t border-gray-800 pt-4 flex items-center justify-center mx-auto max-w-5xl">
          2023 © AiM FX - ALL RIGHTS RESERVED
        </div>
      </footer>
    </>
  );
};

export default Footer;
