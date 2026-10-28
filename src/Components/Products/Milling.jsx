// src/pages/products/milling/index.jsx
"use client";
import SectionHeader from "../SectionHeader";
import MachineCard from "../MachineCard";
import { machines } from "../../Data/Machines";

export default function MillingPage() {
  const list = machines.filter((m) => m.category === "Milling");

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <SectionHeader
        title="Milling"
        subtitle="High-performance milling equipment for polishing, hulling, and preparing pulses and grains for the market."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((m) => (
          <MachineCard key={m.id} {...m} />
        ))}
      </div>
    </main>
  );
}
