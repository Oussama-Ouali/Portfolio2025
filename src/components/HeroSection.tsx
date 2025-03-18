
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Download, Send, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hi, I'm Oussama Ouali";
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
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

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-sky-500/10 to-transparent -z-10" />
      
      {/* Animated particles/stars */}
      {Array.from({ length: 50 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-sky-500/40 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.3
          }}
          animate={{
            y: [null, Math.random() * 20 - 10 + "%"],
            opacity: [null, Math.random() * 0.8 + 0.2]
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
      
      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 z-10 pt-16"
        style={{ y, opacity }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="mb-2 inline-flex items-center gap-2 bg-sky-950/50 text-sky-200 px-3 py-1 rounded-full text-sm">
              <Star size={14} className="text-sky-500" />
              <span>Available for new projects</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="inline-block">
                {text}
                <span className={`border-r-2 border-sky-500 ${isTypingComplete ? 'animate-type-cursor' : ''}`} />
              </span>
            </h1>
            
            {isTypingComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl text-gradient font-medium mb-6">
                  Mobile Application Developer | Frontend Developer
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
                  A passionate developer with experience in cross-platform mobile applications and web development, 
                  focused on creating user-friendly solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="gap-2 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 shadow-md shadow-sky-500/20">
                      <Download size={18} />
                      Download Resume
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline" className="gap-2 border-sky-500/30 hover:bg-sky-500/10" asChild>
                      <Link to="/contact">
                        <Send size={18} />
                        Contact Me
                      </Link>
                    </Button>
                  </motion.div>
                </div>
                
                <div className="mt-8">
                  <p className="text-sm text-muted-foreground mb-2">Find me on:</p>
                  <SocialLinks animate={true} />
                </div>
              </motion.div>
            )}
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div 
                className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              <motion.div 
                className="relative h-full w-full overflow-hidden rounded-full border-2 border-sky-500/30 p-2"
                whileHover={{ 
                  boxShadow: "0 0 25px rgba(56, 189, 248, 0.5)",
                  borderColor: "rgba(56, 189, 248, 0.6)"
                }}
              >
                <img 
                  src="/lovable-uploads/473b961c-cb2e-455a-b38a-7bea854b749d.png" 
                  alt="Oussama Ouali" 
                  className="h-full w-full object-cover rounded-full"
                />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/10 to-transparent"
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-sm text-muted-foreground">Scroll down</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-sky-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
