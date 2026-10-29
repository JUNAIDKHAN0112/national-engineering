// src/Components/Machines/MachineDetailTemplate.jsx
"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { machines, company } from "../../Data/Machines";
import { Arrow } from "../UI";

export default function MachineDetailTemplate({ slug: propSlug }) {
  const { slug: routeSlug } = useParams();
  const slug = propSlug || routeSlug || "destoner";

  // Find the target machine by slug, link, or id
  const machine =
    machines.find(
      (m) =>
        m.slug === slug ||
        m.link === `/${slug}` ||
        m.slug === slug.toLowerCase() ||
        m.name.toLowerCase().replace(/[^a-z0-9]/g, "-") === slug
    ) || machines[0];

  const [activeTab, setActiveTab] = useState("overview");

  // Find related machines from the same category
  const relatedMachines = machines
    .filter((m) => m.category === machine.category && m.id !== machine.id)
    .slice(0, 3);

  const fallbackRelated =
    relatedMachines.length > 0
      ? relatedMachines
      : machines.filter((m) => m.id !== machine.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800">
      {/* 1. BREADCRUMBS & TOP BAR */}
      <section className="bg-white border-b border-slate-200 py-3.5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-blue-600 transition">
              Machinery
            </Link>
            <span>/</span>
            <span className="text-blue-700 font-semibold">
              {machine.category}
            </span>
            <span>/</span>
            <span className="text-slate-900 font-bold">{machine.name}</span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800 font-semibold transition"
          >
            ← Back to all machinery
          </Link>
        </div>
      </section>

      {/* 2. HERO SHOWCASE: WHITE & BLUE DESIGN */}
      <section className="bg-white border-b border-blue-100/80 pt-12 pb-16 px-6 md:px-12 relative overflow-hidden">
        {/* Soft radial blue gradient backdrop */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-100/40 via-blue-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Titles & Details */}
          <div className="lg:col-span-7">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                {machine.category}
              </span>
              <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                MODEL #{String(machine.id || 1).padStart(2, "0")}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/70">
                ✓ Continuous Duty Rated
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {machine.name}
            </h1>

            {/* Subtitle / Short Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
              {machine.desc}
            </p>

            {/* In-depth Summary */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100/90 text-sm text-slate-700 leading-relaxed mb-8">
              {machine.summary ||
                "Engineered with industrial-grade mild steel and stainless contact parts, providing precision grain grading, low vibration operation, and minimal power consumption."}
            </div>

            {/* Key Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="block text-xl font-bold text-blue-700 font-mono">
                  99.5%+
                </span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block mt-0.5">
                  Purity Output
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="block text-xl font-bold text-blue-700 font-mono">
                  Custom
                </span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block mt-0.5">
                  TPH Capacity
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="block text-xl font-bold text-blue-700 font-mono">
                  Low dB
                </span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block mt-0.5">
                  Vibro-Balanced
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={`/quote?machine=${encodeURIComponent(machine.name)}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-600/25 active:scale-[0.98]"
              >
                Request Quotation & Layout
                <Arrow diagonal className="w-4 h-4 text-white" />
              </Link>
              <a
                href={`tel:${company.phones[0]}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-blue-700 bg-white hover:bg-blue-50 border border-blue-200 transition shadow-xs"
              >
                Call Engineer: +91 {company.phones[0]}
              </a>
            </div>
          </div>

          {/* Right Column: Studio Showcase Pedestal */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-blue-50/70 via-white to-slate-100/60 border border-blue-100 p-8 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center overflow-hidden">
              {/* Subtle architectural grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#1d4ed8 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Floating Engineering Badge */}
              <div className="w-full flex items-center justify-between text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-4 relative z-10">
                <span className="flex items-center gap-1.5 text-blue-700">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  National Engineering Works
                </span>
                <span className="font-mono text-slate-400">MADE IN INDIA</span>
              </div>

              {/* Center Image Stage */}
              <div className="w-full h-80 sm:h-96 flex items-center justify-center p-4 relative z-10">
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={machine.img || "/Images/destoner.jpg"}
                  alt={machine.name}
                  onError={(e) => {
                    const fallback = "/Images/destoner.jpg";
                    if (!e.currentTarget.src.endsWith(fallback)) {
                      e.currentTarget.src = fallback;
                    }
                  }}
                  className="w-full h-full object-contain filter saturate-[0.98] drop-shadow-md hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Feature Pill Strip */}
              <div className="w-full mt-4 pt-4 border-t border-blue-100/80 flex items-center justify-around text-center text-xs text-slate-600 relative z-10">
                <div>
                  <span className="block font-bold text-slate-900">Heavy Duty</span>
                  <span className="text-[10px] text-slate-500">M.S. / SS304</span>
                </div>
                <div className="w-px h-6 bg-blue-100" />
                <div>
                  <span className="block font-bold text-slate-900">Customized</span>
                  <span className="text-[10px] text-slate-500">Screen Apertures</span>
                </div>
                <div className="w-px h-6 bg-blue-100" />
                <div>
                  <span className="block font-bold text-slate-900">1 Year</span>
                  <span className="text-[10px] text-slate-500">Warranty Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE NAVIGATION TABS */}
      <section className="bg-white border-b border-slate-200 sticky top-24 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex gap-8 overflow-x-auto scrollbar-hide text-sm font-semibold">
            {[
              { id: "overview", label: "Working Principle" },
              { id: "features", label: "Key Features & Specs" },
              { id: "materials", label: "Supported Grains" },
              { id: "applications", label: "Plant Applications" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 border-b-2 transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-700 font-bold"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TAB CONTENTS & TECHNICAL DETAILS */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Tab 1: Working Principle */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
                HOW THIS MACHINE OPERATES
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Operational Engineering & Flow Principle
              </h2>
              <p className="text-slate-700 text-base leading-relaxed mb-6">
                {machine.workingPrinciple ||
                  "The equipment operates via controlled negative-pressure aspiration integrated with dynamic mechanical stratification, ensuring pure grain output with zero broken kernel waste."}
              </p>

              {/* Flow Steps */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center shrink-0">
                    01
                  </span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">
                      Calibrated Feed Intake
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Raw grains or pulses feed through an adjustable inlet gate
                      ensuring an even, uniform layer across the working zone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center shrink-0">
                    02
                  </span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">
                      Dynamic Stratification
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Counter-balanced mechanical motion stratifies heavy and
                      light fractions across precision-engineered screens.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center shrink-0">
                    03
                  </span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">
                      Clean Discharge & Extraction
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Impurities, chaff, and finished materials exit through
                      segregated chutes ready for onward packaging or processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Spec Highlight */}
            <div className="md:col-span-4 bg-gradient-to-br from-blue-900 to-slate-900 text-white p-7 rounded-2xl shadow-lg">
              <span className="text-xs font-mono font-semibold uppercase text-blue-400 block mb-1">
                ENGINEERING STANDARDS
              </span>
              <h3 className="text-xl font-bold mb-4">Manufacturing Guarantee</h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  Heavy-gauge laser-cut steel framework
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  Dynamically balanced rotating parts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  Dust-tight sealed bearing assemblies
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  Complete on-site operational testing
                </li>
              </ul>
              <div className="mt-6 pt-5 border-t border-white/10">
                <Link
                  to={`/quote?machine=${encodeURIComponent(machine.name)}`}
                  className="block w-full py-2.5 text-center text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition"
                >
                  Enquire for this Machine
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Key Features & Specs */}
        {activeTab === "features" && (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
              TECHNICAL ADVANTAGES
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Features & Engineering Specifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(machine.features || [
                "Heavy-duty eccentric drive with low vibration transmission",
                "High-capacity aspiration connection for dust-free operation",
                "Easy-access maintenance doors with quick-release latches",
                "Wear-resistant replaceable contact plates for longevity",
              ]).map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">
                      {feat}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Engineered for continuous industrial duty with minimal
                      maintenance downtime.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Spec Table */}
            <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-blue-50 text-blue-900 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Parameter</th>
                    <th className="py-3 px-4">Specification Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      Material of Construction
                    </td>
                    <td className="py-3 px-4">
                      Heavy-gauge Mild Steel structure with optional SS304 product contact
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      Drive Power
                    </td>
                    <td className="py-3 px-4">
                      High-efficiency standard 3-phase induction motor (TEFC)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      Processing Capacity
                    </td>
                    <td className="py-3 px-4">
                      Tailored from 1.0 TPH up to 15+ TPH per client requirement
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      Surface Finish
                    </td>
                    <td className="py-3 px-4">
                      Two-coat anti-corrosive industrial epoxy primer & polyurethane topcoat
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Supported Materials */}
        {activeTab === "materials" && (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
              GRAIN COMPATIBILITY
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Suitable for a Wide Range of Grains & Pulses
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mb-8">
              National Engineering Works customizes the internal clearance, deck
              inclination, and screen mesh sizes for each specific raw material.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {(machine.materials || [
                "Wheat",
                "Toor Dal",
                "Chana",
                "Paddy",
                "Moong",
                "Soybean",
                "Urad",
                "Mustard",
              ]).map((mat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all shadow-xs"
                >
                  <span className="text-2xl block mb-2">🌾</span>
                  <span className="font-semibold text-slate-900 text-sm block">
                    {mat}
                  </span>
                  <span className="text-[11px] text-blue-700 font-medium">
                    Fully Compatible
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Applications */}
        {activeTab === "applications" && (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
              PLANT INTEGRATION
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Target Industries & Plant Placement
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mb-8">
              Designed for standalone operation or seamless inter-machine
              integration with bucket elevators and aspiration networks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(machine.applications || [
                "Commercial dal processing mills",
                "Seed processing and grading plants",
                "Flour mill pre-cleaning intake",
                "Grain export terminal preparation",
              ]).map((app, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/90"
                >
                  <span className="text-blue-600 font-bold text-base mt-0.5">
                    🏭
                  </span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">
                      {app}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Proven performance under continuous commercial operation.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 5. FREQUENTLY INSTALLED TOGETHER (RELATED EQUIPMENT) */}
      <section className="py-16 bg-white border-t border-slate-200 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-1">
                COMPLETE PRODUCTION LINE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Frequently Installed Together
              </h2>
            </div>
            <Link
              to="/products"
              className="text-xs font-semibold text-blue-700 hover:text-blue-800 transition flex items-center gap-1"
            >
              Browse entire catalogue →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fallbackRelated.map((rel) => (
              <Link
                key={rel.id}
                to={rel.link}
                className="group p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="w-full h-44 bg-white rounded-xl border border-slate-100 p-4 mb-4 flex items-center justify-center">
                  <img
                    src={rel.img}
                    alt={rel.name}
                    className="w-full h-full object-contain filter saturate-[0.92] group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-blue-700 block mb-1">
                  {rel.category}
                </span>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition flex items-center justify-between">
                  <span>{rel.name}</span>
                  <span className="text-xs text-slate-400 group-hover:text-blue-700 transition">
                    ↗
                  </span>
                </h4>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 flex-1">
                  {rel.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION BANNER */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/15 mb-4">
            DISCUSS YOUR REQUIREMENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Ready to integrate the {machine.name}?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Contact our engineering team in Solapur for custom plant drawings,
            capacity calculations, and commercial quotation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to={`/quote?machine=${encodeURIComponent(machine.name)}`}
              className="px-8 py-3.5 rounded-xl font-semibold text-blue-950 bg-white hover:bg-blue-50 transition shadow-lg"
            >
              Request Machine Quotation
            </Link>
            <a
              href={`tel:${company.phones[0]}`}
              className="px-6 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition"
            >
              Call +91 {company.phones[0]}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

MachineDetailTemplate.propTypes = {
  slug: PropTypes.string,
};
