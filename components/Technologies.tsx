import React from "react";
import InfiniteScroll from "./ui/infinite-scroll";


const Technologies = () => {
    return (
        <main className="bg-black h-screen">
            <div className="border-1 border-neutral-800 pb-24 flex flex-col items-center justify-center">
                <h1 className="my-20 text-center text-4xl">Languages & Technologies</h1>
                <InfiniteScroll />
            </div>
        </main>
    );
};

export default Technologies;
