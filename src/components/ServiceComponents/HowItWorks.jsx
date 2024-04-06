import React from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import videoicon from "../../assets/Camada_1.png";
import revision from "../../assets/Camada_2.png";
import folder from "../../assets/Camada_3.png";
import { Divider } from "@mui/material";
import Heading from "../Heading/Heading";

const HowItWorks = () => {
  const categories = [
    {
      icon: folder,
      alt: "Folder",
      title: "Offload your assets to us",
      description:
        "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
    {
      icon: videoicon,
      alt: "Video Icon",
      title: "Get your first edit in 1-2 business days",
      description:
        "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
    {
      icon: revision,
      alt: "Revision",
      title: "Make it perfect with unlimited revisions",
      description:
        "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
  ];
  return (
    <div className="how-it-works-category">
      {categories.map((category, index) => (
        <div className="work-category" key={index}>
          <div className="flex items-center">
            <img
              src={category.icon}
              alt={category.alt}
              className="w-[67px] h-[54px]"
            />
            <div className="work-icon">
              <div className="round-circle">
                <IoIosArrowDropleftCircle />
              </div>
              <Divider
                sx={{ backgroundColor: "#15B8C7" }}
                style={{ width: "100%", marginTop: "8px" }}
              />
              <div className="round-circle">
                <IoIosArrowDroprightCircle />
              </div>
            </div>
          </div>
          <Heading className="work-card-head font-tek">
            {category.title}
          </Heading>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;
