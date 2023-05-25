import React, { MouseEvent, ReactNode} from "react";
import {Navbar} from "flowbite-react";

interface SmoothScrollLinkProps {
    to: string;
    children: ReactNode;
    className: string;
}

function SmoothScrollLink({to, children, ...rest}: SmoothScrollLinkProps) {
    const handleClick = (event: MouseEvent) => {
        event.preventDefault();
        const element = document.getElementById(to);
        element?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <a href={"#" + to} onClick={handleClick} {...rest}>
            {children}
        </a>
    );
}

function NavbarComponent() {
    return (
        <div className={"bg-main-black rounded-b sticky top-0"}>
            <Navbar
                fluid={true}
                rounded={true}
                className={"!bg-main-black !text-white ml-28 mr-28 pb-7 pt-7 z-50"}
            >
                <Navbar.Brand>
                    <img
                        alt={"mail"}
                        src={"images/mail.png"}
                        className={"w-6 hover:cursor-pointer"}
                        onClick={() => window.open('mailto:arnespoprzenovic@gmail.com', '_blank')}
                    />
                    <img
                        alt={"github"}
                        src={"images/github-logo.png"}
                        className={"w-6 h-auto ml-3 mr-3 hover:cursor-pointer"}
                        onClick={() => window.open('https://github.com/apoprzenovic', '_blank')}
                    />
                    <img
                        alt={"linkedin"}
                        src={"images/linkedin.png"}
                        className={"w-6 hover:cursor-pointer"}
                        onClick={() => window.open('https://www.linkedin.com/in/arnes-poprzenovic-77b4601a5/', '_blank')}
                    />
                </Navbar.Brand>

                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <SmoothScrollLink
                        to="home"
                        className={"text-white text-xl hover:!text-main-blue transition-colors duration-300"}
                    >
                        home
                    </SmoothScrollLink>
                    <SmoothScrollLink
                        to="about"
                        className={"text-white text-xl hover:!text-main-blue transition-colors duration-300"}
                    >
                        about-me
                    </SmoothScrollLink>
                    <SmoothScrollLink
                        to="experience"
                        className={"text-white text-xl hover:!text-main-blue transition-colors duration-300"}
                    >
                        experience
                    </SmoothScrollLink>
                    <SmoothScrollLink
                        to="projects"
                        className={"text-white text-xl hover:!text-main-blue transition-colors duration-300"}
                    >
                        projects
                    </SmoothScrollLink>
                </Navbar.Collapse>
            </Navbar>
            <hr className={"border-main-baby-blue w-11/12 rounded-2xl border-t m-auto"}/>
        </div>
    );
}

export default NavbarComponent;
