import React from "react";
import logo from "../../assets/LOGO ORIGINAL GREEN.png";
import logoImg from "../../assets/127_arrow_icon_logo_with_3d_modern_style copy 7.png";
import Button from "../Button/Button";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav className="pt-5 absolute overflow-hidden z-[1000] top-0 w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-center ">
            <div className="flex">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex items-center">
                  <img
                    className="block lg:hidden h-16 w-auto"
                    src={logoImg}
                    alt="Logo"
                  />
                  <img
                    className="block lg:hidden h-7 w-auto -ml-2.5"
                    src={logo}
                    alt="Logo"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="hidden lg:block h-16 w-auto"
                    src={logoImg}
                    alt="Logo"
                  />
                  <img
                    className="hidden lg:block h-7 w-auto -ml-2.5"
                    src={logo}
                    alt="Logo"
                  />
                </div>
              </div>
              {/* Navigation Links */}
              <div className="hidden sm:-my-px sm:ml-8 sm:flex  sm:space-x-8">
                <Link
                  to="/pricing"
                  className="flex items-center justify-center gap-x-1.5 text-sm font-medium cursor-pointer leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Pricing
                </Link>
                <Link
                  to="/solutions"
                  className="flex items-center justify-center gap-x-1.5 text-sm font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Solutions{" "}
                  <span className="pt-0.5">
                    <IoIosArrowDown />
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-x-1.5 text-sm font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Services{" "}
                  <span className="pt-0.5">
                    <IoIosArrowDown />
                  </span>
                </Link>
                <Link
                  to="/company"
                  className="flex items-center justify-center  gap-x-1.5  text-sm font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Company{" "}
                  <span className="pt-0.5">
                    <IoIosArrowDown />
                  </span>
                </Link> 
                <Link
                  to="/team-page"
                  className="flex items-center justify-center  gap-x-1.5  text-sm font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Team{" "}
                  <span className="pt-0.5">
                    <IoIosArrowDown />
                  </span>
                </Link>
                <Link
                  to="/about-us-page"
                  className="flex items-center justify-center  gap-x-1.5  text-sm font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                 About Us
                </Link>
                <Link
                  to="/reviews"
                  className="flex items-center justify-center  gap-x-1.5  text-sm font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Reviews
                </Link>

                {/* <div className="relative inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-white">
                <span>Contact</span>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden">
                  <span  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Contact 1</span>
                  <span  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Contact 2</span>
                  <span  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Contact 3</span>
                </div>
              </div> */}
              </div>
            </div>
            {/* Optional buttons or components on the right */}
            <div className="hidden sm:flex sm:items-center sm:ml-6 gap-x-3">
              <Button className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent hover:bg-gray-700 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                Book A Call
              </Button>
              <Button onClick={()=> navigate("/signin")} className="px-8 py-2.5 text-sm font-semibold text-gray-200 bg-cyan-500 rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
