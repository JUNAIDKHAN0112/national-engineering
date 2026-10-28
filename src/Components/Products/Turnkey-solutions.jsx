// src/pages/products/turnkey-solutions/index.jsx
"use client";
import SectionHeader from "../SectionHeader";
import MachineCard from "../MachineCard";
import { machines } from "../../Data/Machines";

export default function TurnkeyPage() {
  // show everything except the 'Complete Plant Solution' (or include it)
  const list = machines.filter((m) => m.category !== undefined);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <SectionHeader
        title="Turnkey Solutions"
        subtitle="Integrated plant setups — we design and supply complete processing lines combining cleaning, milling, conveying, dust control and finishing systems."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((m) => (
          <MachineCard key={m.id} {...m} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow">
          Request Complete Plant Design
        </a>
      </div>
    </main>
  );
}
