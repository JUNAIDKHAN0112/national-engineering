// src/Components/Legal/PrivacyPolicy.jsx
"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { company } from "../../Data/Machines";

export default function PrivacyPolicy() {
  const lastUpdated = "October 2026";

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800">
      {/* 1. HERO HEADER: WHITE & ROYAL BLUE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 text-slate-900 pt-24 pb-16 px-6 md:px-12 border-b border-blue-100/80">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#1d4ed8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-50 text-blue-700 border border-blue-200/90 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            LEGAL &amp; COMPLIANCE
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Privacy Policy
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            How National Engineering Works collects, uses, protects, and handles
            your business and personal information.
          </p>

          <div className="mt-6 text-xs font-semibold text-slate-400">
            Last Updated: {lastUpdated} • Applicable to nationalengineeringworks.com
          </div>
        </div>
      </section>

      {/* 2. MAIN POLICY CONTENT */}
      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-12 space-y-10">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">01.</span> Introduction &amp; Scope
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              National Engineering Works (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operating
              from C-162, Chincholi MIDC, Solapur, Maharashtra 413255, India, is
              committed to respecting and safeguarding your privacy. This Privacy
              Policy outlines our practices regarding information collected through
              our website, quotation inquiries, technical consultations, and
              commercial interactions for food processing machinery and turnkey
              plants.
            </p>
          </div>

          {/* Section 2 */}
          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">02.</span> Information We Collect
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              When you interact with our platform or submit an equipment inquiry,
              we may collect:
            </p>
            <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>
                <strong className="text-slate-800">Contact Information:</strong> Name,
                business name, email address, phone number, and factory/installation
                location.
              </li>
              <li>
                <strong className="text-slate-800">Project Requirements:</strong> Target
                crop types (e.g., Toor, Chana, Paddy, Wheat), daily throughput
                capacity (TPD / TPH), plant dimensions, and machinery specifications.
              </li>
              <li>
                <strong className="text-slate-800">Technical Communications:</strong>{" "}
                CAD sketches, layout preferences, and correspondence regarding
                custom equipment sizing.
              </li>
              <li>
                <strong className="text-slate-800">Usage Data:</strong> Standard server
                logs, device identifiers, and browser details used to optimize
                website performance.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">03.</span> How We Use Your Information
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Information collected is strictly utilized for legitimate industrial
              and commercial purposes:
            </p>
            <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>Preparing accurate machinery quotations, flowcharts, and technical proposals.</li>
              <li>Coordinating engineering consultations, factory visits, and on-site plant assessments.</li>
              <li>Fulfilling equipment manufacturing contracts, dispatch notifications, and warranty services.</li>
              <li>Providing technical manuals, maintenance updates, and spare parts assistance.</li>
              <li>Improving website navigation and response times for customer inquiries.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">04.</span> Information Sharing &amp; Confidentiality
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              We uphold strict commercial confidentiality:
            </p>
            <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>
                <strong className="text-slate-800">No Data Selling:</strong> We do not
                sell, rent, or trade your contact information or project data to any
                third-party marketers.
              </li>
              <li>
                <strong className="text-slate-800">Proprietary Layouts:</strong> Custom
                plant designs and factory layouts shared with us remain confidential.
              </li>
              <li>
                <strong className="text-slate-800">Logistics &amp; Compliance:</strong>{" "}
                Information is only shared with verified logistics/transport partners
                for equipment delivery or when required by statutory Indian law.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">05.</span> Data Security &amp; Retention
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We implement industry-standard physical, electronic, and managerial
              safeguards to protect commercial inquiries from unauthorized access,
              alteration, or disclosure. Inquiries and correspondence are retained
              only for the duration necessary to support client relations, machine
              warranties, and regulatory tax compliance.
            </p>
          </div>

          {/* Section 6 */}
          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">06.</span> Contact Our Compliance Officer
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              If you have questions regarding this Privacy Policy or wish to review,
              update, or remove your contact information, please contact us:
            </p>
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 text-sm space-y-1.5">
              <p className="font-bold text-slate-900">{company.name}</p>
              <p className="text-slate-600">C-162, Chincholi MIDC, Solapur, Maharashtra 413255, India</p>
              <p className="text-slate-600">
                Email:{" "}
                <a href={`mailto:${company.email}`} className="text-blue-700 font-semibold hover:underline">
                  {company.email}
                </a>
              </p>
              <p className="text-slate-600">
                Phone: <span className="font-mono text-slate-800">+91 {company.phones[0]}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Back navigation */}
        <div className="mt-8 flex items-center justify-between text-xs font-semibold text-slate-500">
          <Link to="/" className="text-blue-700 hover:underline">
            ← Return to Home
          </Link>
          <Link to="/terms" className="text-blue-700 hover:underline">
            View Terms &amp; Conditions →
          </Link>
        </div>
      </section>
    </div>
  );
}
