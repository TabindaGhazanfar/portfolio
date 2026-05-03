import { motion } from "framer-motion";
import img1 from "../assets/Capture.JPG";
import img2 from "../assets/Capture 5.JPG";
import img3 from "../assets/Capture 6.JPG";

const projects = [
  {
    title: "EasyRent – Rental Search",
    img: img1,
    desc: "Smart rental search system with filters for category, location and pricing.",
    tech: ["React", "Tailwind", "Node"],
  },
  {
    title: "EasyRent – Map Integration",
    img: img2,
    desc: "Integrated Google Maps for location-based rental discovery and navigation.",
    tech: ["React", "Maps", "Firebase"],
  },
  {
    title: "EasyRent – User Dashboard",
    img: img3,
    desc: "User dashboard to manage listings, bookings and activity efficiently.",
    tech: ["Next.js", "Dashboard", "UI"],
  },
];

const Projects = () => {
  return (
    <section
      id="work"
      className="py-20 bg-[#f9fafb] text-gray-800 overflow-hidden"
    >

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Recent <span className="text-purple-600">Project</span>
      </h2>

      {/* SLIDER */}
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
      >

        {[...projects, ...projects].map((project, i) => (
          <div
            key={i}
            className="
            min-w-[300px] md:min-w-[350px]
            bg-purple-500/10 
            backdrop-blur-lg 
            border border-purple-500/20 
            rounded-2xl 
            overflow-hidden 
            shadow-xl
            hover:scale-105 
            hover:-translate-y-2
            hover:shadow-purple-500/40 
            transition
            "
          >

            {/* Image */}
            <div className="h-52 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="
                w-full h-full object-cover 
                transition duration-500 
                hover:scale-110 hover:brightness-110
                "
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 text-gray-800">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 mb-3">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="
                    text-xs px-2 py-1 rounded-full 
                    bg-purple-500/20 
                    text-purple-700
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}

      </motion.div>

    </section>
  );
};

export default Projects;