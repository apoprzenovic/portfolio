import React from 'react';
import {Timeline} from "flowbite-react";
import ExperienceItem from "./bundle/ExperienceItem";

function Experience() {
    return (
        <section id={"experienceId"}
             className={"container w-9/12 m-auto sm:mt-41 p-0 sm:p-10 py-20"} aria-label="Experience Section">
            <h1 className={"text-4xl font-main-questrial text-white"}>Experience</h1>
            <hr className={"border-gray-500 dark:border-gray-700 w-50 sm:w-80 mt-5 mb-10 rounded-3xl border-t-2"}/>
            <div className={"container"}>
                <p className={"text-xl text-left text-gray-75"}>
                    An overview of my professional experiences:
                </p>
                <Timeline className={"ml-6 mt-5 -z-10"}>
                    <ExperienceItem
                        time="Sep 2024 - Present"
                        title="Software Engineer at Infobip"
                        body={[
                            "Key contributor to Infobip's Signals product, a high-throughput anti-fraud platform processing ~70 million daily events (2B+ monthly) to combat artificially inflated traffic (AIT) for major global telecoms",
                            "Engineer backend solutions with Spring Boot, emphasizing synchronization across instances to prevent data duplication, ensuring efficient operation at scale for clients such as major global telecoms and Fortune 500 companies",
                            "Architected a Proof of Concept (PoC) migrating analytical data aggregation from PostgreSQL to ClickHouse, shifting from hourly batching to real-time ingestion; reduced analytical query execution time from minutes to milliseconds",
                            "Redesigned the internal SPD detection service from a single-instance Java RMI setup to a distributed, fault-tolerant architecture using Apache Kafka; deployed 4 synchronized instances (2 active, 2 redundant failovers) to eliminate single points of failure",
                            "Optimize complex data models across sharded PostgreSQL and MSSQL databases, ensuring data consistency and synchronization across distributed instances while handling massive concurrent request volumes"
                        ]}
                        technologies="Spring Boot, Java RMI, JUnit, Apache Kafka, Flyway, PostgreSQL, MSSQL, ClickHouse, NATS JetStream"
                    />
                    <ExperienceItem
                        time="Jun 2024 - Aug 2024"
                        title="Software Engineer Intern at Infobip"
                        body={[
                            "Honoured as #1 Software Engineering Intern among 34 highly skilled engineers from Croatia, Bosnia & Herzegovina, Poland, and Slovakia for the Summer 2024 internship",
                            "Assisted with initial technical guidance of 4 interns whilst building a high-volume message scheduler for Mobile Network Operators (MNOs); the tool is now maintained as an internal product for ensuring timely message delivery",
                            "Led sprint plannings and retrospectives to define requirements, set priorities, and establish project timelines, driving efficient and goal-oriented development cycles",
                            "Conducted code reviews and collaborated closely with team members to enhance code quality and performance, contributing to the long-term maintainability of the scheduler system"
                        ]}
                        technologies="Spring Boot, Java RMI, JUnit, Apache Kafka, Flyway, PostgreSQL, MSSQL, ClickHouse, NATS JetStream"
                    />
                    <ExperienceItem
                        time="Jun 2023 - Sep 2023"
                        title="Software Engineer Intern at CROZ"
                        body={[
                            "Engaged in the development of an application for user activity tracking, utilizing React for frontend, and Spring Boot for backend to create responsive REST APIs, facilitating a seamless user experience",
                            "Implemented a user interaction tracking system using Apache Kafka, which recorded channel preferences based on user viewing patterns and prompted them to subscribe to new packages, enhancing the app's functionality and engagement",
                            "Established a robust infrastructure by deploying application components with Docker and OpenShift and managing database schema changes with Liquibase to ensure smooth CI/CD pipelines"
                        ]}
                        technologies="Spring Boot, PostgreSQL, Mockito, React, JUnit, OpenShift, Apache Kafka, Docker, Liquibase"
                    />
                    <ExperienceItem
                        time="Sep 2022 - May 2023"
                        title="Undergraduate Teaching Assistant at RIT Croatia"
                        body={[
                            "Conveyed complex Java programming concepts and techniques through effective teaching and guidance to students, improving productivity by 8% compared to previous generations",
                            "Abridged hands-on programming exercises and guide students in comprehending intricate programming problems, showcasing strong instructional abilities by reducing the time of completion by 10 minutes, i.e., 9.1%"
                        ]}
                        technologies="Java, JavaFX, Java Swing"
                    />
                </Timeline>
            </div>
        </section>
    );
}

export default Experience;