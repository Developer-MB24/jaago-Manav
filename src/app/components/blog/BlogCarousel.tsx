"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/home/about1.png",
    title:
      "Transforming Lives of 2 Million Children: CRY's Journey in Empowering Children Across India",
    description:
      "2 Million Lives Transformed. The year 23-24 marked a monumental milestone for CRY, as we transformed the lives of 2 million children. We are so…",
    buttonLabel: "Read More",
  },
  {
    image: "/home/about2.png",
    title:
      "Transforming Lives of 2 Million Children: CRY's Journey in Empowering Children Across India",
    description:
      "2 Million Lives Transformed. The year 23-24 marked a monumental milestone for CRY, as we transformed the lives of 2 million children. We are so…",
    buttonLabel: "Read More",
  },
  {
    image: "/home/about3.png",
    title:
      "Transforming Lives of 2 Million Children: CRY's Journey in Empowering Children Across India",
    description:
      "2 Million Lives Transformed. The year 23-24 marked a monumental milestone for CRY, as we transformed the lives of 2 million children. We are so…",
    buttonLabel: "Read More",
  },
];

export default function BlogCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <>
      <section className="relative w-full bg-[#fefdf9] py-12">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center min-h-[500px]">
          {/* Left - Image */}
          <div className="lg:w-1/2 px-6 mb-8 lg:mb-0 relative">
            <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
              <Image
                src={slides[current].image}
                alt="Blog Slide"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:w-1/2 px-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
              {slides[current].title}
            </h2>
            <p className="text-gray-700 mb-6">{slides[current].description}</p>
            <button className="bg-[#035100] text-white font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
              {slides[current].buttonLabel}
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full shadow p-2 hover:scale-105 transition"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full shadow p-2 hover:scale-105 transition"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-yellow-500" : "bg-gray-300"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
