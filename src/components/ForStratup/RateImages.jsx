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
    des: "Entertainment",
  },
  {
    id: 1,

    imageSrc: Rectangle5,
    imageAlt: "Hand stitched, orange leather long wallet.",
    des: "Advertising",
  },
  {
    id: 1,
    imageSrc: Rectangle6,
    imageAlt: "Hand stitched, orange leather long wallet.",
    des: "Marketing Videos",
  },
  // More products...
];

const Rateimage = () => {
  return (
    <div className="mx-auto px-4 py-16 lg:max-w-7xl">
      <div className=" grid md:grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-3  ">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className=" w-full overflow-hidden   ">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center "
              />
            </div>
            <h1 className="font-medium px-1 font-tek  lg:text-[50px] text-3xl py-6 text-white ">
              {product.des}
            </h1>
            <div className="px-2 flex flex-col gap-y-4 font-[300] text-[#fff]">
              <p>
                <span>+</span> Lorem ipsum dolor sit amet.
              </p>
              <p>
                <span>+</span> Lorem ipsum dolor sit amet.
              </p>
              <p>
                <span>+</span> Lorem ipsum dolor sit amet.
              </p>
              <p>
                <span>+</span> Lorem ipsum dolor sit amet.
              </p>
              <p>
                <span>+</span> Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Rateimage;
