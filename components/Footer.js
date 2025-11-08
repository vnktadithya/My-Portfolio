"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="text-gray-400 py-10 text-sm text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      © {new Date().getFullYear()} Venkat Adithya. Built with Next.js × Tailwind CSS × Framer Motion.
    </motion.footer>
  );
}