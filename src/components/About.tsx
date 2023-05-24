import React from 'react';

function About() {
    return (
        <div className={"container w-9/12 m-auto mt-41 p-10 py-20"} id={"about"}>
            <p className={"text-4xl font-main-questrial text-white"}>about-me</p>
            <hr className={"border-gray-500 dark:border-gray-700 w-80 mt-5 mb-20 rounded-3xl border-t-2"}/>
            <div className={"container flex"}>
                <div className={"column-1"}>
                    <img
                        alt={"my picture"}
                        src={"images/me3.jpg"}
                        className={"w-80 h-auto rounded-2xl hidden md:block ml-3.5"}
                    />
                </div>
                <div className={"column-2 w-11/12 pl-20 pr-3"}>
                    <p className={"text-xl text-justify text-gray-500"}>
                        I have recently completed my sophomore year at RIT Croatia, Zagreb, and I'm actively seeking an
                        internship opportunity that will refine and enhance my software engineering skills. My passion
                        lies
                        in backend and full-stack development.
                        <br/> <br/>

                        While I am proficient in frontend tasks, my preference
                        leans
                        towards working with algorithms and various backend development intricacies.
                        Concurrently, I
                        am pursuing a Bachelor of Science degree in Web and Mobile Computing at RIT Croatia.

                        Recently, I have honed my skills in various technologies:

                        <div className={"container flex pl-10  mt-6 mb-6"}>
                            <div className={"w-1/3"}>
                                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" style={{ fill: '#bedcfe' }}
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        <span className={"text-main-baby-blue"}>Java</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" style={{ fill: '#bedcfe' }}
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        <span className={"text-main-baby-blue"}>C#</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={"w-1/3"}>
                                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" style={{ fill: '#bedcfe' }}
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        <span className={"text-main-baby-blue"}>Spring</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" style={{ fill: '#bedcfe' }}
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        <span className={"text-main-baby-blue"}>Azure</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={"w-1/3"}>
                                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" style={{ fill: '#bedcfe' }}
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        <span className={"text-main-baby-blue"}>JavaScript ES6+</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" style={{ fill: '#bedcfe' }}
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        <span className={"text-main-baby-blue"}>React</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        Beside my professional pursuits, I enjoy skiing, swimming, and playing games.
                        Furthermore, I am interested in the development of Artificial Intelligence.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
