import React from "react";
import Rectangle7580 from "../../assets/images/Rectangle 7580.png";
import Rectangle7581 from "../../assets/images/Rectangle 7581.png";
import Rectangle7582 from "../../assets/images/Rectangle 7582.png";
import Rectangle7583 from "../../assets/images/Rectangle 7583.png";
import Article from "../../assets/images/article.png";
import Button from "../Button/Button";
const Design3d = () => {
  const products = [
    {
      id: 1,
      imageSrc: Rectangle7580,
      imageAlt: "Hand stitched, orange leather long wallet.",
      des: "Measuring the ROI of Design and Your Design Partner",
      cart: "AR & 3D Design",
    },
    {
      id: 1,
      imageSrc: Rectangle7581,
      imageAlt: "Hand stitched, orange leather long wallet.",
      des: "Onboarding Best Practices: 4 Easy Steps to Getting Started With ...",
      cart: "Video Marketing",
    },
    {
      id: 1,
      imageSrc: Rectangle7582,
      imageAlt: "Hand stitched, orange leather long wallet.",
      des: "How Strong Design Partnerships Transform Brands ",
      cart: "Video Marketing",
    },
    // More products...
  ];
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <span className="flex">
            <img src={Article} alt="" />
            <h3 className="text-[50px] font-[300]  tracking-tight text-[#56BEC2]">
              creative-as-a-service
            </h3>
          </span>
          <Button className="px-8 py-2.5 text-sm font-semibold border-2 border-[#fff] text-gray-200 bg-cyan-500 rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            SEE ALL
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className=" w-full overflow-hidden   ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center "
                />
              </div>
              <div className="p-3  text-[#fff]">
                <span className="font-[400] text-[#00FFFF] text-[18px]">
                  {product.cart}
                </span>
                <p className="font-[700] text-[22px]">{product.des}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Velit sollicitudin
                  cras pretium tellus sed. Fringilla sit eleifend tellus aliquet
                  ac.
                </p>
                <div className="flex gap-2 pt-3">
                  <span>
                    <img src={Rectangle7583} alt="" />
                  </span>
                  <span>
                    <span className="italic font-[700]">Dean Collins</span>
                    <p className="font-[300] text-[#00FFFF] text-[18px]">
                      Director of Brand Design
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design3d;
