import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "IT Services", href: "/it-services" },
    { name: "Who We Serve", href: "/who-we-serve" },
    { name: "For Talent", href: "/for-talent" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Company Name */}
        <a
          href="/"
          className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
            scrolled ? "text-white" : "text-white"
          }`}
        >
          IntellectTech
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-white hover:text-gray-200"
                  : "text-white hover:text-blue-300"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes
                size={22}
                className={`${scrolled ? "text-white" : "text-white"}`}
              />
            ) : (
              <FaBars
                size={22}
                className={`${scrolled ? "text-white" : "text-white"}`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`md:hidden flex flex-col items-center space-y-4 py-6 transition-all duration-300 ${
            scrolled
              ? "bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500"
              : "bg-black bg-opacity-80"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium ${
                scrolled
                  ? "text-white hover:text-gray-200"
                  : "text-white hover:text-blue-300"
              }`}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
