import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const gallery = [
  {
    title: "Images From The Field",
    image: "/about/image (11).png",
    likes: 40,
    href: "#",
  },
  {
    title: "Events & Activities",
    image: "/about/image5.png",
    likes: 37,
    href: "#",
  },
];

export default function PhotoGalleryPage() {
  return (
    <>
      <Header />
      <div className="w-full h-[25rem] relative overflow-hidden">
        <Image
          src="/home/hero1.png"
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
            <h1 className="text-3xl font-bold">Photo Gallery</h1>
            <p className="text-sm mt-2">
              <Link href="/" className="text-orange-600 hover:underline">
                Home
              </Link>{" "}
              › Photo Gallery
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Gallery */}
            <div className="w-full lg:w-[75%]">
              <p className="text-gray-700 mb-6">
                Catch a glimpse of the candid and innocent moments in the lives
                of our Nanhi Kalis.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {gallery.map((item, i) => (
                  <div key={i} className="bg-white shadow border rounded">
                    <div className="relative w-full h-60">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-t"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-[#004055] mb-2">
                        {item.title}
                      </h3>
                      <div className="flex justify-between items-center text-sm border-t pt-3">
                        <span className="flex items-center gap-1 text-gray-500">
                          ❤️ {item.likes}
                        </span>
                        <Link
                          href={item.href}
                          className="text-red-600 hover:underline"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 mt-8">
                Catch a glimpse of the candid and innocent moments in the lives
                of our Nanhi Kalis.
              </p>
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
                      item.href === "/photo-gallery" ? "font-semibold" : ""
                    }`}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 ${
                        item.href === "/photo-gallery"
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
