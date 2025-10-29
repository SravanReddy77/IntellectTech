import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isHome ? "bg-transparent text-white" : "bg-white text-gray-900 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Company Name / Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold tracking-wide ${
            isHome ? "text-white" : "text-gray-900"
          }`}
        >
          IntellectTech Solutions
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/about" className="hover:text-blue-500">
            About Us
          </Link>
          <Link to="/it-services" className="hover:text-blue-500">
            IT Services
          </Link>
          <Link to="/for-talent" className="hover:text-blue-500">
            For Talent
          </Link>
          <Link to="/who-we-serve" className="hover:text-blue-500">
            Who We Serve
          </Link>
          <Link to="/careers" className="hover:text-blue-500">
            Careers
          </Link>
          <Link to="/contact" className="hover:text-blue-500">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          {open ? (
            <X size={28} className={isHome ? "text-white" : "text-gray-900"} />
          ) : (
            <Menu size={28} className={isHome ? "text-white" : "text-gray-900"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div
          className={`md:hidden flex flex-col items-center space-y-4 pb-6 ${
            isHome ? "bg-black/70 text-white" : "bg-white text-gray-900 shadow-md"
          }`}
        >
          <Link to="/about" onClick={() => setOpen(false)}>
            About Us
          </Link>
          <Link to="/it-services" onClick={() => setOpen(false)}>
            IT Services
          </Link>
          <Link to="/for-talent" onClick={() => setOpen(false)}>
            For Talent
          </Link>
          <Link to="/who-we-serve" onClick={() => setOpen(false)}>
            Who We Serve
          </Link>
          <Link to="/careers" onClick={() => setOpen(false)}>
            Careers
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
