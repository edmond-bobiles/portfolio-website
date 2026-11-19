import { existsSync } from "node:fs";
import path from "node:path";

export const portfolio = {
  name: "Edmond Bobiles",
  brand: "Edmond.Dev",
  siteUrl: "https://portfolio-website-one-eosin-81.vercel.app",
  bio: "Hi! I am a Computer Science student at the University of Santo Tomas specializing in Data Science. I like building full-stack web applications and data engineering solutions through academic and client-based projects. I am also a consistent Dean's Lister and DOST scholar, eager to contribute to a team while continuing to grow as a software and data engineer.",
  contact: {
    intro: "Whether you’re hiring, have a project in mind, or just want to talk tech, I’d like to hear from you. Use the form, or reach me through any of the links below. I’ll reply by email.",
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
    resume: existsSync(path.join(assetsDir, "Bobiles-resume.pdf")) ? "/assets/Bobiles-resume.pdf" : null,
  };
}