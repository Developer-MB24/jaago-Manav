import React from "react";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";

const Introduction = () => {
  const images = [
    "/about/Vision.png",
    "/about/Mission.png",
    "/about/Vision1.png",
    "/about/Vision2.png",
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-3/5 px-4 sm:px-6 lg:px-10">
            {/* Title Section */}
            <div className="mb-12 text-center lg:text-left">
              <h2 className="text-red-600 text-2xl sm:text-3xl font-bold">
                About us
              </h2>
              <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
                Introduction
              </h1>
            </div>

            {/* Description Section */}
            <div className="text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Lorem ipsum odor amet, consectetur adipiscing elit. Porta elit
                auctor cras interdum efficitur fames nec cras. Magnis lectus
                mollis sodales gravida vivamus iaculis. Potenti sem mattis augue
                malesuada lacus facilisi turpis amet.
              </p>
              <p className="mt-4">
                Sapien hac molestie ullamcorper semper, varius aptent torquent
                accumsan. Tempor malesuada ipsum nam libero scelerisque.
                Facilisis himenaeos rutrum aptent nunc sapien ultrices
                convallis.
              </p>
              <p className="mt-4">
                Quisque class nibh lectus aliquam aliquam blandit pellentesque
                maecenas. Lacus augue nunc interdum ultrices risus placerat est
                vulputate tortor.
              </p>
              <p className="mt-4">
                Luctus lobortis faucibus sapien; quisque eget augue. Sem
                facilisis felis nunc himenaeos facilisis.
              </p>
            </div>

            <div className="mt-6">
              <button className="flex justify-center sm:justify-between items-center gap-2 px-6 py-3 bg-[#035100] text-white font-semibold rounded hover:bg-green-700 transition duration-300">
                Read More <FaArrowCircleRight />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-2/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="group p-4 rounded-lg text-center h-auto flex flex-col justify-center items-center transition duration-300 hover:bg-gray-100 hover:border-l-4 hover:border-red-600 hover:shadow-lg"
              >
                <div className="relative h-16 w-16 mb-4">
                  <Image
                    src={src}
                    alt={`Vision ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <h3 className="text-black text-xl sm:text-2xl font-bold">
                  {index % 2 === 0 ? "Vision" : "Mission"}
                </h3>
                <p className="mt-2 text-gray-700 text-sm sm:text-base">
                  Lorem ipsum odor amet, consectetur adipiscing elit. Platea
                  mollis elementum risus placerat; felis egestas.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
