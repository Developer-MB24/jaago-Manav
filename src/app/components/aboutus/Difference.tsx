import React from "react";

const Difference = () => {
  return (
    <>
      <section className="bg-red-600 mx-4 sm:mx-10 lg:mx-40 text-white py-16 rounded-[30px]">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            How we make a DIFFERENCE?
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg font-light">
            Everything you need to know about supporting education
          </p>

          {/* Content Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <div className="flex flex-col-reverse items-center text-center">
              <img
                src="/about/diff1.png"
                alt="Build & Support Schools"
                className="w-20 h-20 sm:w-24 sm:h-24 mt-6"
              />

              <p className="mt-2 text-sm sm:text-base lg:text-lg">
                Lorem ipsum odor amet, consectetur adipiscing elit. Porta elit
                auctor cras interdum efficitur fames nec cras. Magnis lectus
                mollis sodales gravida vivamus iaculis.
              </p>
              <h3 className="text-lg sm:text-xl lg:text-xl font-semibold">
                Build & Support Schools
              </h3>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/about/diff2.png"
                alt="Scholarships and Programs"
                className="w-20 h-20 sm:w-24 sm:h-24 mb-6"
              />
              <h3 className="text-lg sm:text-xl lg:text-xl mt-6 font-semibold">
                Scholarships and Programs
              </h3>
              <p className="mt-2 text-sm sm:text-base lg:text-lg">
                Lorem ipsum odor amet, consectetur adipiscing elit. Porta elit
                auctor cras interdum efficitur fames nec cras. Magnis lectus
                mollis sodales gravida vivamus iaculis.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col-reverse items-center text-center">
              <img
                src="/about/diff3.png"
                alt="Provide Essential Resources"
                className="w-20 h-20 sm:w-24 sm:h-24 mt-6"
              />

              <p className="mt-2 text-sm sm:text-base lg:text-lg">
                Lorem ipsum odor amet, consectetur adipiscing elit. Porta elit
                auctor cras interdum efficitur fames nec cras. Magnis lectus
                mollis sodales gravida vivamus iaculis.
              </p>
              <h3 className="text-lg sm:text-xl lg:text-xl font-semibold">
                Provide Essential Resources
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Difference;
