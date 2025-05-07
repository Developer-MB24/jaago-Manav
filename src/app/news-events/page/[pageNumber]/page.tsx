"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { usePathname } from "next/navigation";

const allPagesData: Record<
  string,
  {
    title: string;
    banner: string;
    events: {
      title: string;
      description: string;
      image: string;
      likes: number;
    }[];
  }
> = {
  "1": {
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
          "Lights, Camera, and Impact! Nanhi Kali’s Proud Fathers For Daughters Season 8 is a Roaring Success",
        description:
          "Project Nanhi Kali’s eighth edition of Proud Fathers For Daughters was organised on October 28-29, 2023 at the National Sports Club of India, Worli, Mumbai. With 570 portraits ",
        image: "/home/hero2.png",
        likes: 28,
      },
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
          "Lights, Camera, and Impact! Nanhi Kali’s Proud Fathers For Daughters Season 8 is a Roaring Success",
        description:
          "Project Nanhi Kali’s eighth edition of Proud Fathers For Daughters was organised on October 28-29, 2023 at the National Sports Club of India, Worli, Mumbai. With 570 portraits ",
        image: "/home/hero2.png",
        likes: 28,
      },
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
          "Lights, Camera, and Impact! Nanhi Kali’s Proud Fathers For Daughters Season 8 is a Roaring Success",
        description:
          "Project Nanhi Kali’s eighth edition of Proud Fathers For Daughters was organised on October 28-29, 2023 at the National Sports Club of India, Worli, Mumbai. With 570 portraits ",
        image: "/home/hero2.png",
        likes: 28,
      },
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
          "Lights, Camera, and Impact! Nanhi Kali’s Proud Fathers For Daughters Season 8 is a Roaring Success",
        description:
          "Project Nanhi Kali’s eighth edition of Proud Fathers For Daughters was organised on October 28-29, 2023 at the National Sports Club of India, Worli, Mumbai. With 570 portraits ",
        image: "/home/hero2.png",
        likes: 28,
      },
    ],
  },
  "2": {
    title: "Page 2: More News & Highlights",
    banner: "/home/about2.png",
    events: [
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/about2.png",
        likes: 28,
      },
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/about2.png",
        likes: 28,
      },
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/about2.png",
        likes: 28,
      },
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/about2.png",
        likes: 28,
      },
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/about2.png",
        likes: 28,
      },
    ],
  },
  "3": {
    title: "Page 3: More News & Highlights",
    banner: "/home/hero4.png",
    events: [
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/hero4.png",
        likes: 28,
      },
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/hero4.png",
        likes: 28,
      },
    ],
  },
  "4": {
    title: "Page 4: More News & Highlights",
    banner: "/news-events/banner2.png",
    events: [
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/hero4.png",
        likes: 28,
      },
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/hero4.png",
        likes: 28,
      },
    ],
  },
  "5": {
    title: "Page 5: More News & Highlights",
    banner: "/news-events/banner2.png",
    events: [
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/hero4.png",
        likes: 28,
      },
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/hero4.png",
        likes: 28,
      },
    ],
  },
  "6": {
    title: "Page 6: More News & Highlights",
    banner: "/news-events/banner2.png",
    events: [
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/hero4.png",
        likes: 28,
      },
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/hero4.png",
        likes: 28,
      },
    ],
  },
  "7": {
    title: "Page 7: More News & Highlights",
    banner: "/news-events/banner2.png",
    events: [
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/hero4.png",
        likes: 28,
      },
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/hero4.png",
        likes: 28,
      },
    ],
  },
  "8": {
    title: "Page 8: More News & Highlights",
    banner: "/news-events/banner2.png",
    events: [
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathonn on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/hero4.png",
        likes: 28,
      },
      {
        title:
          "Beyond the Finish Line: Running for Nanhi Kali’s Cause at TMM 2024",
        description:
          "The Tata Mumbai Marathon on January 21, 2024, witnessed a remarkable display of unity and purpose. Over 150 marathoners from Project Nanhi Kali and Mahindra Group, with the",
        image: "/home/hero4.png",
        likes: 28,
      },
    ],
  },
};

const NewsEventsPage = ({ params }: { params: { pageNumber?: string } }) => {
  const pathname = usePathname();
  const pageNumber = params.pageNumber || "1";
  const data = allPagesData[pageNumber];
  if (!data) return notFound();

  const totalPages = Object.keys(allPagesData).length;
  const currentPage = parseInt(pageNumber);

  return (
    <>
      <Header />
      <main className="bg-white text-black">
        {/* Top Banner */}
        <div className="w-full h-[30rem] relative overflow-hidden">
          <Image
            src={data.banner}
            alt="Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title + Breadcrumb */}
        <div className="container mx-auto px-4 pt-8 pb-4 border-b">
          <h1 className="text-3xl font-semibold mb-2">{data.title}</h1>
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
              {data.events.map((item, index) => (
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

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
              {currentPage > 1 && (
                <Link
                  href={
                    currentPage === 2
                      ? "/news-events"
                      : `/news-events/page/${currentPage - 1}`
                  }
                  className="text-orange-500 hover:underline text-sm"
                >
                  ← Previous page
                </Link>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Link
                    key={page}
                    href={
                      page === 1 ? "/news-events" : `/news-events/page/${page}`
                    }
                    className={`w-8 h-8 flex items-center justify-center rounded border border-gray-500 text-sm ${
                      page.toString() === params.pageNumber
                        ? "bg-orange-400 text-white font-semibold"
                        : "bg-white text-black hover:bg-orange-100"
                    }`}
                  >
                    {page}
                  </Link>
                )
              )}
              {currentPage < totalPages && (
                <Link
                  href={`/news-events/page/${currentPage + 1}`}
                  className="text-orange-500 hover:underline text-sm"
                >
                  Next page →
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 lg:pl-6 border-l border-gray-300">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">MEDIA</h2>
            <ul className="space-y-3 text-sm font-medium">
              <li className="border-b pb-2">
                {pathname === "/news-events" ? (
                  <span className="text-red-600 mr-2">▣ News & Events</span>
                ) : (
                  <Link href="/news-events" prefetch={false}>
                    <span className="text-red-600 mr-2">▣</span>
                    News & Events
                  </Link>
                )}
              </li>
              <li className="border-b pb-2">
                <Link href="/newsletters">
                  <span className="text-red-600 mr-2">▣</span>
                  Newsletters
                </Link>
              </li>
              <li className="border-b pb-2">
                <Link href="/publications">
                  <span className="text-red-600 mr-2">▣</span>
                  Publications
                </Link>
              </li>
              <li className="border-b pb-2">
                <Link href="/photo-gallery">
                  <span className="text-red-600 mr-2">▣</span>
                  Photo Gallery
                </Link>
              </li>
              <li className="border-b pb-2">
                <Link href="/video-gallery">
                  <span className="text-red-600 mr-2">▣</span>
                  Video Gallery
                </Link>
              </li>
            </ul>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NewsEventsPage;
