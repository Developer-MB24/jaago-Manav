import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const newsletters = [
  "March 2025 - Newsletter",
  "January 2025 - Newsletter",
  "Sports For Life Newsletter",
  "May 2024 – Newsletter",
  "April 2024 – Newsletter",
  "April 2023 – Newsletter",
  "January – March 2020 – Newsletter",
  "April 2019 - Newsletter",
  "May 2024 – Newsletter",
  "April 2024 – Newsletter",
  "April 2023 – Newsletter",
  "January – March 2020 – Newsletter",
  "April 2019 - Newsletter",
  "May 2024 – Newsletter",
  "April 2024 – Newsletter",
  "April 2023 – Newsletter",
  "January – March 2020 – Newsletter",
  "April 2019 - Newsletter",
];

export default function NewslettersPage() {
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
            <h1 className="text-3xl font-bold">Newsletters</h1>
            <p className="text-sm mt-2">
              <Link href="/" className="text-orange-600 hover:underline">
                Home
              </Link>{" "}
              › Newsletters
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Newsletter Grid - 3/4 width */}
            <div className="w-full lg:w-[75%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10">
                {newsletters.map((title, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    {/* Inline Icon */}
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-orange-500 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-orange-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 6h14M5 12h14M5 18h14"
                        />
                      </svg>
                    </div>
                    <span className="text-[#004055] hover:underline cursor-pointer text-[1.08rem]">
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sidebar - 1/4 width */}
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
                      item.href === "/newsletters" ? "font-semibold" : ""
                    }`}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 ${
                        item.href === "/newsletters"
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
