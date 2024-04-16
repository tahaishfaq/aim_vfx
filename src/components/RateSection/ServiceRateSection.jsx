import React from "react";
import scissor from "../../assets/Scissor.svg";
import slicing from "../../assets/ri_knife-fill.svg";
import star from "../../assets/mdi_stars.svg";
import search from "../../assets/mingcute_search-fill.svg";
import audio from "../../assets/wpf_audio-wave.svg";
import training from "../../assets/iconamoon_certificate-badge-fill.svg";
import color from "../../assets/ion_color-fill.svg";
import file from "../../assets/fa-solid_file.svg";
import users from "../../assets/clarity_users-solid.svg";
import subtitle from "../../assets/material-symbols_subtitles-sharp.svg";

const ServiceRateSection = () => {
  return (
    <>
      <div className="serviceRateSection">
        <div className="save-time-head">
          <h1>how much time you save with aim fx?</h1>
        </div>
        <div className="mt-10">
          <div className="flex justify-between items-center w-full">
            <div className="w-1/2">
            <p className="time-content text-[#00FFFF]">
              You save hundreds of collective hours by not doing your own video
              editing:
            </p>
            </div>
            <div className="time-save">
              <div className="time">
                <span>Cutting</span>
                <span>
                  <img
                    src={scissor}
                    alt="Scissor vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
              <div className="time">
                <span>Color Correction</span>
                <span>
                  <img
                    src={color}
                    alt="Color vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
              <div className="time">
                <span>Adding Subtitles</span>
                <span>
                  <img
                    src={subtitle}
                    alt="Subtitle vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
            </div>

            <div className="time-save">
              <div className="time">
                <span>Slicing</span>
                <span>
                  <img
                    src={slicing}
                    alt="Slicing vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
              <div className="time">
                <span>Fixing Audio</span>
                <span>
                  <img
                    src={audio}
                    alt="Audio vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
              <div className="time">
                <span>Transitions</span>
                <span>
                  <img
                    src={star}
                    alt="Transition vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
            </div>
          </div>
          {/* ----------------- */}
          <div className="flex justify-between mt-10 items-center w-full">
            <div className="w-1/2">
            <p className="time-content text-[#00FFFF]">
              You save countless hours by not doing it the old-fashioned way
              with freelancers or full-time editors:
            </p>
            </div>

            <div className="time-save">
              <div className="time">
                <span>Searching</span>
                <span>
                  <img
                    src={search}
                    alt="Search vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
              <div className="time">
                <span>Training</span>
                <span>
                  <img
                    src={training}
                    alt="Training"
                    className="ser-vector-set"
                  />
                </span>
              </div>
            </div>

            <div className="time-save">
              <div className="time">
                <span>Hiring</span>
                <span>
                  <img
                    src={file}
                    alt="File vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
              <div className="time">
                <span>Managing</span>
                <span>
                  <img
                    src={users}
                    alt="Users vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceRateSection;
