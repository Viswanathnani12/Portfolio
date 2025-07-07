import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, School, CircleUserIcon, WrenchIcon, FolderOpenDot, PhoneCall } from "lucide-react";

export const DATA = {
  name: "Viswanath Singanamilli",
  initials: "SV",
  url: "https://portfolio-black-nine-74.vercel.app/",
  location: "Kakinada,Andhra Pradhesh,India",
  locationLink: "https://www.google.com/maps/place/Kakinada",
  description:
    "A motivated software engineer with practical experience in dynamic website development and strong problem-solving skills, eager to apply technical expertise in a professional environment.",
  summary:
    "I'm a passionate and dedicated software developer with a Bachelor’s degree in Computer Science Engineering from Aditya Engineering College. Currently, I’m working as an Associate Software Developer at Backflipt Software, where I contribute to the development and improvement of software applications. I have hands-on experience in real-world projects, team leadership, and a strong focus on continuous learning to deliver high-quality and impactful solutions.",
  avatarUrl: "",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "Redux",
    "Redux Toolkit",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#about", icon: CircleUserIcon, label: "About" },
    { href: "#education", icon: School, label: "Education" },
    { href: "#skills", icon: WrenchIcon, label: "Skills" },
    { href: "#projects", icon: FolderOpenDot, label: "Projects" },
    { href: "#contact", icon: PhoneCall, label: "Contact" },
  ],
  contact: {
    email: "viswanathnani12@gmail.com",
    tel: "+917995839379",
    social: {


    },
  },

  projects: [
    {
      title: "Insight Blend Analytics",
      href: "https://insightblendanalytics-1.onrender.com",
      dates: "July 2024 - August 2024",
      active: true,
      description:
        "Developed the website for Insight Blend Analytics using React JS, Tailwind CSS, and Framer Motion, focusing on responsive design, interactive features and elegant animations.Utilized Git and GitHub for version control to manage code changes and collaboration. Deployed the site with Render for reliable hosting and optimal performance.",
      technologies: [
        "React.js",
        "Typescript",
        "Google Sheets",
        "Framer Motion",
        "TailwindCSS",
        "Figma",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://insightblend.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/The-Software-Squad/insightblendanalytics",
          icon: <Icons.github className="size-3" />,
        },

      ],
      image: "",
      video:
        "insight.mp4",
    },
    {
      title: "Oyola",
      href: "https://oyola.in/",
      dates: "July 2023 - August 2024",
      active: true,
      description:
        "Developed a user-friendly website designed to streamline bookings. Whether you're looking to book hotels, rent a car, or reserve a room, the platform offers a seamless experience, ensuring travelers can plan their stay with ease and convenience.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Framer Motion",
        "Figma"
      ],
      links: [
        {
          type: "Website",
          href: "https://oyola.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/oyola.gif",
      video:
        "",
    },
    {
      title: "Placement Plus",
      href: "https://github.com/Viswanathnani12/PLacement_Plus",
      dates: "January 2024 - April 2024",
      active: true,
      description:
        "Developed an intuitive and efficient platform to address missed job applications and notifications, enabling students to effectively track job applications, exam schedules, and important deadlines, while driving adoption across educational institutions.",
      technologies: [
        "Next.js",
        "Typescript",
        "Javascript",
        "Node Js",
        "Clerk",
        "Mongo DB",
        "TailwindCSS",
        "Firebase",
        "Shadcn UI",
        "Figma"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Viswanathnani12/PLacement_Plus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "placementplus.mp4",
    },
    {
      title: "Vehicle Vault",
      href: "https://github.com/Viswanathnani12/Vehicle_Vault",
      dates: "April 2023 - May 2023",
      active: true,
      description:
        "Developed a web application that enables users to input a Vehicle ID and retrieve details such as owner’s name, vehicle type, and license plate number. The application is designed to resolve parking management issues in organizations or residential areas by providing quick and efficient access to vehicle information.",
      technologies: [
        "React.js",
        "Javascript",
        "Mongo DB",
        "Node JS",
        "Express JS",
        "Figma",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Viswanathnani12/vehiclevault",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "vv.mp4",
    },

  ],

} as const;
