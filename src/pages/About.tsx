
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About Me | Oussama Ouali</title>
        <meta name="description" content="Learn more about Oussama Ouali, a passionate Mobile Application Developer and Frontend Developer." />
      </Helmet>
      <Navbar />
      <main className="min-h-screen pt-20">
        <AboutSection />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default About;
