import React from "react";

const Donation = () => {
  return (
    <>
      <section className="relative">
        <div className="flex  gap-4 justify-center relative z-10 px-4 sm:px-6 md:px-10 mt-8">
          {/* First Div - 1 Image */}
          <div className="relative h-[17rem] sm:h-[18rem] md:h-[25rem] w-[30%] sm:w-1/6">
            <img
              src="/home/hero1.png"
              alt="Image 1"
              className="object-cover h-full w-full rounded"
            />
          </div>

          {/* Second Div - 2 Images in Column */}
          <div className="flex flex-col gap-4 w-[30%] sm:w-1/6">
            <div className="relative h-32 sm:h-36 md:h-48">
              <img
                src="/home/hero2.png"
                alt="Image 2"
                className="object-cover h-full w-full rounded"
              />
            </div>
            <div className="relative h-32 sm:h-36 md:h-48">
              <img
                src="/home/hero3.png"
                alt="Image 3"
                className="object-cover h-full w-full rounded"
              />
            </div>
          </div>

          {/* Third Div - 1 Image */}
          <div className="relative h-[17rem] sm:h-[18rem] md:h-[25rem] w-[30%] sm:w-1/6">
            <img
              src="/home/hero4.png"
              alt="Image 4"
              className="object-cover h-full w-full rounded"
            />
          </div>

          {/* Center Green Section */}
          <div className="absolute inset-0 flex items-center justify-center z-50 px-4">
            <div className="bg-[#035100] text-white py-6 px-6 sm:px-10 rounded-[40px] opacity-90 text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                Your donation means a lot to them
              </h2>
              <p className="mt-2 text-sm sm:text-base md:text-lg">
                Donate what you can
              </p>
              <button className="mt-4 px-4 sm:px-6 py-2 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-200 transition duration-300">
                Join community
              </button>
            </div>
          </div>

          {/* Fourth Div - 2 Images in Column */}
          <div className="flex flex-col gap-4 w-[30%] sm:w-1/6">
            <div className="relative h-32 sm:h-36 md:h-48">
              <img
                src="/home/hero5.png"
                alt="Image 5"
                className="object-cover h-full w-full rounded"
              />
            </div>
            <div className="relative h-32 sm:h-36 md:h-48">
              <img
                src="/home/hero6.png"
                alt="Image 6"
                className="object-cover h-full w-full rounded"
              />
            </div>
          </div>

          {/* Fifth Div - 1 Image */}
          <div className="relative h-[17rem] sm:h-[18rem] md:h-[25rem] w-[30%] sm:w-1/6">
            <img
              src="/home/hero7.png"
              alt="Image 7"
              className="object-cover h-full w-full rounded"
            />
          </div>

          {/* Sixth Div - 2 Images in Column */}
          <div className="flex flex-col gap-4 w-[30%] sm:w-1/6">
            <div className="relative h-32 sm:h-36 md:h-48">
              <img
                src="/home/hero8.png"
                alt="Image 8"
                className="object-cover h-full w-full rounded"
              />
            </div>
            <div className="relative h-32 sm:h-36 md:h-48">
              <img
                src="/home/hero9.png"
                alt="Image 9"
                className="object-cover h-full w-full rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donation;
