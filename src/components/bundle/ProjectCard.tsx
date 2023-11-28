import React from 'react';
import {Card} from 'flowbite-react';
import {FolderOutlined} from "@mui/icons-material";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string;
    githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, techStack, githubLink}) => {
    return (
        <Card className="max-w-sm !bg-main-medium-blue !border-main-medium-blue" aria-label="Project Card">
            <div className="flex items-center">
                <div
                    className="flex-grow-0 flex-shrink-0 flex-basis-1/5 flex items-center justify-center mr-2">
                    <FolderOutlined className="text-9xl text-main-baby-blue"/>
                </div>
                <div className="flex-grow flex-shrink flex-basis-4/5">
                    <h2 className="sm:pb-0.5 text-lg sm:text-2xl font-bold tracking-tight text-white dark:text-white">
                        {title}
                    </h2>
                </div>
            </div>
            <p className="font-normal text-gray-200">
                {description}
            </p>
            <p className="font-normal text-sm text-gray-75">
                {techStack}
            </p>
            <button type="button"
                    className="flex items-center justify-center text-base font-sans text-black bg-main-baby-blue
                       hover:text-white hover:bg-main-blue focus:outline-none focus:ring-4 focus:ring-main-dark-blue
                       font-semibold rounded-lg p-3.5 pb-4 transition-all duration-300"
                    onClick={() => window.open(githubLink, '_blank')}>
                View on Github
            </button>
        </Card>
    );
}

export default ProjectCard;