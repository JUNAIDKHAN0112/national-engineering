// src/Components/Products/Products.jsx
"use client";
import React, { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { machines, categories, company } from "../../Data/Machines";
import MachineCard from "../MachineCard";
import { Arrow } from "../UI";

export default function AdvancedMachinesPage() {
  const [activeCategory, setActiveCategory] = useState("All machinery");
  const [searchQuery, setSearchQuery] = useState("");
  const scrollContainerRef = useRef(null);

  // Filter machines based on category and search query
  const filteredMachines = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return machines.filter((m) => {
      const matchesCategory =
        activeCategory === "All machinery" ||
        m.category.toLowerCase() === activeCategory.toLowerCase();

      if (!matchesCategory) return false;
      if (!q) return true;

      const searchable = [
        m.name,
        m.category,
        m.desc || "",
        m.summary || "",
        ...(m.materials || []),
        ...(m.applications || []),
        ...(m.features || []),
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(q);
    });
  }, [activeCategory, searchQuery]);

  // Featured flagship machines for the quick horizontal showcase
  const flagshipMachines = useMemo(() => {
    const ids = [1, 24, 25, 7, 26, 27, 28, 12, 16];
    return ids.map((id) => machines.find((m) => m.id === id)).filter(Boolean);
  }, []);

  const scrollShowcase = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Compute category count
  const getCategoryCount = (cat) => {
    if (cat === "All machinery") return machines.length;
    return machines.filter(
      (m) => m.category.toLowerCase() === cat.toLowerCase()
    ).length;
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800">
      {/* 1. HERO SECTION: WHITE & ROYAL BLUE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 text-slate-900 pt-24 pb-20 px-6 md:px-12 border-b border-blue-100/80">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#1d4ed8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Subtle royal blue radial glow */}
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
            ENGINEERED IN SOLAPUR, MAHARASHTRA • EST. 2010
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            Precision Machinery for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
              Grain & Pulse Processing.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Explore our complete industrial portfolio of cleaning, de-stoning,
            hulling, polishing, grading, and turnkey milling machinery. Built to
            endure continuous multi-shift production.
          </motion.p>

          {/* Quick Metrics Bar: Clean White Cards with Royal Blue Accents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-blue-100"
          >
            <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-700">
                {machines.length}+
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">
                Industrial Machines
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-700">06</span>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">
                Process Categories
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-700">100%</span>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">
                Custom Layouts
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-700">24/7</span>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">
                Support & Spares
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FLAGSHIP SHOWCASE STRIP: WHITE & ROYAL BLUE */}
      <section className="py-12 bg-white border-b border-blue-100/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-1">
                FEATURED HIGHLIGHTS
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Flagship Processing Equipment
              </h2>
            </div>
            {/* Scroll navigation arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollShowcase("left")}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-full border border-blue-200 bg-white hover:bg-blue-50 text-blue-700 flex items-center justify-center transition shadow-xs font-bold"
              >
                ←
              </button>
              <button
                onClick={() => scrollShowcase("right")}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-full border border-blue-200 bg-white hover:bg-blue-50 text-blue-700 flex items-center justify-center transition shadow-xs font-bold"
              >
                →
              </button>
            </div>
          </div>

          {/* Horizontal scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x"
          >
            {flagshipMachines.map((m) => (
              <div
                key={m.id}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] snap-start"
              >
                <MachineCard {...m} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAIN CATALOGUE & INTERACTIVE FILTER SECTION: WHITE & ROYAL BLUE */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto" id="catalogue">
        {/* Controls Container */}
        <div className="mb-12">
          {/* Header & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-1">
                COMPLETE PORTFOLIO
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                All Machinery
              </h2>
            </div>

            {/* Real-time Search Box */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search by name, crop or spec..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-blue-200/90 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 shadow-xs transition"
              />
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-500 text-sm">
                🔍
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 px-1"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              const count = getCategoryCount(cat);
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shadow-xs ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-600"
                      : "bg-white text-slate-700 hover:bg-blue-50/60 hover:text-blue-700 border border-slate-200"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results feedback */}
          <div className="flex items-center justify-between text-xs text-slate-500 mt-4 px-1">
            <span>
              Showing{" "}
              <strong className="text-slate-900">{filteredMachines.length}</strong>{" "}
              {filteredMachines.length === 1 ? "machine" : "machines"}
              {activeCategory !== "All machinery" && ` in ${activeCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
            {(activeCategory !== "All machinery" || searchQuery) && (
              <button
                onClick={() => {
                  setActiveCategory("All machinery");
                  setSearchQuery("");
                }}
                className="text-blue-700 font-bold hover:underline"
              >
                Reset all filters
              </button>
            )}
          </div>
        </div>

        {/* 4. MACHINERY CARDS GRID */}
        {filteredMachines.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredMachines.map((machine) => (
                <MachineCard key={machine.id} {...machine} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty search state */
          <div className="text-center py-20 bg-white rounded-3xl border border-blue-100 p-8 shadow-sm">
            <span className="text-5xl block mb-4">⚙️</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              No matching machinery found
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              We couldn’t find any machines matching &quot;{searchQuery}&quot; in{" "}
              {activeCategory}. Try adjusting your search keywords or clear the
              filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All machinery");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 5. PRECISION MANUFACTURING STANDARDS: WHITE & BLUE */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-slate-50 border-t border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
              MANUFACTURING EXCELLENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Built for Heavy Industrial Duty
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Every machine is built in our Solapur facility using high-grade
              materials, precision CNC machining, and balanced dynamic drives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Process & Flow Planning",
                desc: "We analyze your raw material intake, throughput targets, and facility heights to engineer custom equipment arrangements.",
              },
              {
                num: "02",
                title: "Laser & Steel Fabrication",
                desc: "Heavy-gauge mild steel and SS304 fabrication ensuring structural rigidity under continuous abrasive loads.",
              },
              {
                num: "03",
                title: "Dynamic Balancing",
                desc: "Every rotating roll, beater, deck, and impeller undergoes precision balancing to minimize vibration and bearing wear.",
              },
              {
                num: "04",
                title: "Turnkey Commissioning",
                desc: "On-site installation support, electrical panel integration, and full operational handover for immediate production.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-blue-100/90 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
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

      {/* 6. PROJECT ENQUIRY CTA: ROYAL BLUE & WHITE */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white text-center px-8 py-16 sm:py-20 rounded-3xl shadow-2xl">
          {/* Subtle radial glow & pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto z-10">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-200 block mb-3">
              START YOUR PROJECT
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
              Need Custom Machinery or a Complete Plant?
            </h2>
            <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              Speak directly with our technical engineering team in Solapur. We provide
              custom layouts, machinery quotations, and process advice tailored to your
              target capacity.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-blue-900 bg-white hover:bg-blue-50 transition shadow-lg hover:shadow-xl"
              >
                Request a Quotation
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
