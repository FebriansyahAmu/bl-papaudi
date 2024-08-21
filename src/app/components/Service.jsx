"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Service() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
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
    <section
      className="w-full h-auto flex flex-col justify-center items-center p-8 mt-14 bg-slate-800"
      ref={ref}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : "hidden"}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-4xl text-orange-700 font-extrabold text-center mb-8"
      >
        SERVICES
      </motion.h1>
      <div className="relative w-full max-w-5xl mx-auto">
        <div
          key={currentIndex}
          className="flex flex-col sm:flex-row items-center text-white rounded-lg overflow-hidden  "
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : "hidden"}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              delay: 0.8,
              duration: 0.5,
            }}
            className="w-full sm:w-1/2 p-6"
          >
            <h2 className="text-4xl text-orange-700 font-semibold mb-4">
              {cards[currentIndex].title}
            </h2>
            <p className="mb-6">{cards[currentIndex].description}</p>
          </motion.div>
          <div className="w-full sm:w-1/2 flex justify-center">
            <motion.img
              src={cards[currentIndex].image}
              alt={cards[currentIndex].title}
              initial={{ scale: 0.2, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : "hidden"}
              transtion={{ delay: 1, duration: 1 }}
              className="w-[400px] h-[400px] lg:w-[380px] lg:h-[380px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
