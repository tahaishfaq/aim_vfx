import React from "react";
import video from "../../assets/video.jpg";

const ServivePageVideo = () => {
  return (
    <div className="service-video">
      <video
        controls
        poster={video}
        className="object-cover w-full h-auto lg:h-[310px] lg:w-[500px]"
      >
        <source src="video-file.mp4" type="video/mp4" />
      </video>
      <div className="play-icon"></div>
    </div>
  );
};

export default ServivePageVideo;
