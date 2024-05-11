import React, { useState } from "react";
import Answer from "./Answer";
import Button from "../Button/Button";

const Question = () => {
  const Que = [
    {
      id: 1,
      question: "What is AiM Video FX?",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },
    {
      id: 2,
      question: "What is AiM Video FX?",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },
    {
      id: 3,
      question: "What is AiM Video FX?",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },
    {
      id: 4,
      question: "What is AiM Video FX?",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },
    {
      id: 5,
      question: "What is AiM Video FX?",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },
    {
      id: 6,
      question: "How will the relationship between ?",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },

    {
      id: 7,
      question: "What is AiM Video FX?",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },

    {
      id: 8,
      question:
        "How will the relationship between the marketplace and the partner be formalized?",
      row: "row-span-2",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },
  ];
  return (
    <div className="promotional-section text-[#fff] py-28 ">
      <h1 className="px-6 font-tek font-normal uppercase py-10 text-5xl lg:text-[100px] text-center">
        Freqfently Asked Questions
      </h1>
      <div className="grid lg:grid-cols-2 max-w-6xl md:px-40 lg:px-6 mx-auto px-6 gap-3  ">
        {Que.map((q) => {
          const { id } = q;
          return <Answer key={id} {...q} />;
        })}
      </div>

      <div className="flex sm:items-center  gap-x-16 justify-center pt-5">
        <Button className="px-8 py-2 text-sm font-semibold text-[#000] bg-[#fff] rounded-full hover:bg-gray-200 hover:text-[#000]  focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
          CHOOSE A PLAN
        </Button>
        <Button className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent  border-2 border-[#fff] rounded-full hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
          Book A Call
        </Button>
      </div>
    </div>
  );
};

export default Question;
