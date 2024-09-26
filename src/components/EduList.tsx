"use client"
import { cn } from "@/lib/utils";
import { AnimatedList } from "./magicui/animated-list";
import { Book, School, UniversityIcon } from "lucide-react";

interface Item {
    name: string;
    description: string;
    icon: any;
    color: string;
    time: string;
}

let notifications = [
    {
        name: "CBSE - 10th Grade",
        description: "Subha Niketan School, Kakinada, Andhra Pradesh, Percentage: 77% ",
        time: "(2017 - 2018).",
        icon: <School />,
        color: "#00C9A7",
    },
    {
        name: "CBSE - MPC, 12th Grade",
        description: "Subha Niketan School, Kakinada, Andhra Pradesh, Percentage: 78% ",
        time: "(2019 - 2020)",
        icon: <Book/>,
        color: "#FFB800",
    },
    {
        name: "Bachelor of Technology in Computer Science Engineering",
        description: "Aditya Engineering College, Surampalem, Andhra Pradesh, CGPA: 8.25",
        time: "(2020 - 2024)",
        icon: <UniversityIcon/>,
        color: "#FF3D71",
    },
    
];

// notifications = Array.from({ length: 3 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full  cursor-pointer overflow-hidden rounded-2xl p-4",
                // animation styles
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
        >
            <div className="flex flex-row items-center gap-5">
                <div
                    className="flex size-12 items-center justify-center rounded-md"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white font-f2">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-green-600">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal dark:text-white font-f2">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};
export default function EduList() {
    return (
        <>
            <div
                className={cn(
                    "relative flex h-fit w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
                )}
            >
                <AnimatedList>
                    {notifications.map((item, idx) => (
                        <Notification {...item} key={idx} />
                    ))}
                </AnimatedList>
            </div>

        </>

    )
} 