import React from "react";
import Button from "../Button/Button";

const ServiceBenefits = () => {
  return (
    <>
      <div className="benefits-container">
        <div className="benefit-head">
          <p>Some of the benefits include:</p>
        </div>
        <div className="benefits-desc-list">
          <div className="descList">
            <div className="descText">
              <h5>Unlimited video projects - </h5>
              <p>Unleash your creativity without limitations. video output.</p>
            </div>
            <div className="descText">
              <h5>Fast turnaround time - </h5>
              <p>Lighting-fast turnaround time for your video needs.</p>
            </div>
            <div className="descText">
              <h5>3 rounds of changes -</h5>
              <p> Perfection guaranteed with three rounds of revisions.</p>
            </div>
            <div className="descText">
              <h5>Subtitles -</h5>
              <p>
                60 minutes per month of human quality controlled transcription
                and subtitles.
              </p>
            </div>
            <div className="descText">
              <h5>Private Slack Channel -</h5>
              <p>Streamlined communication for hassle-free collaboration.</p>
            </div>
            <div className="descText">
              <h5>Flexible Plans - </h5>
              <p>Flexible plans with no long-term commitment.</p>
            </div>
            <div className="descText">
              <h5>Adobe Premiere Pro Files - </h5>
              <p> Full control if you want to make your own changes.</p>
            </div>
          </div>
          <div className="descList">
            <div className="descText">
              <h5>HD 1080p Resolution - </h5>
              <p>High-definition quality for stunning video output.</p>
            </div>
            <div className="descText">
              <h5>No need to purchase equipment - </h5>
              <p> We've got the equipment covered.</p>
            </div>
            <div className="descText">
              <h5>No need to purchase software - </h5>
              <p> Yup, we've got thi covered too.</p>
            </div>
            <div className="descText">
              <h5>3 minutes of final runtime - </h5>
              <p>Deliver your message with precision and impact.</p>
            </div>
            <div className="descText">
              <h5>20GB Footage -</h5>
              <p> Ample footage for a compelling and engaging video.</p>
            </div>
            <div className="descText">
              <h5>30min Raw Footage -</h5>
              <p> Flexibility to choose the exact shot you want.</p>
            </div>
            <div className="descText">
              <h5>Time-saving - </h5>
              <p>
                Get hours of your life back with our video production services.
              </p>
            </div>
          </div>
        </div>
        <div className="service-hero-buttons flex justify-center gap-y-5 items-center">
          <Button className="px-8 py-2.5 mr-4 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            book a call
          </Button>
          <Button className="px-8 py-2.5 text-sm font-semibold text-black bg-white hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            Choose a plan
          </Button>
        </div>
      </div>
    </>
  );
};

export default ServiceBenefits;
