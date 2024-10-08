import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, School, CircleUserIcon, WrenchIcon, FolderOpenDot, PhoneCall } from "lucide-react";

export const DATA = {
  name: "Viswanath Singanamilli",
  initials: "SV",
  url: "https://dillion.io",
  location: "Kakinada,Andhra Pradhesh,India",
  locationLink: "https://www.google.com/maps/place/Kakinada",
  description:
    "A motivated software engineer with hands-on experience along with dynamic website creation and problem-solving abilities, seeking to apply technical skills as a fresher.",
  summary:
    "I'm a passionate and dedicated web developer with a Bachelor’s degree in Computer Science Engineering from Aditya Engineering College. With expertise in multiple programming languages and frameworks, I excel at building modern, responsive, and user-friendly websites and applications. My journey in development has given me a wealth of experience, from collaborating in teams to leading projects that focus on delivering impactful and innovative solutions.",
  avatarUrl: "",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
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
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
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
          href: "https://insightblendanalytics-1.onrender.com",
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

      ],
      image: "",
      video: "vv.mp4",
    },
    {
      title: "E-commerce",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],

} as const;
