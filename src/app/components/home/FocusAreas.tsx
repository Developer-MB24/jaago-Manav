import React, { useState } from "react";
import Image from "next/image";

const focusAreas = [
  {
    iconImage: "/home/Education.png",
    title: "Education",
    subtitle: "Education. Success. Future",
    description:
      "Education is the foundation of a better future. We empower children by providing quality education to break the cycle of poverty.",
    buttonText: "READ MORE",
  },
  {
    iconImage: "/home/healthcare.png",
    title: "Healthcare",
    subtitle: "Healthy Lives",
    description:
      "Ensuring healthcare access for underprivileged communities. Our goal is to make healthcare a fundamental right for all.",
    buttonText: "READ MORE",
  },
  {
    iconImage: "/home/Education.png",
    title: "Education",
    subtitle: "Education. Success. Future",
    description:
      "Education is the foundation of a better future. We empower children by providing quality education to break the cycle of poverty.",
    buttonText: "READ MORE",
  },
  {
    iconImage: "/home/healthcare.png",
    title: "Healthcare",
    subtitle: "Healthy Lives",
    description:
      "Ensuring healthcare access for underprivileged communities. Our goal is to make healthcare a fundamental right for all.",
    buttonText: "READ MORE",
  },
  {
    iconImage: "/home/Education.png",
    title: "Education",
    subtitle: "Education. Success. Future",
    description:
      "Education is the foundation of a better future. We empower children by providing quality education to break the cycle of poverty.",
    buttonText: "READ MORE",
  },
  {
    iconImage: "/home/healthcare.png",
    title: "Healthcare",
    subtitle: "Healthy Lives",
    description:
      "Ensuring healthcare access for underprivileged communities. Our goal is to make healthcare a fundamental right for all.",
    buttonText: "READ MORE",
  },
  {
    iconImage: "/home/Education.png",
    title: "Education",
    subtitle: "Education. Success. Future",
    description:
      "Education is the foundation of a better future. We empower children by providing quality education to break the cycle of poverty.",
    buttonText: "READ MORE",
  },
  {
    iconImage: "/home/healthcare.png",
    title: "Healthcare",
    subtitle: "Healthy Lives",
    description:
      "Ensuring healthcare access for underprivileged communities. Our goal is to make healthcare a fundamental right for all.",
    buttonText: "READ MORE",
  },
  {
    iconImage: "/home/healthcare.png",
    title: "Healthcare",
    subtitle: "Healthy Lives",
    description:
      "Ensuring healthcare access for underprivileged communities. Our goal is to make healthcare a fundamental right for all.",
    buttonText: "READ MORE",
  },
];

const FocusAreas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="text-center py-10 bg-white text-black">
      <h2 className="text-4xl font-bold text-red-600 mb-4">Our Focus Areas</h2>
      <p className="text-lg font-medium text-gray-800 max-w-3xl mx-auto">
        Jaago Manav’s heartfelt approach uplifts lives by ensuring transparency
        in opportunities and funds, fostering better livelihoods.
      </p>
      <button className="bg-green-700 text-white py-2 px-6 rounded-full font-bold mt-4 hover:bg-green-800">
        JOIN US NOW
      </button>

      {/* Carousel Section */}
      <div className="relative mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {[0, 3, 6].map((startIndex, slideIndex) => (
            <div
              key={slideIndex}
              className="w-full flex-shrink-0 flex justify-center space-x-6"
            >
              {focusAreas
                .slice(startIndex, startIndex + 3)
                .map((area, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 p-6 rounded-lg shadow-md text-left w-96 mx-2 flex-shrink-0"
                  >
                    <div className="mb-2 flex justify-center">
                      <div className="relative w-16 h-16">
                        <Image
                          src={area.iconImage}
                          alt={area.title}
                          fill
                          className="object-contain"
                          sizes="64px"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold italic mb-1">
                      {area.title}
                    </h3>
                    <h4 className="text-lg font-bold mb-2">{area.subtitle}</h4>
                    <p className="text-gray-700 mb-4">{area.description}</p>
                    <button className="bg-green-700 text-white py-2 px-4 rounded-full font-bold hover:bg-green-800">
                      {area.buttonText}
                    </button>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="flex justify-center mt-5 mb-2 space-x-2">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentIndex ? "bg-black scale-125" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusAreas;
