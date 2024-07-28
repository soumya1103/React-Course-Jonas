import React from "react";
import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";
import "./profileCard.css";

export default function ProfileCard() {
  const skills = [
    {
      skill: "HTML + CSS",
      level: "advanced",
      color: "#2662ea",
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D",
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF",
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33",
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB",
    },
    {
      skill: "Svelte",
      level: "beginner",
      color: "#FF3B00",
    },
  ];
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <div className="skill-list">
          {skills.map((skill) => (
            <SkillList skillObj={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
