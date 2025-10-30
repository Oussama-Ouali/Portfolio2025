import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  Download,
  Send,
  Star,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hi, I'm Oussama Ouali";
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text.length < fullText.length) {
        setText(fullText.slice(0, text.length + 1));
      } else if (!isTypingComplete) {
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [text, isTypingComplete]);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "public/uploads/OussamaOualiEnglishResume.pdf";
    link.download = "Oussama_Ouali_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950"
    >
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 right-0 h-full">
        <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-sky-500/10 to-transparent -z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-sky-900/5 to-transparent -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.03),transparent_70%)]" />
      </div>

      {/* Enhanced animated particles/stars */}
      {Array.from({ length: 80 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            backgroundColor:
              index % 5 === 0
                ? "rgb(14 165 233 / 0.7)"
                : "rgb(255 255 255 / 0.5)",
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            y: [null, Math.random() * 20 - 10 + "%"],
            opacity: [null, Math.random() * 0.7 + 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Content with improved spacing and organization */}
      <motion.div
        className="container mx-auto px-4 z-10 pt-16"
        style={{ y, opacity }}
      >
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Enhanced Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-4 inline-flex items-center gap-2 bg-sky-500/10 text-sky-200 px-4 py-2 rounded-full text-sm border border-sky-500/20 shadow-sm shadow-sky-500/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star size={14} className="text-sky-400" />
              <span>Available for new projects</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="inline-block bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
                {text}
                <span
                  className={`border-r-2 border-sky-400 ${
                    isTypingComplete ? "animate-type-cursor" : ""
                  }`}
                />
              </span>
            </h1>

            {isTypingComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Mobile Application Developer | Frontend Developer
                </h2>

                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                  A passionate developer with over 2 years of experience in
                  cross-platform mobile applications and modern web development,
                  focused on creating exceptional user experiences and scalable
                  solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      onClick={handleResumeDownload}
                      className="gap-3 bg-gradient-to-r from-sky-600 to-blue-500 hover:from-sky-500 hover:to-blue-400 shadow-lg shadow-sky-500/20 px-6 py-6 text-lg font-medium"
                    >
                      <Download size={20} />
                      Download Resume
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="gap-3 border-sky-500/30 hover:bg-sky-500/10 text-sky-100 px-6 py-6 text-lg font-medium"
                      asChild
                    >
                      <Link to="/contact">
                        <Send size={20} />
                        Contact Me
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                <div className="mt-12">
                  <p className="text-sm text-sky-200 mb-3 uppercase tracking-wider font-medium">
                    Connect with me:
                  </p>
                  <SocialLinks animate={true} />
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Enhanced Profile/Avatar Section */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative w-72 h-72 md:w-[550px] md:h-[550px]">
              {/* Glowing background effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Rotating rings */}
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-dashed border-sky-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute inset-12 rounded-full border border-sky-500/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Avatar container */}
              <motion.div
                className="relative h-full w-full overflow-hidden rounded-full border-2 border-sky-500/50 p-3 bg-gradient-to-br from-sky-900/50 to-slate-900/80 backdrop-blur-sm"
                whileHover={{
                  boxShadow: "0 0 40px rgba(14, 165, 233, 0.4)",
                  borderColor: "rgba(14, 165, 233, 0.8)",
                }}
              >
                {/* Avatar component instead of image */}
                <img
                  className="rounded-full"
                  src="public\uploads\profile.jpg"
                  alt=""
                />

                {/* Overlay gradient */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/10 via-transparent to-blue-500/10"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>

              {/* Floating tech icons around avatar */}
              {["</>", "{}", "[]", "##", "//"].map((icon, index) => (
                <motion.div
                  key={index}
                  className="absolute bg-sky-900/90 text-sky-300 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono shadow-lg border border-sky-700/50"
                  style={{
                    left: `${Math.sin(index * ((Math.PI * 2) / 5)) * 50 + 50}%`,
                    top: `${Math.cos(index * ((Math.PI * 2) / 5)) * 50 + 50}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-sm text-sky-200 mb-2 font-medium tracking-wide">
          Scroll to explore
        </span>
        <motion.div
          className="p-2 rounded-full bg-sky-500/10 border border-sky-500/20"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-sky-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
