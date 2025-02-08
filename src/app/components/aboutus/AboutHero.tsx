import React from "react";

const AboutHero = () => {
  return (
    <>
      <section className="bg-white px-20 py-16">
        <div className="container mx-auto text-center">
          {/* Hero Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Give the gift of learning - help us <br /> Educate every child
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum odor amet, consectetur adipiscing elit. Placerat
            porttitor arcu lacus scelerisque eu nisl aenean torquent porta. Ad
            vivamus interdum ornare; scelerisque purus orci diam ullamcorper.
            Ante ultrices laoreet ad montes litora amet in habitant. Vel rutrum
            ridiculus placerat duis finibus ipsum maximus. Vulputate netus
            rutrum sagittis mattis augue ante.
          </p>
          {/* Donate Button */}
          <div className="mt-6">
            <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition">
              Donate
            </button>
          </div>

          {/* Content Section */}
          <div className="flex flex-wrap justify-between items-end gap-6 ">
            {/* First Column (2 Divs) */}
            <div className="flex flex-col gap-6 flex-1 min-w-[200px]">
              {/* Sub-Div 1 */}
              <div className="relative bg-gradient-to-t from-black/60 to-transparent rounded-2xl overflow-hidden shadow-lg flex items-end h-[300px]">
                <img
                  src="/home/hero1.png"
                  alt="Child Smile"
                  className="absolute inset-0 object-cover w-full h-full"
                />
                <h3 className="relative text-white text-2xl font-bold p-6">
                  Be the reason a child smiles
                </h3>
              </div>
              {/* Sub-Div 2 */}
              <div className="bg-[#035100] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center h-[150px]">
                <p className="text-4xl font-bold">85%</p>
                <p className="mt-2 text-center text-lg">
                  Increase in literacy rate in the regions we serve
                </p>
              </div>
            </div>

            {/* Second Column */}
            <div className="relative bg-gradient-to-t from-black/60 to-transparent rounded-2xl overflow-hidden shadow-lg flex items-end h-[300px] flex-1 min-w-[150px]">
              <img
                src="/about/image5.png"
                alt="Inspire Education"
                className="absolute inset-0 object-cover w-full h-full"
              />
              <h3 className="relative text-white text-2xl font-bold p-6">
                200+ Trained Teachers empowering young minds everyday
              </h3>
            </div>

            {/* Third Column */}
            <div className="bg-red-600 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center h-[300px] flex-1 min-w-[150px]">
              <h3 className="text-2xl font-bold text-center">
                Join 1000 people building a better tomorrow.
              </h3>
              <button className="mt-4 px-6 py-3 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-200 transition">
                Join Community
              </button>
            </div>

            {/* Fourth Column */}
            <div className="relative bg-gradient-to-t from-black/60 to-transparent rounded-2xl overflow-hidden shadow-lg flex items-end h-[300px] flex-1 min-w-[150px]">
              <img
                src="/about/image7.png"
                alt="Inspire Education"
                className="absolute inset-0 object-cover w-full h-full"
              />
              <h3 className="relative text-white text-2xl font-bold p-6">
                Inspire change. Inspire education
              </h3>
            </div>

            {/* Fifth Column (2 Divs) */}
            <div className="flex flex-col-reverse gap-6 flex-1 min-w-[200px]">
              {/* Sub-Div 1 */}
              <div className="bg-[#035100] text-white  rounded-2xl shadow-lg flex flex-col justify-center items-center h-[150px]">
                {/* <p className="text-2xl font-bold text-center">
                  One child, teacher, book
                </p> */}
                <img
                  src="/home/hero1.png"
                  alt="Pencil"
                  className="  object-cover rounded-2xl  w-full h-full"
                />
              </div>
              {/* Sub-Div 2 */}
              <div className="relative bg-[#035100] rounded-2xl overflow-hidden shadow-lg flex items-end h-[300px]">
                <h3 className="absolute mb-32 mr-10 bg-[#035100] text-white text-2xl font-bold p-6">
                  One child, teacher, book
                </h3>
                <img
                  src="/about/rb.png"
                  alt="Child Smile"
                  className="absolute  z-20 mt-10 ml-10 inset-0 object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
