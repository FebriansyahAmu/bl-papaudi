"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Service() {
  const cards = [
    {
      title: "Structural Welding",
      description:
        "From small residential projects to large commercial buildings, our structural welding services ensure that every joint is strong and secure. We work with steel, stainless steel, and aluminum to deliver reliable and long-lasting results.",
      image: "/images/welding-1.jpg",
    },
    {
      title: "Repair & Maintenance",
      description:
        "Need to fix something? We offer repair and maintenance services for a wide range of metal structures and equipment. Whether it's a small crack or major damage, we'll restore it to its original strength.",
      image: "/images/welding-2.jpg",
    },
    {
      title: "Consultation & Design",
      description:
        "Not sure where to start? Our consultation and design services help you plan your project from start to finish. We'll guide you through the process, from selecting the right materials to the final weld.",
      image: "images/welding-3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? cards.length - 1 : prevIndex - 1
  //   );
  // };
  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === cards.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-auto flex flex-col justify-center items-center p-8 mt-14 bg-slate-800">
      <h1 className="text-4xl text-orange-700 font-extrabold text-center mb-8">
        SERVICES
      </h1>
      <div className="relative w-full max-w-5xl mx-auto">
        <div
          key={currentIndex}
          className="flex flex-col sm:flex-row items-center text-white rounded-lg overflow-hidden  "
        >
          <div className="w-full sm:w-1/2 p-6">
            <h2 className="text-4xl text-orange-700 font-semibold mb-4">
              {cards[currentIndex].title}
            </h2>
            <p className="mb-6">{cards[currentIndex].description}</p>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center">
            <img
              src={cards[currentIndex].image}
              alt={cards[currentIndex].title}
              className="w-[400px] h-[400px] lg:w-[380px] lg:h-[380px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
