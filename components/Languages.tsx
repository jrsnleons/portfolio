import React, { useEffect, useState } from "react";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaGithubSquare, FaPython } from "react-icons/fa";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { TbCircleLetterC, TbCircleLetterCFilled, TbSql } from "react-icons/tb";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tool-tip";

const Languages = () => {
    return (
        <main>
            <div className="w-full h-screen items-center justify-center flex-nowrap bg-black">
                <h1 className="my-20 text-center text-4xl">Technologies</h1>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>Hover</TooltipTrigger>
                            <TooltipContent>
                                <div className="rounded-2xl border-2 border-neutral-800 p-4">
                                    <RiReactjsFill className="text-4xl text-white" />
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <div className="rounded-2xl border-2 border-neutral-800 p-4">
                        <FaGithubSquare className="text-4xl text-white" />
                    </div>
                    <div className="rounded-2xl border-2 border-neutral-800 p-4">
                        <TbSql className="text-4xl text-white" />
                    </div>
                    <div className="rounded-2xl border-2 border-neutral-800 p-4">
                        <TbCircleLetterCFilled className="text-4xl text-white" />
                    </div>
                    <div className="rounded-2xl border-2 border-neutral-800 p-4">
                        <FaPython className="text-4xl text-white" />
                    </div>
                    <div className="rounded-2xl border-2 border-neutral-800 p-4">
                        <BiLogoTypescript className="text-4xl text-white" />
                    </div>
                    <div className="rounded-2xl border-2 border-neutral-800 p-4">
                        <RiJavascriptFill className="text-4xl text-white" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Languages;
