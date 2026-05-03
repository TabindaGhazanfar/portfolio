import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../assets/Capture.JPG";
import img2 from "../assets/capture 2.JPG";
import img3 from "../assets/Capture 3.JPG";
import img4 from "../assets/Capture 4.JPG";
import img5 from "../assets/Capture 5.JPG";
import img6 from "../assets/Capture 6.JPG";

const images = [img1, img2, img3, img4, img5, img6];

const ProjectDetails = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <section className="bg-white text-gray-800 py-12 px-6">

      {/* 🔥 Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 rounded-full border border-purple-400 text-purple-600 hover:bg-purple-600 hover:text-white transition"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        EasyRent – Rental Platform
      </h1>

      {/* 🔥 SLIDER */}
      <div className="max-w-4xl mx-auto mb-6 relative">

        <motion.img
          key={index}
          src={images[index]}
          alt="project"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-[400px] object-cover rounded-xl shadow-lg"
        />

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 
          bg-black/40 text-white px-3 py-2 rounded-full hover:bg-purple-600 transition"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 
          bg-black/40 text-white px-3 py-2 rounded-full hover:bg-purple-600 transition"
        >
          ›
        </button>
      </div>

      {/* 🔥 THUMBNAILS */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setIndex(i)}
            className={`w-20 h-16 object-cover rounded cursor-pointer border-2 transition ${
              index === i
                ? "border-purple-500 scale-105"
                : "border-transparent hover:scale-105"
            }`}
          />
        ))}
      </div>

      {/* 🔥 DESCRIPTION CARD */}
      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-3 text-purple-600">
          Project Details
        </h2>

        <div className="p-6 rounded-xl bg-white border border-purple-400 shadow-md">
          <p className="text-gray-700 leading-relaxed">
            EasyRent is a smart web-based rental marketplace designed to connect 
            renters and owners on a single digital platform. It allows users to 
            list items, search products, and book rentals in real time with a 
            secure and user-friendly experience.
          </p>
        </div>
      </div>

      {/* 🔥 FEATURES CARD */}
      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          Features
        </h2>

        <div className="p-6 rounded-xl bg-white border border-purple-400 shadow-md hover:shadow-purple-400/30 transition">
          <ul className="space-y-2 text-gray-700">
            <li>⭐ User Registration & Login</li>
            <li>⭐ Add & Manage Listings</li>
            <li>⭐ Advanced Search & Filters</li>
            <li>⭐ Real-time Booking System</li>
            <li>⭐ Face Verification</li>
            <li>⭐ Map Integration</li>
            <li>⭐ Secure Payments</li>
            <li>⭐ Chat & Notifications</li>
          </ul>
        </div>
      </div>

      {/* 🔥 TECH STACK */}
      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          Tech Stack
        </h2>

        <div className="p-6 rounded-xl bg-white border border-purple-400 shadow-md hover:shadow-purple-400/30 transition">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "React","Tailwind","Node","Firebase",
              "Google Maps","AI","Face API","Vite"
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProjectDetails;