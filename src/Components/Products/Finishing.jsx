// src/Components/Products/Finishing.jsx
"use client";
import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import MachineCard from "../MachineCard";
import { machines } from "../../Data/Machines";

export default function FinishingPage() {
  const list = machines.filter((m) => m.category === "Finishing");

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
          <span className="text-blue-700">Finishing & Grading</span>
        </div>

        <SectionHeader
          title="Finishing & Grading"
          subtitle="Precision size grading, gyratory plansifters, drum sieves, and specific gravity sorting tables for top-tier agricultural grain finishing."
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
