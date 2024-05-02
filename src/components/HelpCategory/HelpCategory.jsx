import React from "react";
import Search from "../../assets/images/search.png";
import FooterForm from "../Footer/Footer";
import Arrow from "../../assets/images/Arrow.png";
import chevron from "../../assets/images/chevron-right (1).png";
const HelpCatogry = () => {
  const data = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 7,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 8,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 9,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
  ];
  return (
    <div className="solution-page pt-28">
      <div>
        <div className=" px-5 sm:px-10 md:px-20 lg:px-40 xl:px-40 2xl:px-96 py-24">
          <h1 className="text-[#fff] text-[35px] py-4 font-[500] ">
            Advice and answers from the AIM-FX Team
          </h1>
          <div className="flex justify-between p-2 px-4 bg-[#fff] rounded-full">
            <input
              className="w-full  outline-0"
              type="text"
              placeholder="Search for articles"
            />
            <img src={Search} alt="" />
          </div>
        </div>
        <div className="promotional-section px-5 py-36 sm:px-10 md:px-20 lg:px-40 xl:px-40 2xl:px-96">
          <div className="text-[#fff] ">
            <div className="flex">
              <span>All Collections</span>
              <img src={chevron} alt="" />
              <span className="text-[#00FFFF] font-[400]">
                AIM-FX Tutorials and FAQ
              </span>
            </div>
            <h1 className="text-[70px] py-6 uppercase">
              aim-fx tutorials and faq
            </h1>
            <p className="pb-3">Workflow, processes and AIM-FX tutorials.</p>
          </div>

          <div className="grid  lg:grid-cols-1 gap-5">
            {data.map((value) => {
              return (
                <div
                  key={value.id}
                  className=" flex flex-1 items-center justify-between px-5 py-1.5 cursor-pointer  rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4] hover:bg-gray-700"
                >
                  <p>{value.text}</p>
                  <span>
                    <img src={Arrow} alt="" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <FooterForm />
    </div>
  );
};

export default HelpCatogry;
