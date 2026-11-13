import { existsSync } from "node:fs";
import path from "node:path";

export const portfolio = {
  name: "Edmond Bobiles",
  bio: "Hi! I am a Computer Science student at the University of Santo Tomas specializing in Data Science. I like building full-stack web applications and data engineering solutions through academic and client-based projects. I am also a consistent Dean's Lister and DOST scholar, eager to contribute to a team while continuing to grow as a software and data engineer.",
  skillGroups: [
    {
      title: "Programming Languages",
      skills: ["HTML", "CSS", "Java", "JavaScript", "Python", "SQL"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Docker", "Apache Airflow", "Apache Kafka", "PostgreSQL", "Linux"],
    },
    {
      title: "Soft Skills",
      skills: ["Teamwork", "Problem-solving", "Adaptability", "Communication"],
    },
  ],
  contact: {
    intro: "Interested in working together or just want to say hi? My inbox is open.",
    email: "edmondjohn.bobiles@gmail.com",
    github: "https://github.com/edmond-bobiles",
    linkedin: "https://www.linkedin.com/in/edmond-john-bobiles/",
  },
};

// Owner-supplied files. Returns the public path if the file exists, otherwise null.
// Server-only (uses node:fs): call it from Server Components, never from client ones.
export function getOwnerAssets() {
  const assetsDir = path.join(process.cwd(), "public", "assets");
  return {
    profile: existsSync(path.join(assetsDir, "profile.jpg")) ? "/assets/profile.jpg" : null,
    resume: existsSync(path.join(assetsDir, "resume.pdf")) ? "/assets/resume.pdf" : null,
  };
}