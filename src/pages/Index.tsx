
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import PageTransition from "@/components/PageTransition";
import BlurredBlobs from "@/components/BlurredBlobs";

const Index = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Oussama Ouali | Mobile & Frontend Developer</title>
        <meta name="description" content="Oussama Ouali is a Mobile Application Developer and Frontend Developer with expertise in React Native, React, Angular, and more." />
      </Helmet>
      <div className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-background to-background -z-10" />
        
        {/* Animated blurred blobs */}
        <BlurredBlobs />
        
        <Navbar />
        <main className="min-h-screen">
          <HeroSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
