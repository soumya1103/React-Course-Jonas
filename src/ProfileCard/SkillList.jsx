import React from "react";

export default function SkillList({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "advanced"
          ? "💪"
          : skillObj.level === "intermediate"
          ? "👍"
          : "👶"}
      </span>
    </div>
  );
}
