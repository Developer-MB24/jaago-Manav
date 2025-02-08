import React, { useState } from "react";

const CharityCard = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      image: "/home/image19.png",
      category: "Health",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      image: "/home/image19.png",
      category: "Health",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      image: "/home/image19.png",
      category: "Health",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-green-700">
          Helping Each Other Can Make{" "}
          <span className="text-red-500">World Better</span>
        </h1>
        <p className="text-center mt-4 text-gray-600">
          Volunteering Offers Opportunities To Develop New Skills And Gain
          Valuable Experience. This can include Leadership, Communication,
          Project.
        </p>

        <div className=" flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
          {articles.map((article, index) => (
            <div
              key={article.id}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`w-80 p-6  rounded-[2rem]  shadow-lg text-center transition-transform transform hover:scale-105 cursor-pointer ${
                hoveredCard === index
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <h3 className="text-lg font-bold mt-10 mb-4">{article.title}</h3>
              <img
                src={article.image}
                alt="Article"
                className="w-full h-48 object-cover rounded-md"
              />
              {/* <span className="block mt-4 text-sm font-semibold bg-gray-200 px-2 py-1 rounded">
                {article.category}
              </span> */}

              <a
                href="#"
                className="text-red-500 font-semibold mt-4 mb-10 inline-block hover:text-white"
              >
                Read more ➡
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharityCard;
