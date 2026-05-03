import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Work", id: "work" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
  ];

  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  // 🔥 AUTO ACTIVE ON SCROLL (fixed)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work", "story", "skills"];

      let current = "";

      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (element) {
          const rect = element.getBoundingClientRect();

          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            current = sec;
          }
        }
      });

      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full flex justify-center mt-4 z-50">
      <div className="bg-white/5 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-2 shadow-lg border border-white/10">

        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 
              ${
                active === item.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-black shadow-md"
                  : "text-gray-300 hover:text-white"
              }`}
          >
            {item.name}
          </button>
        ))}

      </div>
    </nav>
  );
};

export default Navbar;