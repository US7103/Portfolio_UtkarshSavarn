import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Project from "./Components/Project";
import Experience from "./Components/Experience";

const user = "Utkarsh Savarn";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      
      <Navbar name={user} />

      <main className="flex-grow">
        <Hero />
        <Skills />
        <Experience/>
        <Project/>
        <About/>
      </main>

      <Footer />

    </div>
  );
};

export default App;

