
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { motion } from "framer-motion";
import {Sparkles} from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      company: "Elixiria Tech",
      position: "CTO",
      period: "Augest 2024 - Present",
      location: "Tanger, Morocco",
      description: [
        "Developed and maintained, a cross-platform mobile application (React Native) designed for Material Unloading and Separation in reel time.",
        "Implemented new features and optimized app performance for scalability.",
      ],
      index: 0
    },
    {
      company: "Tanger Med Engineering",
      position: "Mobile Application Developer",
      period: "July 2024 - Present",
      location: "Tanger, Morocco",
      description: [
        "Developed and maintained GMAO-SIG, a cross-platform mobile application (React Native & Ionic) designed for asset management and maintenance tracking within Tanger Med.",
        "Implemented new features and optimized app performance for scalability.",
        "Currently leading the development of a Geometeo Mobile Application for the Capitainerie of Tanger Med, visualizing meteorological data such as wind direction and wave patterns.",
        "Deployed production environments using AWS EC2 and managed regular updates."
      ],
      index: 0
    },
    {
      company: "Tanger Med Engineering",
      position: "Mobile Developer Intern",
      period: "February 2024 - July 2024",
      location: "Tanger, Morocco",
      description: [
        "Contributed to the GMAO-SIG project, focusing on core functionalities, feature enhancements, and bug resolution.",
        "Gained hands-on experience with Ionic, AWS deployment, and mobile app lifecycle management."
      ],
      index: 1
    },
    {
      company: "Club Hub Marketing",
      position: "Automation Developer",
      period: "March 2023 - January 2024",
      location: "On site",
      description: [
        "Designed and implemented an automated bulk email system using Selenium, significantly improving DNS routing and delivery rates.",
        "Developed innovative solutions for monitoring and enhancing email campaign performance."
      ],
      index: 2
    },
    {
      company: "Noximedia",
      position: "Frontend developer",
      period: "december 2022 - Mars 2024",
      location: "Remote",
      description: [
        "Developing a food tracking system using react js and firebase."
      ],
      index: 3
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Experience | Oussama Ouali</title>
        <meta name="description" content="Professional experience of Oussama Ouali, Mobile Application Developer and Frontend Developer." />
      </Helmet>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.span className="inline-block py-1.5 px-4 rounded-full bg-sky-500/10 text-sky-400 text-sm font-medium mb-4 border border-sky-500/20 shadow-sm shadow-sky-500/5">
            <Sparkles size={14} className="inline mr-2" />
              My Journey
            </motion.span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A timeline of my career journey, showcasing my experience and growth as a developer.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceTimeline
                key={index}
                experience={{...experience, index}}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Experience;
