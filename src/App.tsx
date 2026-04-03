import React from 'react';
import './globals.css';
import Navbar from "./components/bundle/NavbarComponent";
import FooterComponent from "./components/bundle/FooterComponent";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
    return (
        <>
            <div id={"home"}/>
            <Navbar/>
            <Home/>
            <div id={"about"}/>
            <About/>
            <div id={"experience"}/>
            <Experience/>
            <FooterComponent/>
        </>
    );
}

export default App;