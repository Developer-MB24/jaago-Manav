import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 text-gray-800 py-8">
        <div className="container mx-auto px-6 sm:px-10 flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Jaago Manav Section */}
          <div className="flex flex-col items-center lg:items-start flex-1">
            <h1 className="text-red-600 text-xl sm:text-2xl font-bold">
              Jaago Manav
            </h1>
            <p className="text-center lg:text-left text-sm mt-2 italic">
              Awakening Humanity.....
            </p>
          </div>

          {/* The Dayton Foundation Section */}
          <div className="text-center lg:text-left flex-1">
            <h2 className="font-semibold text-lg">The Dayton Foundation</h2>
            <address className="not-italic mt-2 text-sm">
              1401 S. Main Street, Suite 100
              <br />
              Dayton, Ohio 45409
            </address>
            <p className="mt-2 text-sm">
              Phone:{" "}
              <a href="tel:(937)222-0410" className="underline">
                (937) 222-0410
              </a>
              <br />
              Fax:{" "}
              <a href="tel:(937)222-0636" className="underline">
                (937) 222-0636
              </a>
            </p>
            <p className="mt-2 text-sm">
              Email:{" "}
              <a href="mailto:info@daytonfoundation.org" className="underline">
                info@daytonfoundation.org
              </a>
            </p>
            <p className="mt-2 text-sm">
              Office hours are Monday through Friday, 8:30 a.m. to 5:00 p.m.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center lg:text-left flex-1">
            <h2 className="font-semibold text-lg">Quick Links</h2>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link href="/sitemap" className="hover:underline">
                  Site Map
                </Link>
              </li>
              <li>
                <Link href="/access-your-fund" className="hover:underline">
                  Access Your Fund
                </Link>
              </li>
              <li>
                <Link href="/donate-now" className="hover:underline">
                  Donate Now
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay in Touch Section */}
          <div className="text-center lg:text-left flex-1">
            <h2 className="font-semibold text-lg">Stay in Touch</h2>
            <p className="mt-2 text-sm">
              Receive The Dayton Foundation&apos;s latest news, including
              charitable giving tips, stories of impact, grant opportunities and
              more!
            </p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700">
              Sign Up
            </button>
            <h2 className="font-medium mt-3 text-sm">Connect with Us</h2>
            <div className="flex justify-center lg:justify-start gap-4 py-2">
              <FaFacebook className="w-6 h-6" />
              <FaXTwitter className="w-6 h-6" />
              <FaLinkedin className="w-6 h-6" />
              <FaYoutube className="w-6 h-6" />
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Section */}
      <div className="bg-green-800 text-white text-xs sm:text-sm py-4 px-6 sm:px-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-center sm:text-left">
            &copy; Copyright 2025 The Dayton Foundation. All rights reserved.
          </p>
          <p className="text-center sm:text-left mt-2 sm:mt-0">
            Website by{" "}
            <a
              href="https://morweb.org"
              className="underline hover:text-gray-300"
            >
              Morweb.org
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
