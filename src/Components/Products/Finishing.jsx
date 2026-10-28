// src/pages/products/finishing/index.jsx
"use client";
import SectionHeader from "../SectionHeader";
import MachineCard from "../MachineCard";
import { machines } from "../../Data/Machines";
export default function FinishingPage() {
  const list = machines.filter((m) => m.category === "Finishing");

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <SectionHeader
        title="Finishing"
        subtitle="Grading, sieving, and density-based separation equipment for market-ready, premium products."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((m) => (
          <MachineCard key={m.id} {...m} />
        ))}
      </div>
    </main>
  );
}
