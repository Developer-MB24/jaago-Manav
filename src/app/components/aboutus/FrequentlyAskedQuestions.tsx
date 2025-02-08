import React, { useState } from "react";

const FrequentlyAskedQuestions = () => {
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
      <section className="bg-[#035100] text-white mx-4 md:mx-10 lg:mx-40 my-10 py-16 rounded-3xl">
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
    </>
  );
};

export default FrequentlyAskedQuestions;
