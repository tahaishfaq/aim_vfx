import React, { useState } from "react";
import vector1 from "../../assets/Group 469319.png";
import vector2 from "../../assets/Group 469320.png";
import vector3 from "../../assets/Vector (1).png";
import vector4 from "../../assets/Vector (2).png";

const ServicesCards = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Educational videos",
      description:
        "We offer comprehensive web development services, including front-end and back-end development using the latest technologies.",
      icon: vector1,
      active: false,
    },
    {
      id: 2,
      title: "AI video",
      description:
        "Our team specializes in developing high-quality mobile applications for both iOS and Android platforms.",
      icon: vector2,
      active: false,
    },
    {
      id: 3,
      title: "Post Production",
      description:
        "We provide creative graphic design solutions tailored to meet your business needs, from logos to marketing materials.",
      icon: vector3,
      active: true,
    },
    {
      id: 4,
      title: "Social Media Videos",
      description:
        "We provide creative graphic design solutions tailored to meet your business needs, from logos to marketing materials.",
      icon: vector4,
      active: false,
    },
    {
      id: 5,
      title: "Social Media Videos",
      description:
        "We provide creative graphic design solutions tailored to meet your business needs, from logos to marketing materials.",
      icon: vector2,
      active: false,
    },
    {
      id: 6,
      title: "Social Media Videos",
      description:
        "We provide creative graphic design solutions tailored to meet your business needs, from logos to marketing materials.",
      icon: vector1,
      active: false,
    },
  ]);

  return (
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-5 cursor-pointer">
        {services?.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col border rounded-3xl px-5 pt-5 pb-1 ${
              service.active
                ? "border-[#2EABAF] bg-[#15B8C7] "
                : "border-[#2EABAF]"
            }`}
          >
            <div className="flex items-end justify-end pb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-10 h-10"
              />
            </div>
            <p
              className={`text-white text-base font-semibold ${
                service.active && "text-black"
              }`}
            >
              {service.title}
            </p>
            <p
              className={`text-xs text-white w-60 ${
                service.active && "text-black"
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div class="bar"></div>
    </div>
  );
};

export default ServicesCards;
