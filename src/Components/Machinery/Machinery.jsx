import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
export default function AdvancedMachinery() {
    const slides = [
        {
            url: "Images/vibro-destroner.png",

            name: "DE-Stoner",
        },
        {
            url: "Images/buket-elevator.jpg",

            name: "Elevators",
        },
        {
            url: "Images/Fatka.jpg",
            name: "Fatka Machine",
        },
        {
            url: "Images/vibro-classifier.jpg",
            name: "Vibro Classifier",
        },
        {
            url: "Images/horizontal-cyclone.png",
            name: "Horizontal Cyclone",
        },
        {
            url: "Images/vertical-cyclone.jpg",
            name: "Vertical Cyclone",
        },

        {
            url: "Images/Dal.jpg",
            name: "Dal Polisher",
        },
        {
            url: "Images/Centrifugal.jpg",
            name: "Centrifugal Blower",
        },
        {
            url: "Images/Buff.jpg",
            name: "Buff Polisher",
        },
        {
            url: "Images/screw-Conveyor.jpg",
            name: "Screw Conveyor",
        },
        {
            url: "Images/rill-machine.png",
            name: "Rill Machine",
        },
        {
            url: "Images/Blower.jpg",
            name: "Blower Machine",
        },
        {
            url: "Images/Rotary.jpg",
            name: "Rotary Airlock",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };
    return (
        <section className="py-4 bg-gradient-to-br from-blue-50 via-white to-gray-100">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6"
            >
                {/* Header */}
                <h2 className="text-2xl py-2 md:text-4xl border-b-2 border-green-600 mb-4">
                    Advanced Machinery
                </h2>

                {/* Main content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left Content */}
                    <div className="md:w-1/2">
                        <p className="text-gray-700 leading-relaxed text-lg">
                            At <span className="font-semibold text-blue-700">National Engineering Works</span>,
                            we specialize in crafting <span className="font-medium">innovative and efficient industrial machines</span>
                            built for precision, reliability, and performance.
                        </p>

                        <p className="mt-3 text-gray-700">
                            Explore our range of high-quality advanced machines:
                        </p>

                        <ul className="grid grid-cols-2 gap-2 mt-4 text-gray-800">
                            {[
                                "De-Stoner",
                                "Elevators",
                                "Horizontal Cyclone",
                                "Vertical Cyclone",
                                "Centrifugal Blower",
                                "Vibro Classifier",
                                "Fatka Machine",
                                "Buff Polisher",
                                "Dal Polisher",
                                "Screw Conveyer",
                                "Rill Machine",
                                "Rotary Airlock",
                                "Blower Machine",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>

                        <a href="/products">
                            <button className="mt-6 inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-2.5 rounded-lg shadow transition">
                                Explore More →
                            </button>
                        </a>
                    </div>
                    {/* Right Image Slider */}
                    <div className="md:w-1/3  relative">
                        {slides && slides.length > 0 ? (
                            <>
                                <div className="relative min-w-5xl  overflow-hidden transition-all duration-300">
                                    <img
                                        src={slides[currentIndex]?.url}
                                        alt={slides[currentIndex]?.name || "Slide image"}
                                        className="w-full h-[400px] md:h-[500px] object-cover object-center rounded-2xl"
                                    />

                                    {/* Optional — Text Overlay */}
                                    {slides[currentIndex]?.name && (
                                        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-semibold text-lg drop-shadow-md bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm">
                                            {slides[currentIndex]?.name}
                                        </p>
                                    )}

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={prevSlide}
                                        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow transition"
                                        aria-label="Previous Slide"
                                    >
                                        <GrFormPrevious className="text-xl" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow transition"
                                        aria-label="Next Slide"
                                    >
                                        <MdNavigateNext className="text-xl" />
                                    </button>
                                </div>


                                {/* Dots Indicator */}
                                <div className="flex justify-center mt-4 space-x-2">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`h-3 w-3 rounded-full transition-all ${index === currentIndex
                                                ? "bg-blue-700 scale-110"
                                                : "bg-gray-300 hover:bg-blue-500"
                                                }`}
                                        ></button>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="h-72 flex items-center justify-center bg-gray-100 rounded-xl text-gray-500">
                                Loading images...
                            </div>
                        )}
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
