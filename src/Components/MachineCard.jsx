// src/components/MachineCard.jsx
"use client";
import { motion } from "framer-motion";

export default function MachineCard({ name, desc, img, link }) {
  return (
    <motion.a
      href={link || "#"}
      className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <div className="w-full h-56 bg-gray-100">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </motion.a>
  );
}
