// src/pages/products/cleaning-and-separating/index.jsx
"use client";
import SectionHeader from "../SectionHeader";
import MachineCard from "../MachineCard";
import { machines } from "../../Data/Machines";

export default function CleaningPage() {
  const list = machines.filter((m) => m.category === "Cleaning and Separating");

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <SectionHeader
        title="Cleaning & Separating"
        subtitle="Precision cleaning and separation equipment to ensure your grains and pulses are free from impurities and ready for processing."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((m) => (
          <MachineCard key={m.id} {...m} />
        ))}
      </div>
    </main>
  );
}
