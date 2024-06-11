import React from "react";
import chevron from "../../assets/images/chevron-right (1).png";
const DropDown = () => {
  const product = [
    {
      heading: "Promotional Videos",
      p1: "FB ad with 2D animation ",
      p2: "Commercial video with 2D animation",
      p3: "Corporate video with 2D animation",
      p4: "Brand film",
      p5: "TV Commercial",
      p6: "Commercial videos with 3D",
      p7: "3D Product video",
    },
    {
      heading: "Corporate Videos",
      p1: "Corporate video with 2D animation ",
      p2: "Interview video",
      p3: "estimonial video ",
      p4: "Summary video with stock 2D animation",
      p5: "Animation Corporate videos 3D",
      p6: "3D Engineering video",
    },
    {
      heading: "2D Animation",
      p1: "Commercial video with 2D animation ",
      p2: "Corporate video with 2D animation",
      p3: "Whiteboard Animation",
      p4: "Summary video with stock 2D animation ",
      p5: "Documentaries 2D ",
      p6: "Brand template for a video",
      p7: "Infographics",
    },
    {
      heading: "Educational Videos",
      p1: "Online courses",
      p2: "ELearning 2D animation",
      p3: "ELearning video with slides ",
      p4: "ELearning 3D ",
      p5: "3D Engineering video ",
      p6: "3D Medical video",
      p7: "Explainer video",
      p8: "UI video",
      p9: "utorial video",
    },
    {
      heading: "Social Media Videos",
      p1: "Vertical (Stories, Reels, Shorts)",
      p2: "TikTok video ",
      p3: "YouTube video from your RAW footage",
      p4: "YouTube video from stock footage",
      p5: "Vlog video",
      p6: "Resizing",
    },
    {
      heading: "Software/App Videos",
      p1: "Ad video ",
      p2: "Tutorial video",
      p3: "UI video",
    },
    {
      heading: "Film & TV",
      p1: "TV Commercial ",
      p2: "Feature film",
      p3: " Series",
      p4: "Documentary",
      p5: "Music video",
      p6: "TV Show",
      p7: "Script",
      p8: "Storyboard",
      p9: "Video editing services",
      p10: "VFX  ",
      p12: "Color Correction",
      p13: " Sound design",
      p14: "Music",
      p15: " Voice over",
    },
    {
      heading: "3D Animation",
      p1: "Animation 3D    ",
      p2: "Animation Corporate video 3D ",
      p3: "ELearning video 3D",
      p4: "Commercial video with 3D",
      p5: " 3D Engineering video ",
      p6: "3D Product video",
      p7: "3D Medical video",
      p8: "Motion Design ",
      p9: " AI video",
      p10: " Character Creation",
      p11: "Character Animation",
      p12: " 3D Modeling",
      p13: " Logo motion",
    },
    {
      heading: "Video Production",
      p1: "Film&TV ",
      p2: "Commercials",
      p3: " Corporate video",
      p4: " Music video",
      p5: " Brand film ",
      p6: "Animation",
      p7: " Educational video ",
      p8: "Production Service",
    },
    {
      heading: "Extras",
      p1: "Extra hours video editor - $25",
      p2: "Art director",
      p3: "Script",
      p4: "Storyboard",
      p5: "Original music",
      p6: "Sound design",
      p7: "Voice over ",
      p8: "AI Voice over (+30 minutes)",
      p9: " Logo motion",
      p10: " Character creation ",
      p12: " 3D Models",
      p13: " Illustrator",
      p14: "Animatic",
      p15: "Paid stock footages",
      P16: "        Multiple User Access",
    },
  ];

  return (
    <div className="solution-page text-white py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 bg-[#0B1A28CC] p-5 gap-3 rounded-3xl">
        <div className="grid grid-cols-2 gap-3">
          {product.slice(0, 6).map((item, ind) => {
            return (
              <div
                key={ind}
                className="border-2  border-[#00ffff] p-2 px-3 rounded-2xl"
              >
                <div className="flex gap-1 py-2 ">
                  <span className="text-[#00FFFF] font-[Rubik] text-base font-bold ">
                    {item.heading}
                  </span>
                  <img src={chevron} alt="" className="" />
                </div>
                <ul className="cursor-pointer text-base font-normal font-[Rubik] leading-[17.5px]">
                  <li>{item.p1}</li>
                  <li>{item.p2}</li>
                  <li>{item.p3}</li>
                  <li>{item.p4}</li>
                  <li>{item.p5}</li>
                  <li>{item.p6}</li>
                  <li>{item.p7}</li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {product.slice(6, 10).map((item, ind) => {
            return (
              <div
                key={ind}
                className="border-2 border-[#00ffff] py-2 px-3 rounded-2xl"
              >
                <div className="flex gap-1 py-2">
                  <span className="text-[#00FFFF] font-[Rubik] text-base font-bold">
                    {item.heading}
                  </span>
                  <img src={chevron} alt="" className="" />
                </div>
                <ul className="cursor-pointer text-base font-normal font-[Rubik] leading-[17.5px]">
                  <li>{item.p1}</li>
                  <li>{item.p2}</li>
                  <li>{item.p3}</li>
                  <li>{item.p4}</li>
                  <li>{item.p5}</li>
                  <li>{item.p6}</li>
                  <li>{item.p7}</li>
                  <li>{item.p8}</li>
                  <li>{item.p9}</li>
                  <li>{item.p10}</li>
                  <li>{item.p11}</li>
                  <li>{item.p12}</li>
                  <li>{item.p13}</li>
                  <li>{item.p14}</li>
                  <li>{item.p15}</li>
                  <li>{item.p16}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
