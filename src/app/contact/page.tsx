"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactPage: React.FC = () => {
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
      <div className="min-h-screen bg-white p-6">
        <h1 className="text-4xl font-bold text-center mt-8 text-red-600 mb-8">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row p-10 gap-8  justify-center items-start">
          {/* Welcome Section */}
          <div className="bg-green-800 p-20 text-white   w-full md:w-1/2 min-h-[500px]">
            <h2 className="text-3xl font-bold mb-4 leading-snug">Welcome</h2>
            <h2 className="text-3xl font-bold mb-4 leading-snug">to our</h2>
            <h2 className="text-3xl font-bold mb-4 leading-snug">Community</h2>
            <p className="mb-4 text-sm">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Porta elit
              auctor cras interdum efficitur fames nec cras. Magnis lectus
              mollis sodales gravida vivamus iaculis. Potenti sem mattis augue
              malesuada lacus facilisi turpis amet. Non vivamus facilisi
              venenatis et rutrum.
            </p>

            <div className="flex items-center mb-4">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
            </div>

            <p className="text-sm mb-4">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Porta elit
              auctor cras interdum efficitur fames nec cras. Magnis lectus
              mollis sodales gravida vivamus iaculis. Potenti sem mattis augue
              malesuada lacus facilisi turpis amet. Non vivamus facilisi
              venenatis et rutrum.
            </p>

            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <span className="text-sm">Vivek Tripathi</span>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full p-20 md:w-1/2 min-h-[500px] text-black">
            <h2 className="text-4xl font-bold text-red-600 mb-4">
              Get in Touch
            </h2>
            <p className="text-sm mb-4">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Porta elit
              auctor cras interdum efficitur fames nec cras. Magnis lectus
              mollis sodales gravida vivamus iaculis. Potenti sem mattis augue
              malesuada lacus facilisi turpis amet. Non vivamus facilisi
              venenatis et rutrum.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Message</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  rows={4}
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <section className="bg-green-800 text-white mx-4 md:mx-10 lg:mx-40 my-10 py-16 rounded-[2.5rem]">
          <div className="container mx-auto px-4 md:px-6">
            {/* Title Section */}
            {/* <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm md:text-base lg:text-lg font-light">
                Everything you need to know about supporting education
              </p>
            </div> */}

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
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
