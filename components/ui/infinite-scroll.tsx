import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tool-tip";
import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import {
    FaCss3Alt,
    FaGithub,
    FaHtml5,
    FaLinux,
    FaPython,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";

import {
    RiJavascriptFill,
    RiNextjsFill,
    RiReactjsLine,
    RiTailwindCssFill,
} from "react-icons/ri";
import { TbCircleLetterCFilled } from "react-icons/tb";

const logos = [
    { icon: <TbCircleLetterCFilled />, alt: "C" },
    { icon: <FaPython />, alt: "Python" },
    { icon: <RiJavascriptFill />, alt: "JavaScript" },
    { icon: <BiLogoTypescript />, alt: "TypeScript" },
    { icon: <FaHtml5 />, alt: "HTML5" },
    { icon: <FaCss3Alt />, alt: "CSS" },
    { icon: <RiTailwindCssFill />, alt: "Tailwind CSS" },
    { icon: <RiReactjsLine />, alt: "React JS" },
    { icon: <RiNextjsFill />, alt: "CSS" },
    { icon: <GrMysql />, alt: "mySQL" },
    { icon: <FaGithub />, alt: "Git and Github" },
    { icon: <FaLinux />, alt: "Linux" },
];

const InfiniteScroll = () => {
    return (
        <div className="w-3/4 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] p-10">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll text-5xl text-neutral-400">
                {logos.map((logo, index) => (
                    <li key={index} title={logo.alt}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out hover:text-white">
                                        {logo.icon}
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{logo.alt}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </li>
                ))}
            </ul>
            <ul
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll text-5xl text-neutral-400"
                aria-hidden="true"
            >
                {logos.map((logo, index) => (
                    <li key={index} title={logo.alt}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out hover:text-white">
                                        {logo.icon}
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{logo.alt}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InfiniteScroll;
