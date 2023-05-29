import React from 'react';
import {Timeline} from "flowbite-react";

function Experience() {
    return (
        <div className={"container w-9/12 m-auto mt-41 p-10 py-20"}>
            <p className={"text-4xl font-main-questrial text-white"}>experience</p>
            <hr className={"border-gray-500 dark:border-gray-700 w-80 mt-5 mb-16 rounded-3xl border-t-2"}/>
            <div className={"container"}>
                <p className={"text-xl text-justify text-gray-500"}>
                    An overview of my professional experiences:
                </p>
                <Timeline className={"ml-6 mt-5 -z-10"}>

                    <Timeline.Item id={"UTA-RITCROATIA"}>
                        <Timeline.Point/>
                        <Timeline.Content>
                            <Timeline.Time className={"text-2xl text-gray-400"}>
                                Sep 2022 — May 2023
                            </Timeline.Time>
                            <Timeline.Title className={"text-2xl font-main-questrial text-main-baby-blue"}>
                                Undergraduate Teaching Assistant at RIT Croatia
                            </Timeline.Title>
                            <Timeline.Body className={"text-xl text-justify text-gray-500"}>
                                Conveyed complex Java programming concepts and techniques through effective teaching and
                                guidance to students, improving productivity by 8% compared to previous generations
                            </Timeline.Body>
                            <Timeline.Body className={"text-xl text-justify text-gray-500"}>
                                Abridged hands-on programming exercises and guide students in comprehending intricate
                                programming problems, showcasing strong instructional abilities by reducing the time of
                                completion by 10 minutes, i.e., 9.1%
                            </Timeline.Body>
                            <Timeline.Body className={"text-xl text-justify text-gray-600"}>
                                Technologies: Java, JavaFX, Java Swing
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>

                </Timeline>
            </div>

        </div>
    );
}

export default Experience;
