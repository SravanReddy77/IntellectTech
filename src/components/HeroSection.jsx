import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import sampleVideo from "../assets/sample_Video.mp4";

export default function HeroSection() {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about-preview");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={sampleVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white px-4">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Empowering Businesses with Smart Tech
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
        >
          We build scalable, secure, and intelligent software solutions.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          Learn More
        </motion.button>

        {/* Scroll Arrow */}
        <motion.div
          className="absolute bottom-10 cursor-pointer"
          onClick={handleScroll}
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown size={30} className="text-white opacity-80 hover:opacity-100" />
        </motion.div>
      </div>
    </div>
  );
}
