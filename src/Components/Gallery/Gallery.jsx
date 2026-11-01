// src/Components/Gallery/Gallery.jsx
"use client";
import { useState, useMemo, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "../../Data/Machines";
import { Arrow } from "../UI";

const plantInstallations = [
  {
    id: 1,
    title: "Processing plant view 01",
    category: "Plant photos",
    img: "/Images/Plant-1.jpg",
    desc: "A photograph of grain and pulse processing equipment in an industrial plant.",
  },
  {
    id: 3,
    title: "Processing plant view 02",
    category: "Plant photos",
    img: "/Images/Plant-3.jpg",
    desc: "A photograph showing processing equipment and access platforms inside a plant.",
  },
  {
    id: 4,
    title: "Processing plant view 03",
    category: "Plant photos",
    img: "/Images/Plant-4.jpg",
    desc: "A photograph of processing equipment and the surrounding plant structure.",
  },
  {
    id: 5,
    title: "Processing plant view 04",
    category: "Plant photos",
    img: "/Images/Plant-5.jpg",
    desc: "A photograph of machinery, ducting, and access platforms in a processing plant.",
  },
  {
    id: 6,
    title: "Processing plant view 05",
    category: "Plant photos",
    img: "/Images/Plant-6.jpg",
    desc: "A photograph of grain processing machinery and connected plant equipment.",
  },
  {
    id: 7,
    title: "Processing plant view 06",
    category: "Plant photos",
    img: "/Images/Plant-7.jpg",
    desc: "A photograph of a grain processing line inside an industrial facility.",
  },
  {
    id: 8,
    title: "Processing plant view 07",
    category: "Plant photos",
    img: "/Images/rice-mill.jpg",
    desc: "A photograph showing grain processing machinery in an industrial plant.",
  },
];

const galleryCategories = ["All Photos", "Plant photos"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All Photos");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  // Filter plants based on active category
  const filteredPlants = useMemo(() => {
    if (activeCategory === "All Photos") return plantInstallations;
    return plantInstallations.filter(
      (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  const activePlant =
    activeLightboxIndex !== null ? filteredPlants[activeLightboxIndex] : null;

  // Open Lightbox for a specific plant
  const openLightbox = (plant) => {
    const idx = filteredPlants.findIndex((p) => p.id === plant.id);
    if (idx !== -1) setActiveLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev + 1) % filteredPlants.length);
  }, [activeLightboxIndex, filteredPlants.length]);

  const prevLightbox = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(
      (prev) => (prev - 1 + filteredPlants.length) % filteredPlants.length
    );
  }, [activeLightboxIndex, filteredPlants.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, nextLightbox, prevLightbox]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeLightboxIndex]);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800">
      {/* 1. LUXURY HERO HEADER: WHITE & ROYAL BLUE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 text-slate-900 pt-24 pb-20 px-6 md:px-12 border-b border-blue-100/80">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#1d4ed8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Soft radial blue lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-50 text-blue-700 border border-blue-200/90 shadow-xs mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            GRAIN & PULSE PROCESSING • SOLAPUR, MAHARASHTRA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            Plant &amp; Machinery
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
              Photo Gallery.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Browse photographs of grain processing equipment and plant
            interiors. Ask National Engineering Works in Solapur about
            machinery suited to your crop and process requirements.
          </motion.p>

          {/* Company and catalogue details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-blue-100"
          >
            <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-700">
                Solapur
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">
                Maharashtra
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-700">
                Dal
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">
                Milling
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-700">
                Pulse
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">
                Processing
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-700">
                Machinery
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">
                Photo Gallery
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. LUXURY CATEGORY FILTER PILLS */}
      <section className="py-10 bg-white border-b border-blue-100/80 sticky top-20 z-20 shadow-xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {galleryCategories.map((cat) => {
              const isSelected = activeCategory === cat;
              const count =
                cat === "All Photos"
                  ? plantInstallations.length
                  : plantInstallations.filter(
                      (p) => p.category.toLowerCase() === cat.toLowerCase()
                    ).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-600"
                      : "bg-slate-50 text-slate-700 hover:bg-blue-50/70 hover:text-blue-700 border border-slate-200"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-200/80 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs font-semibold text-slate-500 shrink-0">
            Showing <strong className="text-slate-900">{filteredPlants.length}</strong>{" "}
            plant photos
          </div>
        </div>
      </section>

      {/* 3. LUXURY GALLERY ARCHITECTURAL GRID */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPlants.map((plant) => (
              <motion.div
                key={plant.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-blue-400 transition-all duration-300 overflow-hidden"
              >
                {/* Photo category */}
                <div className="px-5 pt-3.5 pb-2.5 flex items-center justify-between border-b border-slate-100 bg-white relative z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    {plant.category}
                  </span>
                  <span className="text-xs font-medium text-slate-500">Plant photo</span>
                </div>

                {/* Image Stage with Interactive Hover Inspection */}
                <div
                  onClick={() => openLightbox(plant)}
                  className="relative block w-full aspect-[16/10] bg-slate-900 overflow-hidden cursor-pointer"
                >
                  <img
                    src={plant.img}
                    alt={`Grain and pulse processing plant photograph ${plant.id}`}
                    loading="lazy"
                    onError={(e) => {
                      const fallback = "/Images/Plant-1.jpg";
                      if (!e.currentTarget.src.endsWith(fallback)) {
                        e.currentTarget.src = fallback;
                      }
                    }}
                    className="w-full h-full object-cover filter saturate-[0.98] group-hover:scale-108 group-hover:saturate-105 transition-all duration-700 ease-out"
                  />

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Hover Inspect Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-950/30 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600/90 shadow-lg border border-blue-400/40 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <span>🔍</span>
                      Inspect High-Res View
                    </span>
                  </div>

                  {/* Image label */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] font-semibold text-white/95 bg-slate-900/80 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10 shadow-sm pointer-events-none">
                    <span className="text-blue-400">◉</span>
                    <span>Processing plant</span>
                  </div>
                </div>

                {/* Card Body Information */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Plant Title */}
                  <h3
                    onClick={() => openLightbox(plant)}
                    className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200 cursor-pointer flex items-start justify-between gap-2"
                  >
                    <span>{plant.title}</span>
                    <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm shrink-0 mt-0.5">
                      ↗
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
                    {plant.desc}
                  </p>

                  {/* Card Actions Footer */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => openLightbox(plant)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      <span>Full View</span>
                      <Arrow diagonal className="w-3.5 h-3.5 text-blue-700" />
                    </button>

                    <Link
                      to={`/quote?machine=${encodeURIComponent(plant.title)}`}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-sm"
                    >
                      Ask about plant options
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. LUXURY FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {activePlant && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-slate-950/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
            onClick={closeLightbox}
          >
            {/* Modal Dialog Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center text-lg shadow-lg border border-white/20 transition hover:scale-105"
              >
                ✕
              </button>

              {/* Prev / Next Floating Arrows */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevLightbox();
                }}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white flex items-center justify-center text-xl shadow-lg border border-white/20 transition hover:scale-110"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextLightbox();
                }}
                aria-label="Next image"
                className="absolute md:right-[390px] right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white flex items-center justify-center text-xl shadow-lg border border-white/20 transition hover:scale-110"
              >
                ›
              </button>

              {/* Left Column: High-Res Plant Image */}
              <div className="relative md:flex-1 bg-slate-950 flex items-center justify-center p-4 min-h-[300px] md:min-h-[500px]">
                <img
                  src={activePlant.img}
                  alt={`Grain and pulse processing plant photograph ${activePlant.id}`}
                  className="max-h-[75vh] w-full object-contain rounded-xl"
                />
                <div className="absolute bottom-4 left-6 text-xs text-white/70 font-mono">
                  Photo {activeLightboxIndex + 1} of{" "}
                  {filteredPlants.length}
                </div>
              </div>

              {/* Right Column: Case Details & Engineering Specs */}
              <div className="w-full md:w-[380px] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-slate-50 border-t md:border-t-0 md:border-l border-slate-200">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                      {activePlant.category}
                    </span>
                    <span className="font-mono text-xs font-semibold text-slate-500">Plant photo</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {activePlant.title}
                  </h2>

                  <div className="text-xs font-semibold text-slate-500 mb-4">
                    Grain and pulse processing equipment
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {activePlant.desc}
                  </p>

                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs text-blue-900 space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      Need product details?
                    </div>
                    <p className="text-slate-600">
                      Contact the Solapur team with your crop and processing
                      requirements to discuss relevant machinery.
                    </p>
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="mt-8 pt-4 border-t border-slate-200">
                  <Link
                    to={`/quote?machine=${encodeURIComponent(activePlant.title)}`}
                    onClick={closeLightbox}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-md"
                  >
                    Discuss your requirements
                    <Arrow diagonal className="w-3.5 h-3.5 text-white" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Helpful enquiry checklist */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-slate-50 border-t border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
              PLANNING A MACHINERY ENQUIRY
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Details that help shape a useful enquiry
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Machinery selection depends on the crop, process stages, required
              throughput and available site space. Include these details when
              contacting us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Crop or product",
                desc: "Tell us whether you are processing pulses, rice, grains, seeds or another material.",
              },
              {
                num: "02",
                title: "Process stages",
                desc: "List the steps you need, such as cleaning, milling, grading, conveying or dust collection.",
              },
              {
                num: "03",
                title: "Expected throughput",
                desc: "Share your target output so the team can discuss suitable machine and plant options.",
              },
              {
                num: "04",
                title: "Site information",
                desc: "Provide your location and available floor space or building layout, if known.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-2xl font-mono font-extrabold text-blue-600 mb-3 group-hover:scale-105 transition-transform">
                  {step.num}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LUXURY CONSULTATION CTA BANNER */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white text-center px-8 py-16 sm:py-20 rounded-3xl shadow-2xl">
          {/* Subtle radial glow & pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto z-10">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-200 block mb-3">
              TALK TO OUR SOLAPUR TEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
              Looking for grain or pulse processing machinery?
            </h2>
            <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              Share your crop, process stages, throughput and site details with
              National Engineering Works in Solapur, Maharashtra.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-blue-900 bg-white hover:bg-blue-50 transition shadow-lg hover:shadow-xl"
              >
                Send a project enquiry
                <Arrow diagonal className="w-4 h-4 text-blue-900" />
              </Link>
              <a
                href={`tel:${company.phones[0]}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition"
              >
                Call +91 {company.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
