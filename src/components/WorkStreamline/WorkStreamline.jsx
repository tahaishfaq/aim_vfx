import React from "react";
import icon1 from "../../assets/calendar-svgrepo-com-4 2.png";
import icon2 from "../../assets/Group 469319.png";
import icon3 from "../../assets/IMAC (1).png";
import icon4 from "../../assets/IMAC.png";
import icon5 from "../../assets/laptop-svgrepo-com 1.png";
import Heading from "../Heading/Heading";
import CapsuleLine from "../CapsuleLine/CapsuleLine";

const WorkStreamline = () => {
  const workStream = [
    {
      id: 1,
      title: "Book Your Onboarding Call",
      description:
        "No more worries about value; we offer everything you need for one flat fee. Enhance your production with optional add-ons like subtitles and thumbnails.",
      url: icon1,
    },
    {
      id: 2,
      title: "Submit Your Video Request Form",
      description:
        "No more worries about value; we offer everything you need for one flat fee. Enhance your production with optional add-ons like subtitles and thumbnails.",
      url: icon2,
    },
    {
      id: 3,
      title: "Choose a Monthly or Quarterly Retainer",
      description:
        "No more worries about value; we offer everything you need for one flat fee. Enhance your production with optional add-ons like subtitles and thumbnails.",
      url: icon3,
    },
    {
      id: 4,
      title: "Explore Your Project Dashboard",
      description:
        "No more worries about value; we offer everything you need for one flat fee. Enhance your production with optional add-ons like subtitles and thumbnails.",
      url: icon4,
    },
    {
      id: 5,
      title: "Receive Your First Draft",
      description:
        "No more worries about value; we offer everything you need for one flat fee. Enhance your production with optional add-ons like subtitles and thumbnails.",
      url: icon5,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-y-8">
      <div className="flex items-center justify-center gap-x-40">
        {workStream.slice(0, 2).map((stream) => (
          <div key={stream.id} className="flex flex-col items-start gap-y-2.5">
            <img src={stream.url} alt={stream.title} className="w-14 h-12"/>
            <Heading className="text-[#56BEC2] font-tek text-[30px] w-48 leading-tight">{stream.title}</Heading>
            <p className="text-white text-sm w-80 text-justify">{stream.description}</p>
          </div>
        ))}
      </div>
      <div className="w-full">
      <CapsuleLine />
      </div>
      <div className="flex items-center justify-center gap-x-40">
        {workStream.slice(2).map((stream) => (
          <div key={stream.id} className="flex flex-col items-start gap-y-2.5 ">
            <img src={stream.url} alt={stream.title} className="w-14 h-12"/>
            <Heading className="text-[#56BEC2] font-tek text-[30px] w-48 leading-tight">{stream.title}</Heading>
            <p className="text-white text-sm w-80 text-justify">{stream.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkStreamline;
