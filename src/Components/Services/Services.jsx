// src/Components/Services/Services.jsx
/* eslint-disable react-refresh/only-export-components */
"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { company } from "../../Data/Machines";
import { Arrow } from "../UI";

export const plantSolutions = [
  {
    id: "dal-mill",
    title: "Turnkey Dal Processing Plants",
    eyebrow: "COMPLETE PULSE MILLING INFRASTRUCTURE",
    capacity: "Throughput discussed per enquiry",
    img: "/Images/Plant-1.jpg",
    shortDesc:
      "Pulse processing may combine crop cleaning, conditioning, de-husking, separation and finishing equipment. The process sequence depends on the pulse, product, site and expected throughput.",
    fullDesc:
      "A dal processing line may include cleaning, conditioning, de-husking, separation, grading and conveying equipment. The final process and machinery should be selected for the pulse, product, available site and target throughput.",
    processSteps: [
      {
        step: "01",
        title: "Intake & Pre-Cleaning",
        desc: "Raw pulses pass through multi-purpose screeners and dry gravity de-stoners to remove stones, clay lumps, straw, and light chaff.",
      },
      {
        step: "02",
        title: "Pitting & Conditioning",
        desc: "Precision emery scratchers break the hard exterior hull followed by controlled water/oil tempering to loosen the seed coat without wetting the interior cotyledon.",
      },
      {
        step: "03",
        title: "High-Yield De-Husking",
        desc: "Our balanced Fatka machines and emery hullers strip the hulls efficiently with gentle, controlled friction, preventing grain shattering.",
      },
      {
        step: "04",
        title: "Aspiration & Husk Removal",
        desc: "Negative-pressure cyclones and rotary airlocks lift away detached husk into collection bins, leaving clean split and whole dal.",
      },
      {
        step: "05",
        title: "Buffing & Water Polishing",
        desc: "Buff polishers and dal polishers create a brilliant, natural shine and smooth texture demanded by commercial consumer markets.",
      },
      {
        step: "06",
        title: "Precision Sizing & Bagging",
        desc: "Multi-deck round graders and plansifters classify finished dal by size and split quality directly into clean packing bins.",
      },
    ],
    keyMachinery: [
      "Advanced De-Stoners",
      "Fatka Hullers",
      "Rill Graders",
      "Buff Polishers",
      "Dal Polishers",
      "Bucket Elevators",
      "Central Cyclone System",
    ],
    suitableCrops: [
      "Toor Dal (Pigeon Pea)",
      "Chana Dal (Chickpea)",
      "Moong Dal (Green Gram)",
      "Urad Dal (Black Gram)",
      "Masoor Dal (Lentil)",
    ],
    highlights: [
      "Process stages selected for the product and site",
      "Equipment options include cleaning, de-husking and grading",
      "Discuss throughput and layout requirements during enquiry",
    ],
  },
  {
    id: "rice-mill",
    title: "Modern Rice Milling & Polishing Plants",
    eyebrow: "PADDY TO GRADE-A TRANSLUCENT RICE",
    capacity: "Throughput discussed per enquiry",
    img: "/Images/rice-mill.jpg",
    shortDesc:
      "Rice processing may involve paddy cleaning, de-stoning, hulling, polishing and grading. Equipment options depend on the paddy and required process.",
    fullDesc:
      "A rice processing line may combine paddy cleaning, de-stoning, hulling, polishing, grading and material handling. Confirm the machinery and process against your paddy, output goals and site requirements.",
    processSteps: [
      {
        step: "01",
        title: "Paddy Pre-Cleaning",
        desc: "High-volume air aspiration strips light dust, immature paddy, and foreign straw before processing.",
      },
      {
        step: "02",
        title: "Gravity De-Stoning",
        desc: "A vibrating inclined deck separates heavy mud balls, stones, and glass fragments identical in size to paddy.",
      },
      {
        step: "03",
        title: "Gentle Rubber Roll Hulling",
        desc: "Hulling equipment removes husk from paddy; suitable machinery depends on the paddy and process requirements.",
      },
      {
        step: "04",
        title: "Brown Rice Separation",
        desc: "Paddy separators segregate unhusked paddy and return it for re-milling while clean brown rice advances.",
      },
      {
        step: "05",
        title: "Silky Water-Mist Polishing",
        desc: "Precision rice silky friction machines inject fine water mist to buff the bran layer into a brilliant translucent sheen.",
      },
      {
        step: "06",
        title: "Thickness & Length Grading",
        desc: "Round graders and plan swifters separate broken tips, broken halves, and oversized fractions into distinct outlets.",
      },
    ],
    keyMachinery: [
      "Rice Silky Polishers",
      "De-Stoners",
      "Paddy Cleaners",
      "Round Graders",
      "Centrifugal Blowers",
      "Z-Elevators",
    ],
    suitableCrops: [
      "Basmati Rice",
      "Non-Basmati White Rice",
      "Parboiled Paddy",
      "Sona Masoori",
      "Kolam Rice",
    ],
    highlights: [
      "Process options for paddy cleaning, hulling and polishing",
      "Grading and material handling options from the machinery catalogue",
      "Discuss the required output and site during enquiry",
    ],
  },
  {
    id: "cleaning-plant",
    title: "Commercial Grain & Seed Cleaning Lines",
    eyebrow: "PRECISION CLEANING & GRAVITY SORTING",
    capacity: "Throughput discussed per enquiry",
    img: "/Images/cleaning-plant.jpg",
    shortDesc:
      "Grain cleaning equipment can include screening, aspiration, de-stoning and grading stages. The machine selection depends on the crop and the impurities to remove.",
    fullDesc:
      "A cleaning line may combine pre-cleaning, screening, aspiration, de-stoning and grading. The process should be selected for the crop, material condition and required downstream use.",
    processSteps: [
      {
        step: "01",
        title: "Dump Pit & Bulk Scalping",
        desc: "Raw truck-dump intake hopper with rotary drum sieve removing oversized strings, corn cobs, and twigs.",
      },
      {
        step: "02",
        title: "Multi-Screen Vibration Cleaning",
        desc: "Multi-purpose cleaner with perforated screens removes large foreign objects and undersized sand.",
      },
      {
        step: "03",
        title: "Counter-Flow Aspiration",
        desc: "Negative pressure air column lifts chaff, light seeds, and dust directly into collection cyclones.",
      },
      {
        step: "04",
        title: "Dry Gravity Separation",
        desc: "Fluidized deck stratifies and separates heavy stones, broken kernels, and hollow insect-damaged seeds.",
      },
      {
        step: "05",
        title: "Magnetic Tramp Metal Trapping",
        desc: "Rare-earth neodymium magnet chutes protect downstream processing rolls and milling discs from metal contaminants.",
      },
    ],
    keyMachinery: [
      "Multi-Purpose Cleaner",
      "Vibro Classifiers",
      "De-Stoners",
      "Specific Gravity Separators",
      "Air Boxes",
      "Bucket Elevators",
    ],
    suitableCrops: [
      "Wheat",
      "Soybean",
      "Maize / Corn",
      "Bengal Gram",
      "Mustard / Oilseeds",
      "Barley",
      "Pulses",
    ],
    highlights: [
      "Cleaning stages selected for the crop and impurities",
      "Catalogue options include screening and de-stoning machinery",
      "Discuss throughput and downstream process requirements",
    ],
  },
  {
    id: "dust-plant",
    title: "Centralized Pneumatic Dust Control & Aspiration",
    eyebrow: "FACTORY AIR HYGIENE & PARTICULATE RECOVERY",
    capacity: "Airflow discussed per enquiry",
    img: "/Images/Plant-5.jpg",
    shortDesc:
      "Dust control options include blowers, cyclones, rotary airlocks and ducting. Equipment and layout depend on the plant and dust collection points.",
    fullDesc:
      "A dust control system may include capture hoods, ducting, blowers, cyclones and rotary airlocks. The required arrangement depends on the plant layout, equipment and material flow.",
    processSteps: [
      {
        step: "01",
        title: "Point-of-Generation Hoods",
        desc: "Custom-fitted aerodynamic aspiration hoods capture dust at elevator heads, cleaner outlets, and discharge gates.",
      },
      {
        step: "02",
        title: "Engineered Ducting Network",
        desc: "Precision velocity balancing prevents dust from settling inside duct branches, ensuring uniform vacuum across the line.",
      },
      {
        step: "03",
        title: "Centrifugal Vortex Separation",
        desc: "Cyclones can be used to separate collected material from an air stream; suitability depends on the system design.",
      },
      {
        step: "04",
        title: "Airlock Continuous Discharge",
        desc: "Machined rotary valves continuously discharge settled husk and dust without losing line vacuum.",
      },
      {
        step: "05",
        title: "Clean Air Exhaust Stack",
        desc: "Heavy-duty industrial centrifugal blower exhausts clean air meeting statutory factory pollution norms.",
      },
    ],
    keyMachinery: [
      "Industrial Centrifugal Blowers",
      "Rotary Airlock Valves",
      "High-Efficiency Cyclones",
      "Expansion Air Boxes",
      "Modulating Dampers",
    ],
    suitableCrops: [
      "Dal Mill Dust",
      "Rice Husk",
      "Wheat Chaff",
      "Flour Dust",
      "Spice Powders",
    ],
    highlights: [
      "Catalogue options include blowers, cyclones and rotary airlocks",
      "Equipment selection depends on plant layout and collection points",
      "Discuss operating requirements and material flow during enquiry",
    ],
  },
  {
    id: "conveying-plant",
    title: "Bulk Material Handling & Elevation Grids",
    eyebrow: "SEAMLESS INTER-EQUIPMENT CONVEYANCE",
    capacity: "Throughput discussed per enquiry",
    img: "/Images/Plant-6.jpg",
    shortDesc:
      "Material handling options include bucket elevators, Z-elevators, screw conveyors and gravity chutes. Equipment depends on product, route and site layout.",
    fullDesc:
      "A material handling layout may use elevators, conveyors and chutes to move product between process stages. Select equipment for the material, transfer route and plant arrangement.",
    processSteps: [
      {
        step: "01",
        title: "Floor Intake & Feeding",
        desc: "Ground-level receiving hoppers with slide gates regulating steady feed rates into elevator boots.",
      },
      {
        step: "02",
        title: "Vertical Cup Elevation",
        desc: "Slow-speed, gentle-discharge bucket elevators lift grains across plant floors without kernel damage.",
      },
      {
        step: "03",
        title: "Horizontal Screw Conveyance",
        desc: "Enclosed tubular screw conveyors transfer grains across long spans with clean, dustless transit.",
      },
      {
        step: "04",
        title: "Multi-Way Diverter Routing",
        desc: "Pneumatic or manual diverter flaps route streams between primary machines, backup lines, and storage silos.",
      },
    ],
    keyMachinery: [
      "Centrifugal Bucket Elevators",
      "Z-Type Elevators",
      "Tubular Screw Conveyors",
      "U-Trough Conveyors",
      "Two-Way & Three-Way Diverter Valves",
    ],
    suitableCrops: [
      "Whole Grains",
      "Split Pulses",
      "Flour Streams",
      "Husks",
      "Commercial Seeds",
    ],
    highlights: [
      "Catalogue options include elevators and conveyors",
      "Transfer route and material inform equipment selection",
      "Discuss plant layout and throughput during enquiry",
    ],
  },
  {
    id: "finishing-plant",
    title: "Turnkey Finishing, Plansifting & Grading Lines",
    eyebrow: "SIZING & GRADE CLASSIFICATION",
    capacity: "Throughput discussed per enquiry",
    img: "/Images/Plant-7.jpg",
    shortDesc:
      "Finishing and grading options include plansifters, drum screens, round graders and gravity separators. The right arrangement depends on product and target grades.",
    fullDesc:
      "Finishing lines may combine screening, plansifting, grading and separation equipment. The sequence and screen selection depend on the material and required product grades.",
    processSteps: [
      {
        step: "01",
        title: "Rotary Drum Scalping",
        desc: "Separates fine dust and oversized lumps from finished grain streams.",
      },
      {
        step: "02",
        title: "Multi-Tier Gyratory Plansifting",
        desc: "Suspended plansifter cabin shakes nested sieve frames in a circular motion to divide fractions by aperture size.",
      },
      {
        step: "03",
        title: "Rotary Cylinder Sizing",
        desc: "Round graders with punched screens isolate round grains from oblong or flat fragments.",
      },
      {
        step: "04",
        title: "Fluidized Bed Gravity Table",
        desc: "Separates seeds of identical physical size based on internal density and test weight.",
      },
      {
        step: "05",
        title: "Finished Product Silo Feeds",
        desc: "Clean fractions discharge into categorized storage bins ready for automated weighing and bagging.",
      },
    ],
    keyMachinery: [
      "Multi-Compartment Plan Swifters",
      "Round Graders",
      "Specific Gravity Tables",
      "Drum Sieves",
      "Aspiration Hoods",
    ],
    suitableCrops: [
      "Split Dal (Toor, Chana, Moong)",
      "Polished Rice",
      "Soybean Seeds",
      "Wheat Semolina",
      "Besan / Gram Flour",
    ],
    highlights: [
      "Catalogue options include grading and screening equipment",
      "Screen and process selection depends on the product",
      "Discuss target grades and throughput during enquiry",
    ],
  },
];

export default function Services() {
  const scrollToPlant = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800">
      {/* 1. HERO HEADER: WHITE & ROYAL BLUE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 text-slate-900 pt-24 pb-20 px-6 md:px-12 border-b border-blue-100/80">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#1d4ed8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Soft radial blue lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-50 text-blue-700 border border-blue-200/90 shadow-xs mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            GRAIN &amp; PULSE PROCESSING • SOLAPUR, MAHARASHTRA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            Grain &amp; Pulse Processing
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
              Plant Solutions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Explore equipment for cleaning, milling, material handling, dust
            control and grading. Plant requirements depend on your crop, process,
            throughput and site.
          </motion.p>

          {/* Processing areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-blue-100"
          >
            <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-700">
                Dal
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">
                Milling
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-700">
                Rice
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">
                Processing
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-700">
                Grain
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">
                Cleaning
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md transition">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-700">
                Grading
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-1 block">
                &amp; Finishing
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STICKY QUICK-NAVIGATION TABS BAR */}
      <section className="py-4 bg-white border-b border-blue-100/80 sticky top-20 z-20 shadow-xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4 overflow-x-auto scrollbar-hide">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0">
            JUMP TO PLANT TYPE:
          </span>
          <div className="flex items-center gap-2">
            {[
              { id: "dal-mill", label: "🌾 Dal Mill Plants" },
              { id: "rice-mill", label: "🍚 Rice Milling Plants" },
              { id: "cleaning-plant", label: "🧹 Cleaning & De-Stoning" },
              { id: "dust-plant", label: "💨 Dust & Aspiration" },
              { id: "conveying-plant", label: "⚙️ Material Handling" },
              { id: "finishing-plant", label: "📐 Finishing & Grading" },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => scrollToPlant(p.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 border border-slate-200 transition whitespace-nowrap"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED PLANT SOLUTIONS SECTIONS (WITH PHOTOS & FULL EXPLANATION) */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
        {plantSolutions.map((plant, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={plant.id}
              id={plant.id}
              className="scroll-mt-36 p-8 sm:p-10 md:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              {/* Plant Section Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">
                    {plant.eyebrow}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {plant.title}
                  </h2>
                </div>
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                  Discuss throughput and configuration
                </span>
              </div>

              {/* Main Visual & Overview Grid */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Left/Right Plant Photo Showcase */}
                <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                  <div className="aspect-[4/3] w-full bg-slate-900 relative">
                    <img
                      src={plant.img}
                      alt={plant.title}
                      loading="lazy"
                      onError={(e) => {
                        const fallback = "/Images/Plant-1.jpg";
                        if (!e.currentTarget.src.endsWith(fallback)) {
                          e.currentTarget.src = fallback;
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                      <span className="font-bold block text-sm drop-shadow-sm">
                        {plant.title}
                      </span>
                      <span className="text-blue-200 text-[11px] drop-shadow-sm">
                        Plant and machinery overview
                      </span>
                    </div>
                  </div>

                  {/* Highlights Bar below Image */}
                  <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      PROJECT CONSIDERATIONS:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {plant.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right/Left Plant Detailed Engineering Explanation */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Plant and machinery overview
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {plant.fullDesc}
                    </p>

                    {/* Target Crops Badge Strip */}
                    <div className="mb-6 p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-2">
                        CROPS TO DISCUSS:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {plant.suitableCrops.map((crop, i) => (
                          <span
                            key={i}
                            className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-white text-blue-800 border border-blue-200/80 shadow-xs"
                          >
                            {crop}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Integrated Machinery Grid */}
                    <div className="mb-8">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                        RELATED CATALOGUE MACHINERY:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {plant.keyMachinery.map((mach, i) => (
                          <span
                            key={i}
                            className="inline-block px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/80"
                          >
                            ⚙️ {mach}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Direct Action Link */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-500 font-medium">
                      Share your crop, throughput and site requirements.
                    </span>
                    <Link
                      to={`/quote?machine=${encodeURIComponent(plant.title)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition shadow-sm"
                    >
                      Request Layout &amp; Quotation
                      <Arrow diagonal className="w-3.5 h-3.5 text-white" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* 6-Step Sequential Process Flow Diagram */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                  SEQUENTIAL PROCESS FLOW
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-6">
                  How Grains Move Through the {plant.title}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {plant.processSteps.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition flex items-start gap-3.5 group"
                    >
                      <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                        {s.step}
                      </span>
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm mb-1">
                          {s.title}
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* 4. THE TURNKEY EXECUTION PROCESS (HOW WE DELIVER) */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-slate-50 border-t border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
              PLANNING A PROCESSING LINE
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Start with the crop and required process
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              The machine combination depends on the material, process stages,
              target throughput and site layout. Share these details with us to
              discuss suitable options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                num: "01",
                title: "Crop & Flow Analysis",
                desc: "We analyze your raw material characteristics, moisture levels, building footprint, and target daily output.",
              },
              {
                num: "02",
                title: "3D CAD Simulation",
                desc: "Full equipment elevation drawings, floor clearances, cat-walk access, and aspiration balance calculations.",
              },
              {
                num: "03",
                title: "Solapur Fabrication",
                desc: "Heavy-gauge laser cutting, CNC bending, and precision dynamic balancing in our Solapur MIDC manufacturing unit.",
              },
              {
                num: "04",
                title: "On-Site Erection",
                desc: "Our senior plant technicians supervise mechanical erection, ducting balance, and electrical panel wiring.",
              },
              {
                num: "05",
                title: "Trial Runs & Handover",
                desc: "Full-load grain trial runs, recovery verification, and hands-on operational training for your plant staff.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-2xl font-mono font-extrabold text-blue-600 mb-2 group-hover:scale-105 transition-transform">
                  {step.num}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LUXURY PROJECT CONSULTATION CTA BANNER */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white text-center px-8 py-16 sm:py-20 rounded-3xl shadow-2xl">
          {/* Subtle radial glow & pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto z-10">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-200 block mb-3">
              DISCUSS YOUR TURNKEY FACILITY
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
              Planning to Build a Dal Mill, Rice Plant, or Cleaning Line?
            </h2>
            <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              Speak with National Engineering Works in Solapur, Maharashtra.
              Share the crop, process stages and site details to discuss
              machinery and plant options.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-blue-900 bg-white hover:bg-blue-50 transition shadow-lg hover:shadow-xl"
              >
                Schedule Plant Consultation
                <Arrow diagonal className="w-4 h-4 text-blue-900" />
              </Link>
              <a
                href={`tel:${company.phones[0]}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition"
              >
                Call Chief Engineer (+91 {company.phones[0]})
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
