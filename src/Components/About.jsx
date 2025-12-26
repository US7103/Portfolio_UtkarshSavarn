const About = () => { 
  return (
    <section id="about" className="bg-black text-white py-16 px-6">
      
      <div 
        className="max-w-4xl mx-auto 
                   bg-zinc-900 border border-zinc-700 
                   rounded-2xl p-8 
                   shadow-lg 
                   hover:shadow-cyan-900/20 
                   transition"
      >
        <h2 className="text-3xl font-semibold text-center md:text-left">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed mt-4 text-base md:text-lg">
          Hi, I'm <b className="text-white">Utkarsh Savarn</b>, a final-year
          B.Tech IT student at AKGEC Ghaziabad. I love building intelligent
          systems and modern web applications using the MERN stack, Python, and
          AI/ML technologies.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4 text-base md:text-lg">
          I’m actively exploring Large Language Models, RAG pipelines, and
          production-grade deployment — with a strong focus on solving
          real-world problems with clean engineering & scalable design.
        </p>
      </div>
    </section>
  );
};

export default About;
