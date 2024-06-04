import React from "react";
import logo from "../../assets/LOGO ORIGINAL GREEN.png";
import logoImg from "../../assets/127_arrow_icon_logo_with_3d_modern_style copy 7.png";
import Button from "../Button/Button";
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PopUpForm from "../PopUpForm/PopUpForm";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");


  const navigate = useNavigate();
  return (
    <>
      <nav className="pt-5 absolute  z-[1000] top-0 w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex  items-center sm:justify-between lg:justify-center justify-between">
            <div className="flex ">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
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
                </Link>
                <Link to="/" className="flex items-center">
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
                </Link>
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
                  className="navlinks relative flex items-center justify-center gap-x-1.5 text-sm  font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Solutions{" "}
                  <span className="pt-0.5">
                    <IoIosArrowDown />
                  </span>
                  <div className="dropdown absolute hidden mt-1.5 w-32 bg-white shadow-lg  z-80  top-10 inset-x-0">
                    <Link
                      to="/solution1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Solution 1
                    </Link>
                    <Link
                      to="/solution2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Solution 2
                    </Link>
                  </div>
                </Link>

                <Link
                  to="/services"
                  className="navlinks relative flex items-center justify-center gap-x-1.5 text-sm  font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Services{" "}
                  <span className="pt-0.5">
                    <IoIosArrowDown />
                  </span>
                  <div className="dropdown absolute hidden mt-1.5 w-32 bg-white shadow-lg  z-80  top-10 inset-x-0">
                    <Link
                      to="/solution1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Service 1
                    </Link>
                    <Link
                      to="/solution2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Service 2
                    </Link>
                  </div>
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
                {/* <Link
                  to="/promotional-page"
                  className="flex items-center justify-center  gap-x-1.5  text-sm font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Promotional
                </Link>
                <Link
                  to="/blogpost"
                  className="flex items-center justify-center  gap-x-1.5  text-sm font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  BlogPost
                </Link>
                <Link
                  to="/blog"
                  className="flex items-center justify-center  gap-x-1.5  text-sm font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
                <Link
                  to="/careers"
                  className="flex items-center justify-center  gap-x-1.5  text-sm font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  careers
                </Link> */}

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
              <Button
                onClick={() => setOpen(true)}
                className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent hover:bg-gray-700 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase"
              >
                Book A Call
              </Button>
              <Button
                onClick={() => navigate("/signin")}
                className="px-8 py-2.5 text-sm font-semibold text-gray-200 bg-cyan-500 rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase"
              >
                Sign In
              </Button>
            </div>

            <div className="flex items-center text-white sm:hidden">
              <IoMdMenu className="w-5 h-5" />
            </div>
          </div>
        </div>
      </nav>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[10000]" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-3xl ring-1 ring-gray-300 bg-[#0B1A28CC]  px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-32 sm:w-full sm:max-w-6xl sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className=" flex justify-center items-center pt-20">
                    <div>
                      <div className="text-center text-[#fff]">
                        <h1 className=" text-[80px] font-[400] font-tek leading-tight">
                          SEND PROJECT BRIEF
                        </h1>
                        <p className="-pt-4">
                          We can tailor the perfect video experience for your
                          studio, give us a hi:
                        </p>
                      </div>
                      {/* Form  components on the right */}
                      <div className="max-w-4xl text-white">
                        <PopUpForm />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
