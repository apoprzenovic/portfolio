import React from 'react';
import Skills from "./bundle/Skills";
import meImage from "../assets/images/me.jpg";

function About() {
    const skills = ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "ClickHouse", "MSSQL", "Redis", "React"];

    return (
        <section id={"aboutId"} className={"container w-9/12 m-auto sm:mt-41 p-0 sm:p-10 py-20"}
                 aria-label="About Section">
            <h1 className={"text-4xl font-main-questrial text-white"}>About</h1>
            <hr className={"border-gray-500 dark:border-gray-700 w-50 sm:w-80 mt-5 mb-10 sm:mb-14 rounded-3xl border-t-2"}/>
            <div className={"container flex flex-col md:flex-row"}>
                <div className={"column-1"}>
                    <img
                        alt={"Arnes Poprzenovic"}
                        src={meImage}
                        className={"w-80 h-auto rounded-2xl ml-0 md:ml-3.5"}
                    />
                </div>
                <div className={"column-2 md:w-11/12 md:pl-20 sm:pr-3"}>
                    <p className={"text-xl text-left text-gray-400 mt-9 md:mt-0"}>
                        I am a Software Engineer at Infobip, working on Signals, a high-throughput
                        anti-fraud platform processing over 2 billion events monthly. My passion
                        lies in backend development and distributed systems.
                        <br/><br/>

                        I graduated Summa Cum Laude (GPA: 3.91/4.00) from RIT Croatia with a
                        Bachelor of Science in Web and Mobile Computing. While I am proficient
                        in frontend tasks, my preference leans towards developing backend services
                        and building scalable systems that handle massive concurrent workloads.
                        <br className={"block sm:hidden"}/> <br className={"block sm:hidden"}/>

                        Here are some technologies I work with:
                    </p>
                    <Skills skills={skills}/>
                    <p className={"text-xl text-left text-gray-400"}>
                        Beside my professional pursuits, I enjoy skiing, swimming, and playing games.
                        Furthermore, I am interested in how to pitch tech products, their overall
                        architecture, and how to design systems that handle large amounts of data
                        at scale.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;