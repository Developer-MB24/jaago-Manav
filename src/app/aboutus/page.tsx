"use client";
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
const AboutUs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question:
        "Lorem ipsum odor amet, consectetur adipiscing elit. Porta elit auctor cras interdum?",
      answer:
        "Lorem ipsum odor amet, consectetur adipiscing elit. Porta elit auctor cras interdum efficitur fames nec cras. Magnis lectus mollis sodales gravida vivamus iaculis. Potenti sem mattis augue malesuada lacus facilisi turpis amet. Non vivamus facilisi venenatis et rutrum.",
    },
    {
      question:
        "Lorem ipsum odor amet, consectetur adipiscing elit. Porta elit auctor cras interdum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      question:
        "Lorem ipsum odor amet, consectetur adipiscing elit. Porta elit auctor cras interdum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question:
        "Lorem ipsum odor amet, consectetur adipiscing elit. Porta elit auctor cras interdum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <>
      <Header />
      {/* Hero Section */}
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
                  src="/images/hero1.avif"
                  alt="Child Smile"
                  className="absolute inset-0 object-cover w-full h-full"
                />
                <h3 className="relative text-white text-2xl font-bold p-6">
                  Be the reason a child smiles
                </h3>
              </div>
              {/* Sub-Div 2 */}
              <div className="bg-green-600 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center h-[150px]">
                <p className="text-4xl font-bold">85%</p>
                <p className="mt-2 text-center text-lg">
                  Increase in literacy rate in the regions we serve
                </p>
              </div>
            </div>

            {/* Second Column */}
            <div className="bg-green-100 text-black p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center h-[300px] flex-1 min-w-[150px]">
              <p className="text-4xl font-bold">200+</p>
              <p className="mt-2 text-center text-lg">
                Trained Teachers empowering young minds everyday
              </p>
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
                src="/images/hero1.avif"
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
              <div className="bg-green-600 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center h-[150px]">
                <p className="text-2xl font-bold text-center">
                  One child, teacher, book
                </p>
                <img
                  src="/images/hero1.avif"
                  alt="Pencil"
                  className="w-12 mt-4"
                />
              </div>
              {/* Sub-Div 2 */}
              <div className="relative bg-gradient-to-t from-black/60 to-transparent rounded-2xl overflow-hidden shadow-lg flex items-end h-[300px]">
                <img
                  src="/images/hero1.avif"
                  alt="Child Smile"
                  className="absolute inset-0 object-cover w-full h-full"
                />
                <h3 className="relative text-white text-2xl font-bold p-6">
                  Be the reason a child smiles
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AboutUsIntroduction */}
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
                  mollis sodales gravida vivamus iaculis. Potenti sem mattis
                  augue malesuada lacus facilisi turpis amet.
                </p>
                <p className="mt-4">
                  Sapien hac molestie ullamcorper semper, varius aptent torquent
                  accumsan. Tempor malesuada ipsum nam libero scelerisque.
                  Facilisis himenaeos rutrum aptent nunc sapien ultrices
                  convallis.
                </p>
                <p className="mt-4">
                  Quisque class nibh lectus aliquam aliquam blandit pellentesque
                  maecenas. Lacus augue nunc interdum ultrices risus placerat
                  est vulputate tortor.
                </p>
                <p className="mt-4">
                  Luctus lobortis faucibus sapien; quisque eget augue. Sem
                  facilisis felis nunc himenaeos facilisis.
                </p>
              </div>

              <div className="mt-6">
                <button className="flex justify-center sm:justify-between items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300">
                  Read More <FaArrowCircleRight />
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-2/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-lg text-center h-auto flex flex-col justify-center items-center transition duration-300"
                  >
                    <img
                      src="/images/hero1.avif"
                      alt={`Vision ${index + 1}`}
                      className="h-16 mb-4"
                    />
                    <h3 className="text-black text-xl sm:text-2xl font-bold">
                      {index % 2 === 0 ? "Vision" : "Mission"}
                    </h3>
                    <p className="mt-2 text-gray-700 text-sm sm:text-base">
                      Lorem ipsum odor amet, consectetur adipiscing elit. Platea
                      mollis elementum risus placerat; felis egestas.
                    </p>
                    {/* Hover Styles */}
                    <style jsx>{`
                      .group:hover {
                        background-color: #f8f9fa;
                        border-left: 4px solid #dc2626;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                      }
                    `}</style>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Significant Achievements */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                    className="bg-green-700 text-white p-6 border-b-2 border-r-2 border-white rounded-lg shadow-md"
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
                src="/images/hero1.avif"
                alt="Significant Achievements"
                className="object-cover w-full h-full  shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* make a DIFFERENCE? */}
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
                src="/images/diff1.png"
                alt="Build & Support Schools"
                className="w-20 h-20 sm:w-24 sm:h-24 mb-4"
              />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Build & Support Schools
              </h3>
              <p className="mt-2 text-sm sm:text-base lg:text-lg">
                Lorem ipsum odor amet, consectetur adipiscing elit. Porta elit
                auctor cras interdum efficitur fames nec cras. Magnis lectus
                mollis sodales gravida vivamus iaculis.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/diff2.png"
                alt="Scholarships and Programs"
                className="w-20 h-20 sm:w-24 sm:h-24 mb-4"
              />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
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
                src="/images/diff3.png"
                alt="Provide Essential Resources"
                className="w-20 h-20 sm:w-24 sm:h-24 mb-4"
              />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Provide Essential Resources
              </h3>
              <p className="mt-2 text-sm sm:text-base lg:text-lg">
                Lorem ipsum odor amet, consectetur adipiscing elit. Porta elit
                auctor cras interdum efficitur fames nec cras. Magnis lectus
                mollis sodales gravida vivamus iaculis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* donation */}
      <section className="relative">
        <div className="flex  gap-4 justify-center relative z-10 px-4 sm:px-6 md:px-10 mt-8">
          {/* First Div - 1 Image */}
          <div className="relative h-[17rem] sm:h-[18rem] md:h-[21rem] w-[30%] sm:w-1/6">
            <img
              src="/images/hero1.avif"
              alt="Image 1"
              className="object-cover h-full w-full rounded"
            />
          </div>

          {/* Second Div - 2 Images in Column */}
          <div className="flex flex-col gap-4 w-[30%] sm:w-1/6">
            <div className="relative h-32 sm:h-36 md:h-40">
              <img
                src="/images/hero2.avif"
                alt="Image 2"
                className="object-cover h-full w-full rounded"
              />
            </div>
            <div className="relative h-32 sm:h-36 md:h-40">
              <img
                src="/images/hero3.avif"
                alt="Image 3"
                className="object-cover h-full w-full rounded"
              />
            </div>
          </div>

          {/* Third Div - 1 Image */}
          <div className="relative h-[17rem] sm:h-[18rem] md:h-[21rem] w-[30%] sm:w-1/6">
            <img
              src="/images/hero1.avif"
              alt="Image 4"
              className="object-cover h-full w-full rounded"
            />
          </div>

          {/* Center Green Section */}
          <div className="absolute inset-0 flex items-center justify-center z-50 px-4">
            <div className="bg-green-600 text-white py-6 px-6 sm:px-10 rounded-[40px] opacity-90 text-center">
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
            <div className="relative h-32 sm:h-36 md:h-40">
              <img
                src="/images/hero2.avif"
                alt="Image 5"
                className="object-cover h-full w-full rounded"
              />
            </div>
            <div className="relative h-32 sm:h-36 md:h-40">
              <img
                src="/images/hero3.avif"
                alt="Image 6"
                className="object-cover h-full w-full rounded"
              />
            </div>
          </div>

          {/* Fifth Div - 1 Image */}
          <div className="relative h-[17rem] sm:h-[18rem] md:h-[21rem] w-[30%] sm:w-1/6">
            <img
              src="/images/hero1.avif"
              alt="Image 7"
              className="object-cover h-full w-full rounded"
            />
          </div>

          {/* Sixth Div - 2 Images in Column */}
          <div className="flex flex-col gap-4 w-[30%] sm:w-1/6">
            <div className="relative h-32 sm:h-36 md:h-40">
              <img
                src="/images/hero2.avif"
                alt="Image 8"
                className="object-cover h-full w-full rounded"
              />
            </div>
            <div className="relative h-32 sm:h-36 md:h-40">
              <img
                src="/images/hero3.avif"
                alt="Image 9"
                className="object-cover h-full w-full rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-green-700 text-white mx-4 md:mx-10 lg:mx-40 my-10 py-16 rounded-3xl">
        <div className="container mx-auto px-4 md:px-6">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm md:text-base lg:text-lg font-light">
              Everything you need to know about supporting education
            </p>
          </div>

          {/* FAQ Items */}
          <div className="divide-y divide-white">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold">
                    {faq.question}
                  </h3>
                  <button className="text-xl md:text-2xl font-bold">
                    {openFAQ === index ? "✖" : "➕"}
                  </button>
                </div>
                {openFAQ === index && (
                  <p className="mt-2 text-xs md:text-sm lg:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
