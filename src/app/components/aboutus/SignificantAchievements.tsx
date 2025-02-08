import React from "react";

const SignificantAchievements = () => {
  return (
    <>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-0 ">
          {/* Title Section */}
          <div className="mb-12 text-center sm:text-left">
            <h2 className="text-red-600 text-2xl sm:text-3xl font-bold">
              Benefits of Giving
            </h2>
            <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              Significant Achievements
            </h1>
          </div>

          <div className=" flex flex-col lg:flex-row  items-center lg:items-start">
            {/* Left Section */}
            <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 ">
              {/* Cards */}
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-[#035100] text-white p-6 border-b-2 border-r-2 border-white  shadow-md"
                  >
                    <h3 className="text-lg sm:text-xl font-bold">
                      Lorem Ipsum
                    </h3>
                    {/* <h4 className="text-lg sm:text-xl font-bold mt-1">
                      Lorem Ipsum
                    </h4> */}
                    <p className="mt-4 text-sm sm:text-base">
                      Lorem ipsum odor amet, consectetur adipiscing elit. Porta
                      elit auctor cras interdum.
                    </p>
                  </div>
                ))}
            </div>

            {/* Right Section */}
            <div className="w-full  md:mt-[-50px] md:ml-[-30px] md:h-[90vh] lg:w-[55%] relative">
              <img
                src="/about/image7.png"
                alt="Significant Achievements"
                className="object-cover w-full h-full  shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignificantAchievements;
