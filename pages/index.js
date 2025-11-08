"use client";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import CertificatesSection from "../components/CertificatesSection";
import ConnectSection from "../components/ConnectSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center 
                     bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-colors duration-500">
      {/* ===== HERO SECTION ===== */}
      <HeroSection />

      {/* ===== GRADIENT DIVIDER ===== */}
      <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-70"></div>

      {/* ===== ABOUT SECTION ===== */}
      <AboutSection />

      {/* ===== SKILLS SECTION ===== */}
      <SkillsSection />

      {/* ===== PROJECTS SECTION ===== */}
      <ProjectsSection />

      {/* ===== EDUCATION SECTION ===== */}
      <EducationSection/>

      {/* ===== CERTIFICATES SECTION ===== */}
      <CertificatesSection/>

      {/* ===== CONNECT SECTION ===== */}
      <ConnectSection/>

      {/* ===== FOOTER ===== */}
      <Footer/>
      
    </main>
  );
}
