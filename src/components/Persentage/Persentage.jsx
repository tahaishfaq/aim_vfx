import React from "react";
const stats = [
  {
    id: 1,
    name: "MUCH FASTER",
    value: "20x",
    p: "Faster than hiring creatives in-house",
  },
  {
    id: 2,
    name: "CUT COSTS",
    value: "50%",
    p: "Reduction in average of cost per asset",
  },
  {
    id: 3,
    name: "Ship faster",
    value: "70%",
    p: " Lower turnaround time for digital assets",
  },
  {
    id: 4,
    name: "Stress less",
    value: "9.6",
    p: "Average rating from customers.",
  },
];

export default function Persntage() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-38">
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex justify-center py-6 sm:px-6 lg:px-8"
            >
              <div>
                <div className="Teko font-[300] text-[20px] text-[#FFFF]">
                  {stat.name}
                </div>
                <span className="Teko font-[300] text-[80px] text-[#00FFFF]">
                  {stat.value}
                </span>
                <p className="font-[300] text-[#FFFF]">{stat.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
