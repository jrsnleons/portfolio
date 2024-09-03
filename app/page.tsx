import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Image from "next/image";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10px ">
            <div className="w-full">
                <Hero></Hero>
            </div>
            <div className="w-full">
                <Technologies></Technologies>
            </div>
            <div className="w-full">
                <Projects></Projects>
            </div>
        </main>
    );
}
