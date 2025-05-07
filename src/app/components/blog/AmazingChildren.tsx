"use client";

import Image from "next/image";

const blogPosts = [
  {
    image: "/home/about2.png",
    title: "What Is Female Infanticide, And Why Is It Still Prevalent?",
    date: "April 28, 2025",
    description:
      "In a culturally vibrant country like India, children carry the hope of building a brighter tomorrow. However, gender-based discrimination—including female infanticide—remains ....",
  },
  {
    image: "/home/about3.png",
    title:
      "Types Of Social Barriers That Prevent Girls From Getting An Education",
    date: "April 25, 2025",
    description:
      "In many parts of the world, especially in developing countries like India, girls still face significant challenges when it comes to accessing education. Along with economic const....",
  },
  {
    image: "/home/about1.png",
    title: "Saving Tax On Donations Under The New Tax Regime",
    date: "March 26, 2025",
    description:
      "Donating to a cause not only helps those in need but also provides tax benefits. However, with the introduction of the new tax regime, many taxpayers are uncertain about how donat....",
  },
];

const filters = [
  "Uncategorized",
  "Featured",
  "Education",
  "Child Labour",
  "Child Marriage",
  "Health & Nutrition",
  "Malnutrition",
  "Child Participation",
  "Child Sexual Abuse",
  "Child Trafficking",
  "Healthcare",
  "Girl Child",
  "Org News",
  "Independence Day",
  "Help India’s Girls",
  "Children’s Day",
  "Lets Talk About Periods",
  "Girl Child Day",
  "Women’s Day",
  "Corporate Social Responsibility",
  "NGO Volunteering",
  "Legacy Benefits",
  "NGO Day",
  "NGO Donations",
  "NGO Careers",
];

export default function AmazingChildren() {
  return (
    <section className="bg-[#fefdf9] py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Amazing children.{" "}
          <span className="text-yellow-500 font-handwritten">
            Amazing Stories.
          </span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          If you’re looking for positive stories of change that will make your
          day, you’ve come to the right place!
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="lg:w-3/4 flex flex-col gap-8">
          {/* Featured Post */}
          <div className="p-6 bg-white shadow-lg rounded-md border-b-4 border-yellow-400 min-h-[340px]">
            <div className="flex flex-col lg:flex-row items-start gap-6">
              <div className="relative w-full lg:w-1/3 h-52 lg:h-48">
                <Image
                  src="/home/about1.png"
                  alt="NGO kids"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-xl font-semibold text-gray-800">
                  The Role Of NGOs In Promoting ECCE In Underserved Communities
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Published on{" "}
                  <span className="text-yellow-600 font-semibold">
                    April 28, 2025
                  </span>
                </p>
                <p className="mt-3 text-gray-600 text-sm">
                  Early Childhood Care and Education (ECCE) plays a vital role
                  in a child’s development, particularly in underserved
                  communities with limited access to quality education and
                  care…..
                </p>
                <button className="mt-4 bg-[#035100] text-white  font-semibold px-5 py-2 rounded-full transition">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog List */}
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md shadow-md border-b-4 border-yellow-400 p-6 flex flex-col md:flex-row gap-5"
            >
              <div className="w-full md:w-1/3 h-48 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Published on{" "}
                  <span className="text-yellow-600 font-semibold">
                    {post.date}
                  </span>
                </p>
                <p className="mt-3 text-sm text-gray-600">{post.description}</p>
                <button className="mt-4 bg-[#035100] text-white font-semibold px-5 py-2 rounded-full hover:bg-yellow-500 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}

          {/* Show More  */}
          <div className="text-center mt-6">
            <button className="bg-[#035100] text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition">
              Show More Stories
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/4 space-y-10 px-5">
          {/* Subscribe */}
          <div className="text-center">
            <h4 className="text-sm font-bold text-gray-600 tracking-wide mb-2">
              STAY UPDATED
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our blog and get stories delivered straight to your
              inbox!
            </p>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border-b border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="w-full bg-[#035100] text-white font-semibold py-2 rounded-full hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </div>

          {/* Archives */}
          <div>
            <h4 className="text-sm font-bold text-gray-600 tracking-wide mb-2">
              ARCHIVES
            </h4>
            <select className="w-full px-3 py-2 border-b border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option>Select</option>
              <option>April 2025</option>
              <option>March 2025</option>
            </select>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-600 tracking-wide mb-4">
              FILTERS
            </h4>
            <div className="border-l border-gray-300 pl-4">
              <ul className="space-y-3 text-sm text-gray-700">
                {filters.map((item, i) => (
                  <li
                    key={i}
                    className="border-b border-gray-200 pb-2 cursor-pointer hover:text-yellow-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
