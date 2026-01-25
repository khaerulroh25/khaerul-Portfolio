import { motion } from "framer-motion";
type Skill = {
  name: string;
  icon: React.ReactNode;
};
type SkillCardProps = {
  title: string;
  skills: Skill[];
};

import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPhp,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiNextdotjs,
  SiExpress,
  SiPostman,
  SiGithubactions,
} from "react-icons/si";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="pt-0 pb-20 bg-[#0b1630] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Tools and technologies I use to build full stack web applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <SkillCard
            title="Frontend"
            skills={[
              { name: "React JS", icon: <FaReact /> },
              { name: "Next.js", icon: <SiNextdotjs /> },
              { name: "HTML", icon: <FaHtml5 /> },
              { name: "CSS", icon: <FaCss3Alt /> },
              { name: "JavaScript", icon: <SiJavascript /> },
              { name: "Tailwind", icon: <SiTailwindcss /> },
              { name: "Bootstrap", icon: <SiBootstrap /> },
            ]}
          />

          <SkillCard
            title="Backend"
            skills={[
              { name: "Node.js", icon: <FaNodeJs /> },
              { name: "Express.js", icon: <SiExpress /> },
              { name: "Laravel", icon: <FaLaravel /> },
              { name: "PHP", icon: <FaPhp /> },
            ]}
          />

          <SkillCard
            title="Database & API"
            skills={[
              { name: "MySQL", icon: <SiMysql /> },
              { name: "REST API", icon: <SiPostman /> },
            ]}
          />

          <SkillCard
            title="Tools & DevOps"
            skills={[
              { name: "Git", icon: <FaGitAlt /> },
              { name: "CI / CD", icon: <SiGithubactions /> },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <motion.div
      variants={item}
      className="bg-[#0f1e3d] rounded-xl p-6 border border-white/10
                 hover:border-orange-500/60 hover:-translate-y-1
                 transition duration-300"
    >
      <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>

      <ul className="grid grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-gray-300
                       hover:text-orange-400 transition"
          >
            <span className="text-xl text-orange-400">{skill.icon}</span>
            <span className="text-sm">{skill.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
