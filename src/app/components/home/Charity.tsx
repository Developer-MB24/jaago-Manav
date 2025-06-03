import React from "react";
import Image from "next/image";

const CharityCard = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-black">
          Helping Each Other Can Make{" "}
          <span className="text-red-500">World Better</span>
        </h1>
        <p className="text-center mt-4 text-gray-600">
          Volunteering Offers Opportunities To Develop New Skills And Gain
          Valuable Experience. This can include Leadership, Communication,
          Project.
        </p>

        {/* Features */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
          <div className="text-center md:text-left max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-red-100 rounded-full">
                <Image
                  src="/home/helping.png"
                  alt="Start Helping"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-400">
                  Start Helping Them
                </h3>
                <p className="text-black">
                  Raising Awareness about the Charity&apos;s Mission and Cause.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 bg-red-100 rounded-full">
                <Image
                  src="/home/charity.png"
                  alt="Make Donations"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-400">
                  Make Donations
                </h3>
                <p className="text-black">
                  Raising Awareness about the Charity&apos;s Mission and cause.
                </p>
              </div>
            </div>

            {/* Footer Highlights */}
            <div className="mt-12">
              <p className="text-black flex items-center gap-2">
                <span className="text-2xl">
                  <div className="p-4 rounded-full">
                    <Image
                      src="/home/tick.png"
                      alt="Check"
                      width={32}
                      height={32}
                    />
                  </div>
                </span>
                Helped Fund 3265 Project Powerful
              </p>
              <p className="text-black flex items-center gap-2 mt-4">
                <span className="text-2xl">
                  <div className="p-4 rounded-full">
                    <Image
                      src="/home/tick.png"
                      alt="Check"
                      width={32}
                      height={32}
                    />
                  </div>
                </span>
                We give Child a gift of a Education
              </p>
            </div>
          </div>

          {/* Statistics Card */}
          <div className="bg-white w-[20rem] p-6 rounded-lg shadow-lg text-center relative">
            <div className="absolute top-4 left-4">
              <span className="text-red-500 text-4xl">★</span>
            </div>
            <div className="bg-[#035100] rounded-tr-3xl overflow-hidden pt-4 pb-2">
              <div className="relative w-36 h-36 mx-auto">
                <Image
                  src="/home/image14.png"
                  alt="Child"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                  sizes="144px"
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-[#035100] text-3xl font-bold">58921</h2>
              <p className="text-red-500 font-semibold text-lg">Helped Fund</p>
              <p className="text-gray-600 mt-2 px-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="h-1 bg-red-500 w-full mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharityCard;
