import React from 'react';

interface SkillProps {
    skills: string[];
}

const Skills: React.FC<SkillProps> = ({skills}) => {
    return (
        <div className={"container grid grid-cols-3 sm:grid-rows-2 gap-4 sm:pl-10 mt-6 mb-6"}>
            {skills.map((skill, index) => (
                <div key={index} className={"w-full"}>
                    <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 mr-3"
                                 style={{fill: '#bedcfe'}}
                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span className={"text-main-baby-blue pb-0 sm:pb-1.5"}>{skill}</span>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Skills;