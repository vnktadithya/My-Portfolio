"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Career GPS",
      description:
        "Career GPS is an AI-powered Streamlit platform designed as a personal career mentor. It analyzes your current skills or uploaded resume to generate a personalized weekly roadmap toward your dream role. Integrated with RAG through Serper.dev and Mistral-7B via OpenRouter, it ensures accurate, context-aware recommendations. A visual dashboard helps track weekly goals, view completion analytics, and refine your learning journey interactively.",
      image: "/images/career_gps_3d.png",
      github: "https://github.com/vnktadithya/Career-GPS",
      tech: ["Python", "Streamlit", "Mistral-7B", "OpenRouter API", "LangChain", "Serper.dev", "SQLite3", "Matplotlib"],
    },
    {
      title: "Event Management System",
      description:
        "A Streamlit and SQLAlchemy-based event management platform built for universities. Students can explore and register for upcoming events, while organizers can create and manage events through a secure dashboard. It supports participant tracking, feedback collection, and role-based authentication using Werkzeug, ensuring a seamless experience for both participants and event coordinators.",
      image: "/images/event_mgmt.png",
      github: "https://github.com/vnktadithya/Event-Management-System",
      tech: ["Python", "Streamlit", "SQLAlchemy", "SQLite3", "Werkzeug"],
    },
    {
      title: "Fire Weather Index Prediction",
      description:
        "A machine learning regression system for predicting Fire Weather Index (FWI) across Algerian regions using meteorological features like temperature, wind speed, humidity, and rainfall. The model aids in wildfire risk assessment through interpretable insights and visualized outputs, deployed via Flask for real-time FWI predictions in a responsive and interactive web interface.",
      image: "/images/fwi_prediction.png",
      github: "https://github.com/vnktadithya/test_forest_fires",
      tech: ["Python", "Flask", "Scikit-learn", "Pandas", "Matplotlib", "HTML"],
    },
  ];

  return (
    <section className="w-full py-24 text-white relative overflow-hidden">
      {/* ===== Header with line ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center mb-20"
      >
        <h2
          className="text-4xl font-extrabold bg-clip-text text-transparent 
                     bg-gradient-to-r from-blue-400 to-cyan-400 pr-4 
                     leading-[1.25] pb-[4px] relative"
        >
          Projects
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent opacity-70"></div>
      </motion.div>

      {/* ===== Projects ===== */}
      <div className="space-y-16 overflow-hidden">
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;

          const textMotion = {
            hidden: { opacity: 0, x: isEven ? -300 : 300 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          };

          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between gap-12 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* ===== Project Image ===== */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 300 : -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="w-full md:w-[45%] flex justify-center"
              >
                <div className="w-full md:w-[45%] flex justify-center">
                <div
                  className="perspective-[1000px]"
                  onMouseMove={(e) => {
                    const container = e.currentTarget;
                    const img = container.querySelector("img");
                    const rect = container.getBoundingClientRect();

                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    const rotateX = ((y - centerY) / centerY) * -360; // reduced for natural motion
                    const rotateY = ((x - centerX) / centerX) * 360;

                    img.style.transition = "transform 0.08s ease-out";
                    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    const container = e.currentTarget;
                    const img = container.querySelector("img");

                    // ✅ Smoothly go back to neutral (shortest path, no retracing)
                    img.style.transition = "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)";
                    img.style.transform = "rotateX(0deg) rotateY(0deg)";

                    // Remove transition after it finishes
                    setTimeout(() => {
                      img.style.transition = "";
                    }, 700);
                  }}
                >
                  <img
                    src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                    alt={project.title}
                    className="rounded-lg object-contain max-w-[420px] w-full h-auto"
                    style={{
                      imageRendering: "auto",
                      transformStyle: "preserve-3d",
                      willChange: "transform",
                      transition: "transform 0.1s ease-out",
                      filter: "drop-shadow(0 0 15px rgba(56,189,248,0.4))",
                    }}
                  />
                </div>
              </div>
              </motion.div>


              {/* ===== Project Text ===== */}
              <motion.div
                variants={textMotion}
                className="w-full md:w-[50%] text-center md:text-left space-y-6"
              >
                <h3
                  className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                             bg-gradient-to-r from-blue-400 to-cyan-400 leading-[1.25] pb-[3px]"
                >
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 
                                 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <div className="pt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center px-5 py-2 rounded-xl 
                               bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium 
                               shadow-md hover:shadow-lg transition-all"
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
