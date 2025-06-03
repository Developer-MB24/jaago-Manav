import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const videos = [
  {
    title: "Proud Fathers For Daughters Season 8: The After Movie",
    thumbnail: "/videos/video1.jpg", // place in /public/videos
    href: "#",
  },
  {
    title: "Nanhi Kalis perform at the 2023 Mahindra Blues Festival",
    thumbnail: "/videos/video2.jpg",
    href: "#",
  },
  {
    title: "Proud Fathers For Daughters 2023 Highlights",
    thumbnail: "/videos/video3.jpg",
    href: "#",
  },
  {
    title: "Empower Her Ride - Nanhi Kali & Titan",
    thumbnail: "/videos/video4.jpg",
    href: "#",
  },
];

export default function VideoGalleryPage() {
  return (
    <>
      <Header />
      <div className="w-full h-[25rem] relative overflow-hidden">
        <Image
          src="/home/image19.png"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
      </div>
      <main className="bg-[#f9f7f3] text-black py-12 px-4 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          {/* Title + Breadcrumb */}
          <div className="border-b pb-4 mb-8">
            <h1 className="text-3xl font-bold">Video Gallery</h1>
            <p className="text-sm mt-2">
              <Link href="/" className="text-orange-600 hover:underline">
                Home
              </Link>{" "}
              › Video Gallery
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Video Thumbnails */}
            <div className="w-full lg:w-[75%]">
              <p className="mb-6 text-gray-700">
                Watch the videos and get to know our Nanhi Kalis a lot better.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {videos.map((video, i) => (
                  <div
                    key={i}
                    className="bg-white shadow border rounded overflow-hidden"
                  >
                    <div className="relative w-full h-52">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      {/* Play Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-14 h-14 text-white drop-shadow-md"
                          viewBox="0 0 24 24"
                          fill="red"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-3 border-t text-center text-[1rem] text-[#004055] font-medium">
                      {video.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sidebar */}
            <aside className="w-full lg:w-[25%] border-l border-gray-300 pl-6">
              <h2 className="text-xl font-bold mb-4">MEDIA</h2>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "News & Events", href: "/news-events" },
                  { label: "Newsletters", href: "/newsletters" },
                  { label: "Publications", href: "/publications" },
                  { label: "Photo Gallery", href: "/photo-gallery" },
                  { label: "Video Gallery", href: "/video-gallery" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`border-b pb-2 ${
                      item.href === "/video-gallery" ? "font-semibold" : ""
                    }`}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 ${
                        item.href === "/video-gallery"
                          ? "text-red-600"
                          : "text-black hover:text-red-600"
                      }`}
                    >
                      <span className="text-red-600">▣</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
