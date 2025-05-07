"use client";
import Image from "next/image";
import Link from "next/link";

const newsEvents = [
  {
    title:
      "Walk the talk! JM Financial Walkathon 2013 in support of Project Nanhi Kali.",
    description:
      "Walk the talk! JM Financial Walkathon 2013 in support of Project Nanhi Kali.",
    image: "/news-events/event1.jpg",
    likes: 28,
  },
  {
    title:
      "400 Mahindra employees run for Girl Child Education at the Mumbai Marathon 2013.",
    description:
      "400 Mahindra employees run for Girl Child Education at the Mumbai Marathon 2013.",
    image: "/news-events/event2.jpg",
    likes: 28,
  },
  {
    title: "New academic year updates",
    description:
      "This new academic year started with: REGISTRATION DRIVES: These drives have been conducted in over 1480 communities where parents were counseled by the Project Nanhi Kali teams on [...]",
    image: "/news-events/event3.jpg",
    likes: 27,
  },
  {
    title: "Volunteer Meet 2023",
    description:
      "Over 200 volunteers gathered for a day of motivation and sharing success stories from the field.",
    image: "/news-events/event4.jpg",
    likes: 31,
  },
  {
    title: "Book Distribution Drive",
    description:
      "Thousands of books were distributed to young learners in remote villages this week.",
    image: "/news-events/event5.jpg",
    likes: 30,
  },
  {
    title: "World Literacy Day Celebration",
    description:
      "Celebrating literacy with local schools and teachers in our partnered communities.",
    image: "/news-events/event6.jpg",
    likes: 26,
  },
  {
    title: "Teacher Training Program",
    description:
      "Empowering rural educators through a new intensive training workshop launched in 5 districts.",
    image: "/news-events/event7.jpg",
    likes: 29,
  },
  {
    title: "Mobile Learning Labs Launched",
    description:
      "A new tech initiative brings digital learning vans to under-resourced schools.",
    image: "/news-events/event8.jpg",
    likes: 32,
  },
  {
    title: "Nutrition Awareness Campaign",
    description:
      "Helping children and parents learn about balanced diets and hygiene with local health workers.",
    image: "/news-events/event9.jpg",
    likes: 25,
  },
  {
    title: "Art for Empowerment",
    description:
      "Children express dreams and social issues through murals during our annual art fest.",
    image: "/news-events/event10.jpg",
    likes: 34,
  },
  {
    title: "STEM for Girls Workshop",
    description:
      "Encouraging girls to explore science and technology through hands-on fun sessions.",
    image: "/news-events/event11.jpg",
    likes: 29,
  },
  {
    title: "Sports Day for Inclusion",
    description:
      "Bringing children from different backgrounds together through play and teamwork.",
    image: "/news-events/event12.jpg",
    likes: 27,
  },
];

const NewsEventsPage1 = () => {
  return (
    <main className="bg-white text-black">
      {/* Top Banner */}
      <div className="w-full overflow-hidden">
        <Image
          src="/news-events/Screenshot 2025-05-06 230751.png"
          alt="News Event Banner"
          width={1884}
          height={451}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Heading + Breadcrumb */}
      <div className="container mx-auto px-4 pt-8 pb-4 border-b">
        <h1 className="text-3xl font-semibold mb-2">News & Events</h1>
        <div className="text-sm">
          <Link href="/" className="text-orange-500 hover:underline">
            Home
          </Link>{" "}
          <span className="text-gray-500"> &gt; News & Events</span>
        </div>
      </div>

      {/* Main Section */}
      <section className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-6">
        {/* Left: News Cards */}
        <div className="w-full lg:w-3/4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsEvents.map((item, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded-md shadow-sm overflow-hidden bg-white"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-md mb-2">{item.title}</h3>
                  <p className="text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between text-sm border-t pt-2">
                    <div className="flex items-center gap-1">
                      <span className="text-red-500 text-lg">♡</span>
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-600 text-md">🗎</span>
                      <Link href="#" className="hover:underline">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination UI */}
          <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((page) => (
              <Link
                key={page}
                href={`/news-events/page/${page}`}
                className={`w-8 h-8 flex items-center justify-center rounded border border-gray-500 text-sm ${
                  page === 1
                    ? "bg-orange-400 text-white font-semibold"
                    : "bg-white text-black hover:bg-orange-100"
                }`}
              >
                {page}
              </Link>
            ))}
            <Link
              href="/news-events/page/2"
              className="text-orange-500 hover:underline text-sm ml-4"
            >
              Next page →
            </Link>
          </div>
        </div>

        {/* Right: Sidebar */}
        <aside className="w-full lg:w-1/4 lg:pl-6 border-l border-gray-300">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">MEDIA</h2>
          <ul className="space-y-3 text-sm font-medium">
            {[
              "News & Events",
              "Newsletters",
              "Publications",
              "Photo Gallery",
              "Video Gallery",
            ].map((item, idx) => (
              <li key={idx} className="border-b pb-2">
                <Link href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="text-red-600 mr-2">▣</span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
};

export default NewsEventsPage1;
