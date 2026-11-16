import type { IconType } from "react-icons";
import { FaCss3Alt, FaDatabase, FaHtml5, FaJava } from "react-icons/fa";
import {
  SiApacheairflow,
  SiApachekafka,
  SiBootstrap,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlalchemy,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type Skill = { name: string; icon: IconType };
export type SkillCategory = { title: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "SQLAlchemy", icon: SiSqlalchemy },
      { name: "SQL", icon: FaDatabase },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Github", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Apache Airflow", icon: SiApacheairflow },
      { name: "Apache Kafka", icon: SiApachekafka },
      { name: "Linux", icon: SiLinux },
    ],
  },
];
