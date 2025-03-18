
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Oussama Ouali | Mobile & Frontend Developer</title>
        <meta name="description" content="Oussama Ouali is a Mobile Application Developer and Frontend Developer with expertise in Ionic, Angular, React, and more." />
      </Helmet>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
