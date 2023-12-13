import React, {MouseEvent, ReactNode} from "react";
import {Navbar} from "flowbite-react";
import {EmailOutlined, GitHub, LinkedIn} from "@mui/icons-material";

interface SmoothScrollLinkProps {
    to: string;
    children: ReactNode;
    className: string;
}

function SmoothScrollLink({to, children, ...rest}: Readonly<SmoothScrollLinkProps>) {
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
        <nav className={"bg-main-black rounded-b sticky top-0 z-50"} aria-label={"Main Navbar"}>
            <Navbar
                fluid={true}
                rounded={true}
                className={"!bg-main-black !text-white ml-10 mr-10 sm:ml-28 sm:mr-28 pb-7 pt-7"}
            >
                <Navbar.Brand>
                    <EmailOutlined onClick={() => window.open('mailto:arnespoprzenovic@gmail.com', '_self')}
                                   sx={{transition: 'all 0.3s ease-in-out'}}
                                   className={"text-main-baby-blue hover:text-main-blue hover:cursor-pointer"}
                                   style={{fontSize: 30}}/>
                    <GitHub onClick={() => window.open('https://github.com/apoprzenovic', '_blank')}
                            sx={{transition: 'all 0.3s ease-in-out'}}
                            className={"text-main-baby-blue hover:text-main-blue hover:cursor-pointer mx-1.5"}
                            style={{fontSize: 30}}/>
                    <LinkedIn
                        onClick={() => window.open('https://www.linkedin.com/in/arnes-poprzenovic-77b4601a5/', '_blank')}
                        sx={{transition: 'all 0.3s ease-in-out'}}
                        className={"text-main-baby-blue hover:text-main-blue hover:cursor-pointer"}
                        style={{fontSize: 30}}/>
                </Navbar.Brand>

                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <SmoothScrollLink
                        to="home"
                        className={"text-white text-xl hover:!text-main-blue transition-colors duration-300"}
                    >
                        Home
                    </SmoothScrollLink>
                    <SmoothScrollLink
                        to="about"
                        className={"text-white text-xl hover:!text-main-blue transition-colors duration-300"}
                    >
                        About
                    </SmoothScrollLink>
                    <SmoothScrollLink
                        to="experience"
                        className={"text-white text-xl hover:!text-main-blue transition-colors duration-300"}
                    >
                        Experience
                    </SmoothScrollLink>
                    <SmoothScrollLink
                        to="projects"
                        className={"text-white text-xl hover:!text-main-blue transition-colors duration-300"}
                    >
                        Projects
                    </SmoothScrollLink>
                </Navbar.Collapse>
            </Navbar>
            <hr className={"border-main-baby-blue w-11/12 rounded-2xl border-t m-auto"}/>
        </nav>
    );
}

export default NavbarComponent;
