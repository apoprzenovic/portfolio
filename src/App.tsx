import React from 'react';
import './App.css';
import Navbar from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Home from "./components/Home";
import About from "./components/About";

function App() {
    return (
        <div>
            <div  id={"home"} />
            <Navbar/>
            <Home />
            <About />
            <div className={"h-60"}></div>
            <FooterComponent/>
        </div>
    );
}

export default App;
