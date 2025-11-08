"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function ConnectSection() {
  return (
    <section
    id = "connect"
    className="relative w-full py-28 text-white overflow-hidden rounded-[2rem]
                bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
                ring-1 ring-slate-700/40 shadow-[0_8px_40px_rgba(0,0,0,0.7)]
                before:absolute before:inset-0 before:rounded-[2rem]
                before:p-[1px] before:bg-gradient-to-br before:from-cyan-400/20 before:to-blue-500/20 before:pointer-events-none before:-z-10"
    >


      {/* ===== Background Glow ===== */}
      <div className="absolute inset-0 flex justify-center">
        {/* ===== Top Edge Reflection for 3D Depth ===== */}
        <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-white/10 via-cyan-300/5 to-transparent opacity-[0.3] pointer-events-none rounded-t-[2rem]" />
        <div className="w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full" />
      </div>
      
      {/* ===== Decorative Side SVGs ===== */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Side Abstract Lines (more visible + refined curve) */}
        <svg
            className="absolute left-0 top-[25%] w-[350px] opacity-[0.15]"
            viewBox="0 0 300 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M20 10 C100 120 250 0 280 140 S200 420 40 490"
            stroke="url(#leftGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            />
            <defs>
            <linearGradient id="leftGrad" x1="0" y1="0" x2="300" y2="500">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            </defs>
        </svg>

        {/* Right Side Floating Dots (increased count + visibility) */}
        <svg
            className="absolute right-[3%] top-[30%] w-[420px] opacity-[0.18]"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="80" cy="80" r="4" fill="#22d3ee" />
            <circle cx="200" cy="100" r="4.5" fill="#3b82f6" />
            <circle cx="300" cy="60" r="3.5" fill="#22d3ee" />
            <circle cx="150" cy="220" r="4" fill="#22d3ee" />
            <circle cx="250" cy="180" r="3.5" fill="#3b82f6" />
            <circle cx="350" cy="240" r="3" fill="#22d3ee" />
            <circle cx="220" cy="310" r="3.5" fill="#3b82f6" />
            <circle cx="100" cy="330" r="4" fill="#22d3ee" />
            <circle cx="280" cy="350" r="2.8" fill="#3b82f6" />
        </svg>
        </div>


      {/* ===== Content ===== */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Title */}
        <motion.h2
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
            type: "spring",
            stiffness: 80,
        }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent 
                    bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 mb-8 tracking-tight"
        >
        Let’s Connect
        </motion.h2>


        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-gray-300 text-lg max-w-2xl mb-12"
        >
          Always open to collaborating, discussing ideas, or just connecting over tech. 
          Feel free to reach out through any of the platforms below!
        </motion.p>

        {/* ===== Social Icons ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <a
            href="https://github.com/vnktadithya"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full flex items-center justify-center border border-cyan-400/40 hover:border-cyan-400/80 transition-all hover:scale-110"
          >
            <FaGithub className="text-2xl text-gray-300 hover:text-cyan-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/venkat-adithya-gajjarapu-9310a4314/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full flex items-center justify-center border border-cyan-400/40 hover:border-cyan-400/80 transition-all hover:scale-110"
          >
            <FaLinkedin className="text-2xl text-gray-300 hover:text-cyan-400 transition" />
          </a>

          <a
            href="https://x.com/vnktadithya"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full flex items-center justify-center border border-cyan-400/40 hover:border-cyan-400/80 transition-all hover:scale-110"
          >
            <FaXTwitter className="text-2xl text-gray-300 hover:text-cyan-400 transition" />
          </a>

          <a
            href="mailto:vnktadithya@gmail.com"
            className="w-14 h-14 rounded-full flex items-center justify-center border border-cyan-400/40 hover:border-cyan-400/80 transition-all hover:scale-110"
          >
            <FaEnvelope className="text-2xl text-gray-300 hover:text-cyan-400 transition" />
          </a>
        </motion.div>

        {/* Divider + Bridge Text */}
        <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center mb-12"
        >
        {/* Subtle cyan divider line */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6 opacity-70"></div>

        {/* Bridge text */}
        <p className="text-gray-400 text-base tracking-wide">
            Prefer a direct message?{" "}
            <span className="text-cyan-400 font-medium">Feel free to contact me here.</span>
        </p>
        </motion.div>

        {/* ===== Contact Form ===== */}
        <motion.form
          action="https://formspree.io/f/xeopyqzk"
          method="POST"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-lg bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 rounded-2xl border border-gray-700/60 shadow-xl backdrop-blur-sm"
        >
          <div className="mb-5">
            <label className="block text-left text-gray-300 mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-lg bg-slate-800/70 border border-gray-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
          </div>

          <div className="mb-5">
            <label className="block text-left text-gray-300 mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              name="_replyto"
              required
              className="w-full p-3 rounded-lg bg-slate-800/70 border border-gray-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-gray-300 mb-2 text-sm">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-3 rounded-lg bg-slate-800/70 border border-gray-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md hover:scale-[1.03] hover:shadow-cyan-500/30 transition-transform"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
