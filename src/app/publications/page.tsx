import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";
import Header from "../components/Header";

export default function PublicationsPage() {
  return (
    <>
      <Header />
      <div className="w-full h-[25rem] relative overflow-hidden">
        <Image
          src="/home/hero8.png"
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
            <h1 className="text-3xl font-bold">Publications</h1>
            <p className="text-sm mt-2">
              <Link href="/" className="text-orange-600 hover:underline">
                Home
              </Link>{" "}
              › Publications
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Content */}
            <div className="w-full lg:w-[75%] space-y-4 leading-relaxed text-[1.05rem]">
              <p>
                With a tenth of the global population of adolescent girls, India
                is home to the largest and youngest workforce in the world
                today. Having reached this pivotal demographic point in our
                economic and political history, the investment in our girls,
                their health and well-being, their education and skilling, their
                productivity, economic potential and leadership are a key
                national priority.
              </p>
              <p>
                In our quest for understanding what it means to be a teenage
                girl in India, we realised they did not feature as the key
                respondent group in any large-scale database. This prompted
                Naandi Foundation to conduct a survey – the Teen Age Girls
                Survey (TAG Report) that reached over 70,000 households across
                600 districts in 30 states of India.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  What did this TAG Report (Teen Age Girls Survey) tell us about
                  our girls?
                </li>
                <li>
                  What is the nation’s ‘report card’ on lives of teenage girls?
                </li>
                <li>What are their dreams and aspirations?</li>
                <li>What are their fears and hardships?</li>
              </ul>
              <p>
                To know more about the survey,{" "}
                <Link href="#" className="text-red-600 hover:underline">
                  Click here
                </Link>
              </p>
              <p>
                <span className="text-red-600">
                  For an in-depth look at the findings, you can{" "}
                  <Link href="#" className="underline">
                    download the report here
                  </Link>
                  .
                </span>
              </p>
              <p className="font-semibold">
                Note: Kindly disable your pop-up blocker to access the report in
                a hassle-free manner
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
                      item.href === "/publications" ? "font-semibold" : ""
                    }`}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 ${
                        item.href === "/publications"
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
