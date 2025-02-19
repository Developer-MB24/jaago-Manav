"use client";
import React, { useState } from "react";
import Image from "next/image";

const ChildOldCare = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    [
      { id: 1, image: "/home/hero1.png" },
      { id: 2, image: "/home/hero2.png" },
      { id: 3, image: "/home/hero3.png" },
      { id: 4, image: "/home/hero4.png" },
    ],
    [
      { id: 1, image: "/home/hero1.png" },
      { id: 2, image: "/home/hero2.png" },
      { id: 3, image: "/home/hero3.png" },
      { id: 4, image: "/home/hero4.png" },
    ],
    [
      { id: 1, image: "/home/hero1.png" },
      { id: 2, image: "/home/hero2.png" },
      { id: 3, image: "/home/hero3.png" },
      { id: 4, image: "/home/hero4.png" },
    ],
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center">
          {/* Left Button */}
          <button
            className="absolute left-0 z-10 ml-6 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={handlePrev}
          >
            <Image
              src="/home/left.png"
              alt="Previous"
              width={40}
              height={40}
              priority
            />
          </button>

          {/* Grid Layout for Images */}
          <div className="grid grid-cols-3 gap-4 w-full mx-12">
            {/* First Box */}
            <div className="flex justify-center items-center">
              <Image
                src={slides[currentSlide][0].image}
                alt={`Slide ${slides[currentSlide][0].id}`}
                width={500}
                height={270}
                quality={100}
                className="w-full h-[17rem] object-cover rounded-lg"
                priority
              />
            </div>

            {/* Second Box with Two Stacked Images */}
            <div className="grid grid-rows-2 gap-2">
              <Image
                src={slides[currentSlide][1].image}
                alt={`Slide ${slides[currentSlide][1].id}`}
                width={500}
                height={135}
                quality={100}
                className="w-full h-[8rem] object-cover rounded-lg"
              />
              <Image
                src={slides[currentSlide][2].image}
                alt={`Slide ${slides[currentSlide][2].id}`}
                width={500}
                height={135}
                quality={100}
                className="w-full h-[8rem] object-cover rounded-lg"
              />
            </div>

            {/* Third Box */}
            <div className="flex justify-center items-center">
              <Image
                src={slides[currentSlide][3].image}
                alt={`Slide ${slides[currentSlide][3].id}`}
                width={500}
                height={270}
                quality={100}
                className="w-full h-[17rem] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Button */}
          <button
            className="absolute right-0 z-10  mr-6 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={handleNext}
          >
            <Image
              src="/home/right.png"
              alt="Next"
              width={40}
              height={40}
              priority
            />
          </button>
        </div>

        {/* Section Title */}
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold text-green-700">
            Old People & Child Trouble
          </h2>
          <p className="text-gray-600">Child & Old Care</p>
        </div>
      </div>
    </section>
  );
};

export default ChildOldCare;
