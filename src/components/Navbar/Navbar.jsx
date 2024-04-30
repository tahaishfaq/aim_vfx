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
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  return (
    <>
      <nav className="pt-5 absolute overflow-hidden z-[1000] top-0 w-full">
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
                  to="/hepltutorial"
                  className="flex items-center justify-center  gap-x-1.5  text-sm font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  help
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
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                  <div className=" flex justify-center">
                    <div>
                      <div className="text-center text-[#fff]">
                        <h1 className=" text-[50px] font-[400]">
                          SEND PROJECT BRIEF
                        </h1>
                        <p>
                          We can tailor the perfect video experience for your
                          studio, give us a hi:
                        </p>
                      </div>
                      <form className="w-[780px] shadow-sm  sm:rounded-xl ">
                        <div className="px-4 py-6 sm:p-8">
                          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium leading-6 text-[#FFFFFF]"
                              >
                                project name
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="block w-full bg-[#D4E7F5] outline-none rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="country"
                                className="block text-sm font-medium leading-6 text-[#FFFFFF]"
                              >
                                Project Type
                              </label>
                              <div className="mt-2">
                                <select
                                  id="country"
                                  name="country"
                                  autoComplete="country-name"
                                  className="block bg-[#D4E7F5] outline-none w-full rounded-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                                >
                                  <option>Select</option>
                                  <option>United States</option>
                                  <option>Canada</option>
                                  <option>Mexico</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-span-6 text-[#fff]">
                              <h1 className="text-[20px] font-[700]">
                                Creative Assets
                              </h1>
                              <p>What best fits your assets needs?</p>
                            </div>
                            <div className="sm:col-span-3">
                              <div className="mt-2">
                                <select
                                  id="country"
                                  name="country"
                                  autoComplete="country-name"
                                  className="block bg-[#D4E7F5] outline-none w-full rounded-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                                >
                                  <option>Select</option>
                                  <option>United States</option>
                                  <option>Canada</option>
                                  <option>Mexico</option>
                                </select>
                              </div>
                            </div>
                            <div className="sm:col-span-3">
                              <div className="mt-2">
                                <select
                                  id="country"
                                  name="country"
                                  autoComplete="country-name"
                                  className="block bg-[#D4E7F5] outline-none w-full rounded-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                                >
                                  <option>Select</option>
                                  <option>United States</option>
                                  <option>Canada</option>
                                  <option>Mexico</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-span-full">
                              <div className="text-[#fff] ">
                                <h1 className=" text-[20px] font-[700]">
                                  Describe the project
                                </h1>
                                <p>
                                  Consideer providing context, challenges,
                                  requirements, playback duration, past work,
                                  preferences, scripts or instructions,
                                  references and links
                                </p>
                              </div>
                              <div className="mt-2 overflow-hidden rounded-xl">
                                <ReactQuill
                                  theme="snow"
                                  value={value}
                                  onChange={setValue}
                                  className=" bg-[#D4E7F5] h-28  "
                                  placeholder="Add description..."
                                />
                              </div>
                            </div>
                            <div className="col-span-full text-[#fff] leading-7">
                              <h1 className="text-[20px] font-[700]">
                                Formats, sizes or ad set
                              </h1>
                              <p>
                                Are there any specific requirements for assets
                                formats, sizes or dimensions?
                              </p>

                              <div className="flex items-start pt-4">
                                <div className="flex h-6 items-center">
                                  <input
                                    name="plan"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                </div>
                                <div className="ml-3 text-sm leading-6">
                                  <label
                                    htmlFor="plan"
                                    className="font-medium "
                                  >
                                    Yes, I’ll provide the creative specs/chase
                                    list
                                  </label>
                                </div>
                              </div>
                              <div className=" flex items-start pt-4">
                                <div className="flex h-6 items-center ">
                                  <input
                                    name="plan"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                </div>
                                <div className="ml-3 text-sm leading-6">
                                  <label
                                    htmlFor="plan"
                                    className="font-medium "
                                  >
                                    No, I’d Superside to suggest the creative
                                    specs
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-span-5 flex gap-x-4 items-center">
                              <label
                                className="text-[#fff] text-[20px] font-[700]"
                                htmlFor=""
                              >
                                DEADLINE
                              </label>
                              <input
                                type="date"
                                name=""
                                id=""
                                className="w-full px-3 py-1.5 rounded-full text-[#9191d2] outline-none"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <button></button>
                          <Button className="px-8 py-2.5 text-sm font-semibold text-[#000]  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full  hover:text-[#000] hover:bg-cyan-600  focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                            SEND PROJECT BRIEF
                          </Button>
                        </div>
                      </form>
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
