const Skills = () => {
  const skills = [
    "React / Next.js",
    "Node.js / Express",
    "MongoDB / SQL",
    "LangChain",
    "LLMs (RAG, Chatbots)",
    "Python / Scikit-Learn",
    "OpenCV",
    "Firebase & Auth",
    "REST APIs",
    "Hosting (Vercel/Render/Railway)"
  ];

  return (
    <section id="skills" className="bg-black text-white py-16 px-8">
      <h2 className="text-3xl text-center font-semibold mb-8">Tech Stack</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {skills.map((s, i) => (
          <div 
            key={i}
            className="bg-zinc-800 p-4 rounded-xl text-center border border-zinc-700"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
