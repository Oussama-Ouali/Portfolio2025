
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
}

const Blob = ({ color, size, position, delay = 0, duration = 20, reverse = false }: BlobProps) => {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{
        background: color,
        width: size,
        height: size,
        ...position,
        filter: "blur(120px)",
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
  
  const y1 = useTransform(scrollYProgress, [0, 0.5, 1], [0, -150, -300]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 200, 400]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 1], [0, -100, -200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [180, -180]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1.2]);
  const scale3 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.2]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.2, 0.5]);
  
  return (
    <AnimatePresence>
      <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Static animated blobs */}
        <Blob 
          color="rgba(56, 189, 248, 0.5)" 
          size={700} 
          position={{ top: "-20%", left: "-15%" }} 
          duration={28}
        />
        <Blob 
          color="rgba(14, 165, 233, 0.4)" 
          size={600} 
          position={{ bottom: "-25%", right: "-10%" }}
          delay={3}
          duration={32}
          reverse={true}
        />
        <Blob 
          color="rgba(124, 58, 237, 0.35)" 
          size={550} 
          position={{ top: "35%", right: "5%" }}
          delay={5}
          duration={26}
        />
        <Blob 
          color="rgba(139, 92, 246, 0.3)" 
          size={450} 
          position={{ bottom: "15%", left: "10%" }}
          delay={7}
          duration={30}
          reverse={true}
        />
        
        {/* Scroll animated blobs */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(56, 189, 248, 0.5) 0%, rgba(14, 165, 233, 0.3) 100%)",
            width: 350,
            height: 350,
            top: "25%",
            left: "15%",
            filter: "blur(100px)",
            y: y1,
            rotate: rotate1,
            scale: scale1,
            opacity: opacity1,
          }}
        />
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(124, 58, 237, 0.4) 0%, rgba(139, 92, 246, 0.2) 100%)",
            width: 450,
            height: 450,
            bottom: "15%",
            right: "20%",
            filter: "blur(120px)",
            y: y2,
            rotate: rotate2,
            scale: scale2,
            opacity: opacity2,
          }}
        />
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(56, 189, 248, 0.3) 0%, rgba(124, 58, 237, 0.2) 100%)",
            width: 300,
            height: 300,
            top: "60%",
            left: "40%",
            filter: "blur(90px)",
            y: y3,
            rotate: rotate3,
            scale: scale3,
            opacity: 0.3,
          }}
        />
      </div>
    </AnimatePresence>
  );
}
