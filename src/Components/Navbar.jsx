import React from "react";

const Navbar = ({ name }) => {
  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between sticky top-0 z-50 border-b border-gray-800">
      <h3 className="text-2xl font-semibold text-cyan-400">{name}</h3>

      <div className="flex gap-6 text-gray-300">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;

