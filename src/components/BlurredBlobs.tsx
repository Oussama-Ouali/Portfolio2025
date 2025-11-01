
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

interface BlobProps {
  color: string;
  size: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay?: number;
  duration?: number;
  reverse?: boolean;
  intensity?: number;
}

const Blob = ({ 
  color, 
  size, 
  position, 
  delay = 0, 
  duration = 20, 
  reverse = false,
  intensity = 1 
}: BlobProps) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        background: color,
        width: size,
        height: size,
        ...position,
        filter: `blur(${120 * intensity}px)`,
      }}
      initial={{ scale: 0.8, opacity: 0.2 }}
      animate={{ 
        scale: [0.8, 1.2, 0.9, 1.1, 0.8],
        rotate: reverse ? [0, -180, -360] : [0, 180, 360],
        opacity: [0.2, 0.4, 0.3, 0.5, 0.2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
        times: [0, 0.25, 0.5, 0.75, 1]
      }}
    />
  );
};

export default function BlurredBlobs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 0.5, 1], [0, -200, -400]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 250, 500]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 1], [0, -150, -300]);
  const y4 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 300, 600]);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [180, -180]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [-90, 270]);
  
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1.2]);
  const scale3 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);
  const scale4 = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.3, 0.8]);
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.2]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.2, 0.5]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.4]);
  
  return (
    <AnimatePresence>
      <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <Blob 
          color="linear-gradient(135deg, rgba(56, 189, 248, 0.6) 0%, rgba(14, 165, 233, 0.4) 100%)" 
          size={800} 
          position={{ top: "-25%", left: "-20%" }} 
          duration={36}
          intensity={1.2}
        />
        <Blob 
          color="linear-gradient(135deg, rgba(14, 165, 233, 0.5) 0%, rgba(2, 132, 199, 0.3) 100%)" 
          size={700} 
          position={{ bottom: "-30%", right: "-15%" }}
          delay={5}
          duration={40}
          reverse={true}
          intensity={1.3}
        />
        <Blob 
          color="linear-gradient(135deg, rgba(124, 58, 237, 0.45) 0%, rgba(139, 92, 246, 0.25) 100%)" 
          size={650} 
          position={{ top: "30%", right: "0%" }}
          delay={8}
          duration={38}
          intensity={1.1}
        />
        <Blob 
          color="linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(124, 58, 237, 0.2) 100%)" 
          size={550} 
          position={{ bottom: "10%", left: "5%" }}
          delay={12}
          duration={42}
          reverse={true}
          intensity={1.25}
        />
        <Blob 
          color="linear-gradient(135deg, rgba(2, 132, 199, 0.35) 0%, rgba(56, 189, 248, 0.15) 100%)" 
          size={500} 
          position={{ top: "15%", left: "40%" }}
          delay={15}
          duration={44}
          intensity={1.15}
        />
        
        <motion.div
          className="absolute rounded-full"
          style={{
            background: "linear-gradient(135deg, rgba(56, 189, 248, 0.6) 0%, rgba(14, 165, 233, 0.3) 100%)",
            width: 400,
            height: 400,
            top: "20%",
            left: "15%",
            filter: "blur(120px)",
            y: y1,
            rotate: rotate1,
            scale: scale1,
            opacity: opacity1,
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            background: "linear-gradient(135deg, rgba(124, 58, 237, 0.5) 0%, rgba(139, 92, 246, 0.25) 100%)",
            width: 500,
            height: 500,
            bottom: "15%",
            right: "15%",
            filter: "blur(140px)",
            y: y2,
            rotate: rotate2,
            scale: scale2,
            opacity: opacity2,
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            background: "linear-gradient(135deg, rgba(56, 189, 248, 0.4) 0%, rgba(124, 58, 237, 0.2) 100%)",
            width: 350,
            height: 350,
            top: "55%",
            left: "35%",
            filter: "blur(110px)",
            y: y3,
            rotate: rotate3,
            scale: scale3,
            opacity: opacity3,
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            background: "linear-gradient(135deg, rgba(2, 132, 199, 0.45) 0%, rgba(56, 189, 248, 0.2) 100%)",
            width: 380,
            height: 380,
            top: "10%",
            right: "30%",
            filter: "blur(130px)",
            y: y4,
            rotate: rotate4,
            scale: scale4,
            opacity: 0.35,
          }}
        />
      </div>
    </AnimatePresence>
  );
}
