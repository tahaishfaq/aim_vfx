import React from "react";
import Search from "../../assets/images/search.png";
import Arrow from "../../assets/images/Arrow.png";
import FooterForm from "../Footer/Footer";
const HelpCenter = () => {
  const Data = [
    {
      id: 1,
      text: "aim-fx tutorials and faq",
    },
    {
      id: 2,
      text: "getting started: video tutorials",
    },
    {
      id: 3,
      text: "faq",
    },
    {
      id: 4,
      text: "plans and add-ons help center",
    },
    {
      id: 5,
      text: "tips for your videos",
    },
  ];
  return (
    <div className="solution-page pt-28">
      <div>
        <div className="px-96 py-24">
          <h1 className="text-[#fff] text-[30px] py-4">
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
        <div className="promotional-section">
          <div className="grid lg:grid-cols-2 lg:px-96 gap-5 gap-y-14">
            {Data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative p-10 bg-[#0513378C] rounded-3xl"
                >
                  <img
                    className="absolute top-[-52px]"
                    src="src/assets/images/Vector8.png"
                    alt=""
                  />
                  <div className="py-4 flex justify-between items-center">
                    <span className="text-[30px] uppercase text-[#00FFFF]">
                      {item.text}
                    </span>
                    <img src={Arrow} alt="" />
                  </div>
                  <p className="text-[#B6B6B6] leading-6">
                    Lorem ipsum dolor sit amet consectetur. Quis neque neque
                    amet faucibus. Laoreet consequat.
                  </p>
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

export default HelpCenter;
