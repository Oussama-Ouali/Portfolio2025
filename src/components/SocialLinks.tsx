
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  animate?: boolean;
}

export default function SocialLinks({ 
  className = "", 
  iconSize = 20,
  animate = false 
}: SocialLinksProps) {
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <Github size={iconSize} />, 
      url: "https://github.com/Oussama-Ouali",
      color: "hover:text-sky-500" 
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={iconSize} />, 
      url: "https://linkedin.com/in/Oussama-Ouali",
      color: "hover:text-sky-500" 
    },
    { 
      name: "Email", 
      icon: <Mail size={iconSize} />, 
      url: "mailto:ouatiousssama034@gmail.com",
      color: "hover:text-sky-500" 
    },
    { 
      name: "Twitter", 
      icon: <Twitter size={iconSize} />, 
      url: "#",
      color: "hover:text-sky-500" 
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  if (animate) {
    return (
      <motion.div 
        className={`flex space-x-4 ${className}`}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-muted-foreground ${link.color} transition-colors duration-300 hover:scale-110`}
            aria-label={link.name}
            variants={item}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    );
  }

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-muted-foreground ${link.color} transition-colors duration-300 hover:scale-110`}
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
