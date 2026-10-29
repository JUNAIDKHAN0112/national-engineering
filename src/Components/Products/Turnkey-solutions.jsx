// src/pages/products/turnkey-solutions/index.jsx
"use client";
import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import MachineCard from "../MachineCard";
import { machines } from "../../Data/Machines";

export default function TurnkeyPage() {
  // Highlight core integration machines that compose a complete turnkey plant
  const turnkeyCoreIds = [1, 24, 2, 7, 26, 27, 28, 12, 13, 16, 17];
  const list = machines.filter((m) => turnkeyCoreIds.includes(m.id));

  return (
    <main className="min-h-screen bg-slate-50/70 py-12 px-6 max-w-7xl mx-auto">
      <SectionHeader
        title="Turnkey Plant Solutions"
        subtitle="End-to-end industrial plants — we design, manufacture, and commission complete processing lines combining cleaning, milling, conveying, dust control, and finishing systems."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((m) => (
          <MachineCard key={m.id} {...m} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/quote?machine=Complete%20Turnkey%20Plant%20Solution"
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg transition"
        >
          Request Complete Plant Layout & Quote ↗
        </Link>
      </div>
    </main>
  );
}
