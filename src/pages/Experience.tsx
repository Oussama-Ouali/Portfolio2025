
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
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
      position: "Mailer Agent and Automation Developer",
      period: "March 2023 - January 2024",
      location: "Remote",
      description: [
        "Designed and implemented an automated bulk email system using Selenium, significantly improving DNS routing and delivery rates.",
        "Developed innovative solutions for monitoring and enhancing email campaign performance."
      ],
      index: 2
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
            <span className="inline-block py-1 px-3 rounded-full bg-sky-500/10 text-sky-500 text-sm font-medium mb-3">
              My Journey
            </span>
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
