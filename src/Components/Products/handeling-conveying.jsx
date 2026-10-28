// src/pages/products/handling-and-conveying/index.jsx
"use client";
import SectionHeader from "../SectionHeader";
import MachineCard from "../MachineCard";
import { machines } from "../../Data/Machines";

export default function HandlingPage() {
  const list = machines.filter((m) => m.category === "Handling and Conveying");

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <SectionHeader
        title="Handling & Conveying"
        subtitle="Efficient material handling systems that move product safely and reliably across every stage of production."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((m) => (
          <MachineCard key={m.id} {...m} />
        ))}
      </div>
    </main>
  );
}
