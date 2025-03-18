
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SkillBarProps {
  skill: string;
  percentage: number;
  color?: string;
}

export default function SkillBar({ 
  skill, 
  percentage, 
  color = "bg-sky-500" 
}: SkillBarProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm font-medium text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} animated-skill-bar bar-fill rounded-full`}
          style={{ 
            width: isInView ? `${percentage}%` : '0%',
            transition: 'width 1s ease-out'
          }}
        />
      </div>
    </div>
  );
}

interface SkillCircleProps {
  skill: string;
  percentage: number;
  color?: string;
  icon?: React.ReactNode;
}

export function SkillCircle({ 
  skill, 
  percentage, 
  color = "stroke-sky-500",
  icon
}: SkillCircleProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className="flex flex-col items-center justify-center p-4"
    >
      <div className="relative">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle
            className="text-secondary"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            className={`${color} transition-all duration-1000 ease-out`}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={isInView ? offset : circumference}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
            style={{ 
              transition: 'stroke-dashoffset 1.5s ease-out'
            }}
          />
        </svg>
        {icon && (
          <div className="absolute inset-0 flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
      <p className="mt-2 text-sm font-medium">{skill}</p>
      <p className="text-xs text-muted-foreground">{percentage}%</p>
    </div>
  );
}
