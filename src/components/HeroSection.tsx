
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, Download, Send } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hi, I'm Oussama Ouali";

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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-sky-500/10 to-transparent -z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
                <h2 className="text-2xl md:text-3xl text-sky-500 font-medium mb-6">
                  Mobile Application Developer | Frontend Developer
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
                  A passionate developer with experience in cross-platform mobile applications and web development, 
                  focused on creating user-friendly solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" className="gap-2">
                    <Download size={18} />
                    Download Resume
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <Link to="/contact">
                      <Send size={18} />
                      Contact Me
                    </Link>
                  </Button>
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
              <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl animate-pulse-glow" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-sky-500/30 p-2">
                <img 
                  src="/lovable-uploads/473b961c-cb2e-455a-b38a-7bea854b749d.png" 
                  alt="Oussama Ouali" 
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-sm text-muted-foreground">Scroll down</span>
        <ChevronDown size={20} className="text-sky-500" />
      </motion.div>
    </section>
  );
}
