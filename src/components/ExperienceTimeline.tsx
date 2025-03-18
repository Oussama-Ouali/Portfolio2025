
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { CalendarRange, Building2 } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string[];
  index: number;
}

export default function ExperienceTimeline({
  experience,
}: {
  experience: Experience;
}) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ x: experience.index % 2 === 0 ? -50 : 50, opacity: 0 }}
      animate={
        isInView
          ? { x: 0, opacity: 1 }
          : { x: experience.index % 2 === 0 ? -50 : 50, opacity: 0 }
      }
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8"
    >
      <div className="neo-blur p-6 rounded-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-sky-500">{experience.position}</h3>
            <div className="flex items-center gap-2 mt-1 text-muted-foreground">
              <Building2 size={16} />
              <span>{experience.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0 text-sm bg-secondary/50 px-3 py-1 rounded-full">
            <CalendarRange size={14} className="text-sky-400" />
            <span>{experience.period}</span>
          </div>
        </div>
        {experience.location && (
          <p className="text-sm text-muted-foreground mb-4">{experience.location}</p>
        )}
        <ul className="space-y-2">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-sky-500 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
