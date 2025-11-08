"use client";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiDjango,
  SiFastapi,
  SiStreamlit,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiMysql,
  SiRedis,
  SiPostman,
  SiTableau,
  SiPytorch,
} from "react-icons/si";
import { AiOutlineDatabase } from "react-icons/ai";

export default function SkillsSection() {
  const skills = [
    {
      title: "Languages",
      icons: [
        { icon: FaPython, name: "Python", color: "#3776AB" },
        { icon: FaJava, name: "Java", color: "#E76F00" },
        { src: "/icons/c.png", name: "C" },
        { icon: FaHtml5, name: "HTML", color: "#E34F26" },
        { icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icons: [
        { icon: SiDjango, name: "Django", color: "#092E20" },
        { icon: SiFastapi, name: "FastAPI", color: "#009688" },
        { icon: SiStreamlit, name: "Streamlit", color: "#FF4B4B" },
        { icon: SiPandas, name: "Pandas", color: "#150458" },
        { icon: SiNumpy, name: "NumPy", color: "#013243" },
        { src: "/icons/matplotlib.png", name: "Matplotlib" },
        { src: "/icons/seaborn.png", name: "Seaborn" },
        { icon: SiScikitlearn, name: "Scikit-Learn", color: "#F7931E" },
        { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
      ],
    },
    {
      title: "Database",
      icons: [
        { icon: SiMysql, name: "MySQL", color: "#4479A1" },
        { icon: AiOutlineDatabase, name: "SQLite3", color: "#003B57" },
        { icon: SiRedis, name: "Redis", color: "#D82C20" },
      ],
    },
    {
      title: "Tools & Platforms",
      icons: [
        { icon: FaGitAlt, name: "Git", color: "#F1502F" },
        { icon: FaGithub, name: "GitHub", color: "#181717" },
        { icon: SiPostman, name: "Postman", color: "#FF6C37" },
        { icon: SiTableau, name: "Tableau", color: "#E97627" },
        { src: "/icons/openrouter.png", name: "OpenRouter API" },
        { src: "/icons/gemini.png", name: "Gemini API" },
        { src: "/icons/elevenlabs.png", name: "ElevenLabs API" },
      ],
    },
    {
      title: "Other Skills",
      icons: [
        { src: "/icons/datapreprocessing.png", name: "Data Preprocessing" },
        { src: "/icons/dataviz.png", name: "Visualization" },
        { src: "/icons/machinelearning.png", name: "Machine Learning" },
        { src: "/icons/finetuning.png", name: "Fine-Tuning" },
      ],
    },
  ];

  const fadeVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="w-full py-16 rounded-3xl border border-gray-700/50 
                 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
                 shadow-xl backdrop-blur-lg transition-colors duration-700"
      variants={fadeVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      <h2 className="text-4xl font-bold text-center mb-12 
                     bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
        Technical Skills
      </h2>

      <Marquee pauseOnHover speed={25} gradient={false}>
        <div className="flex space-x-20 px-10">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center space-y-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-semibold 
                             bg-clip-text text-transparent bg-gradient-to-r 
                             from-blue-400 to-cyan-400 mb-4">
                {group.title}
              </h3>

              <div className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] 
                              flex flex-wrap justify-center items-center gap-4">
                {group.icons.map((skill, idx) => {
                  const Icon = skill.icon;
                  const sizes = [45, 48, 50, 52, 55, 58, 60];
                  const size = sizes[idx % sizes.length];
                  const floatAnim = {
                    y: [0, -8, 0],
                    transition: {
                      duration: 3 + (idx % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  };

                  return (
                    <motion.div
                      key={idx}
                      className="flex flex-col items-center"
                      animate={floatAnim}
                      whileHover={{
                        scale: 1.2,
                        filter: "drop-shadow(0 0 14px rgba(56,189,248,0.9))",
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <div
                        className="rounded-full flex items-center justify-center shadow-md 
                                   bg-gradient-to-br from-gray-800 to-gray-900 
                                   border border-gray-700/60 
                                   transition-all duration-300"
                        style={{ width: size, height: size }}
                      >
                        {Icon ? (
                          <Icon size={size / 1.8} color={skill.color} />
                        ) : (
                          <Image
                            src={skill.src}
                            alt={skill.name}
                            width={size / 1.6}
                            height={size / 1.6}
                            className="object-contain"
                          />
                        )}
                      </div>
                      <p className="text-sm mt-2 font-medium text-gray-200">
                        {skill.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </Marquee>
    </motion.section>
  );
}
