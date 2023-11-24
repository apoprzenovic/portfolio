import React from 'react';
import {Timeline} from "flowbite-react";
import ExperienceItem from "./bundle/ExperienceItem";

function Experience() {
    return (
        <div id={"experienceId"}
             className={"container w-9/12 m-auto sm:mt-41 p-0 sm:p-10 py-20"}>
            <p className={"text-4xl font-main-questrial text-white"}>experience</p>
            <hr className={"border-gray-500 dark:border-gray-700 w-50 sm:w-80 mt-5 mb-10 rounded-3xl border-t-2"}/>
            <div className={"container"}>
                <p className={"text-xl text-left text-gray-75"}>
                    An overview of my professional experiences:
                </p>
                <Timeline className={"ml-6 mt-5 -z-10"}>
                    <ExperienceItem
                        time="Jun 2023 — Sep 2023"
                        title="Software Engineer Intern at CROZ"
                        body={[
                            "Engaged in the development of an application for simulating TV watching and channel switching, utilizing React for frontend, and Spring Boot for backend to create responsive REST APIs, facilitating a seamless user experience",
                            "Applied a user interaction tracking system using Apache Kafka, which recorded channel preferences based on user viewing patterns and prompted them to subscribe to new packages, enhancing the app's functionality and engagement",
                            "Conducted thorough testing of the backend and data-streaming services using JUnit and Mockito, ensuring reliability and consistency of the application",
                            "Assisted in deploying application components using Docker and OpenShift, and managed database schema changes with Liquibase, contributing to the robust and scalable infrastructure of the project"
                        ]}
                        technologies="Postgres, Mockito, React, JUnit, OpenShift, Spring Boot, Apache Kafka, Docker, Liquibase"
                    />
                    <ExperienceItem
                        time="Sep 2022 — May 2023"
                        title="Undergraduate Teaching Assistant at RIT Croatia"
                        body={[
                            "Conveyed complex Java programming concepts and techniques through effective teaching and guidance to students, improving productivity by 8% compared to previous generations",
                            "Abridged hands-on programming exercises and guide students in comprehending intricate programming problems, showcasing strong instructional abilities by reducing the time of completion by 10 minutes, i.e., 9.1%"
                        ]}
                        technologies="Java, JavaFX, Java Swing"
                    />
                </Timeline>
            </div>
        </div>
    );
}

export default Experience;