
           
                  import React from "react";

const Hero = () => {
  return (
    <section className="bg-black text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold">
        Full-Stack Developer & AI/ML Enthusiast
      </h1>

      <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
        I work with MERN, LangChain, LLMs, Firebase & Scikit-Learn to build 
        real-world intelligent systems and scalable web applications.
      </p>

      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <a href="/Utkarsh_Savarn_Resume.pdf" 
           className="px-6 py-3 bg-cyan-500 rounded-xl hover:bg-cyan-400 duration-200">
          Download Resume
        </a>
        <a href="mailto:savarnutkarsh@gmail.com" 
           className="px-6 py-3 border rounded-xl hover:bg-white hover:text-black duration-200">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
