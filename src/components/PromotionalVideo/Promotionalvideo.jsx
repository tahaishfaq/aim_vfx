import React from "react";
import Button from "../Button/Button";
import Rectangle7522 from "../../assets/images/Rectangle 7522.png";
import Rectangle7523 from "../../assets/images/Rectangle 7523.png";
import Rectangle7524 from "../../assets/images/Rectangle 7524.png";

const products = [
  {
    id: 1,
    imageSrc: Rectangle7522,
    imageAlt: "Hand stitched, orange leather long wallet.",
    des: "Unleash the Power of Promotional Videos: Strategies to Boost Your Brand's Visibility",
  },
  {
    id: 1,

    imageSrc: Rectangle7523,
    imageAlt: "Hand stitched, orange leather long wallet.",
    des: "From Concept to Conversion: Crafting Compelling Promotional Videos That Drive Sales",
  },
  {
    id: 1,
    imageSrc: Rectangle7524,
    imageAlt: "Hand stitched, orange leather long wallet.",
    des: "Promotional Videos: How to Engage, Convert, and Retain Customers",
  },
  // More products...
];

const Promotionalvideo = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h3 className="text-[70px] font-[400]  tracking-tight text-[#ffffff]">
            our promotional video portfolio
          </h3>
          <Button className="px-8 py-2.5 text-sm font-semibold border-2 border-[#fff] text-gray-200 bg-cyan-500 rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            GO TO BLOG
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className=" w-full overflow-hidden   ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-3 font-[700] text-[#fff]">
                <div className="flex justify-between text-[#00FFFF] ">
                  <h4 className="font-[700] italic text-[20px]">
                    {" "}
                    Title video name{" "}
                  </h4>
                  <h5>Production Time</h5>
                </div>
                <div className="flex justify-between">
                  <span>Brand name</span>
                  <p>12h</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Promotionalvideo;
