"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutHero from "../components/aboutus/AboutHero";
import Introduction from "../components/aboutus/Introduction";
import SignificantAchievements from "../components/aboutus/SignificantAchievements";
import Difference from "../components/aboutus/Difference";
import Donation from "../components/aboutus/Donation";
import FrequentlyAskedQuestions from "../components/aboutus/FrequentlyAskedQuestions";
const AboutUs = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <Introduction />
      <SignificantAchievements />
      <Difference />
      <Donation />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

export default AboutUs;
