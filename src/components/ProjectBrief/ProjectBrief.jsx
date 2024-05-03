import React, { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Select } from "@mui/material";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Button from "../Button/Button";

const ProjectBrief = () => {
  const [value, setValue] = useState("");
  const data = [
    {
      col: "lg:col-span-3 cursor-pointer",
      text: "lorem span",
    },
    {
      col: "lg:col-span-3 cursor-pointer",
      text: "lorem span ",
    },
    {
      col: "lg:col-span-3 cursor-pointer",
      text: "lorem span",
    },
    {
      col: "lg:col-span-4 cursor-pointer",
      text: "lorem span",
    },
    {
      col: "lg:col-span-4 cursor-pointer",
      text: "lorem span",
    },
  ];

  return (
    <div className="solution-page py-20 text-[#fff]">
      <div className="px-6 md:max-w-6xl mx-auto">
        <div>
          <div className="w-full md:flex bg-[#0B1A2880]  items-center justify-between px-3 py-6 rounded-lg ring-1 ring-gray-400">
            <div className="flex items-center gap-4">
              <ChevronLeftIcon className="h-6 w-6 text-gray-300" />
              <span className="text-[35px] uppercase">edit Projects</span>
            </div>

            <div className="flex items-center gap-4">
              <button className="cursor-pointer bg-[#2EABAF] hover:bg-[#15B8C7] text-white font-bold py-3 px-10 rounded-full">
                Save Changes
              </button>
              <span className="px-4 py-3 rounded-[50%] bg-[#2EABAF]">TJ</span>
            </div>
          </div>
          {/* ------------ From 1 Section --------------- */}

          <div className="w-full  bg-[#0B1A2880]  my-5 px-3 py-6 rounded-lg ring-1 ring-gray-400">
            <div className="flex items-center gap-4">
              <ChevronLeftIcon className="h-6 w-6 text-gray-300" />
              <span className="text-[25px] md:text-[35px] uppercase">
                Please fill in this brief
              </span>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-14 md:grid-cols-3">
                <div>
                  <h2 className="text-2xl font-semibold leading-7">
                    project name
                  </h2>
                </div>

                <div className=" max-w-2xl col-span-2 w-full">
                  <div className="w-full md:pl-28 mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Text Here"
                      className="px-5 outline-none block w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-12 md:grid-cols-3">
                <div>
                  <h2 className="text-2xl font-semibold leading-7">Job</h2>
                  <p className="mt-1 text-sm leading-6 text-gray-200">
                    How can we help?
                  </p>
                </div>

                <div className=" max-w-2xl col-span-2 w-full">
                  <div className="w-full md:pl-28 mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Text Here"
                      className="px-5 outline-none block w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------ From 2 Section --------------- */}

          <div className="w-full  bg-[#0B1A2880]  my-5 px-3 py-6 rounded-lg ring-1 ring-gray-400">
            <div className="flex items-center gap-4">
              <ChevronLeftIcon className="h-6 w-6 text-gray-300" />
              <span className="text-[25px] md:text-[35px] uppercase">
                Creative Assets
              </span>
            </div>
            <div>
              <div className="pt-5 grid grid-cols-1 gap-x-8 gap-y-10 pb-14 md:grid-cols-3">
                <div>
                  <h2 className="text-2xl font-semibold leading-7">
                    New or edits
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-gray-200">
                    What best fits your assets needs?
                  </p>
                </div>

                <div className=" max-w-2xl col-span-2 w-full">
                  <div className="w-full md:pl-28 mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Text Here"
                      className="px-5 outline-none block w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="w-full md:pl-28 mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Text Here"
                      className="px-5 outline-none block w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------ From 3 Section --------------- */}

          <div className="w-full  bg-[#0B1A2880]  my-5 px-3 py-6 rounded-lg ring-1 ring-gray-400">
            <div className="flex items-center pb-4 gap-4">
              <ChevronLeftIcon className="h-6 w-6 text-gray-300" />
              <span className="text-[25px] md:text-[35px] uppercase">
                lets design new creative assets
              </span>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-4 md:grid-cols-3">
                <div>
                  <h2 className="text-xl font-semibold leading-7 uppercase">
                    Goals
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-200">
                    What would make this project a win?
                  </p>
                </div>

                <div className=" max-w-2xl col-span-2 w-full">
                  <div className="w-full md:pl-28 mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Text Here"
                      className="px-5 outline-none block w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-4 md:grid-cols-3">
                <div>
                  <h2 className="text-xl font-semibold leading-7 uppercase">
                    Channels
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-200">
                    Where do you want people to see your assets?
                  </p>
                </div>

                <div className=" max-w-2xl col-span-2 w-full">
                  <div className="w-full md:pl-28 mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Text Here"
                      className="px-5 outline-none block w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-4 md:grid-cols-3">
                <div>
                  <h2 className="text-xl font-semibold leading-7 uppercase">
                    target audience
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-200">
                    Who are they and do they have any especial interests or pain
                    points?
                  </p>
                </div>

                <div className=" max-w-2xl col-span-2 w-full">
                  <div className="w-full md:pl-28 mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Text Here"
                      className="px-5 outline-none block w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* ------------ All About 3 Section --------------- */}

            <div>
              <div className="py-4">
                <h2 className="text-xl font-semibold leading-7 uppercase">
                  target audience
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-200">
                  Who are they and do they have any <br /> especial interests or
                  pain points?
                </p>
              </div>

              <div className=" grid md:grid-cols-6 lg:grid-cols-12 gap-3">
                {data.map((item, ind) => {
                  return (
                    <div key={ind} className={item.col}>
                      <div className=" flex flex-1 justify-between px-5 py-3   rounded-full bg-slate-800  font-bold  text-[#E4E4E4]  hover:bg-gray-700">
                        <button>{item.text}</button>
                        <span>
                          <PlusIcon className="h-6 w-6 text-gray-200" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-span-full">
                <div className="text-[#fff] ">
                  <h1 className=" text-[20px] font-[700]">
                    Describe the project
                  </h1>
                  <p>
                    Consideer providing context, challenges, requirements,
                    playback duration,
                    <br /> past work, preferences, scripts or instructions,
                    references and links
                  </p>
                </div>
                {/* ------------ React Quill Text About 3 Section --------------- */}

                <div className="lg:mt-3 max-w-4xl  overflow-hidden rounded-2xl placeholder:text-gray-400 border-none ">
                  <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    className=" bg-slate-800 placeholder:text-gray-400 h-28 border-none right-0  "
                    placeholder="Add description..."
                  />
                </div>
                <div className="col-span-full text-[#fff] py-5 leading-7">
                  <h1 className="text-[20px] font-[700]">
                    Formats, sizes or ad set
                  </h1>
                  <p className="mt-1 text-sm leading-6 text-gray-200">
                    Are there any specific requirements for assets formats,
                    sizes or dimensions?
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
                      <label htmlFor="plan" className="font-medium ">
                        Yes, I’ll provide the creative specs/chase list
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
                      <label htmlFor="plan" className="font-medium ">
                        No, I’d Superside to suggest the creative specs
                      </label>
                    </div>
                  </div>
                </div>

                {/* ------------ Choose option Text About 3 Section --------------- */}

                <div className="grid lg:grid-cols-2 gap-x-4 items-center">
                  <div>
                    <h2 className="text-xl">Creative exploration</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-200">
                      How far would you like us to push our creativity on this
                      project?
                    </p>
                    <select
                      type="select"
                      name="choose"
                      id=""
                      placeholder="Please choose"
                      className="w-full mt-4 px-3 py-2 placeholder:text-sky-600 rounded-full text-[#4949c7] outline-none"
                    >
                      <option className="rounded-3xl" value="choose">
                        Please choose
                      </option>
                    </select>
                  </div>
                </div>

                {/* ------------ Upload File option Text About 3 Section --------------- */}

                <div>
                  <div className="max-w-4xl mx-4 py-5">
                    <h2 className="text-xl py-3">Files</h2>
                    <p>Upload any relevant files, references or chase lists</p>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-100 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />

                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <p className="pl-1 text-center">
                            Drag files here to add them to this project, or
                          </p>
                        </div>
                        <div className="flex gap-x-12">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer "
                          >
                            <span className="text-[#00ffff] underline">
                              Upload from computer
                            </span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer "
                          >
                            <span className="text-[#00ffff] underline">
                              Import from Brand Assests
                            </span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="hidden sm:flex py-1 justify-end  sm:items-center  gap-x-3">
                        <Button className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent hover:bg-gray-700 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                          Book A Call
                        </Button>
                        <Button className="px-8 py-2.5 text-sm font-semibold text-black bg-white rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                          Sign In
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl">Copywriting</h2>
                  <p className="mt-1 text-sm leading-6 text-gray-200">
                    Would you like help with copywriting?
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
                      <label htmlFor="plan" className="font-medium ">
                        Yes
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
                      <label htmlFor="plan" className="font-medium ">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBrief;
