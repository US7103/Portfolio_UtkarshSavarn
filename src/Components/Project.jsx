import React from "react";

const Projects = () => {

  const projects = [
    {
      title: "Employee Task Managing App",
      desc: "Task tracking system with authentication, role-based access and dashboard — built using MERN.",
      github: "https://github.com/US7103/emp_mang_sys",
      live: "https://your-live-link.com"
    },
    {
      title: "Food Ordering App",
      desc: "Restaurant food ordering platform with cart, payment simulation and order tracking.",
      github: "https://github.com/US7103/restaurant_food",
      live: null
    },
    {
      title: "Chhath Puja Guidelines App",
      desc: "Informational application that helps users access verified guidelines with a clean UI.",
      github: "https://github.com/US7103/chhathpuja",
      live: null
    },
    {
      title: "AI Chatbot (RAG + LangChain)",
      desc: "LLM-powered chatbot capable of context retrieval and conversation memory.",
      github: "https://github.com/US7103/your-chatbot",
      live: null
    }
  ];

  return (
    <section id="projects" className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl text-center font-semibold mb-10">
        Projects
      </h2>

      {/* Responsive Grid */}
      <div className="max-w-6xl mx-auto grid gap-8
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3">

        {projects.map((p, i) => (
          <div 
            key={i}
            className="bg-zinc-900 border border-zinc-700 
                       rounded-2xl p-6 shadow-lg 
                       hover:border-cyan-500 
                       hover:shadow-cyan-900/30 
                       transition"
          >
            <h3 className="text-xl font-semibold text-cyan-400">
              {p.title}
            </h3>

            <p className="text-gray-300 mt-3 leading-relaxed">
              {p.desc}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              <a 
                href={p.github}
                className="px-4 py-2 bg-cyan-500 
                           rounded-lg hover:bg-cyan-400 
                           transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>

              {p.live && (
                <a 
                  href={p.live}
                  className="px-4 py-2 border rounded-lg 
                             hover:bg-white hover:text-black 
                             transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;
