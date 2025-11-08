"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CertificatesSection() {
  const certificates = [
    {
      title: "Mathematics – Basics to Advanced for Data Science & GenAI",
      platform: "Udemy",
      image:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-62e8f04a-71c7-4332-93b0-83f32fcd5489.jpg",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-62e8f04a-71c7-4332-93b0-83f32fcd5489.pdf",
    },
    {
      title: "Ethical Hacking",
      platform: "NPTEL",
      image: "/certificates/ethical_hacking.png",
      link: "/certificates/ethical_hacking.pdf",
    },
  ];

  return (
    <section className="w-full py-24 text-white relative overflow-hidden">
      {/* Header */}
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
          Certifications
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent opacity-70"></div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {certificates.map((cert, idx) => (
          <motion.div
  key={idx}
  initial={{ opacity: 0, scale: 0.9, y: 40 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.25 }}
  className="relative group [perspective:1200px]"
>

            {/* flippable card container */}
            <div
              className="relative w-full h-[340px] rounded-2xl [transform-style:preserve-3d] transition-transform duration-700
                         group-hover:[transform:rotateY(180deg)]"
            >
              {/* Card frame & front/back share the same outer rounded border + shadow */}
              <div
                className="absolute inset-0 rounded-2xl border-[1px] border-transparent bg-gradient-to-br from-slate-700/60 to-slate-600/20 
                           [background-clip:padding-box,_border-box] [background-origin:border-box] 
                           before:absolute before:inset-0 before:rounded-2xl before:p-[1px] 
                           before:bg-gradient-to-br before:from-cyan-400/30 before:to-blue-500/30 before:-z-10
                           bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 shadow-xl overflow-hidden"
              />

              {/* ---------- FRONT ---------- */}
              <div
                className="absolute inset-0 [backface-visibility:hidden] flex flex-col"
                style={{ transform: "rotateY(0deg)" }}
              >
                {/* Image preview area (top ~68%) */}
                <div className="w-full h-[80%] relative bg-black/5">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(min-width: 1024px) 480px, (min-width: 640px) 420px, 360px"
                    className="object-contain p-6"
                  />
                </div>

                {/* Bottom area: title + platform aligned bottom-right */}
                <div className="h-[32%] p-6 flex items-end">
                  <div className="ml-auto text-right">
                    <h3 className="text-lg font-semibold text-white leading-tight max-w-[60ch]">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-cyan-400 mt-2">{cert.platform}</p>
                  </div>
                </div>
              </div>

              {/* ---------- BACK ---------- */}
              <div
                className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] 
                          flex flex-col items-center justify-center p-6 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0.92), rgba(17,24,39,0.9))",
                  border: "1px solid rgba(56,189,248,0.08)",
                }}
              >
                {/* Platform Logo (no glow, larger) */}
                <div className="relative w-[220px] h-[220px] flex items-center justify-center mb-10">
                  <Image
                    src={`/logos/${cert.platform.toLowerCase()}.png`}
                    alt={`${cert.platform} logo`}
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-4 rounded-2xl 
                            bg-gradient-to-r from-blue-500 to-cyan-500 
                            text-white text-lg font-semibold shadow-lg 
                            -mt-6"
                >
                  View Certificate
                </a>
              </div>
            </div>

            {/* subtle glow on hover (frame) */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                            shadow-[0_18px_50px_rgba(6,182,212,0.06)]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
