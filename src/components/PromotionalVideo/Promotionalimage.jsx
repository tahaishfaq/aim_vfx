import React from "react";
import Button from "../Button/Button";
import Rectangle4 from "../../assets/images/Rectangle 7522.png";
import Rectangle5 from "../../assets/images/Rectangle 7575.png";
import Rectangle6 from "../../assets/images/Rectangle 7576.png";

const products = [
  {
    id: 1,
    imageSrc: Rectangle4,
    imageAlt: "Hand stitched, orange leather long wallet.",
    des: "Unleash the Power of Promotional Videos: Strategies to Boost Your Brand's Visibility",
  },
  {
    id: 1,

    imageSrc: Rectangle5,
    imageAlt: "Hand stitched, orange leather long wallet.",
    des: "From Concept to Conversion: Crafting Compelling Promotional Videos That Drive Sales",
  },
  {
    id: 1,
    imageSrc: Rectangle6,
    imageAlt: "Hand stitched, orange leather long wallet.",
    des: "Promotional Videos: How to Engage, Convert, and Retain Customers",
  },
  // More products...
];

const Promotionalimage = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h3 className="text-[50px] font-[300]  tracking-tight text-[#56BEC2]">
            Read on About Promotional Videos
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
                  className="h-full w-full object-cover object-center hover:border-[1px] hover:border-[#5685c2] hover:rounded-[45px]"
                />
              </div>
              <div className="p-3 font-[700] text-[#fff]">
                <p>{product.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Promotionalimage;
