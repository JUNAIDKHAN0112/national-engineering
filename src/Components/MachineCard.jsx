// src/Components/MachineCard.jsx
"use client";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Arrow } from "./UI";

export default function MachineCard({
  id,
  name,
  desc,
  summary,
  img,
  link,
  slug,
  category = "Machinery",
  materials = [],
  features = [],
}) {
  const targetLink = link || (slug ? `/${slug}` : `/quote?machine=${encodeURIComponent(name || "")}`);
  const quoteLink = `/quote?machine=${encodeURIComponent(name || "")}`;
  const displayId = id ? `#${String(id).padStart(2, "0")}` : null;
  const imageSrc = img || "/Images/destoner.jpg";
  const displayDesc = desc || summary || "High-precision food processing machinery engineered for durability and continuous throughput.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-300 overflow-hidden"
    >
      {/* Top Image Showcase Stage */}
      <Link
        to={targetLink}
        className="relative block w-full aspect-[4/3] bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-200/40 p-6 overflow-hidden"
      >
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/95 text-slate-700 shadow-sm border border-slate-200/70 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {category}
          </span>
          {displayId && (
            <span className="font-mono text-xs font-bold text-slate-500 bg-white/90 px-2 py-0.5 rounded-md border border-slate-200/70 shadow-xs">
              {displayId}
            </span>
          )}
        </div>

        {/* Centered Machine Image */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={imageSrc}
            alt={name}
            loading="lazy"
            onError={(e) => {
              const fallback = "/Images/destoner.jpg";
              if (!e.currentTarget.src.endsWith(fallback)) {
                e.currentTarget.src = fallback;
              }
            }}
            className="w-full h-full object-contain filter saturate-[0.92] group-hover:saturate-100 group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500"
          />
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-x-0 bottom-0 py-2 px-4 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-end text-white text-xs font-medium">
          <span className="flex items-center gap-1 drop-shadow-sm">
            View specifications
            <Arrow diagonal className="w-3.5 h-3.5 text-white" />
          </span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <Link to={targetLink} className="block group/title">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover/title:text-emerald-700 transition-colors duration-200 flex items-start justify-between gap-2">
            <span>{name}</span>
            <span className="text-slate-400 group-hover/title:text-emerald-700 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all text-sm shrink-0 mt-1">
              ↗
            </span>
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-2 flex-1">
          {displayDesc}
        </p>

        {/* Top Key Features */}
        {features && features.length > 0 && (
          <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-1.5">
            {features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Supported Materials Chips */}
        {materials && materials.length > 0 && (
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {materials.slice(0, 4).map((mat, idx) => (
              <span
                key={idx}
                className="inline-block px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200/60"
              >
                {mat}
              </span>
            ))}
            {materials.length > 4 && (
              <span className="inline-block px-1.5 py-0.5 rounded-md text-[10px] font-medium text-slate-400 bg-slate-50">
                +{materials.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Actions Footer */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <Link
            to={targetLink}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 hover:text-emerald-700 transition-colors"
          >
            Full Specs
            <Arrow diagonal className="w-3.5 h-3.5" />
          </Link>
          <Link
            to={quoteLink}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-600 hover:text-white border border-emerald-200/80 transition-all duration-200 shadow-xs"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

MachineCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  summary: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
  slug: PropTypes.string,
  category: PropTypes.string,
  materials: PropTypes.arrayOf(PropTypes.string),
  features: PropTypes.arrayOf(PropTypes.string),
  applications: PropTypes.arrayOf(PropTypes.string),
};
