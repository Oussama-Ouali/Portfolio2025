
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import {Sparkles} from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "GMAO-SIG Mobile App",
      description: "Mobile app for asset maintenance tracking at Tanger Med using Ionic, React Native, and AWS EC2.",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Ionic", "React Native", "AWS EC2", "OpenLayers" ],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Geometeo Application",
      description: "Maritime app for visualizing wind and wave data using React Native and openlayers.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React Native", "OpenLayers", "Weather API"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Bus Tracking App",
      description: "Real-time bus tracking mobile app using React Native, Firebase, and Google Cloud APIs.",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      technologies: ["React Native", "Firebase", "Google Cloud"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Travel Agency Web App",
      description: "Platform to manage travel offers and bookings using Laravel, HTML, and CSS.",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      technologies: ["Laravel", "HTML", "CSS"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Warehouse Material Unloading App",
      description: "New project for managing truck unloading and material separation with real-time updates.",
      image: "https://plus.unsplash.com/premium_photo-1682146487085-456de01b8633?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React Native", "expo", "Node.js", "PostgreSQL", "Elixir", "webSocket" , "phinex"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Reporting System",
      description: "DOCX report generation with dynamic charts for business intelligence and data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Node.js", "Chart.js", "API Integration"],
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Projects | Oussama Ouali</title>
        <meta name="description" content="Explore the portfolio of projects by Oussama Ouali, including mobile applications and web development work." />
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
              My Work
            </motion.span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent development work, including mobile applications, web development,
              and other technical projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Projects;
