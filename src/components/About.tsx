import { motion } from "framer-motion";
import { FaCode, FaServer, FaCogs } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="pt-0 pb-20 bg-[#0b1630] px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About Me
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            A brief introduction about who I am and what I do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a{" "}
              <span className="text-white font-medium">
                Sistem Informasi student
              </span>{" "}
              and a{" "}
              <span className="text-orange-400 font-medium">
                Full Stack Web Developer
              </span>{" "}
              with a strong interest in building scalable web applications and
              system-oriented solutions.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              I enjoy working across both frontend and backend, developing clean
              user interfaces, well-structured APIs, and database-driven systems
              that solve real-world problems.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Currently, I am focusing on strengthening my skills in full stack
              development, backend systems, and modern web technologies while
              continuously learning best practices in software development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="bg-[#0f1e3d] rounded-xl p-6 border border-white/10 text-center">
              <FaCode className="text-3xl text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-1">Frontend</h3>
              <p className="text-gray-400 text-sm">
                Modern UI with React, Tailwind, and responsive design
              </p>
            </div>

            <div className="bg-[#0f1e3d] rounded-xl p-6 border border-white/10 text-center">
              <FaServer className="text-3xl text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-1">Backend</h3>
              <p className="text-gray-400 text-sm">
                REST APIs, business logic, and database integration
              </p>
            </div>

            <div className="bg-[#0f1e3d] rounded-xl p-6 border border-white/10 text-center">
              <FaCogs className="text-3xl text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-1">System</h3>
              <p className="text-gray-400 text-sm">
                Scalable systems, workflows, and real-world use cases
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
