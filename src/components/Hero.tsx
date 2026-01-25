import { motion } from "framer-motion";

import Image from "../assets/hero.png";
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#0b1630] flex items-center px-8"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-orange-400 mb-3">Hello! My name is</p>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Muhammad Khaerul Rohman.
          </h1>

          <p className="mt-6 text-gray-400 max-w-lg">
            I am a Full Stack Web Developer and System Informasi student who
            loves building modern web applications with clean UI and scalable
            backend.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/cv-khaerul-rohman.pdf"
              download
              className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg
             hover:bg-orange-400 transition"
            >
              Download CV
            </a>

            <a
              href="https://github.com/khaerulroh25"
              target="_blank"
              className="px-6 py-3 border border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500 hover:text-black transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div
            className="absolute w-[420px] h-[420px] rounded-full right-0 md:right-12 
             top-1/2 -translate-y-1/2
             bg-[radial-gradient(circle_at_30%_30%,_#fdba74,_#f97316,_#c2410c)]"
          ></div>
          <img
            src={Image}
            alt="Khaerul"
            className="relative z-10 max-h-[520px] w-auto -translate-y-8
                drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]
                drop-shadow-[0_0_40px_rgba(249,115,22,0.45)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
