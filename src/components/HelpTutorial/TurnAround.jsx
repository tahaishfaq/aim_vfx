import React from "react";
import x from "../../assets/images/x.png";
import Rectangle from "../../assets/images/Rectangle 8.png";
import Group from "../../assets/images/Group 469605.png";
const TurnAround = () => {
  const data = [
    {
      id: 1,
      val: "Short-form",
      time: "90 seconds",
      day: "Same day",
      plan2: "Multiple per day",
    },
    {
      id: 2,
      val: "Long-form",
      time: "90 seconds",
      day: "Same day",
      plan2: "Multiple per day",
    },
    {
      id: 3,
      val: "Long-form",
      time: "90 seconds",
      day: "Same day",
      plan2: "Multiple per day",
    },
    {
      id: 4,
      val: "Long-form",
      time: "90 seconds",
      day: "Same day",
      plan2: "Multiple per day",
    },
    {
      id: 5,
      val: "Long-form",
      time: "90 seconds",
      day: "Same day",
      plan2: "Multiple per day",
    },
  ];

  return (
    <div className=" mx-auto w-[100%] sm:w-[80%] lg:w-[60%] text-white">
      <h1 className="text-6xl uppercase font-[700]  py-12">turnaround times</h1>
      <div>
        <div className="py-12 flex justify-between  border-t-2 border-l-2 border-r-2 border-[#15B8C7] rounded-t-3xl text-white text-2xl  lg:text-4xl  uppercase ">
          <span className="py-7">Content type</span>
          <span className="py-7">video length</span>
          <span className="py-7">plan 1</span>
          <span className="py-7">plan 2</span>
        </div>
        <div className="bg-[#15B8C7] lg:p-12 rounded-3xl w-full relative bottom-5">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between  text-white py-3"
              >
                <span>{item.val}</span>
                <span>{item.time}</span>
                <span>{item.day}</span>
                <span>{item.plan2}</span>
              </div>
            );
          })}
        </div>
      </div>
      <p className="py-16">
        Lorem ipsum dolor sit amet consectetur. Auctor leo in viverra quam nulla
        sed. A at eget pellentesque at viverra risus pulvinar sit. Pellentesque
        nunc vitae amet a placerat. Facilisis eu enim mus diam scelerisque
        imperdiet. Quam euismod morbi tortor at vitae sem. Sed vitae lorem morbi
        et sed vitae non cursus. Porttitor blandit odio velit fermentum rhoncus
        egestas amet ac sed. Nunc pellentesque donec viverra dui neque auctor
        pellentesque massa non. Nunc porta nunc nisi pharetra. <br />
        <br />
        Pellentesque enim placerat diam et dui pellentesque cras habitasse.
        Etiam sollicitudin gravida amet suscipit. Diam feugiat sodales lectus
        faucibus nulla sed sapien volutpat. Placerat lorem odio nunc.
      </p>
      <h1 className="text-6xl uppercase font-[700]  py-12">
        What videos do we edit?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Auctor leo in viverra quam nulla
        sed. A at eget pellentesque at viverra risus pulvinar sit. Pellentesque
        nunc vitae amet a placerat. Facilisis eu enim mus diam sceler.
      </p>
      <ul className="py-10">
        <li className="flex py-3 gap-2">
          <img src={x} alt="" />
          <span>
            Lorem ipsum dolor sit amet consectetur. Tempor amet nulla enim erat.
          </span>
        </li>
        <li className="flex py-3 gap-2">
          <img src={x} alt="" />
          <span>
            Lorem ipsum dolor sit amet consectetur. Tempor amet nulla enim erat.
          </span>
        </li>
        <li className="flex py-3 gap-2">
          <img src={x} alt="" />
          <span>
            Lorem ipsum dolor sit amet consectetur. Tempor amet nulla enim erat.
          </span>
        </li>
        <li className="flex py-3 gap-2">
          <img src={x} alt="" />
          <span>
            Lorem ipsum dolor sit amet consectetur. Tempor amet nulla enim erat.
          </span>
        </li>
        <li className="flex py-3 gap-2">
          <img src={x} alt="" />
          <span>
            Lorem ipsum dolor sit amet consectetur. Tempor amet nulla enim erat.
          </span>
        </li>
        <li className="flex py-3 gap-2">
          <img src={x} alt="" />
          <span>
            Lorem ipsum dolor sit amet consectetur. Tempor amet nulla enim erat.
          </span>
        </li>
      </ul>
      <div className="relative">
        <img src={Rectangle} alt="" />
        <div className=" items-center absolute top-1 sm:top-4 lg:top-14 flex justify-center w-full">
          <img src={Group} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TurnAround;
