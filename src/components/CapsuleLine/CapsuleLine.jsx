import React from "react";

const CapsuleLine = () => {
  return (
    <svg
      className="h-20 w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 100"
    >
      {/* Horizontal line */}
      <line
        x1="0"
        y1="50"
        x2="1200"
        y2="50"
        stroke="#56BEC2" // Modified color here
        strokeWidth="6"
      />
      {/* Capsule shapes */}
      {[...Array(5)].map((_, index) => (
        <g key={index}>
          {/* Capsule */}
          <circle cx={(index + 1) * 200} cy="50" r="8" fill="#56BEC2" /> // Modified color here
          {/* Line connecting to capsule */}
          {index < 4 && (
            <line
              x1={(index + 1) * 200 + 8}
              y1="50"
              x2={(index + 2) * 200 - 8}
              y2="50"
              stroke="#56BEC2" // Modified color here
              strokeWidth="6"
            />
          )}
        </g>
      ))}
      {/* Line after the 5th capsule */}
      <line
        x1="1000"
        y1="50"
        x2="1200"
        y2="50"
        stroke="#56BEC2" // Modified color here
        strokeWidth="6"
      />
    </svg>
  );
};

export default CapsuleLine;
