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
  Ship,
  Sparkles,
  BookOpen,
  Briefcase,
  Cpu,
  Languages,
} from "lucide-react";
import SkillBar, { SkillCircle } from "./SkillBar";

export default function AboutSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  const technicalSkills = [
    { skill: "React / React Native", percentage: 80 },
    { skill: "JavaScript / TypeScript", percentage: 80 },
    { skill: "Ionic / Angular", percentage: 50 },
    { skill: "Node.js", percentage: 80 },
    { skill: "PostgreSQL / Firebase", percentage: 80 },
    { skill: "Docker / CI/CD", percentage: 60 },
    { skill: "Git / GitHub", percentage: 88 },
    { skill: "Redux / Context API", percentage: 80 },
  ];

  const specializations = [
    {
      title: "Frontend Development",
      icon: <Globe size={24} className="text-sky-400" />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Angular",
        "Tailwind CSS",
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} className="text-sky-400" />,
      skills: [
        "React Native",
        "Ionic",
        "Capacitor",
        "iOS/Android",
        "Cross-Platform",
      ],
    },
    {
      title: "Backend Development",
      icon: <ServerIcon size={24} className="text-sky-400" />,
      skills: ["Laravel", "Spring Boot", "API Development"],
    },
    {
      title: "Database Management",
      icon: <Database size={24} className="text-sky-400" />,
      skills: ["PostgreSQL", "Firebase", "MySQL", "MongoDB", "SQL"],
    },
    {
      title: "Design & Prototyping",
      icon: <Paintbrush size={24} className="text-sky-400" />,
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Wireframing", "Selenium"],
    },
    {
      title: "DevOps & Deployment",
      icon: <Ship size={24} className="text-sky-400" />,
      skills: ["Docker", "CI/CD", "GitHub Actions", "GitLab CI", "Kubernetes"],
    },
    {
      title: "Version Control",
      icon: <GithubIcon size={24} className="text-sky-400" />,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Agile Methodologies"],
    },
    {
      title: "State Management",
      icon: <Cpu size={24} className="text-sky-400" />,
      skills: ["Redux", "Context API"],
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.03),transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute right-0 top-20 w-64 h-64 bg-sky-500/5 rounded-full filter blur-3xl" />
      <div className="absolute left-20 bottom-20 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />

      {/* Floating code symbols */}
      {["</>", "{}", "[]", "()"].map((symbol, index) => (
        <motion.div
          key={index}
          className="absolute text-sky-500/10 text-6xl font-mono font-bold"
          style={{
            left: `${index * 25}%`,
            top: `${(index % 3) * 30 + 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {symbol}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block py-1.5 px-4 rounded-full bg-sky-500/10 text-sky-400 text-sm font-medium mb-4 border border-sky-500/20 shadow-sm shadow-sky-500/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles size={14} className="inline mr-2" />
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
            Get to Know Me
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I am a passionate Mobile Application Developer and Frontend
            Developer with a strong foundation in software development and a
            proven track record of delivering impactful projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          {/* Bio with enhanced styling */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500/50 via-blue-500/30 to-transparent rounded-full" />

              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Briefcase size={20} className="mr-3 text-sky-400" />
                  <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    My Journey
                  </span>
                </h3>
                <div className="space-y-4 text-slate-300">
                  <p className="leading-relaxed">
                    With experience in cross-platform mobile applications and
                    web development, I thrive on solving complex problems and
                    creating user-friendly solutions that make a difference.
                  </p>
                  <p className="leading-relaxed">
                    Currently, I am focusing on developing advanced mobile
                    applications using React Native and React, with a strong
                    emphasis on performance optimization and responsive design
                    principles.
                  </p>
                  <p className="leading-relaxed">
                    I am eager to learn new technologies and continuously
                    enhance my technical expertise. I am looking for exciting
                    opportunities to further develop my skills, take on
                    challenging projects, and contribute to innovative
                    solutions.
                  </p>
                  <p className="leading-relaxed">
                    My background in Computer Science and Data Science has
                    provided me with the analytical skills necessary to approach
                    problems methodically and create efficient, scalable
                    solutions.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <BookOpen size={20} className="mr-3 text-sky-400" />
                  <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    Education
                  </span>
                </h3>
                <div className="space-y-5">
                  {/* <motion.div 
                    className="p-5 rounded-lg border border-sky-500/10 bg-sky-950/20 backdrop-blur-sm hover:border-sky-500/30 transition-all duration-300 shadow-lg shadow-sky-500/5"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <h4 className="font-semibold text-sky-300 text-lg">Master's degree in Data Engineering</h4>
                    <p className="text-slate-400 mt-1 flex items-center">
                      <span className="w-3 h-3 bg-sky-400 rounded-full inline-block mr-2"></span>
                      Bielefeld University | 2024 - present
                    </p>
                  </motion.div> */}

                  <motion.div
                    className="p-5 rounded-lg border border-sky-500/10 bg-sky-950/20 backdrop-blur-sm hover:border-sky-500/30 transition-all duration-300 shadow-lg shadow-sky-500/5"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <h4 className="font-semibold text-sky-300 text-lg">
                      Bachelor's degree in Computer Science
                    </h4>
                    <p className="text-slate-400 mt-1 flex items-center">
                      <span className="w-3 h-3 bg-sky-400 rounded-full inline-block mr-2"></span>
                      Faculty of Science and Technology | 2018 - 2022
                    </p>
                  </motion.div>

                  <motion.div
                    className="p-5 rounded-lg border border-sky-500/10 bg-sky-950/20 backdrop-blur-sm hover:border-sky-500/30 transition-all duration-300 shadow-lg shadow-sky-500/5"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <h4 className="font-semibold text-sky-300 text-lg">
                      AI & Data Science Program
                    </h4>
                    <p className="text-slate-400 mt-1 flex items-center">
                      <span className="w-3 h-3 bg-sky-400 rounded-full inline-block mr-2"></span>
                      Certificate in Data Science | 2023 - August 2024
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <h3 className="text-2xl font-semibold mt-12 mb-8 flex items-center">
              <Languages size={20} className="mr-3 text-sky-400" />
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Languages
              </span>
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-6  bg-sky-950/20 p-6 rounded-xl border border-sky-500/10 shadow-lg shadow-sky-500/5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <SkillCircle
                skill="Arabic"
                percentage={100}
                icon={
                  <span className="text-sm font-medium bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded">
                    Native
                  </span>
                }
              />
              <SkillCircle
                skill="French"
                percentage={90}
                icon={
                  <span className="text-sm font-medium bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded">
                    Fluent
                  </span>
                }
              />
              <SkillCircle
                skill="English"
                percentage={90}
                icon={
                  <span className="text-sm font-medium bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded">
                    Fluent
                  </span>
                }
              />
              <SkillCircle
                skill="German"
                percentage={40}
                icon={
                  <span className="text-sm font-medium bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded">
                    Basic
                  </span>
                }
              />
            </motion.div>
          </div>

          {/* Skills with enhanced styling */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Code size={20} className="mr-3 text-sky-400" />
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Technical Skills
                </span>
              </h3>

              <div className="mb-12 bg-sky-950/20 p-6 rounded-xl border border-sky-500/10 shadow-lg shadow-sky-500/5">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            x: 0,
                            transition: {
                              delay: 0.4 + index * 0.1,
                              duration: 0.5,
                            },
                          }
                        : { opacity: 0, x: 20 }
                    }
                  >
                    <SkillBar
                      skill={skill.skill}
                      percentage={skill.percentage}
                    />
                  </motion.div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Boxes size={20} className="mr-3 text-sky-400" />
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Specializations
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {specializations.map((spec, index) => (
                  <motion.div
                    key={index}
                    className="p-5 rounded-lg border border-sky-500/10 bg-sky-950/20 backdrop-blur-sm hover:border-sky-500/30 transition-all duration-300 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: {
                              delay: 0.5 + index * 0.1,
                              duration: 0.4,
                            },
                          }
                        : { opacity: 0, y: 20 }
                    }
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 10px 30px -15px rgba(56, 189, 248, 0.3)",
                      y: -5,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-lg bg-sky-500/10 mr-3">
                        {spec.icon}
                      </div>
                      <h4 className="font-medium text-lg text-sky-200">
                        {spec.title}
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {spec.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="text-slate-300 flex items-center"
                        >
                          <span className="text-sky-400 mr-2 text-lg">•</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
