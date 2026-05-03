import { motion } from "framer-motion";

import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub 
} from "react-icons/fa";

import { 
  SiTailwindcss, SiFirebase, SiVercel, SiNodedotjs 
} from "react-icons/si";

const Skills = () => {

  const skills = [
    {
      title: "Frontend",
      data: [
        { name: "React", icon: <FaReact />, desc: "Dynamic UI apps" },
        { name: "JavaScript", icon: <FaJs />, desc: "ES6+, APIs" },
        { name: "Tailwind", icon: <SiTailwindcss />, desc: "UI Design" },
        { name: "HTML", icon: <FaHtml5 />, desc: "Structure" },
        { name: "CSS", icon: <FaCss3Alt />, desc: "Layouts" },
      ],
    },
    {
      title: "Backend",
      data: [
        { name: "Node.js", icon: <SiNodedotjs />, desc: "Backend" },
        { name: "Firebase", icon: <SiFirebase />, desc: "Auth/DB" },
      ],
    },
    {
      title: "Tools",
      data: [
        { name: "Git", icon: <FaGitAlt />, desc: "Version Control" },
        { name: "GitHub", icon: <FaGithub />, desc: "Hosting" },
        { name: "Vercel", icon: <SiVercel />, desc: "Deploy" },
      ],
    },
  ];

  return (
  <section
  id="skills"
  className="
  py-20 text-white 
  bg-gradient-to-b 
  from-[#0a0014] via-[#120024] to-[#1a0033]
"
>

  {/* HEADING */}
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-4xl font-bold text-center mb-16"
  >
    My <span className="text-purple-400">Skills</span>
  </motion.h2>

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {skills.map((section, sIndex) => (
        <motion.div
          key={sIndex}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: sIndex * 0.2 }}
          className="
          relative 
          bg-purple-500/10 
          backdrop-blur-lg 
          border border-purple-500/20 
          rounded-2xl 
          p-6 
          shadow-lg 
          hover:shadow-purple-500/30 
          transition-all duration-300
          "
        >

          {/* Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>

          <h3 className="text-xl font-semibold mb-6 text-purple-300">
            {section.title}
          </h3>

          <div className="grid grid-cols-2 gap-4">

            {section.data.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="
                flex items-center gap-3 
                bg-purple-500/5 
                p-3 
                rounded-xl 
                border border-purple-500/10 
                hover:border-purple-400 
                transition
                "
              >

                <div className="text-2xl text-purple-400">
                  {skill.icon}
                </div>

                <div>
                  <h4 className="text-sm font-semibold">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {skill.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>
   
  );
};

export default Skills;