import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  demoUrl,
  index,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="relative overflow-hidden aspect-video">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 flex items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full p-4 flex justify-between items-center">
            <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
              {title}
            </h3>
            
            <div className="flex space-x-2">
              {githubUrl && (
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-9 w-9 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/40"
                  asChild
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} className="text-white" />
                  </a>
                </Button>
              )}
              {demoUrl && (
                <Button
                  size="icon"
                  className="h-9 w-9 rounded-full bg-sky-500/80 hover:bg-sky-600"
                  asChild
                >
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} className="text-white" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
        
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ 
            scale: isHovered ? 1.08 : 1,
            filter: isHovered ? "brightness(0.85)" : "brightness(1)"
          }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        
        <div className="flex items-center gap-2 mb-2">
          <Layers size={16} className="text-sky-500 shrink-0" />
          <span className="text-sm font-medium text-sky-500">Tech Stack</span>
        </div>
        
        <motion.div 
          className="flex flex-wrap gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1 + index * 0.1
              }
            },
            hidden: {}
          }}
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Badge variant="outline" className="bg-secondary/50 backdrop-blur-sm hover:bg-secondary">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}