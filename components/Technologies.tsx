import React from "react";
import InfiniteScroll from "./ui/infinite-scroll";
import { Separator } from "./ui/separator";


const Technologies = () => {
    return (
        <main className="bg-black">
            <div className="border-1 border-neutral-800 pb-24 flex flex-col items-center justify-center">
                <h1 className="my-20 text-center text-4xl font-bold">Technologies</h1>
                <InfiniteScroll />
            </div>
        </main>
    );
};

export default Technologies;
