import React from "react";
import image1 from "../../assets/AIM_VFX_WEBSITE_3D_STILL_SHOTS_MAIN_01.png";
import image2 from "../../assets/IMG_DA2CF09EBBB6-1.png";
import image3 from "../../assets/METAHUMAN_CLIENT_screencast 2024-01-24 00-31-16 (0-00-07-16) 1.png";
import Heading from "../Heading/Heading";

const HomeGallery = () => {
  const gallery = [
    {
      id: 1,
      title: "Title Text Block",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit officia nihil ea magnam error beatae corporis hic exercitationem praesentium expedita amet, libero ad laborum doloremque, est placeat iure vel? Numquam.Veritatis commodi quas amet voluptatibus mollitia aut adipisci reiciendis totam, explicabo sunt dignissimos magni itaque distinctio facere dicta quia velit. Minus maxime eum saepe aspernatur tempora placeat odit aliquid dolorum.",
      url: image3,
    },
    {
      id: 2,
      title: "Title Text Block",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit officia nihil ea magnam error beatae corporis hic exercitationem praesentium expedita amet, libero ad laborum doloremque, est placeat iure vel? Numquam.Veritatis commodi quas amet voluptatibus mollitia aut adipisci reiciendis totam, explicabo sunt dignissimos magni itaque distinctio facere dicta quia velit. Minus maxime eum saepe aspernatur tempora placeat odit aliquid dolorum.",
      url: image1,
    },
    {
      id: 3,
      title: "Title Text Block",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit officia nihil ea magnam error beatae corporis hic exercitationem praesentium expedita amet, libero ad laborum doloremque, est placeat iure vel? Numquam.Veritatis commodi quas amet voluptatibus mollitia aut adipisci reiciendis totam, explicabo sunt dignissimos magni itaque distinctio facere dicta quia velit. Minus maxime eum saepe aspernatur tempora placeat odit aliquid dolorum.",
      url: image2,
    },
  ];
  return (
    <>
      <div className="flex items-end flex-wrap gap-x-10 gap-y-10">
        {gallery?.map((entity, index) => (
          <div className={`flex text-white flex-col w-2/5 gap-y-3 ${entity.id === 3 && "flex-col-reverse w-full"}`}>
            <div>
            <Heading className="font-tek text-[50px] leading-tight px-2">
              {entity.title}
            </Heading>
            <p className={`px-2 text-justify ${entity.id === 3 && "w-2/5"}`}>{entity.description}</p>
            </div>
            <img src={entity.url} alt="image1" className="max-w-5xl object-cover object-center" />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeGallery;
