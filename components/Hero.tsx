import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import profile from "@/public/profile.jpeg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Spotlight } from "./ui/Spotlight";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useToast } from "@/components/hooks/use-toast";
import { MdEmail } from "react-icons/md";

const Hero = () => {
    const { toast } = useToast();

    const desc = [
        "Developer",
        "Video Editor",
        "Graphic Designer",
        "Sound Technician",
    ];

    const textToCopy = "jrsnleons@gmail.com";

    const handleCopy = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(textToCopy);
            toast({
                title: "Copied email successfully!",
            });
        } catch (err) {
            toast({
                title: "Error copying",
                description: (err as Error).message,
                variant: "destructive",
            });
        }
    };

    return (
        <main>
            <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.15] bg-dot-black/[0.1] relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
                <Spotlight
                    className="-top-40 left-10 md:left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="-top-10 left-full h-[80vh] w-[50vh]"
                    fill="purple"
                />
                <Spotlight
                    className="-top-28 left-80 h-[80vh] w-[50vh]"
                    fill="blue"
                />
                <CardContainer className="inter-var">
                    <CardBody className="bg-black bg-opacity-30 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="70"
                            className="w-full my-5 flex items-center justify-center"
                        >
                            <Image
                                className="flex w-80 h-80 object-cover rounded-full group-hover/card:shadow-xl "
                                width={500}
                                height={500}
                                alt="profile-img"
                                src="/profile.png"
                                loading="lazy"
                            />
                        </CardItem>
                        <CardItem
                            translateZ="50"
                            className="w-full text-center text-3xl text-white"
                        >
                            Jerson Leones
                        </CardItem>
                        <CardItem
                            translateZ="80"
                            className="w-full text-center text-neutral-700 text-3xl mt-2 dark:text-neutral-500"
                        >
                            <FlipWords
                                words={desc}
                                duration={2000}
                                className="font-black text-center "
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={50}
                                className="flex gap-3 px-4 py-2 rounded-2xl text-lg font-normal dark:text-white"
                            >
                                <a href="https://www.linkedin.com/in/jrsnleons/">
                                    <FaLinkedin className="cursor-pointer" />
                                </a>
                                <a href="https://github.com/jrsnleons">
                                    <FaGithub className="cursor-pointer" />
                                </a>
                                <button onClick={handleCopy}>
                                    <MdEmail className="cursor-pointer" />
                                </button>
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                className="px-4 py-2 rounded-xl dark:text-black text-white text-xs font-bold"
                            >
                                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10B981_0%,#064E3b_50%,#10B981_100%)]" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                        <a
                                            href="/LEONES_CV.pdf"
                                            download="LEONES_CV"
                                            onClick={() => {
                                                toast({
                                                    title: "CV pdf downloaded!",
                                                });
                                            }}
                                        >
                                            Download CV
                                        </a>
                                    </span>
                                </button>
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
        </main>
    );
};

export default Hero;
