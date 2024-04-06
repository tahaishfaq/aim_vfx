import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const ServiceRateDesc = ({ descriptions }) => {
  return (
    <div className="rate-desc">
      {descriptions.map((description, index) => (
        <div key={index} className="rate-desc-list">
          {description.map((item, i) => (
            <li key={i}>
              <span className="mt-1.5">
                <IoCheckmarkCircleOutline
                  style={{ fontSize: "18px", marginRight: "2px" }}
                />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ServiceRateDesc;
