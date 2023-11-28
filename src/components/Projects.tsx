import {Carousel} from 'flowbite-react';
import React from 'react';
import ProjectCard from "./bundle/ProjectCard";

function Projects() {
    return (
        <section id={"projectsId"} className={"container w-9/12 m-auto sm:mt-41 p-0 sm:p-10 py-20"} aria-label="Projects Section">
            <h1 className={"text-4xl font-main-questrial text-white"}>projects</h1>
            <hr className={"border-gray-500 dark:border-gray-700 w-50 sm:w-80 mt-5 mb-10 rounded-3xl border-t-2"}/>
            <div className={"container"}>
                <p className={"text-xl text-left text-gray-75"}>
                    A showcase of some projects I have worked on:
                </p>

                <div className={"mt-9 w-9/12 m-auto text-gray-400 hidden sm:block"}>
                    <Carousel slideInterval={7000}>
                        <figure
                            className="relative cursor-pointer transition-all duration-300">
                            <a href="https://github.com/apoprzenovic/pu-client" target="_blank" rel="noreferrer">
                                <img className="rounded-lg"
                                     src={require("../assets/images/pu-project.png")}
                                     alt="Pancake Unlimited - Project"/>
                            </a>
                            <figcaption
                                className="absolute px-4 text-lg text-black m-auto bottom-9 left-1/2 transform -translate-x-1/2">
                                <p>Pancakes Unlimited: Web App</p>
                            </figcaption>
                        </figure>
                        <figure
                            className="relative cursor-pointer transition-all duration-300">
                            <a href="https://github.com/apoprzenovic/alien-man" target="_blank" rel="noreferrer">
                                <img className="rounded-lg"
                                     src={require("../assets/images/alien-man.png")}
                                     alt="Alien Man - Project"/>
                            </a>
                            <figcaption
                                className="absolute px-4 text-lg text-white m-auto bottom-9 left-1/2 transform -translate-x-1/2">
                                <p>Alien-Man: A Sci-Fi Pac-Man</p>
                            </figcaption>
                        </figure>
                    </Carousel>
                </div>
                <hr className={"border-gray-500 dark:border-gray-700 hidden sm:block w-40 m-auto mt-5 mb-10 rounded-3xl border-t-2"}/>
                <div
                    className="mt-5 w-full sm:w-10/12 m-auto text-gray-400 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ProjectCard
                        title="Pancakes Unlimited Client"
                        description="This is an application for managing and ordering pancakes. It is built using React, a
                            JavaScript library for building user interfaces."
                        techStack="React, TypeScript, MaterialUI and Tailwind CSS"
                        githubLink="https://github.com/apoprzenovic/pu-client"
                    />
                    <ProjectCard
                        title="Pancakes Unlimited Server"
                        description="This is a backend application developed in Java, utilizing Spring Boot, and RESTful API conventions."
                        techStack="Java, Spring Boot, Azure DB, Liquibase, Docker"
                        githubLink="https://github.com/apoprzenovic/pu-server"
                    />
                    <ProjectCard title={"Alien Man"}
                                 description={"A first-year game development project that reimagines the classic Pac-Man game. It features custom design, and multiplayer."}
                                 techStack={"Java, JavaFX"}
                                 githubLink={"https://github.com/apoprzenovic/alien-man"}/>
                </div>
            </div>
        </section>
    );
}

export default Projects;