
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { 
  Code, 
  Globe, 
  Database, 
  GitBranch, 
  Layers, 
  Cloud, 
  Smartphone,
  Boxes,
  GitFork, 
  ServerIcon,
  Monitor,
  Paintbrush,
  GithubIcon,
  Ship
} from "lucide-react";
import SkillBar, { SkillCircle } from "./SkillBar";

export default function AboutSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  const technicalSkills = [
    { skill: "React / React Native", percentage: 90 },
    { skill: "JavaScript / TypeScript", percentage: 92 },
    { skill: "Ionic / Angular", percentage: 60 },
    { skill: "Node.js", percentage: 85 },
    { skill: "PostgreSQL / Firebase", percentage: 80 },
    { skill: "Docker / CI/CD", percentage: 75 },
    { skill: "Git / GitHub", percentage: 88 },
    { skill: "Redux / Context API", percentage: 82 }
  ];

  const specializations = [
    { 
      title: "Frontend Development",
      icon: <Globe size={24} className="text-sky-500" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Angular", "Tailwind CSS"]
    },
    { 
      title: "Mobile Development",
      icon: <Monitor size={24} className="text-sky-500" />,
      skills: ["React Native", "Ionic", "Capacitor", "iOS/Android", "Cross-Platform"]
    },
    { 
      title: "Backend Development",
      icon: <ServerIcon size={24} className="text-sky-500" />,
      skills: ["Node.js", "Express.js", "Laravel", "Spring Boot", "API Development"]
    },
    { 
      title: "Database Management",
      icon: <Database size={24} className="text-sky-500" />,
      skills: ["PostgreSQL", "Firebase", "MySQL", "MongoDB", "SQL"]
    },
    { 
      title: "Design & Prototyping",
      icon: <Paintbrush size={24} className="text-sky-500" />,
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Wireframing", "Selenium"]
    },
    { 
      title: "DevOps & Version Control",
      icon: <Ship size={24} className="text-sky-500" />,
      skills: ["Docker", "CI/CD", "GitHub Actions", "GitLab CI", "Kubernetes"]
    },
    { 
      title: "Version Control",
      icon: <GithubIcon size={24} className="text-sky-500" />,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Agile Methodologies"]
    },
    { 
      title: "State Management",
      icon: <Code size={24} className="text-sky-500" />,
      skills: ["Redux", "Context API", "MobX", "Zustand", "Recoil"]
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-sky-500/10 text-sky-500 text-sm font-medium mb-3">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get to Know Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I am a passionate Mobile Application Developer and Frontend Developer with a strong foundation in 
            software development and a proven track record of delivering impactful projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gradient">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With experience in cross-platform mobile applications and web development, I thrive on solving complex problems 
                  and creating user-friendly solutions.
                </p>
                <p>
                  Currently, I am focusing on developing advanced mobile applications using React Native and React, 
                  with a strong emphasis on performance optimization and responsive design.
                </p>
                <p>
                  I am eager to learn new technologies and continuously enhance my technical expertise. I am looking for 
                  exciting opportunities to further develop my skills, take on challenging projects, and contribute to 
                  innovative solutions.
                </p>
                <p>
                  My background in Computer Science and Data Science has provided me with the analytical skills necessary 
                  to approach problems methodically and create efficient solutions.
                </p>
              </div>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gradient">Education</h3>
              <div className="space-y-4">
                <div className="neo-blur p-4 rounded-lg hover:border-sky-500/50 transition-all duration-300">
                  <h4 className="font-medium text-sky-500">Bachelor's degree in Computer Science</h4>
                  <p className="text-muted-foreground">Faculty of Science and Technology | 2018 - 2022</p>
                </div>
                <div className="neo-blur p-4 rounded-lg hover:border-sky-500/50 transition-all duration-300">
                  <h4 className="font-medium text-sky-500">AI & Data Science Program</h4>
                  <p className="text-muted-foreground">Certificate in Data Science | 2023 - August 2024</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Technical Skills</h3>
              <div className="mb-8">
                {technicalSkills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    skill={skill.skill} 
                    percentage={skill.percentage} 
                  />
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-gradient">Specializations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specializations.map((spec, index) => (
                  <motion.div 
                    key={index} 
                    className="glass-card p-5 rounded-lg border border-white/5 hover:border-sky-500/20"
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 10px 30px -15px rgba(56, 189, 248, 0.2)" 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center mb-3">
                      {spec.icon}
                      <h4 className="ml-2 font-medium">{spec.title}</h4>
                    </div>
                    <ul className="space-y-1 text-sm">
                      {spec.skills.map((skill, i) => (
                        <li key={i} className="text-muted-foreground flex items-center">
                          <span className="text-sky-500 mr-2">•</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-6 text-gradient">Languages</h3>
              <div className="flex flex-wrap justify-center">
                <SkillCircle 
                  skill="Arabic" 
                  percentage={100}
                  icon={<span className="text-sm font-medium">Native</span>}
                />
                <SkillCircle 
                  skill="French" 
                  percentage={90}
                  icon={<span className="text-sm font-medium">Fluent</span>}
                />
                <SkillCircle 
                  skill="English" 
                  percentage={90}
                  icon={<span className="text-sm font-medium">Fluent</span>}
                />
                <SkillCircle 
                  skill="German" 
                  percentage={40}
                  icon={<span className="text-sm font-medium">Basic</span>}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
