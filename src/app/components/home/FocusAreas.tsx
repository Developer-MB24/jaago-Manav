import React, { useState, useMemo } from "react";

const focusAreas = [
  {
    icon: "🎓",
    title: "Education",
    subtitle: "Education. Success. Future",
    description:
      "Education is not a privilege but a basic right for every child. Jaago Manav empowers the young generation to break the cycle of poverty by shaping their personalities and making them better individuals. The road to success starts with education. Don’t let the light of hope flicker when there is a chance of bridging gaps between dreams and opportunities.",
    buttonText: "READ MORE",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    subtitle: "Education. Success. Future",
    description:
      "Education is not a privilege but a basic right for every child. Jaago Manav empowers the young generation to break the cycle of poverty by shaping their personalities and making them better individuals. The road to success starts with education. Don’t let the light of hope flicker when there is a chance of bridging gaps between dreams and opportunities.",
    buttonText: "READ MORE",
  },
  {
    icon: "🌱",
    title: "Agriculture",
    subtitle: "Brighter Futures",
    description:
      "We believe that agriculture is more than just growing food; it's about nourishing a community. Our goal is to improve the livelihoods of communities by promoting sustainable farming practices. We train farmers on eco-friendly methods to make resources accessible for all.",
    buttonText: "READ MORE",
  },
  {
    icon: "💼",
    title: "Entrepreneurship",
    subtitle: "Empowering Growth",
    description:
      "We support aspiring entrepreneurs by providing them with the tools, resources, and mentorship needed to build successful businesses and foster economic growth in their communities.",
    buttonText: "READ MORE",
  },
  {
    icon: "🌍",
    title: "Environment",
    subtitle: "Sustainable Future",
    description:
      "Our environmental programs focus on creating awareness and promoting practices that contribute to a sustainable and healthy planet for future generations.",
    buttonText: "READ MORE",
  },
  {
    icon: "🤝",
    title: "Community Development",
    subtitle: "Stronger Together",
    description:
      "We focus on holistic community development by addressing key areas such as infrastructure, education, and healthcare to improve the overall well-being of communities.",
    buttonText: "READ MORE",
  },
  {
    icon: "📚",
    title: "Literacy Programs",
    subtitle: "Knowledge for All",
    description:
      "Our literacy programs are designed to eliminate illiteracy and provide quality education to children and adults alike, fostering a culture of lifelong learning.",
    buttonText: "READ MORE",
  },
  {
    icon: "💡",
    title: "Innovation",
    subtitle: "Future Forward",
    description:
      "Promoting innovation through technology and creative solutions, we aim to inspire the next generation of leaders and problem solvers.",
    buttonText: "READ MORE",
  },
  {
    icon: "🏡",
    title: "Affordable Housing",
    subtitle: "Homes for All",
    description:
      "We support the development of affordable housing projects to ensure that everyone has access to safe and secure living conditions.",
    buttonText: "READ MORE",
  },
];

const FocusAreas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = useMemo(() => {
    const slideArray = [];
    for (let i = 0; i < focusAreas.length; i += 3) {
      slideArray.push(focusAreas.slice(i, i + 3));
    }
    return slideArray;
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [slides.length]);

  return (
    <>
      <div className="text-center py-10 bg-white text-black">
        <h2 className="text-4xl font-bold text-red-600 mb-4">
          Our Focus Areas
        </h2>
        <p className="text-lg font-medium text-gray-800 max-w-3xl mx-auto">
          Jaago Manav’s heartfelt approach aims to uplift every aspect of their
          lives, providing transparent opportunities for a better livelihood. We
          believe in empowering families with education, care, and compassion,
          ensuring that funds are utilized transparently to make a meaningful
          difference.
        </p>
        <button className="bg-green-700 text-white py-2 px-6 rounded-full font-bold mt-4 hover:bg-green-800">
          JOIN US NOW
        </button>

        <div className="carousel relative mt-10 flex items-center justify-center overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex space-x-4 w-full justify-center">
                {slide.map((area, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 p-6 rounded-lg shadow-md text-left w-80 content-box flex-shrink-0 mx-2"
                  >
                    <div>
                      <div className="text-4xl mb-2">{area.icon}</div>
                      <h3 className="text-xl font-bold italic mb-1">
                        {area.title}
                      </h3>
                      <h4 className="text-lg font-bold mb-2">
                        {area.subtitle}
                      </h4>
                      <p className="text-gray-700 mb-4">{area.description}</p>
                    </div>
                    <button className="bg-green-700 text-white py-2 px-4 rounded-full font-bold hover:bg-green-800">
                      {area.buttonText}
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <div className="text-center  text-black">
        <img src="/home/Group1.png" alt="Top Banner" className="w-full" />

        <div className="py-10 ">
          <h2 className="text-4xl font-bold text-red-600 mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg font-semibold text-gray-800 max-w-5xl mx-auto mt-4">
            At Jaago Manav, we bring change to the mindset of underprivileged
            sections. Our unique approach is to help people have a better
            livelihood in every aspect. Our approach is to provide opportunities
            to families with complete transparency in fund utilization. So, the
            amount you donate will be directly funded for our projects and
            programs. We are the first NGO in India to provide real-time updates
            on how your funds are utilized for the upliftment of the nation.
          </p>
          <p className="text-lg font-semibold text-gray-800 max-w-5xl mx-auto">
            Our team encourages volunteers and children to receive education
            (practical and moral) which will bring a change in society. With
            unique educational initiatives, we help families break free from
            poverty and build a better future.
          </p>
          <p className="text-lg font-semibold text-gray-800 max-w-5xl mx-auto ">
            Your active participation and contribution will change the nation by
            empowering families and volunteers at every level.
          </p>
        </div>
        <div className="">
          <h3 className="text-3xl font-bold text-red-600 ">We Promise</h3>
          <img
            src="/home/Group2.png"
            alt="Bottom Banner"
            className="w-full h-60"
          />
        </div>
      </div>
    </>
  );
};

export default FocusAreas;
