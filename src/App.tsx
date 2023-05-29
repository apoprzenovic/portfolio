import React from 'react';
import './App.css';
import Navbar from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
    return (
        <div>
            <div  id={"home"} />
            <Navbar/>
            <Home />
             <div  id={"about"} />
            <About />
            <div  id={"experience"} />
            <Experience />
            <div id={"projects"} />
            <Projects />
            <FooterComponent/>
        </div>
    );
}

export default App;
