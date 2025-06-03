import React, { useState } from "react";
import Image from "next/image";

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
        <h1 className="flex flex-col text-3xl md:text-4xl font-bold text-center text-black">
          <div>
            Our Latest <span className="text-red-500 ">News</span> & Articles
          </div>
          <span className="text-black mt-2">You Like</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
          {articles.map((article, index) => (
            <div
              key={article.id}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`w-80 p-6 rounded-[2rem] shadow-lg text-center transition-transform transform hover:scale-105 cursor-pointer ${
                hoveredCard === index
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <h3 className="text-lg font-bold mt-10 mb-4">{article.title}</h3>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={article.image}
                  alt="Article"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 90vw, 320px"
                />
              </div>
              <a
                href="#"
                className={`font-semibold mt-4 mb-10 inline-block ${
                  hoveredCard === index
                    ? "text-white hover:text-gray-200"
                    : "text-red-500 hover:text-black"
                }`}
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
