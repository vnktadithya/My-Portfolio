"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  return (
    <MotionWrapper className="flex flex-col items-center justify-center space-y-8 h-screen">
      <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 leading-tight pb-[4px]">
        Venkat Adithya
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
        Passionate AI-ML Enthusiast & Backend Developer | Building scalable and intelligent systems.
      </p>

      {/* ===== SOCIAL ICONS ===== */}
      <div className="flex space-x-6">
        {[
          { Icon: FaGithub, href: "https://github.com/vnktadithya" },
          { Icon: FaLinkedin, href: "https://www.linkedin.com/in/venkat-adithya-gajjarapu-9310a4314/" },
          { Icon: SiLeetcode, href: "https://leetcode.com/u/vnkt_adithya/" },
          { Icon: FaTwitter, href: "https://x.com/vnktadithya" },
        ].map(({ Icon, href }, idx) => (
          <motion.a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="transition-transform"
          >
            <Icon className="w-7 h-7 text-white hover:text-blue-500 transition-colors duration-300" />
          </motion.a>
        ))}
      </div>

      {/* ===== BUTTONS ===== */}
      <div className="flex space-x-6">
        <motion.a
          href="#connect"
          className="px-6 py-3 rounded-xl border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#connect")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Contact Me
        </motion.a>


        <motion.a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Get Resume
        </motion.a>
      </div>
    </MotionWrapper>
  );
}
