// src/Components/MachineCard.jsx
"use client";
import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const targetLink =
    link || (slug ? `/${slug}` : `/quote?machine=${encodeURIComponent(name || "")}`);
  const quoteLink = `/quote?machine=${encodeURIComponent(name || "")}`;
  const displayId = id ? `#${String(id).padStart(2, "0")}` : null;
  const imageSrc = img || "/Images/destoner.jpg";
  const displayDesc =
    desc ||
    summary ||
    "High-precision food processing machinery engineered for durability and continuous throughput.";

  // Clicking anywhere on the card navigates directly to the machine detail page
  const handleCardClick = (e) => {
    // If the user clicked on an explicit interactive link/button that has its own action, don't double navigate
    if (e.target.closest("a[data-quote-button='true']")) {
      return;
    }
    navigate(targetLink);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(targetLink);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`${name} - Click to view specifications`}
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-blue-400/90 transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
    >
      {/* Invisible stretched link for accessibility and native navigation */}
      <Link
        to={targetLink}
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* 1. Top Image Showcase Stage */}
      <div className="relative block w-full aspect-[4/3] bg-gradient-to-b from-blue-50/40 via-slate-50 to-slate-100/60 p-6 overflow-hidden border-b border-slate-100">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#1e40af 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/95 text-blue-700 shadow-sm border border-blue-200/80 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            {category}
          </span>
          {displayId && (
            <span className="font-mono text-xs font-bold text-slate-500 bg-white/90 px-2 py-0.5 rounded-md border border-slate-200/80 shadow-xs">
              {displayId}
            </span>
          )}
        </div>

        {/* Centered Machine Image */}
        <div className="w-full h-full flex items-center justify-center relative z-10">
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
            className="w-full h-full object-contain filter saturate-[0.95] group-hover:saturate-100 group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500"
          />
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-x-0 bottom-0 py-2.5 px-4 bg-gradient-to-t from-blue-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-end text-white text-xs font-medium z-10">
          <span className="flex items-center gap-1.5 drop-shadow-sm font-semibold">
            View full specifications
            <Arrow diagonal className="w-3.5 h-3.5 text-white" />
          </span>
        </div>
      </div>

      {/* 2. Card Body Content */}
      <div className="flex flex-col flex-1 p-6 relative z-10">
        {/* Title */}
        <div className="block">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200 flex items-start justify-between gap-2">
            <span>{name}</span>
            <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm shrink-0 mt-1">
              ↗
            </span>
          </h3>
        </div>

        {/* Description */}
        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-2 flex-1">
          {displayDesc}
        </p>

        {/* Top Key Features */}
        {features && features.length > 0 && (
          <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-1.5">
            {features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
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
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 group-hover:text-blue-800 transition-colors">
            Full Specs
            <Arrow diagonal className="w-3.5 h-3.5 text-blue-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
          <Link
            to={quoteLink}
            data-quote-button="true"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-sm"
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
