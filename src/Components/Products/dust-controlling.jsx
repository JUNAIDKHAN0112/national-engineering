// src/pages/products/dust-controlling/index.jsx
"use client";
import SectionHeader from "../SectionHeader";
import MachineCard from "../MachineCard";
import { machines } from "../../Data/Machines";

export default function DustPage() {
  const list = machines.filter((m) => m.category === "Dust Controlling");

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <SectionHeader
        title="Dust Controlling"
        subtitle="Advanced dust handling, filtration, and airflow systems to keep your plant clean and safe."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((m) => (
          <MachineCard key={m.id} {...m} />
        ))}
      </div>
    </main>
  );
}
