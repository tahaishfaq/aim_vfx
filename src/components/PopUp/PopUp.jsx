import React from "react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../Button/Button";

const PopUp = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl ring-1 ring-black	 bg-[#0B1A28CC]  px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-32 sm:w-full sm:max-w-6xl sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
                    <form className="w-[780px] shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl ">
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
                                preferences, scripts or instructions, references
                                and links
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
                                <label htmlFor="plan" className="font-medium ">
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
                                <label htmlFor="plan" className="font-medium ">
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
  );
};

export default PopUp;
