"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/home/Hero";
import HomeAbout from "./components/home/HomeAbout";
import Mission from "./components/home/Mission";
import Charity from "./components/home/Charity";
import NewsArticles from "./components/home/NewsArticles";
import ChildOldCare from "./components/home/ChildOldCare";
import FocusAreas from "./components/home/FocusAreas";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeAbout />
      <Mission />
      <FocusAreas />
      <Charity />
      <NewsArticles />
      <ChildOldCare />
      <Footer />
    </>
  );
}
