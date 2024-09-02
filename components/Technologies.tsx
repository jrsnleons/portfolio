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
    FaReact,
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

const Technologies = () => {
    return (
        <main className="bg-black h-screen">
            <div className="border-1 border-neutral-800 pb-24 flex flex-col items-center justify-center">
                <h1 className="my-20 text-center text-4xl">Technologies</h1>
                <div
                    x-data="{}"
                    x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                    className="flex flex-nowrap items-center justify-center overflow-hidden text-white text-5xl w-3/4 outline p-5  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
                >
                    <div
                        x-ref="logos"
                        className="flex flex-nowrap gap-8 animate-infinite-scroll"
                    >
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out">
                                        <TbCircleLetterCFilled className="" />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>C</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out">
                                        <FaPython />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Python</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out">
                                        <RiJavascriptFill />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>JavaScript</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out">
                                        <BiLogoTypescript />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>TypeScript</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out">
                                        <FaHtml5 />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>HTML</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out">
                                        <FaCss3Alt />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>CSS</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out">
                                        <RiTailwindCssFill />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>TailwindCSS</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out">
                                        <FaReact />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>React</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out">
                                        <RiNextjsFill />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Next.js</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out">
                                        <GrMysql />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>mySQL</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out">
                                        <IoLogoFirebase />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Firebase</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out">
                                        <FaGithub />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Github</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="rounded-2xl border-2 border-neutral-800 p-4 hover:scale-105 hover:border-3 hover:border-white hover:transition hover:duration-500 ease-in-out">
                                        <FaLinux />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Linux</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Technologies;
