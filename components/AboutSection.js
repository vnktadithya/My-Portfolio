"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import MotionWrapper from "./MotionWrapper";

export default function AboutSection() {
  return (
    <MotionWrapper className="max-w-5xl flex flex-col md:flex-row items-center justify-center gap-10 py-24 text-left">
      {/* ABOUT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="md:w-1/2 space-y-6 text-center md:text-left"
      >
        <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          I’m a 3rd-year B.Tech student in Artificial Intelligence & Data Science at Shiv Nadar University, Chennai.
          I love building intelligent backend systems and exploring generative AI models. I focus on turning ideas
          into powerful, scalable solutions — blending creativity, data, and engineering precision.
        </p>
        <p className="text-gray-300 leading-relaxed text-lg">
          I’m currently working on AI-powered applications that combine NLP, ML pipelines, and modern APIs to deliver
          interactive, real-world systems.
        </p>
      </motion.div>

      {/* PROFILE IMAGE */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="md:w-1/2 flex justify-center"
      >
        <div className="w-[250px] h-[250px] rounded-full overflow-hidden shadow-2xl border-4 border-blue-400/40">
          <Image
            src="/images/profile.jpg"
            alt="Venkat Adithya"
            width={250}
            height={250}
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </MotionWrapper>
  );
}
