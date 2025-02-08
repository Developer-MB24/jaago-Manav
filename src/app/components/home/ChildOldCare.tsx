import React, { useState } from "react";

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
      { id: 5, image: "/images/mercyCorps.png" },
      { id: 6, image: "/images/unicef.png" },
      { id: 7, image: "/images/wfp.png" },
      { id: 8, image: "/images/wfp1.png" },
    ],
    [
      { id: 9, image: "/images/hero2.avif" },
      { id: 10, image: "/images/hero1.avif" },
      { id: 11, image: "/images/mercyCorps.png" },
      { id: 12, image: "/images/hero3.avif" },
    ],
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center">
            <button
              className="absolute left-0 z-10 bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center"
              onClick={handlePrev}
            >
              ←
            </button>

            <div className="grid grid-cols-3 gap-4 w-full mx-12">
              {/* First Box */}
              <div className="flex justify-center items-center">
                <img
                  src={slides[currentSlide][0].image}
                  alt={`Slide ${slides[currentSlide][0].id}`}
                  className="w-full h-[17rem] object-cover "
                />
              </div>

              {/* Second Box with Two Images */}
              <div className="grid grid-rows-2 gap-2">
                <img
                  src={slides[currentSlide][1].image}
                  alt={`Slide ${slides[currentSlide][1].id}`}
                  className="w-full h-[8rem] object-cover "
                />
                <img
                  src={slides[currentSlide][2].image}
                  alt={`Slide ${slides[currentSlide][2].id}`}
                  className="w-full h-[8rem] object-cover "
                />
              </div>

              {/* Third Box */}
              <div className="flex justify-center items-center">
                <img
                  src={slides[currentSlide][3].image}
                  alt={`Slide ${slides[currentSlide][3].id}`}
                  className="w-full h-[17rem] object-cover "
                />
              </div>
            </div>

            <button
              className="absolute right-0 z-10 bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center"
              onClick={handleNext}
            >
              →
            </button>
          </div>

          <div className="text-center mt-8">
            <h2 className="text-3xl font-bold text-green-700">
              Old People & Child Trouble
            </h2>
            <p className="text-gray-600">Child & Old Care</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChildOldCare;
