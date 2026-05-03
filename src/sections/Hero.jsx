import { motion } from "framer-motion";
import { 
  FaLaptopCode, FaMobileAlt, FaRocket,
  FaLinkedin, FaEnvelope, FaGithub
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="
      min-h-screen 
      bg-gradient-to-b from-[#0a0014] via-[#120024] to-[#1a0033] 
      text-white 
      px-4 md:px-16 
      pt-28 pb-16
      "
    >

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">

        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Building fast, modern{" "}
          <span className="text-purple-400">websites</span>
          <br />
          that <span className="text-purple-500">&lt;grow&gt;</span> your business
        </h1>

        <p className="text-gray-400 mt-4 text-base leading-relaxed">
          I create clean, responsive and user-friendly web experiences 
          for startups and businesses.
        </p>

        <a
          href="#contact"
          className="
          inline-block mt-4 px-6 py-3 
          bg-purple-600 hover:bg-purple-700 
          rounded-full shadow-md hover:shadow-purple-500/40 
          transition
          "
        >
          Contact Me
        </a>

        {/* 🔥 Social Links */}
        <div className="flex justify-center gap-4 mt-5 flex-wrap">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tabinda-ghazanfar-520a63393/"
            target="_blank"
            rel="noopener noreferrer"
            className="
            w-11 h-11 flex items-center justify-center rounded-full 
            bg-white/90 text-purple-700 shadow-md 
            hover:scale-110 hover:bg-purple-600 hover:text-white 
            transition
            "
          >
            <FaLinkedin size={16} />
          </a>

          {/* Email */}
          <a
            href="mailto:tabindaghazanfar4@gmail.com"
            className="
            w-11 h-11 flex items-center justify-center rounded-full 
            bg-white/90 text-purple-700 shadow-md 
            hover:scale-110 hover:bg-purple-600 hover:text-white 
            transition
            "
          >
            <FaEnvelope size={16} />
          </a>

          {/* GitHub (replace later if needed) */}
          <a
           
            target="_blank"
            rel="noopener noreferrer"
            className="
            w-11 h-11 flex items-center justify-center rounded-full 
            bg-white/90 text-purple-700 shadow-md 
            hover:scale-110 hover:bg-purple-600 hover:text-white 
            transition
            "
          >
            <FaGithub size={16} />
          </a>

        </div>
      </div>

      {/* Cards */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">

        {[ 
          { icon: <FaLaptopCode />, title: "Clean UI Design", desc: "Modern and user-friendly interface design" },
          { icon: <FaMobileAlt />, title: "Responsive Development", desc: "Fully optimized for mobile, tablet & desktop", center: true },
          { icon: <FaRocket />, title: "Fast Performance", desc: "Optimized for speed and smooth experience" }
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className={`
              w-full max-w-sm
              min-h-[160px]
              p-6 rounded-xl text-center 
              flex flex-col items-center justify-center
              backdrop-blur-lg border shadow-lg transition-all duration-300
              ${card.center 
                ? "bg-purple-600/30 border-purple-400 md:scale-105" 
                : "bg-purple-500/20 border-purple-500/30"
              }
            `}
          >
            <div className="text-2xl mb-3 text-purple-300">
              {card.icon}
            </div>

            <h3 className="font-semibold text-lg">
              {card.title}
            </h3>

            <p className="text-sm text-gray-300 mt-1">
              {card.desc}
            </p>
          </motion.div>
        ))}

      </div>

      {/* Scroll */}
      <div className="flex justify-center mt-10">
        <a href="#about">
          <div className="
            w-10 h-10 rounded-full 
            border border-purple-400 
            flex items-center justify-center 
            animate-bounce 
            hover:bg-purple-500/20
          ">
            ↓
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;

