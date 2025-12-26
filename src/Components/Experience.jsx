import React from "react";

const Experience = () => {

  const experience = [
    {
      company: "ProXPC",
      role: "Technical Executive Intern",
      duration: "3 Months",
      description:
        "Worked on Artificial Intelligence & Machine Learning projects including OpenCV-based computer vision pipelines and LLM-powered chatbot systems.",
      tech: [
        "Python",
        "OpenCV",
        "LLMs",
        "Chatbots",
        "LangChain",
        "ML Pipelines"
      ]
    },

    {
      company: "ChangeLeaders Consulting",
      role: "Software Developer Intern",
      duration: "6 Months (approx.)",
      description:
        "Built RecruiterV — a production-ready recruitment platform using the MERN stack. Integrated authentication, dashboards, job workflows and deployed using Firebase (Frontend + Backend).",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase Hosting",
        "Authentication"
      ],
      link: "https://www.recruiterv.com"
    }
  ];

  return (
    <section id="experience" className="bg-black text-white py-16 px-4 md:px-8">
      <h2 className="text-3xl text-center font-semibold mb-10">
        Experience
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-8">

        {experience.map((exp, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 md:p-8 shadow-lg"
          >
            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="text-2xl font-semibold text-cyan-400 text-center md:text-left">
                {exp.role}
              </h3>

              <p className="text-gray-400 text-center md:text-right">
                {exp.duration}
              </p>
            </div>

            {/* Company */}
            <p className="mt-2 text-lg font-medium text-center md:text-left">
              {exp.company}
            </p>

            {/* Description */}
            <p className="text-gray-300 mt-3 leading-relaxed text-sm md:text-base text-center md:text-left">
              {exp.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
              {exp.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Optional Link */}
            {exp.link && (
              <div className="text-center md:text-left">
                <a
                  href={exp.link}
                  className="inline-block mt-4 text-cyan-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Platform
                </a>
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
};

export default Experience;

