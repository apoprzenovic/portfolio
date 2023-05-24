import React from 'react';
function About() {
    return (
        <div className={"bg-main-dark-blue container w-10/12 m-auto mt-56 p-10 py-20"} id={"about"}>
            <p className={"text-4xl font-main-questrial text-white"}>about-me</p>
            <hr className={"border-gray-500 dark:border-gray-700 w-80 mt-5 mb-8 rounded-3xl border-t-2"}/>
            <div className={"container flex"}>
                <div className={"columns-1"}>
                    <img
                        alt={"my picture"}
                        src={"images/me-cropped.jpg"}
                        className={"w-auto !h-1/2 rounded"}
                    />
                </div>
                <div className={"columns-2"}>

                </div>
            </div>
        </div>
    );
}

export default About;
