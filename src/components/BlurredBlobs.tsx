
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
}

const Blob = ({ color, size, position, delay = 0, duration = 20 }: BlobProps) => {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-30"
      style={{
        background: color,
        width: size,
        height: size,
        ...position,
        filter: "blur(100px)",
      }}
      initial={{ scale: 0.8 }}
      animate={{ 
        scale: [0.8, 1.2, 0.8],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
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
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1.2]);
  
  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Static blobs */}
      <Blob 
        color="rgba(56, 189, 248, 0.4)" 
        size={600} 
        position={{ top: "-15%", left: "-10%" }} 
        duration={25}
      />
      <Blob 
        color="rgba(30, 64, 175, 0.3)" 
        size={500} 
        position={{ bottom: "-20%", right: "-5%" }}
        delay={5}
        duration={30}
      />
      <Blob 
        color="rgba(124, 58, 237, 0.25)" 
        size={400} 
        position={{ top: "40%", right: "10%" }}
        delay={2}
        duration={22}
      />
      
      {/* Scroll animated blobs */}
      <motion.div
        className="absolute rounded-full blur-3xl opacity-20"
        style={{
          background: "rgba(56, 189, 248, 0.5)",
          width: 300,
          height: 300,
          top: "30%",
          left: "20%",
          filter: "blur(80px)",
          y: y1,
          rotate: rotate1,
          scale: scale1,
        }}
      />
      <motion.div
        className="absolute rounded-full blur-3xl opacity-30"
        style={{
          background: "rgba(14, 165, 233, 0.4)",
          width: 400,
          height: 400,
          bottom: "10%",
          left: "50%",
          filter: "blur(100px)",
          y: y2,
          rotate: rotate2,
          scale: scale2,
        }}
      />
    </div>
  );
}
