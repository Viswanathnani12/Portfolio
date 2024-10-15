import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { FaBootstrap, FaCss3, FaFigma, FaGithub, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import { PiFileCpp, PiFileC } from "react-icons/pi";
import { AiOutlinePython } from "react-icons/ai";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiClerk } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiPostgresql } from "react-icons/si";
import { SiSublimetext } from "react-icons/si";
const reviews = [
    {
        icon: <><PiFileC className="w-5 h-5" /></>,
        body: "C",
    },
    {
        icon: <><PiFileCpp className="w-5 h-5" /></>,
        body: "C++",
    },
    {
        icon: <><FaJava className="w-5 h-5" /></>,
        body: "Java",
    },
    {
        icon: <><AiOutlinePython className="w-5 h-5" /></>,
        body: "Python",
    },
    {
        icon: <><TbBrandJavascript className="w-5 h-5" /></>,
        body: "JavaScript",
    },
    {
        icon: <><TbBrandTypescript className="w-5 h-5" /></>,
        body: "TypeScript",
    },
    {
        icon: <><FaHtml5 className="w-5 h-5" /></>,
        body: "HTML",
    },
    {
        icon: <><FaCss3 className="w-5 h-5" /></>,
        body: "CSS",
    },
    {
        icon: <><RiTailwindCssFill className="w-5 h-5" /></>,
        body: "Tailwind CSS",
    },
    {
        icon: <><FaGithub className="w-5 h-5" /></>,
        body: "GitHub",
    },
    {
        icon: <><FaReact className="w-5 h-5" /></>,
        body: "React JS",
    },
    {
        icon: <><RiNextjsFill className="w-5 h-5" /></>,
        body: "Next JS",
    },
    {
        icon: <><FaNodeJs className="w-5 h-5" /></>,
        body: "Node JS",
    },
    {
        icon: <><FaBootstrap className="w-5 h-5" /></>,
        body: "BootStrap",
    },
    {
        icon: <><FaFigma className="w-5 h-5" /></>,
        body: "Figma",
    },
    {
        icon: <><SiClerk className="w-5 h-5" /></>,
        body: "Clerk",
    },
    {
        icon: <><TbBrandFramerMotion className="w-5 h-5" /></>,
        body: "Framer Motion",
    },
    {
        icon: <><GrMysql className="w-5 h-5" /></>,
        body: "My SQL",
    },
    {
        icon: <><SiMongodb className="w-5 h-5" /></>,
        body: "Mongo DB",
    },
    {
        icon: <><SiPostgresql className="w-5 h-5" /></>,
        body: "Postgresql",
    },
    {
        icon: <><VscVscode className="w-5 h-5" /></>,
        body: "Visual Studio Code",
    },
    {
        icon: <><SiSublimetext className="w-5 h-5" /></>,
        body: "Sublime Text Editor",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    icon,
    body,
}: {
    icon: any,
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-fit cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex gap-2 items-center justify-center">
                {icon}
                <blockquote className="text-md font-f2 font-semibold">{body}</blockquote>
            </div>

        </figure>
    );
};
export default function Skills() {
    return (
        <>
            <div className="relative flex h-fit w-full p-10 flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
                <Marquee pauseOnHover className="[--duration:35s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.body} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:35s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.body} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </>
    )
}