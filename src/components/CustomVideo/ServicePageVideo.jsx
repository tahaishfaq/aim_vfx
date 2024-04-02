import React from "react";
import video from "../../assets/video.jpg";

const ServivePageVideo = () => {
  return (
    <div className="service-video">
      <video
        controls
        poster={video}
        className="object-cover h-[310px] w-[500px]"
      >
        <source src="video-file.mp4" type="video/mp4" />
      </video>
      <div className="play-icon"></div>
    </div>
  );
};

export default ServivePageVideo;
