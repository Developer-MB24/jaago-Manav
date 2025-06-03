"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const singlePageData = {
  title: "News & Events",
  banner: "/home/hero2.png",
  events: [
    {
      title:
        "Lights, Camera, and Impact! Nanhi Kali’s Proud Fathers For Daughters Season 8 is a Roaring Success",
      description:
        "Project Nanhi Kali’s eighth edition of Proud Fathers For Daughters was organised on October 28-29, 2023 at the National Sports Club of India, Worli, Mumbai. With 570 portraits ",
      image: "/home/hero2.png",
      likes: 28,
    },
    {
      title:
        "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
      description:
        "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group.",
      image: "/home/about2.png",
      likes: 32,
    },
    {
      title: "Empowering Futures: Nanhi Kali Education Summit 2024 Highlights",
      description:
        "An inspiring gathering of educators, leaders, and supporters committed to girls' education and empowerment across India.",
      image: "/home/hero4.png",
      likes: 41,
    },
    {
      title: "Empowering Futures: Nanhi Kali Education Summit 2024 Highlights",
      description:
        "An inspiring gathering of educators, leaders, and supporters committed to girls' education and empowerment across India.",
      image: "/home/hero4.png",
      likes: 41,
    },
    {
      title: "Empowering Futures: Nanhi Kali Education Summit 2024 Highlights",
      description:
        "An inspiring gathering of educators, leaders, and supporters committed to girls' education and empowerment across India.",
      image: "/home/hero4.png",
      likes: 41,
    },
    {
      title: "Empowering Futures: Nanhi Kali Education Summit 2024 Highlights",
      description:
        "An inspiring gathering of educators, leaders, and supporters committed to girls' education and empowerment across India.",
      image: "/home/hero4.png",
      likes: 41,
    },
    {
      title: "Empowering Futures: Nanhi Kali Education Summit 2024 Highlights",
      description:
        "An inspiring gathering of educators, leaders, and supporters committed to girls' education and empowerment across India.",
      image: "/home/hero4.png",
      likes: 41,
    },
    {
      title: "Empowering Futures: Nanhi Kali Education Summit 2024 Highlights",
      description:
        "An inspiring gathering of educators, leaders, and supporters committed to girls' education and empowerment across India.",
      image: "/home/hero4.png",
      likes: 41,
    },
    {
      title: "Empowering Futures: Nanhi Kali Education Summit 2024 Highlights",
      description:
        "An inspiring gathering of educators, leaders, and supporters committed to girls' education and empowerment across India.",
      image: "/home/hero4.png",
      likes: 41,
    },
    {
      title: "Empowering Futures: Nanhi Kali Education Summit 2024 Highlights",
      description:
        "An inspiring gathering of educators, leaders, and supporters committed to girls' education and empowerment across India.",
      image: "/home/hero4.png",
      likes: 41,
    },
  ],
};

const navItems = [
  { label: "News & Events", href: "/newsevents" },
  { label: "Newsletters", href: "/newsletters" },
  { label: "Publications", href: "/publications" },
  { label: "Photo Gallery", href: "/photo-gallery" },
  { label: "Video Gallery", href: "/video-gallery" },
];

const NewsEventsPage = () => {
  const pathname = usePathname();

  return (
    <>
      <Header />
      <main className="bg-white text-black">
        {/* Top Banner */}
        <div className="w-full h-[30rem] relative overflow-hidden">
          <Image
            src={singlePageData.banner}
            alt="Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title + Breadcrumb */}
        <div className="container mx-auto px-4 pt-8 pb-4 border-b">
          <h1 className="text-3xl font-semibold mb-2">
            {singlePageData.title}
          </h1>
          <div className="text-sm">
            <Link href="/" className="text-orange-500 hover:underline">
              Home
            </Link>
            <span className="text-gray-500"> &gt; News & Events</span>
          </div>
        </div>

        {/* Content Grid + Sidebar */}
        <section className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-6">
          {/* News Cards */}
          <div className="w-full lg:w-3/4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {singlePageData.events.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-400 rounded-md shadow-sm overflow-hidden"
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
                        ❤️ {item.likes}
                      </div>
                      <Link href="#" className="hover:underline">
                        📄 Read more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 lg:pl-6 border-l border-gray-300">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">MEDIA</h2>
            <ul className="space-y-3 text-sm font-medium">
              {navItems.map((item, index) => {
                const isActive = pathname.startsWith(item.href);

                return (
                  <li key={index} className="border-b pb-2">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 ${
                        isActive
                          ? "text-red-600 font-semibold"
                          : "text-black hover:text-red-600"
                      }`}
                    >
                      <span className="text-red-600">▣</span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NewsEventsPage;
