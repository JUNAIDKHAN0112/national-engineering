// src/Components/Legal/TermsConditions.jsx
"use client";
import { Link } from "react-router-dom";
import { company } from "../../Data/Machines";

export default function TermsConditions() {
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
            COMMERCIAL &amp; CONTRACTUAL GOVERNANCE
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Terms &amp; Conditions
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Standard commercial terms governing equipment supply, turnkey plant
            installations, engineering consultations, and warranties by National
            Engineering Works.
          </p>

          <div className="mt-6 text-xs font-semibold text-slate-400">
            Last Updated: {lastUpdated} • Governing Location: Solapur MIDC, Maharashtra
          </div>
        </div>
      </section>

      {/* 2. MAIN TERMS CONTENT */}
      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-12 space-y-10">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">01.</span> Agreement &amp; Applicability
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              These Terms and Conditions govern all sales, commercial quotations,
              equipment fabrications, turnkey installations, and technical support
              provided by <strong>National Engineering Works</strong> (hereinafter
              referred to as &quot;NEW&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;the Manufacturer&quot;),
              headquartered at C-162, Chincholi MIDC, Solapur, Maharashtra 413255,
              India. By placing a purchase order, accepting a commercial quotation,
              or commissioning machinery from us, the client (referred to as &quot;the
              Buyer&quot; or &quot;Client&quot;) unconditionally accepts and agrees to be bound by
              these terms.
            </p>
          </div>

          {/* Section 2 */}
          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">02.</span> Quotations, Pricing &amp; Order Validity
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-600 list-disc pl-5">
              <li>
                <strong className="text-slate-800">Quotation Lifespan:</strong> Formal
                engineering estimates and commercial quotes remain valid for 30
                calendar days from the date of issuance, unless explicitly stated
                otherwise in writing.
              </li>
              <li>
                <strong className="text-slate-800">Taxes &amp; Statutory Levies:</strong> All
                quoted prices are exclusive of Goods and Services Tax (GST), central/state
                cess, customs duties, import levies, or transit tolls, which will be
                billed at prevailing statutory rates at the time of invoicing.
              </li>
              <li>
                <strong className="text-slate-800">Raw Material Indexing:</strong> Prices
                are calculated based on current hot-rolled steel, stainless steel (SS304/SS316),
                copper, and motor component costs. In cases of significant market
                volatility prior to order advance clearance, NEW reserves the right to
                adjust quotations proportionally.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">03.</span> Machinery Capacities, Tolerances &amp; Feedstock
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Equipment throughput ratings (measured in Tons Per Hour / TPH or Tons Per
              Day / TPD) are stated based on standard commercial input parameters:
            </p>
            <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>
                Performance metrics for De-stoners, Multi-purpose Cleaners, Dal Polishers,
                and Fatka machines are evaluated with clean, dry grain at moisture content
                between 10% and 12% and impurity contamination under 3% by weight.
              </li>
              <li>
                Deviations in grain moisture, extraneous material, heavy mud lumps, or
                improper feed rate regulation may cause minor throughput variations up to
                ±10%, which shall not constitute a manufacturing defect.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">04.</span> Factory Acceptance Testing (FAT) &amp; Dispatch
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Clients or their authorized technical inspectors are invited to witness
              trial runs and dry runs at our Solapur manufacturing facility prior to
              dispatch.
            </p>
            <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>
                Dispatch clearance is issued upon satisfaction of the agreed Factory
                Acceptance Testing checklist and settlement of the milestone dispatch
                payment.
              </li>
              <li>
                Shipments are made on an <em>Ex-Works Solapur</em> basis unless a CIF/FOB
                contract is explicitly executed. Transit insurance and freight arrangements
                are coordinated with certified carriers in accordance with client
                instructions.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">05.</span> Site Readiness &amp; Commissioning
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              For complete plant contracts and turnkey solutions (Dal mills, Rice mills,
              Seed processing plants), successful erection and commissioning require:
            </p>
            <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>
                <strong className="text-slate-800">Civil &amp; Foundation Works:</strong> The
                Buyer is responsible for structural sheds, concrete machine foundations,
                mezzanine flooring, and drainage trenches built in strict accordance with
                NEW&apos;s architectural GA drawings.
              </li>
              <li>
                <strong className="text-slate-800">Utilities &amp; Power:</strong> Continuous
                3-phase electrical supply (415V ±5%, 50Hz), compressed air lines, and raw
                feedstock must be arranged by the Buyer prior to the arrival of NEW&apos;s
                commissioning engineers.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">06.</span> Warranty &amp; Defect Liability
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              National Engineering Works warrants its fabricated machinery against
              manufacturing defects, faulty metallurgical composition, and defective
              workmanship:
            </p>
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 text-sm space-y-2">
              <p className="font-semibold text-slate-900">
                Standard Warranty Period: 12 Months from date of dispatch or 9 months from
                date of commissioning, whichever occurs first.
              </p>
              <p className="text-slate-600">
                Bought-out items including electric motors, geared drives, VFDs, bearings,
                and pneumatic cylinders carry their respective original equipment
                manufacturer (OEM) warranties, facilitated directly by NEW.
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">
              *Warranty does not cover normal wear-and-tear components (screens, emery
              rollers, drive belts, filter bags) or damage arising from improper lubrication,
              voltage fluctuations, or unauthorized modifications.
            </p>
          </div>

          {/* Section 7 */}
          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">07.</span> Intellectual Property &amp; Layout Designs
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              All engineering schematics, 2D/3D plant layouts, flowcharts, machinery
              dimensions, and fabrication drawings developed by National Engineering Works
              remain our exclusive intellectual property. The Buyer is granted a
              non-exclusive, non-transferable license to utilize these drawings solely for
              the operation and maintenance of the purchased equipment. Reproduction,
              reverse-engineering, or sharing with third-party manufacturers is strictly
              prohibited.
            </p>
          </div>

          {/* Section 8 */}
          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">08.</span> Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              All transactions, commercial contracts, and agreements executed with
              National Engineering Works shall be governed by, interpreted, and construed
              in accordance with the substantive laws of the Republic of India. Any
              dispute, controversy, or claim arising out of or in connection with machinery
              sales or turnkey contracts shall be subject to the exclusive jurisdiction of
              the competent courts located in <strong>Solapur, Maharashtra, India</strong>.
            </p>
          </div>

          {/* Section 9 */}
          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">09.</span> Contact for Contractual Inquiries
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              For clarification regarding contract terms, tenders, or warranty claims,
              contact our commercial desk:
            </p>
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 text-sm space-y-1.5">
              <p className="font-bold text-slate-900">{company.name} — Commercial Department</p>
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
          <Link to="/privacy" className="text-blue-700 hover:underline">
            View Privacy Policy →
          </Link>
        </div>
      </section>
    </div>
  );
}

