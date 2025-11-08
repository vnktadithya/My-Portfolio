"use client";
import { motion } from "framer-motion";

export default function MotionWrapper({ children, className }) {
  const fadeVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={className}
      variants={fadeVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }} // 👈 re-triggers every scroll
    >
      {children}
    </motion.div>
  );
}
