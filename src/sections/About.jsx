import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="
      py-20 text-center
      bg-[#f9fafb] text-gray-800
      "
    >

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">
        About <span className="text-purple-600">Me</span>
      </h2>

      <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
        Hi, I’m <span className="text-purple-600 font-semibold">Tabinda Ghazanfar</span>, 
        a frontend developer with 1+ year of experience building modern,
        responsive, and user-focused web applications.
      </p>

      {/* Cards (UNCHANGED STYLE 💜) */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 px-6">

        {[
          "EasyRent – Multi-category rental platform",
          "Café system with ordering & reservations",
          "Interactive portfolio with animations & responsive UI"
        ].map((text, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, scale: 1.03 }}
            className="
            p-6 rounded-xl 
            bg-purple-500/10 
            backdrop-blur-lg 
            border border-purple-500/20 
            shadow-lg 
            hover:shadow-purple-500/30 
            transition-all duration-300
            "
          >
            <FaCheckCircle className="text-purple-500 mx-auto mb-3 text-xl" />
            <p className="text-gray-700">{text}</p>
          </motion.div>
        ))}

      </div>

      {/* Stats */}
      <div className="flex justify-center gap-10 mt-12 flex-wrap">

        {[
          { num: "1+", label: "Years" },
          { num: "3+", label: "Projects" },
          { num: "5+", label: "Tech" }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="
            px-6 py-4 rounded-xl 
            bg-purple-500/10 
            border border-purple-500/20 
            backdrop-blur-md
            "
          >
            <h3 className="text-2xl font-bold text-purple-600">
              {item.num}
            </h3>
            <p className="text-sm text-gray-500">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default About;