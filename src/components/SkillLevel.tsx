import React from 'react';
import { Star } from 'lucide-react';

interface SkillLevelProps {
  level: number;
  maxLevel?: number;
}

const SkillLevel: React.FC<SkillLevelProps> = ({ level, maxLevel = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(maxLevel)].map((_, index) => (
        <Star
          key={index}
          size={14}
          className={`${
            index < level
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default SkillLevel;