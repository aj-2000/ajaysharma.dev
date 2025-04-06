import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import shcLoginImg from "@/public/shc-login.webp";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { Bs0Circle, Bs0Square, BsAlarmFill, BsMicrosoft } from "react-icons/bs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech. in Computer Science",
    location: "Netaji Subhas University of Technology, Delhi, India",
    description:
      "I graduated with a B.Tech. in Computer Science from NSUT, Delhi. I was a member of the university's coding club and participated in various hackathons.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Full Stack Developer Intern",
    location: "My School Analytics, Remote",
    description:
      "I worked as a full-stack developer on a startup project for 6 months. I was responsible for the front-end and back-end development.",
    icon: React.createElement(Bs0Circle),
    date: "2022 - 2023",
  },
  {
    title: "Full Stack Developer Intern",
    location: "Airbook, Remote",
    description:
      "I worked as a full-stack developer on a startup project for 3 months. I was responsible for the front-end and back-end development.",
    icon: React.createElement(Bs0Square),
    date: "2022 - 2023",
  },
  {
    title: "Full Stack Intern",
    location: "Aguken AI, Remote",
    description:
      "I worked as a full-stack Intern on a startup project for 6 months. I was responsible for the front-end and back-end development.",
    icon: React.createElement(BsAlarmFill),
    date: "2023 - 2024",
  },
  {
    title: "Sofware Engineer",
    location: "Microsoft, Hyderabad, India",
    description:
      "I am working as a software engineer at Microsoft. ",
    icon: React.createElement(BsMicrosoft),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    link: ""
  },
  {
    title: "Sharecode (SHC)",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: shcLoginImg,
    link: "https://shc.ajaysharma.dev",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    link: "https://wordanalytics.ajaysharma.dev",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
