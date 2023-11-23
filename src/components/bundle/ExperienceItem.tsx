import React from 'react';
import {Timeline} from "flowbite-react";

interface ExperienceItemProps {
    time: string;
    title: string;
    body: string[];
    technologies: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({time, title, body, technologies}) => {
    return (
        <Timeline.Item id={title.replace(/\s/g, '')}>
            <Timeline.Point/>
            <Timeline.Content>
                <Timeline.Time className={"text-2xl font-main-dm-sans text-gray-400"}>
                    {time}
                </Timeline.Time>
                <Timeline.Title className={"text-2xl font-main-dm-sans !font-light text-main-baby-blue"}>
                    {title}
                </Timeline.Title>
                <ul className={"list-disc list-inside"}>
                    {body.map((text, index) => (
                        <li key={index} className={"text-xl text-left text-gray-400"}>
                            {text}
                        </li>
                    ))}
                </ul>
                <Timeline.Body className={"text-xl text-left text-gray-75 pt-3"}>
                    Technologies: {technologies}
                </Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
    );
}

export default ExperienceItem;