import React from 'react';
import Skills from "./bundle/Skills";

function About() {
    const skills = ["Java", "Postgres", "Spring Boot", "Azure", "JavaScript", "React"];

    return (
        <section id={"aboutId"} className={"container w-9/12 m-auto sm:mt-41 p-0 sm:p-10 py-20"}
                 aria-label="About Section">
            <h1 className={"text-4xl font-main-questrial text-white"}>About</h1>
            <hr className={"border-gray-500 dark:border-gray-700 w-50 sm:w-80 mt-5 mb-10 sm:mb-14 rounded-3xl border-t-2"}/>
            <div className={"container flex flex-col md:flex-row"}>
                <div className={"column-1"}>
                    <img
                        alt={"Arnes Poprzenovic"}
                        src={require("../assets/images/me.jpg")}
                        className={"w-80 h-auto rounded-2xl ml-0 md:ml-3.5"}
                    />
                </div>
                <div className={"column-2 md:w-11/12 md:pl-20 sm:pr-3"}>
                    <p className={"text-xl text-left text-gray-400 mt-9 md:mt-0"}>
                        I am currently a third-year student at RIT Croatia, Zagreb, and am actively seeking
                        an
                        internship that will develop and enhance my software engineering skills. My passion
                        lies in backend and full-stack development.
                        <br/><br/>

                        While I am proficient in frontend tasks, my preference
                        leans
                        towards developing backend services and learning how to deal with large scale systems.
                        <br className={"block sm:hidden"}/> <br className={"block sm:hidden"}/>
                        Concurrently, I
                        am pursuing a Bachelor of Science degree in Web and Mobile Computing at RIT Croatia.

                        Recently, I have honed my skills in various technologies:
                    </p>
                    <Skills skills={skills}/>
                    <p className={"text-xl text-left text-gray-400"}>
                        Beside my professional pursuits, I enjoy skiing, swimming, and playing games.
                        Furthermore, I am interested in learning how to pitch tech products, their overall architecture,
                        how
                        they're set up, how to deal with a large amount of data, etc.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;