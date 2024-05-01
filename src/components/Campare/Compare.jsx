import React from "react";
import Button from "../Button/Button";
import arrow11 from "../../assets/images/arrow11.png";
import Rectangle21 from "../../assets/images/Rectangle21.png";
import Rectangle7525 from "../../assets/images/Rectangle 7525.png";
import Rectangle7526 from "../../assets/images/Rectangle 7526.png";
import x from "../../assets/images/x.png";
import Creative from "./Creative";
import CreativeaAds from "./CreativeaAds";
import FooterForm from "../Footer/Footer";
import Clients from "../Clients/Clients";
const Compare = () => {
  const Rectangle = [
    {
      src: Rectangle21,
    },

    {
      src: Rectangle7525,
    },
    {
      src: Rectangle7526,
    },
    {
      title: "In house creative teams",
    },
    {
      title: "agencies",
    },
    {
      title: "freelancers",
    },
    {
      hed: "Pros:",
      text: "Lorem ipsum dolor sit amet consectetur. Sit vel dui lacus",
    },
    {
      hed: "Pros:",
      text: "Lorem ipsum dolor sit amet consectetur. Sit vel dui lacus",
    },
    {
      hed: "Pros:",
      text: "Lorem ipsum dolor sit amet consectetur. Sit vel dui lacus",
    },
    {
      hed: "Pros:",
      text: "Lorem ipsum dolor sit amet consectetur. Sit vel dui lacus",
    },
    {
      hed: "Pros:",
      text: "Lorem ipsum dolor sit amet consectetur. Sit vel dui lacus",
    },
    {
      hed: "Pros:",
      text: "Lorem ipsum dolor sit amet consectetur. Sit vel dui lacus",
    },
  ];

  return (
    <div className="solution-page text-white pt-28">
      <div className=" sm:max-w-7xl mx-auto grid sm:grid-cols-2">
        <div className="px-6 flex flex-col justify-center">
          <h1 className="text-[40px] sm:text-[60px] uppercase">
            a comparison of cretive services
          </h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur. Egestas id rhoncus morbi
            commodo auctor. Nulla imperdiet porttitor sollicitudin vitae varius
            semper in tortor integer. Quis nulla consequat ac ut consequat.
            Lorem sem lectus eu eros varius. Quis urna fringilla sed.
          </p>
          <div className="flex py-4	items-end	justify-between ">
            <span>
              <input
                type="email"
                name="email"
                placeholder="Your base Email"
                className="px-4 py-2.5 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] "
              />
            </span>
            <span>
              <Button className="px-4 py-2.5 text-sm font-semibold text-[#fff] bg-[#2EABAF] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                SEE OPENNINGS
              </Button>
            </span>
          </div>
        </div>
        <div>
          <img src={arrow11} alt="" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="px-6 py-10">
          <h1 className="text-[30px] uppercase">
            creative is the key to differentiation and growth
          </h1>
          <p className="py-10">
            Lorem ipsum dolor sit amet consectetur. At quis nunc mus iaculis.
            Nunc id ut ipsum vel lectus maecenas. Sem in laoreet gravida etiam
            in amet sociis non at. Ut senectus nisl aliquet vivamus arcu
            pharetra at. Pharetra lacus nulla tellus mi lectus vitae nullam
            tellus.
          </p>
        </div>
        <div>
          <div className="px-6 grid sm:grid-cols-3 gap-3">
            {Rectangle.map((item) => {
              return (
                <div>
                  <img className="mx-auto" src={item.src} alt="" />
                  <h1 className="text-[30px] uppercase py-4">{item.title}</h1>
                  <div className="mx-auto sm:px-10  lg:px-20">
                    <span className="text-[#00ffff]">{item.hed}</span>
                    <p> {item.text}</p>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Creative />
      <CreativeaAds />
      <Clients />
      <FooterForm />
    </div>
  );
};

export default Compare;
