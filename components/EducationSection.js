"use client";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

export default function EducationSection() {
  const education = [
    {
      icon: <FaUniversity className="text-cyan-400 text-3xl" />,
      title: "B.Tech in AI & Data Science",
      institution: "Shiv Nadar University, Chennai",
      duration: "2023 – Present",
    },
    {
      icon: <FaSchool className="text-cyan-400 text-3xl" />,
      title: "Higher Secondary Education",
      institution: "Resonance Junior College, Hyderabad",
      duration: "2021 – 2023",
    },
    {
      icon: <GiBookshelf className="text-cyan-400 text-3xl" />,
      title: "Secondary School Education",
      institution: "C.V.R Memorial School, Anantapur",
      duration: "2011 – 2021",
    },
  ];

  return (
    <section id="education" className="w-full py-24 text-white relative">
      {/* ===== Header (same as Projects) ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-end mb-20"
      >
        <div className="flex-1 h-[2px] bg-gradient-to-l from-cyan-400 to-transparent opacity-70"></div>
        <h2 className="text-4xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-cyan-400 pl-4">
          Education
        </h2>
      </motion.div>

      {/* ===== Education Cards (Left aligned now) ===== */}
      <div className="space-y-10 pl-[10%] md:w-[55%]">
        {education.map((edu, index) => (
          <MotionWrapper key={index}>
            <motion.div
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 35px rgba(56,189,248,0.5)",
              }}
              transition={{ duration: 0, ease: "easeOut" }}
              className="flex items-start gap-6 p-6 rounded-2xl border border-gray-700/60 
                         bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 
                         shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
            >
              <div className="flex-shrink-0">{edu.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-cyan-300 mb-1">
                  {edu.title}
                </h3>
                <p className="text-gray-300 mb-1">{edu.institution}</p>
                <p className="text-gray-400 text-sm">{edu.duration}</p>
              </div>
            </motion.div>
          </MotionWrapper>
        ))}
      </div>

      {/* ===== Floating Cap (Adjusted for Centered Look) ===== */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[45%] right-[10%] -translate-y-1/2 
                   hidden md:flex justify-center items-center 
                   p-12 rounded-full bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-transparent 
                   border border-cyan-400/30 shadow-[0_0_35px_rgba(56,189,248,0.35)]"
      >
        <FaGraduationCap className="text-cyan-400 text-[8rem] drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]" />
      </motion.div>
    </section>
  );
}
