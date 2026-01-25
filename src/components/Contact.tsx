import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="pt-0 pb-24 bg-[#0b1630] px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Contact
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Feel free to reach out for collaboration, freelance projects, or any
            opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <a
            href="mailto:khaerulroh@gmail.com"
            className="bg-[#0f1e3d] rounded-xl p-6 text-center
                       border border-white/10 hover:border-orange-500/60
                       hover:-translate-y-1 transition"
          >
            <FaEnvelope className="text-3xl text-orange-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-1">Email</h3>
            <p className="text-gray-400 text-sm">khaerulroh@gmail.com</p>
          </a>

          <a
            href="https://github.com/khaerulroh25"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0f1e3d] rounded-xl p-6 text-center
                       border border-white/10 hover:border-orange-500/60
                       hover:-translate-y-1 transition"
          >
            <FaGithub className="text-3xl text-orange-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-1">GitHub</h3>
            <p className="text-gray-400 text-sm">github.com/khaerulroh25</p>
          </a>

          <a
            href="https://linkedin.com/in/muhammadkhaerulrohman"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0f1e3d] rounded-xl p-6 text-center
                       border border-white/10 hover:border-orange-500/60
                       hover:-translate-y-1 transition"
          >
            <FaLinkedin className="text-3xl text-orange-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-1">LinkedIn</h3>
            <p className="text-gray-400 text-sm">
              linkedin.com/in/muhammadkhaerulrohman
            </p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
