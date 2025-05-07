"use client";

import AmazingChildren from "../components/blog/AmazingChildren";
import BlogCarousel from "../components/blog/BlogCarousel";
import SupportSection from "../components/blog/SupportSection";
import Footer from "../components/Footer";

import Header from "../components/Header";

export default function Blog() {
  return (
    <>
      <Header />
      <BlogCarousel />
      <AmazingChildren />
      <SupportSection />
      <Footer />
    </>
  );
}
