// import { motion } from "framer-motion";

// const galleryImages = [
//   {
//     id: 1,
//     img: "/Images/plant1.jpg",
//     title: "Automatic Dal Processing Plant",
//     desc: "A complete high-capacity dal processing setup with automated flow control and safety mechanisms.",
//   },
//   {
//     id: 2,
//     img: "/Images/plant2.jpg",
//     title: "Grain Cleaning & Sorting Unit",
//     desc: "Modern cleaning section equipped with De-Stoners, Fatka machines, and Air Box systems for pure output.",
//   },
//   {
//     id: 3,
//     img: "/Images/plant3.jpg",
//     title: "Milling and Polishing Line",
//     desc: "Advanced milling line featuring Emry Roll and Buff Polisher for superior product finishing.",
//   },
//   {
//     id: 4,
//     img: "/Images/plant4.jpg",
//     title: "Material Handling System",
//     desc: "Efficient grain movement system using Z Elevators and Screw Conveyors for smooth plant operation.",
//   },
//   {
//     id: 5,
//     img: "/Images/plant5.jpg",
//     title: "Dust Control and Air Management",
//     desc: "Installed with high-performance Rotary Airlocks and Cyclone separators for clean, safe environments.",
//   },
// ];

// export default function Gallery() {
//   return (
//     <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-12">
//       <div className="text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
//         >
//           Our <span className="text-blue-600">Plant Gallery</span>
//         </motion.h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Explore some of our modern plant setups showcasing advanced machinery, innovative layouts, and
//           industry-grade automation solutions.
//         </p>
//       </div>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {galleryImages.map((item) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
//             />
//             <div className="p-6">
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm">{item.desc}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Bottom Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="mt-16 text-center"
//       >
//         <h3 className="text-2xl font-semibold text-gray-800">
//           Transforming Industrial Spaces
//         </h3>
//         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
//           Every plant we build is designed for efficiency, durability, and scalability — ensuring top performance
//           and long-term success for your business.
//         </p>
//       </motion.div>
//     </section>
//   );
// }
import { motion } from "framer-motion";

const galleryImages = [
  "/Images/Plant-1.jpg",
  "/Images/Plant-3.jpg",
  "/Images/Plant-4.jpg",
  "/Images/Plant-5.jpg",
  "/Images/Plant-6.jpg",
  "/Images/Plant-7.jpg",

];

export default function Gallery() {
  return (
    <section className="min-h-screen bg-white py-8 px-6 md:px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl border-b-2 p-2 border-green-700 text-gray-800 mb-4"
        >
          Plant <span className="text-blue-600">Gallery</span>
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A visual showcase of our advanced manufacturing and processing plants.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-md  transition-all duration-300"
          >
            <img
              src={img}
              alt={`Plant ${index + 1}`}
              className="w-full h-72 object-cover "
            />
          </motion.div>
        ))}
      </div>

      {/* Footer line */}
      <div className="text-center mt-16 text-gray-600">
        <p>Precision, efficiency, and reliability — built into every plant we create.</p>
      </div>
    </section>
  );
}
