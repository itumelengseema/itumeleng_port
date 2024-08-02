import React from 'react';
import {Skills as SkillsType} from "@/typing";

type Props={
      skills: SkillsType[];
}

const Skills: React.FC<Props> = ({ skills }) => (
    <div className="flex flex-wrap gap-4">
        {Array.isArray(skills) && skills.length > 0 ? (
            skills.map((skill) => (
                <span
                    key={skill._id}
                    className="bg-gray-800 text-white text-sm font-medium py-1 px-3 rounded-full shadow-md"
                >
          {skill.name}
        </span>
            ))
        ) : (
            <p>No skills available</p>
        )}
    </div>
);
export default Skills;
