import {useState} from "react";

function Home() {

    const [imageSrc, setImageSrc] = useState("images/mail.png");

    return (

        <div className={"flex container w-9/12 m-auto pt-56 p-10 py-20 rounded"}>
            <div className={"columns-1 mr-16 text-justify"}>
                <p className={"text-white text-7xl font-main-questrial"}>
                    Welcome.
                </p>
                <p className={"text-gray-400 mt-7 text-3xl font-main-dm-sans"}>
                    My name is <span className={"text-main-baby-blue"}>Arnes</span>, and I believe there
                    is <span>10<sub className={"-z-10"}>(2)</sub></span> types of people in this world :), people who
                    like
                    programming
                    and
                    those who don’t.
                </p>
                <p className={"text-gray-500 mt-7 text-xl"}>
                    I’m an aspiring software engineer from Zagreb and love solving complex problems. I have great
                    interest in backend development, full-stack development and have started taking an interest in
                    machine learning.
                </p>
                <a href="mailto:arnespoprzenovic@gmail.com">
                    <button type="button"
                            className="mt-9 flex items-center text-3xl font-sans text-black bg-main-baby-blue hover:bg-main-blue focus:outline-none focus:ring-4 focus:ring-main-dark-blue font-semibold rounded-lg px-7 pt-5 pb-6"
                            onMouseEnter={() => setImageSrc("images/mail-black.png")}
                            onMouseLeave={() => setImageSrc("images/mail.png")}>
                        <img
                            alt={"mail icon"}
                            src={imageSrc}
                            className={"h-auto w-5 mr-2 mt-1"}
                        />
                        Hit me up!
                    </button>
                </a>
            </div>
            <div className={"column-2 hidden md:flex"}>
                <video className={"w-[800px] h-auto"} loop autoPlay muted>
                    <source src="animations/animation.mp4" type="video/mp4" className={"bg-none"}/>
                </video>
            </div>

        </div>
    );
}

export default Home;
