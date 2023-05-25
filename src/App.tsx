import React from 'react';
import './App.css';
import Navbar from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";

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
            <FooterComponent/>
        </div>
    );
}

export default App;
