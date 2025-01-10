"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const articles = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      image: "/images/hero1.avif",
      category: "Health",
      featured: false,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      image: "/images/hero1.avif",
      category: "Health",
      featured: true,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      image: "/images/hero1.avif",
      category: "Health",
      featured: false,
    },
  ];
  const slides = [
    [
      { id: 1, image: "/images/hero1.avif" },
      { id: 2, image: "/images/hero2.avif" },
      { id: 3, image: "/images/hero1.avif" },
      { id: 4, image: "/images/hero3.avif" },
    ],
    [
      { id: 5, image: "/images/mercyCorps.png" },
      { id: 6, image: "/images/unicef.png" },
      { id: 7, image: "/images/wfp.png" },
      { id: 8, image: "/images/wfp1.png" },
    ],
    [
      { id: 9, image: "/images/hero2.avif" },
      { id: 10, image: "/images/hero1.avif" },
      { id: 11, image: "/images/mercyCorps.png" },
      { id: 12, image: "/images/hero3.avif" },
    ],
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="bg-gradient-to-r from-yellow-100 to-green-100 py-12 px-6 md:px-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Jaago Manav-Awakening Humanity
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Awakening Hearts and Minds: Building Bridges, Creating Awareness
          </p>
          <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300">
            JOIN US NOW
          </button>
        </div>
        <div className="flex gap-4">
          {/* First Div - 1 Image */}
          <div className="relative h-[17rem] w-1/6">
            <Image
              src="/images/hero1.avif"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Second Div - 2 Images in Column */}
          <div className="flex flex-col gap-4 w-1/6">
            <div className="relative h-32">
              <Image
                src="/images/hero2.avif"
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="relative h-32">
              <Image
                src="/images/hero3.avif"
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
          </div>

          {/* Third Div - 1 Image */}
          <div className="relative h-[17rem] w-1/6">
            <Image
              src="/images/hero1.avif"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Fourth Div - 2 Images in Column */}
          <div className="flex flex-col gap-4 w-1/6">
            <div className="relative h-32">
              <Image
                src="/images/hero2.avif"
                alt="Image 5"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="relative h-32">
              <Image
                src="/images/hero3.avif"
                alt="Image 6"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
          </div>

          {/* Fifth Div - 1 Image */}
          <div className="relative h-[17rem] w-1/6">
            <Image
              src="/images/hero1.avif"
              alt="Image 7"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Sixth Div - 2 Images in Column */}
          <div className="flex flex-col gap-4 w-1/6">
            <div className="relative h-32">
              <Image
                src="/images/hero2.avif"
                alt="Image 8"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="relative h-32">
              <Image
                src="/images/hero3.avif"
                alt="Image 9"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
          </div>
        </div>

        <div className=" mt-8 flex justify-evenly items-center text-black ">
          <Image
            src="/images/unicef.png"
            alt="UNICEF"
            width={150}
            height={50}
            className="object-contain"
          />
          <Image
            src="/images/wfp.png"
            alt="World Food Program"
            width={150}
            height={50}
            className="object-contain"
          />
          <Image
            src="/images/save-the-children-logo.svg"
            alt="Save the Children"
            width={150}
            height={50}
            className="object-contain"
          />
          <Image
            src="/images/mercyCorps.png"
            alt="Mercy Corps"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>
      </section>

      {/* About Us  */}

      <section className="bg-white py-12 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            {/* First Row - Single Full-Width Image */}
            <div className="relative h-40 md:h-56">
              <Image
                src="/images/hero1.avif"
                alt="Child smiling"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Second Row - Two Images Side-by-Side */}
            <div className="flex gap-4">
              <div className="relative flex-1 h-40 md:h-56">
                <Image
                  src="/images/hero2.avif"
                  alt="Children in a field"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="relative flex-1 h-40 md:h-56">
                <Image
                  src="/images/hero3.avif"
                  alt="Helping hands"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Third Row - Single Full-Width Image */}
            <div className="relative h-40 md:h-56">
              <Image
                src="/images/hero3.avif"
                alt="Smiling group of children"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In the heart of Delhi, many children play near Yamuna Bank. Their
              eyes shine with hope as they run along with the wind. That was the
              first time the idea of Jaago Manav—Awakening Humanity—dived in.
              Jaago Manav was established in May 2018 with the idea of
              “Awakening Humanity Within Us.” In May 2018, Jaago Manav was born
              to be a catalyst for change and to bring hope to families living
              in the remote rural corners of India. We are an independent,
              non-profit organization committed to helping everyone who dares to
              dream. Our team of volunteers is highly enthusiastic and strives
              to bring positive change to society by providing opportunities for
              every individual to bloom to their full potential.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We foster a positive environment in every rural community to
              create a strong impact on families by addressing their needs and
              aspirations. Our community-centric discussions focus on helping
              families resolve complex social issues through education,
              healthcare, empowerment, agriculture, and social and political
              awareness. What sets us apart is our complete transparency of
              funds, which provides a platform for empowerment for every family.
            </p>
            <div className="flex space-x-8 mt-6">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-red-600">
                  159+
                </h3>
                <p className="text-gray-600">Completed Projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-red-600">
                  200+
                </h3>
                <p className="text-gray-600">Volunteers</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-red-600">
                  15+
                </h3>
                <p className="text-gray-600">Awards Achieved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}

      <section className="bg-white py-12 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Join Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Jaago Manav, we believe that everyone deserves an equal
              opportunity to shape their future, to learn, and to grow. So, we
              are on a mission to uplift families through education. The blend
              of practical and moral education with quality opens up unlimited
              opportunities for our young girls and children. But we can’t do it
              alone. We need Your Support. Let’s Pledge To Make a Difference.
            </p>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Image
                  src="/images/donation.png"
                  alt="Donation"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Donation</h3>
                  <p className="text-gray-600">
                    Small acts bring big change. Your small act of generosity
                    can change the lives of one family and one girl. Be the
                    first one to take a step to support our young children in
                    the rural community.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Image
                  src="/images/donation.png"
                  alt="Volunteering"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Volunteering
                  </h3>
                  <p className="text-gray-600">
                    Together, we can take a step to enhance our rural
                    communities. Become a volunteer and create an impact with
                    Jaago Manav to make a difference.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Image
                  src="/images/donation.png"
                  alt="CSR"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">CSR</h3>
                  <p className="text-gray-600">
                    Partner with Jaago Manav to support education and
                    empowerment in rural communities. Let your commitment and
                    dedication speak to the values of a healthy culture and
                    society.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 font-bold mt-6">
              Support Education #educationmatters <br />
              Higher Education For Girls #educationispower
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/indian-map.png"
              alt="India map with children"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
        </div>
      </section>

      {/* new edit  */}
      {/* <div className="w-full">
          <div className="bg-red-500 w-[20%]">
            <div className="  flex flex-col">
              <Image
                src="/images/hero1.avif"
                alt="Happy children"
                layout="fill"
                // objectFit="cover"
                className="w-1/2 "
              />
              <Image
                src="/images/hero2.avif"
                alt="Smiling children"
                layout="fill"
                // objectFit="cover"
                className="w-1/2 "
              />
            </div>
            <div className="">
              <Image
                src="/images/hero2.avif"
                alt="Smiling children"
                layout="fill"
                // objectFit="cover"
                className="w-1/2 "
              />
            </div>
          </div>
          
          
        </div> */}

      {/* new edit ends */}

      {/* Charity  */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-center text-green-700">
            Helping Each Other Can Make{" "}
            <span className="text-red-500">World Better</span>
          </h1>
          <p className="text-center mt-4 text-gray-600">
            Volunteering Offers Opportunities To Develop New Skills And Gain
            Valuable Experience. This can include Leadership, Communication,
            Project.
          </p>

          {/* Features */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            <div className="text-center md:text-left max-w-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-pink-100 rounded-full">
                  <img
                    src="/images/hero1.avif"
                    alt="Start Helping"
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-700">
                    Start Helping Them
                  </h3>
                  <p className="text-gray-600">
                    Raising Awareness about the Charity&apos;s Mission and
                    Cause.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-pink-100 rounded-full">
                  <img
                    src="/images/hero1.avif"
                    alt="Make Donations"
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-700">
                    Make Donations
                  </h3>
                  <p className="text-gray-600">
                    Raising Awareness about the Charity&apos;s Mission and
                    cause.
                  </p>
                </div>
              </div>
              {/* Footer Highlights */}
              <div className="mt-12 text-center">
                <p className="text-green-700 flex items-center justify-center gap-2">
                  <span className="text-2xl">✔</span> Helped Fund 3265 Project
                  Powerful
                </p>
                <p className="text-green-700 flex items-center justify-center gap-2 mt-4">
                  <span className="text-2xl">✔</span> We give Child a gift of a
                  Education
                </p>
              </div>
            </div>

            {/* Statistics Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="relative">
                <div className="absolute top-4 left-4">
                  <span className="text-red-500 text-4xl">★</span>
                </div>
                <img
                  src="/images/hero1.avif"
                  alt="Child"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-green-700 text-3xl font-bold">58921</h2>
                <p className="text-red-500 font-semibold">Helped Fund</p>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Articles */}

      <section className="py-16 px-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700">
            Our Latest <span className="text-red-500">News</span> & Articles{" "}
            <br /> You Like
          </h2>

          {/* Articles */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            onMouseLeave={() => setHoveredBox(null)}
          >
            {articles.map((article, index) => (
              <div
                key={article.id}
                onMouseEnter={() => setHoveredBox(index)}
                onMouseLeave={() => setHoveredBox(null)}
                className={`rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${
                  index === 1 && hoveredBox === null
                    ? "bg-green-700 text-white"
                    : hoveredBox !== null && hoveredBox !== index
                    ? "bg-white text-black"
                    : "bg-green-700 text-white"
                }`}
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt="Article"
                    className="w-full h-60 object-cover transition-transform hover:scale-110"
                  />
                  <span className="absolute top-2 left-2 px-2 py-1 text-sm font-semibold rounded bg-white text-green-700">
                    {article.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-md font-bold line-clamp-2 mb-4">
                    {article.title}
                  </h3>
                  <a
                    href="#"
                    className="text-red-500 font-semibold flex items-center gap-1 hover:text-white"
                  >
                    Read more <span>➡</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Child & Old Care */}
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center">
          <button
            className="absolute left-0 z-10 bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={handlePrev}
          >
            ←
          </button>

          <div className="grid grid-cols-3 gap-4 w-full mx-12">
            {/* First Box */}
            <div className="flex justify-center items-center">
              <img
                src={slides[currentSlide][0].image}
                alt={`Slide ${slides[currentSlide][0].id}`}
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>

            {/* Second Box with Two Images */}
            <div className="grid grid-rows-2 gap-2">
              <img
                src={slides[currentSlide][1].image}
                alt={`Slide ${slides[currentSlide][1].id}`}
                className="w-full h-28 object-cover rounded-lg"
              />
              <img
                src={slides[currentSlide][2].image}
                alt={`Slide ${slides[currentSlide][2].id}`}
                className="w-full h-28 object-cover rounded-lg"
              />
            </div>

            {/* Third Box */}
            <div className="flex justify-center items-center">
              <img
                src={slides[currentSlide][3].image}
                alt={`Slide ${slides[currentSlide][3].id}`}
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
          </div>

          <button
            className="absolute right-0 z-10 bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={handleNext}
          >
            →
          </button>
        </div>

        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold text-green-700">Old People & Child Trouble</h2>
          <p className="text-gray-600">Child & Old Care</p>
        </div>
      </div>
    </section>
    </>
  );
}
