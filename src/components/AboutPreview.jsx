import React from "react";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section id="about-preview" 
    className="bg-gray-50 py-20 px-6 md:px-20 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-blue-700 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About Intellect Tech Solutions
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        We specialize in providing enterprise-grade software solutions,
        transforming your business through technology and innovation. Our team
        builds systems that scale seamlessly and perform reliably across
        industries.
      </motion.p>
    </section>
  );
}
