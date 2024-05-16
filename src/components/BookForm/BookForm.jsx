import React from "react";
import { ClockIcon } from "@heroicons/react/24/solid";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/solid";
import Button from "../Button/Button";

const BookForm = () => {
  return (
    <div className=" max-w-6xl lg:px-0 px-4 mx-auto text-white py-28">
      <div className="lg:px-8 px-4 py-3 gap-y-5  border-setting  bg-[#0B1A2880] rounded-3xl">
        <div className=" lg:px-6 max-w-4xl mx-auto ">
          <h1 className="font-tek text-center lg:text-[111px] text-5xl font-normal uppercase pt-14 ">
            aim-fx video demo call
          </h1>
          <div className=" lg:px-6 text-[#00ffff] font-light font-[Rubik] text-xl flex flex-wrap gap-y-4 justify-between">
            <div className="flex gap-x-2 items-center">
              <ClockIcon className="h-6 w-6 text-[#00ffff]" />
              <p>30 min</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <CalendarIcon className="h-6 w-6 text-[#00ffff]" />
              <p>14:30 - 15:00, Thursday, February 29, 2024</p>
            </div>
            <div className="flex gap-x-2  items-center">
              <GlobeEuropeAfricaIcon className="h-6 w-6 text-[#00ffff]" />
              <p>Brasilia Time</p>
            </div>
          </div>
          <div className="px-6 py-12">
            <div className="flex items-center pb-2 gap-x-3">
              <h2 className="font-medium text-xl font-[Rubik]">DISCLAIMER</h2>
              <ChevronUpIcon className="h-4 w-4 text-[#00ffff]" />
            </div>
            <p className="pb-4">
              We do not edit the following under any of our editing services:
            </p>
            <ol className="list-disc py-4 px-4 text-xl font-[Rubik] font-light">
              <li> Music Videos </li>
              <li> Documentary </li>
              <li> Short or Feature Films</li>
              <li> Animated Films</li>
              <li> Wedding Films</li>
              <li>Videos with offensive content</li>
            </ol>
            <p>
              *Game play highlights, stream recaps or highly complex edits
              including motion graphics can be accomplished via a custom St.
              Bernard plan.
            </p>
          </div>
        </div>

        {/*-------------------------- Enter Details Form  Section ------------------------------*/}
        <div className="max-w-5xl mx-auto border-t-[1px] border-gray-500">
          <div className="max-w-4xl mx-auto py-12">
            <h1 className="lg:text-[50px] pb-12 text-3xl text-[#00FFFF] font-tek font-normal">
              Enter Details
            </h1>
            <form>
              <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8 ">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block px-3 text-base font-light font-[Rubik] leading-6 text-white"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Enter First Name"
                      className="px-3 block w-full rounded-full border-0 outline-none py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1666B0]   sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block px-3  text-base font-light font-[Rubik] leading-6 text-white"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      placeholder="Enter Last Name"
                      className="px-3 block w-full rounded-full border-0 outline-none py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1666B0]   sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block px-3 text-base font-light font-[Rubik] leading-6 text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="email"
                      placeholder="Enter Email"
                      className="px-3 block w-full rounded-full border-0 outline-none py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1666B0]  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block px-3 text-base font-light font-[Rubik] leading-6 text-white"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="number"
                      id="number"
                      autoComplete="family-name"
                      placeholder="Phone Number"
                      className="px-3 block w-full rounded-full border-none outline-none py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1666B0]   sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-[Rubik] font-semibold py-9">
                How did you hear about us? (You can pick more than one)
              </h2>
              <div className="grid md:grid-cols-2 gap-y-5">
                <div className="space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-[#ffffff]"
                      >
                        Lorem ipsum dolor sit amet consectetur.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded-full border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-[#ffffff]"
                      >
                        Lorem ipsum dolor sit amet consectetur.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-[#ffffff]"
                      >
                        Lorem ipsum dolor sit amet consectetur.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-[#ffffff]"
                      >
                        Lorem ipsum dolor sit amet consectetur.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-[#ffffff]"
                      >
                        Lorem ipsum dolor sit amet consectetur.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-[#ffffff]"
                      >
                        Lorem ipsum dolor sit amet consectetur.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-[#ffffff]"
                      >
                        Lorem ipsum dolor sit amet consectetur.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-[#ffffff]"
                      >
                        Other
                      </label>
                      <div className="py-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          placeholder="Enter First Name"
                          className="px-3 block  rounded-full border-0 outline-none py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1666B0]   sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*------------------------------ Which of the following would you consider yourself?section  ----------------------------------*/}
              <div>
                <p className="py-4 font-medium font-[Rubik] text-xl">
                  Share at least 3 links to videos you've made. If you're just
                  getting started, include links to videos from other creators
                  whose content you take inspiration from.
                </p>
                <div className="w-full">
                  <textarea
                    name=""
                    rows="3"
                    cols="50"
                    placeholder="Enter message"
                    className="w-full outline-none rounded-3xl text-black placeholder:text-[#1666B0] resize-none p-4"
                  />
                </div>
              </div>
              {/*------------------------------ Which of the following would you consider yourself?section  ----------------------------------*/}

              <div>
                <h2 className="text-xl font-[Rubik] font-semibold py-9">
                  Are you editing videos for yourself or on someone's behalf?
                </h2>
                <div className="flex gap-x-11">
                  <div className="space-y-5">
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-[#ffffff]"
                        >
                          For myself
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-[#ffffff]"
                        >
                          For a client
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-xl font-[Rubik] font-semibold py-9">
                  Which of the following would you consider yourself?
                </h2>
                <div className="grid md:grid-cols-2  gap-x-4 gap-y-3">
                  <div className="space-y-5">
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium leading-1 text-[#ffffff]"
                        >
                          Individual Content Creator that creates content for
                          their channel or business.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-[#ffffff]"
                        >
                          Videographer
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-[#ffffff]"
                        >
                          Agency
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-[#ffffff]"
                        >
                          Other
                        </label>
                        <div className="py-2">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            placeholder="Enter First Name"
                            className="px-3 block  rounded-full border-0 outline-none py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1666B0]   sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*------------------------------ text area section  ----------------------------------*/}
                <div>
                  <p className="pt-4 pb-2 font-medium font-[Rubik] text-xl">
                    What challenges are you currently facing in your content
                    creation process and what steps are you taking to overcome
                    them?
                  </p>
                  <div className="w-full">
                    <textarea
                      name=""
                      rows="3"
                      cols="50"
                      placeholder="Enter message"
                      className="w-full outline-none rounded-3xl text-black placeholder:text-[#1666B0] resize-none p-4"
                    />
                  </div>
                </div>
              </div>
              {/*------------------------------  experience outsourcing video  section  ----------------------------------*/}
              <div>
                <h2 className="text-xl font-[Rubik] font-semibold py-9">
                  Have you had experience outsourcing video edits before?
                </h2>
                <div className="grid lg:grid-cols-2 gap-x-4 gap-y-3">
                  <div className="space-y-5">
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium leading-1 text-[#ffffff]"
                        >
                          Yes, I've outsourced my video edits before.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-[#ffffff]"
                        >
                          Lorem ipsum dolor sit amet consectetur.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-[#ffffff]"
                        >
                          No, this will be my first time outsourcing video
                          editing.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-[#ffffff]"
                        >
                          Other
                        </label>
                        <div className="py-2">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            placeholder="Please comment"
                            className="px-3 block  rounded-full border-0 outline-none py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1666B0]   sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*------------------------------ text area section  ----------------------------------*/}
                <div className="py-4">
                  <p className="pt-4 pb-2 font-medium font-[Rubik] text-xl">
                    Anything else we should know about you ahead of our meeting?
                  </p>
                  <div className="w-full">
                    <textarea
                      name=""
                      rows="3"
                      cols="50"
                      placeholder="Enter message"
                      className="w-full outline-none rounded-3xl text-black placeholder:text-[#1666B0] resize-none p-4"
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-[Rubik] font-semibold py-9">
                Which of the plan you're interested in?
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                <div className="space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium leading-1 text-[#ffffff]"
                      >
                        Pom Plan
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-[#ffffff]"
                      >
                        Siberian Plan
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-[#ffffff]"
                      >
                        Inuit Plan
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-[#ffffff]"
                      >
                        St Bernard
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-semibold text-xl font-[Rubik] py-10 ">
                Lorem ipsum dolor sit amet consectetur. Volutpat cras in mattis
                pharetra in arcu integer. Mauris magna sodales pharetra amet
                eget scelerisque nulla habitasse. Dui quam fermentum viverra
                sollicitudin. At faucibus sollicitudin sagittis consequat. Ac
                faucibus sit leo vel at proin nisl odio et. Sagittis consequat
                lorem nullam massa neque eros. Habitasse velit faucibus ac
                accumsan nibh morbi tristique ac suscipit.
              </p>

              <div>
                <div className="space-y-5">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-[#ffffff]"
                      >
                        Yes, I have seen the Pricing and How it Works on AIM_FX
                        website.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-5 py-4">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#00ffff] bg-black text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-[#ffffff]"
                      >
                        No, please explain the process and the plans on our Demo
                        Call
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="py-12 flex justify-center">
                  <Button className="px-16 py-2.5 text-sm font-semibold text-gray-200 bg-cyan-500 rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                    schedule event
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
