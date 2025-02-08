"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-yellow-100 to-green-100 shadow px-4 py-4">
      <div className="container mx-auto flex items-center justify-between md:px-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          {/* <h1 className="text-red-600 text-2xl font-bold flex items-center">
            Jaago <span className="mx-1 text-black">&#x1F464;</span> Manav
          </h1> */}
          <img src="/about/logo.png" alt="" />
          {/* <p className="text-sm text-black italic">Awakening Humanity.....</p> */}
        </div>

        {/* Navigation Menu for Larger Screens */}
        <nav className="hidden md:flex text-black space-x-8 text-lg font-semibold">
          <Link href="/" className="hover:text-red-600">
            Home
          </Link>
          <Link href="/aboutus" className="hover:text-red-600">
            About
          </Link>
          <Link href="/gallery" className="hover:text-red-600">
            Gallery
          </Link>
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

        {/* Mobile Menu Toggle Button */}
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
                strokeWidth="2"
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
          <Link
            href="/gallery"
            className="text-black hover:text-red-600"
            onClick={toggleMenu}
          >
            Gallery
          </Link>
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
