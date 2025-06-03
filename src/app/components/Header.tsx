"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopMediaOpen, setIsDesktopMediaOpen] = useState(false);
  const [isMobileMediaOpen, setIsMobileMediaOpen] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close desktop media dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mediaRef.current &&
        !mediaRef.current.contains(event.target as Node)
      ) {
        setIsDesktopMediaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gradient-to-r from-yellow-100 to-green-100 shadow px-4 py-4">
      <div className="container mx-auto flex items-center justify-between md:px-4">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/about/logo.png"
            alt="Logo"
            width={120}
            height={60}
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-black space-x-8 text-lg font-semibold items-center relative">
          <Link href="/" className="hover:text-red-600">
            Home
          </Link>
          <Link href="/aboutus" className="hover:text-red-600">
            About
          </Link>

          {/* Desktop Media Dropdown */}
          <div className="relative" ref={mediaRef}>
            <button
              onClick={() => setIsDesktopMediaOpen((prev) => !prev)}
              className="flex items-center cursor-pointer hover:text-red-600"
            >
              <span>Media</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDesktopMediaOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white shadow-lg rounded text-sm z-50">
                <Link
                  href="/newsevents"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  News & Events
                </Link>
                <Link
                  href="/newsletters"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Newsletters
                </Link>
                <Link
                  href="/publications"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Publications
                </Link>
                <Link
                  href="/photo-gallery"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Photo Gallery
                </Link>
                <Link
                  href="/video-gallery"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Video Gallery
                </Link>
              </div>
            )}
          </div>

          <Link href="/what-we-do" className="hover:text-red-600">
            What we do
          </Link>
          <Link href="/blog" className="hover:text-red-600">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-red-600">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Donate Button */}
        <div>
          <Link
            href="/donate"
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-3xl hover:bg-red-700"
          >
            Donate
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col items-center py-4 space-y-4 text-lg font-semibold">
          <Link
            href="/"
            className="text-black hover:text-red-600"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            className="text-black hover:text-red-600"
            onClick={toggleMenu}
          >
            About
          </Link>

          {/* Mobile Media Dropdown */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setIsMobileMediaOpen((prev) => !prev)}
              className="text-black flex items-center gap-1"
            >
              <span>Media</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isMobileMediaOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isMobileMediaOpen && (
              <div className="flex flex-col pl-4 text-base space-y-1 mt-2">
                <Link
                  href="/newsevents"
                  className="text-black hover:text-red-600"
                  onClick={() => {
                    toggleMenu();
                    setIsMobileMediaOpen(false);
                  }}
                >
                  News & Events
                </Link>
                <Link
                  href="/newsletters"
                  className="text-black hover:text-red-600"
                  onClick={() => {
                    toggleMenu();
                    setIsMobileMediaOpen(false);
                  }}
                >
                  Newsletters
                </Link>
                <Link
                  href="/publications"
                  className="text-black hover:text-red-600"
                  onClick={() => {
                    toggleMenu();
                    setIsMobileMediaOpen(false);
                  }}
                >
                  Publications
                </Link>
                <Link
                  href="/photo-gallery"
                  className="text-black hover:text-red-600"
                  onClick={() => {
                    toggleMenu();
                    setIsMobileMediaOpen(false);
                  }}
                >
                  Photo Gallery
                </Link>
                <Link
                  href="/video-gallery"
                  className="text-black hover:text-red-600"
                  onClick={() => {
                    toggleMenu();
                    setIsMobileMediaOpen(false);
                  }}
                >
                  Video Gallery
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/what-we-do"
            className="text-black hover:text-red-600"
            onClick={toggleMenu}
          >
            What we do
          </Link>
          <Link
            href="/blog"
            className="text-black hover:text-red-600"
            onClick={toggleMenu}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-red-600"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
