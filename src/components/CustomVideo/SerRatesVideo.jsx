import React from "react";
import ratesVideo from "../../assets/RatesVideo.png";

const SerRatesVideo = () => {
  return (
    <div className="ser-rates-video">
      <video
        controls
        poster={ratesVideo}
        className="object-cover h-[310px] w-[500px]"
      >
        <source src="video-file.mp4" type="video/mp4" />
      </video>
      <div className="play-icon"></div>
    </div>
  );
};

export default SerRatesVideo;
