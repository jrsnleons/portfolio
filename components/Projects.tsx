import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

import Image from "next/image";

const items = [
    {
        title: "Instant Chat",
        description: "A simple public chatting web application",
        badge: ["React", "Tailwind", "JavaScript"],
        url: "/j-instant.png",
        gitlink: "https://github.com/jrsnleons/instant-chat",
        applink: "https://j-instant-chat.vercel.app",
    },
    {
        title: "yap",
        description: "A simple private and group chatting web application",
        badge: ["React", "Tailwind", "Firebase"],
        url: "/yap.png",
        gitlink: "https://github.com/jrsnleons/reactjs-chat",
        applink: "https://yap.jjleo.vercel.app",
    },
    {
        title: "proCaptivity",
        description: "All in one tool for productivity android app",
        badge: ["Xamarin", "C#"],
        url: "/procaptivity-alt.jpg",
        gitlink: "https://github.com/jrsnleons/proCaptivity",
    },
    {
        title: "portfolio",
        description: "A website dedicated to show my skills and works",
        badge: ["Next", "React", "Tailwind", "framer", "shadcn", "acceternity"],
        url: "/portfolio.png",
        gitlink: "https://github.com/jrsnleons/portfolio",
        applink: "",
    },
    {
        title: "Cold Brew Coffee",
        description: "An online coffee shop website",
        badge: ["React", "Node", "SQL"],
        url: "/Coldbrew.png",
        gitlink: "https://github.com/jrsnleons/Coldbrew",
    },
];

export default function Projects() {
    return (
        <main className="bg-black py-10 ">
            <h1 className="mb-10 text-center text-4xl font-bold ">Projects</h1>
            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={
                            <div className="w-full h-80 overflow-hidden rounded-md blur-xs hover:blur-none ease-in-out transition">
                                <Image
                                    src={item.url}
                                    alt={item.title}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-cover hover:scale-105 transition ease-in-out duration-300"
                                />
                            </div>
                        }
                        badge={item.badge}
                        gitlink={item.gitlink}
                        applink={item.applink}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </main>
    );
}
