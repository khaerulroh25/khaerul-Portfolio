import { motion } from "framer-motion";
import {
  FaLaravel,
  FaGithub,
  FaExternalLinkAlt,
  FaPhp,
  FaAndroid,
} from "react-icons/fa";
import {
  SiMysql,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

import Project1 from "../assets/projects/project1.png";
import Project2 from "../assets/projects/project3.png";
import Project3 from "../assets/projects/project2.png";

const projects = [
  {
    title: "Mobile Device Management System",
    image: Project1,
    description:
      "A centralized Mobile Device Management (MDM) platform integrated with Android Management API, enabling device enrollment, policy enforcement, application management, and real-time monitoring of Android devices.",
    tech: [
      <FaPhp />,
      <SiHtml5 />,
      <SiCss3 />,
      <SiJavascript />,
      <SiMysql />,
      <FaAndroid />,
    ],
    github: "https://github.com/khaerulroh25/mdm_dashboard",
    demo: "https://rengasdengklok086.my.id/index.htm",
  },
  {
    title: "Booking Service App",
    image: Project2,
    description:
      "Online booking service application for scheduling appointments, managing services, and handling bookings through an administrative dashboard.",
    tech: [<SiTailwindcss />, <FaLaravel />, <SiMysql />],
    github: "#",
    demo: "https://barber.rengasdengklok086.my.id/",
  },
  {
    title: "Member Service App",
    image: Project3,
    description:
      "Member service application for automotive workshops with service tracking and timeline-based job progress management.",
    tech: [<SiTailwindcss />, <FaLaravel />, <SiMysql />],
    github: "#",
    demo: "https://bengkelpro.rengasdengklok086.my.id/login",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-0 pb-20 bg-[#0b1630] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projects
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Selected projects showcasing my full stack development skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0f1e3d] rounded-xl overflow-hidden
                         border border-white/10 hover:border-orange-500/60
                         transition group
                         min-h-[400px]"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover
                             group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex gap-3 text-orange-400 text-xl mb-5">
                  {project.tech.map((icon, idx) => (
                    <span key={idx}>{icon}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300
                               hover:text-white transition"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-orange-400
                               hover:text-orange-300 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
