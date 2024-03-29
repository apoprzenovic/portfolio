import React from "react";
import {EmailOutlined} from "@mui/icons-material";

function Home() {
    return (
        <section id={"homeId"}
             className={"flex container w-9/12 m-auto sm:pt-56 p-0 sm:p-10 py-20 rounded"} aria-label="Home Section">
            <div className={"sm:columns-1 sm:mr-16 text-left"}>
                <h1 className={"text-white text-6xl sm:text-7xl font-main-questrial"}>
                    Welcome.
                </h1>
                <p className={"text-gray-200 mt-7 text-3xl font-main-dm-sans"}>
                    My name is <span className={"text-main-baby-blue"}>Arnes</span>, and I believe
                    there are <span className={"underline"}>10</span><sub className={"-z-10"}>(2)</sub> types of people
                    in this world :),
                    people who like programming and those who don’t.
                </p>
                <p className={"text-gray-400 mt-7 text-xl"}>
                    I’m an aspiring software engineer, currently living in Zagreb, who loves solving complex problems. I
                    have great interest in backend development, full-stack development, and have started taking an
                    interest in machine learning.
                </p>
                <button type="button"
                        className="mt-9 flex items-center text-xl font-sans text-black bg-main-baby-blue
                            hover:bg-main-blue focus:outline-none focus:ring-4 focus:ring-main-dark-blue font-semibold
                            rounded-lg p-4 transition-all duration-300"
                        onClick={() => window.open('mailto:arnespoprzenovic@gmail.com', '_self')}>
                    <EmailOutlined className={"text-black"}
                                   style={{fontSize: 22}}/>
                    <p className={"mb-1 ml-1.5"}>Get in touch!</p>
                </button>
            </div>
            <div className={"sm:column-2 hidden md:flex"}>
                <video className={"w-[800px] h-auto"} loop autoPlay muted>
                    <source src={require("../assets/animations/animation.mp4")} type="video/mp4" className={"bg-none"}/>
                </video>
            </div>
        </section>
    );
}

export default Home;