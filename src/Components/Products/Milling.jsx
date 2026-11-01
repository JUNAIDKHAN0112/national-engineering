// src/Components/Products/Milling.jsx
"use client";
import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import MachineCard from "../MachineCard";
import { machines } from "../../Data/Machines";

export default function MillingPage() {
  const list = machines.filter((m) => m.category === "Milling");

  return (
    <main className="min-h-screen bg-slate-50/70 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-blue-600 transition">
            Machinery
          </Link>
          <span>/</span>
          <span className="text-blue-700">Milling & Processing</span>
        </div>

        <SectionHeader
          title="Milling & Processing"
          subtitle="High-performance milling, hulling, and polishing equipment designed for precision processing of pulses, grains, and flour."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {list.map((m) => (
            <MachineCard key={m.id} {...m} />
          ))}
        </div>
      </div>
    </main>
  );
}
