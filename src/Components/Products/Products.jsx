// const AdvancedMachinesPage = () => {
//   return (
//     <div>
//       <section className=" bg-gradient-to-r from-zinc-400 to-zinc-200  w-full py-6 px-2">
//         <div className="text-center">
//           <h2 className="text-2xl text-left mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
//             National Engineering Works
//           </h2>
//           <p className="mt-4 text-lg">
//             We have invested in the most innovative and high-quality machinery
//             to ensure top-notch results in food processing. Below are the
//             machines that set us apart in the industry.
//           </p>
//         </div>
//         <div className=" py-4 px-4 md:px-4">
//       <div className="rounded-md  bg-zinc-200 max-w-6xl mx-auto">
        

//         {/* Machine Features */}
//         <div className="grid grid-cols-1 md:grid-cols-2  gap-8 p-4 ">
//           {/* Image */}
//           <div className="flex justify-center">
//             <img
//               src="https://anval.net/wp-content/uploads/2020/01/RH-Series.png"
//               alt="Advanced Machines"
//               className=""
//             />
//           </div>
//           {/* Text */}
//           <div>
//             <h3 className="text-2xl border-b border-black font-medium text-gray-900 mb-4">
//               Why Choose Our Machines?
//             </h3>
//             <p className="text-gray-700 mb-4">
//               Our advanced machines are designed with state-of-the-art technology to enhance efficiency, accuracy, and productivity across industries. Whether you’re involved in manufacturing, processing, or construction, our equipment delivers consistent, high-quality performance.
//             </p>
//             <ul className="list-disc list-inside text-gray-700 space-y-2">
//               <li>
//                 **Precision Engineering** – Designed to handle complex tasks with utmost accuracy.
//               </li>
//               <li>
//                 **Durability** – Built with high-quality materials to withstand heavy usage.
//               </li>
//               <li>
//                 **Energy Efficient** – Optimized for reduced energy consumption without compromising output.
//               </li>
//               <li>
//                 **User-Friendly Interface** – Easy-to-operate controls for seamless operation.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//         {/* Machine 1 - De-Stoner */}
//         <div className="flex border-b p-2  border-black  flex-col md:flex-row items-center ">
//           <div className="w-full flex justify-center md:w-1/3 p-4">
//           <a href="/destoner" >
//             <img
//               src="https://satake-usa.com/wp-content/uploads/2021/04/Destoner-SGA-B.png"
//               alt="De-Stoner"
//               className="w-52  h-52 object-cover rounded-md"
//             />
//             </a>
//           </div>
//           <div className="w-full md:w-2/3 p-4">
//             <h3 className="text-3xl border-b-2 border-green-700 ">De-Stoner</h3>
//             <p className="mt-2 text-lg">
//               The De-Stoner efficiently removes stones and other foreign
//               materials from grains, ensuring product purity and improving the
//               final output quality.
//             </p>
//           </div>
//         </div>

//         {/* Machine 2 - Elevators */}
//         <div className="flex  border-b p-2 border-black  flex-col md:flex-row items-center  ">
//           <div className="w-full md:w-2/3 p-4">
//             <h3 className="text-3xl border-b-2 border-green-700 ">Elevators</h3>
//             <p className="mt-2 text-lg">
//               Elevators are used for efficient vertical transportation of bulk
//               materials in the processing plant. They ensure smooth handling and
//               reliable operation.
//             </p>
//           </div>
//           <div className="w-full flex justify-center md:w-1/3 p-4">
//           <a href="/elevator" >
//             <img
//               src="https://5.imimg.com/data5/SELLER/Default/2022/8/JF/YF/WC/16395088/mild-steel-bucket-elevator.png"
//               alt="Elevators"
//               className="w-52  h-52 object-cover rounded-md"
//             /></a>
//           </div>
//         </div>

//         {/* Machine 3 - Horizontal Cyclone */}
//         <div className="flex border-b p-2 border-black  flex-col md:flex-row items-center  ">
//           <div className="w-full flex justify-center m-2 md:w-1/3 p-4">
//         <a href="/Cyclone" >
//             <img
//               src="https://5.imimg.com/data5/SELLER/Default/2023/8/336868120/LF/CB/CT/3370644/horizontal-cyclone-400-2-500x500.png"
//               alt="Horizontal Cyclone"
//               className="w-52  h-52 object-cover rounded-md"
//             />
//           </a>
//           </div>
//           <div className="w-full md:w-2/3 p-4">
//             <h3 className="text-3xl border-b-2 border-green-700 ">
//               Horizontal Cyclone
//             </h3>
//             <p className="mt-2 text-lg">
//               The Horizontal Cyclone is designed for high-efficiency dust
//               collection, ensuring clean production environments and a safer
//               workplace.
//             </p>
//           </div>
//         </div>

        

//         {/* Machine 5 - Fatka Machine */}
//         <div className="flex border-b p-2 border-black  flex-col md:flex-row items-center  ">
//           <div className="w-full md:w-2/3 p-4">
//             <h3 className="text-3xl border-b-2 border-green-700 ">
//               Fatka Machine
//             </h3>
//             <p className="mt-2 text-lg">
//               The Fatka Machine separates and cleans pulses and grains by
//               removing impurities, providing high-quality output for further
//               processing.
//             </p>
//           </div>
//           <div className="w-full flex justify-center md:w-1/3 p-4">
//           <a href="/fatka" >
//             <img
//               src="https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/plastic-film-jhatka-fatka-machine-3-hp-capacity-20-50-20230819060549.png"
//               alt="Fatka Machine"
//               className="w-52  h-52 object-cover rounded-md"
//             /></a>
//           </div>
//         </div>

//         {/* Machine 6 - Buff Polisher */}
//         <div className="flex border-b p-2 border-black  flex-col md:flex-row items-center  ">
//           <div className="w-full flex justify-center md:w-1/3 p-4">
//           <a href="/buff" >
//             <img
//               src="https://5.imimg.com/data5/SELLER/Default/2023/8/336872681/DM/NV/KM/3370644/dal-polisher-1-500x500.png"
//               alt="Buff Polisher"
//               className="w-52  h-52 object-cover rounded-md"
//             /></a>
//           </div>
//           <div className="w-full md:w-2/3 p-4">
//             <h3 className="text-3xl border-b-2 border-green-700 ">
//               Buff Polisher
//             </h3>
//             <p className="mt-2 text-lg">
//               The Buff Polisher enhances the appearance and quality of grains by
//               polishing them to a uniform shine, ensuring a premium finish for
//               processed products.
//             </p>
//           </div>
//         </div>

//         {/* Machine 7 - Dal Polisher */}
//         <div className="flex border-b p-2 border-black  flex-col md:flex-row items-center  ">
//           <div className="w-full md:w-2/3 p-4">
//             <h3 className="text-3xl border-b-2 border-green-700 ">
//               Dal Polisher
//             </h3>
//             <p className="mt-2 text-lg">
//               The Dal Polisher machine is designed to enhance the quality of
//               pulses by polishing them, improving the texture, and making them
//               more marketable.
//             </p>
//           </div>
//           <div className="w-full flex justify-center md:w-1/3 p-4">
//           <a href="/dal" >
//             <img
//               src="https://hindustanagro.in/wp-content/themes/hindustan/assets/images/product/dal-polisher.webp"
//               alt="Dal Polisher"
//               className="w-52  h-52 object-cover rounded-md"
//             /></a>
//           </div>
//         </div>

//         {/* Machine 8 - Screw Conveyor */}
//         <div className="flex border-b p-2 border-black  flex-col md:flex-row items-center  ">
//           <div className="w-full flex justify-center md:w-1/3 p-4">
//           <a href="/conveyor" >
//             <img
//               src="https://www.cimbria.com/content/dam/public/grain-and-protein/cimbria/conveying/screw-conveyors/screw-conveyor-cu.png"
//               alt="Screw Conveyor"
//               className="w-52  h-52 object-cover rounded-md"
//             />
//             </a>
//           </div>
//           <div className="w-full md:w-2/3 p-4">
//             <h3 className="text-3xl border-b-2 border-green-700 ">
//               Screw Conveyor
//             </h3>
//             <p className="mt-2 text-lg">
//               The Screw Conveyor is used to transport bulk materials like grains
//               and powders in a controlled and efficient manner, making it a
//               vital part of the production line.
//             </p>
//           </div>
//         </div>

//         {/* Machine 9 - Rill Machine */}
//         <div className="flex border-b p-2 border-black  flex-col md:flex-row items-center  ">
//           <div className="w-full md:w-2/3 p-4">
//             <h3 className="text-3xl border-b-2 border-green-700 ">
//               Rill Machine
//             </h3>
//             <p className="mt-2 text-lg">
//               The Rill Machine is used for separating and grading grains based
//               on size, ensuring uniformity and improving the overall quality of
//               the product.
//             </p>
//           </div>
//           <div className="w-full flex justify-center md:w-1/3 p-4">
//           <a href="Rill" >
//             <img
//               src="https://static.wixstatic.com/media/5f1a7b_1bd890a7f6f04fcbb414e2cec26ede91~mv2.png/v1/crop/x_476,y_157,w_2024,h_1379/fill/w_620,h_412,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01-01_edited.png"
//               alt="Rill Machine"
//               className="w-52  h-52 object-cover rounded-md"
//             />
//             </a>
//           </div>
//         </div>

//         {/* Machine 10 - Rotary Airlock */}
//         <div className="flex border-b p-2 border-black  flex-col md:flex-row items-center  ">
//           <div className="w-full flex justify-center md:w-1/3 p-4">
//           <a href="/rotary" >
//             <img
//               src="https://anval.net/wp-content/uploads/2020/01/RH-Series.png"
//               alt="Rotary Airlock"
//               className="w-52  h-52 object-cover rounded-md"
//             />
//             </a>
//           </div>
//           <div className="w-full md:w-2/3 p-4">
//             <h3 className="text-3xl border-b-2 border-green-700 ">
//               Rotary Airlock
//             </h3>
//             <p className="mt-2 text-lg">
//               The Rotary Airlock is essential for controlling the flow of
//               powders and granular materials while maintaining air pressure in
//               the system, crucial for dust collection.
//             </p>
//           </div>
//         </div>

//         {/* Machine 11 - Blower Machine */}
//         <div className="flex p-2 flex-col md:flex-row items-center ">
//           <div className="w-full md:w-2/3 p-4">
//             <h3 className="text-3xl  border-b-2 border-green-700 ">
//               Blower Machine
//             </h3>
//             <p className="mt-2 text-lg">
//               The Blower Machine is used to move air or gases through ducts or
//               pipes, essential in dust collection systems and material handling.
//             </p>
//           </div>
//           <div className="w-full flex justify-center md:w-1/3 p-4">
//           <a href="/blower" >
//             <img
//               src="https://5.imimg.com/data5/SELLER/Default/2023/12/373127974/WA/PI/GQ/27056827/mild-steel-industrial-air-blower-500x500.png"
//               alt="Blower Machine"
//               className="w-52  h-52 object-cover rounded-md"
//             />
//             </a>
//           </div>
//         </div>
//  {/* Expert Team Section */}
//  <div className="bg-zinc-200 py-8 px-6 rounded-lg">
//           <div className="">
//             {/* Text */}
//             <div>
//               <h3 className="text-2xl font-medium text-gray-900 mb-4 border-b border-red-600 ">
//                 Meet Our Expert Team
//               </h3>
//               <p className="text-gray-700 mb-4">
//                 Our team of seasoned professionals is at the heart of our success. With years of hands-on experience and deep technical expertise, our experts are equipped to provide unparalleled support and guidance.
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   **Certified Engineers** – Specialists in machinery installation and maintenance.
//                 </li>
//                 <li>
//                   **Innovative Thinkers** – Continuously pushing boundaries to improve processes.
//                 </li>
//                 <li>
//                   **Customer-Focused** – Committed to understanding your unique needs and delivering tailored solutions.
//                 </li>
//                 <li>
//                   **Problem Solvers** – Addressing challenges swiftly with effective strategies.
//                 </li>
//               </ul>
//             </div>
//             {/* Image */}
          
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-12">
//           <h3 className="text-2xl font-medium text-gray-900 mb-4">
//             Experience Excellence with Our Machines and Team
//           </h3>
//           <p className="text-gray-700 mb-6">
//             Discover how our advanced machines and expert team can transform your operations. Contact us today for more details.
//           </p>
//           <a href="/quote">
         
//           <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition">
//             Learn More
//           </button>
//          </a>
//         </div>
      
//       </section>
//     </div>
//   );
// };

// export default AdvancedMachinesPage;
// "use client";
// import { motion } from "framer-motion";

// const machines = [
//   {
//     id: 1,
//     name: "De-Stoner",
//     desc: "The De-Stoner efficiently removes stones and other foreign materials from grains, ensuring product purity and improving final output quality.",
//     img: "https://satake-usa.com/wp-content/uploads/2021/04/Destoner-SGA-B.png",
//     link: "/destoner",
//   },
//   {
//     id: 2,
//     name: "Elevators",
//     desc: "Used for vertical transportation of bulk materials in processing plants, ensuring smooth handling and reliable operation.",
//     img: "https://5.imimg.com/data5/SELLER/Default/2022/8/JF/YF/WC/16395088/mild-steel-bucket-elevator.png",
//     link: "/elevator",
//   },
//   {
//     id: 3,
//     name: "Horizontal Cyclone",
//     desc: "High-efficiency dust collection ensuring clean production environments and safer workplaces.",
//     img: "https://5.imimg.com/data5/SELLER/Default/2023/8/336868120/LF/CB/CT/3370644/horizontal-cyclone-400-2-500x500.png",
//     link: "/Cyclone",
//   },
//   {
//     id: 4,
//     name: "Fatka Machine",
//     desc: "Separates and cleans pulses and grains by removing impurities, providing high-quality output for further processing.",
//     img: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/plastic-film-jhatka-fatka-machine-3-hp-capacity-20-50-20230819060549.png",
//     link: "/fatka",
//   },
//   {
//     id: 5,
//     name: "Buff Polisher",
//     desc: "Enhances grain appearance by polishing them to a uniform shine, ensuring premium finish for processed products.",
//     img: "https://5.imimg.com/data5/SELLER/Default/2023/8/336872681/DM/NV/KM/3370644/dal-polisher-1-500x500.png",
//     link: "/buff",
//   },
//   {
//     id: 6,
//     name: "Dal Polisher",
//     desc: "Improves texture and marketability of pulses by polishing and refining them with precision.",
//     img: "https://hindustanagro.in/wp-content/themes/hindustan/assets/images/product/dal-polisher.webp",
//     link: "/dal",
//   },
//   {
//     id: 7,
//     name: "Screw Conveyor",
//     desc: "Transports bulk materials like grains and powders efficiently, making it a vital part of the production line.",
//     img: "https://www.cimbria.com/content/dam/public/grain-and-protein/cimbria/conveying/screw-conveyors/screw-conveyor-cu.png",
//     link: "/conveyor",
//   },
//   {
//     id: 8,
//     name: "Rill Machine",
//     desc: "Separates and grades grains by size, ensuring uniformity and improving overall product quality.",
//     img: "https://static.wixstatic.com/media/5f1a7b_1bd890a7f6f04fcbb414e2cec26ede91~mv2.png/v1/crop/x_476,y_157,w_2024,h_1379/fill/w_620,h_412,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01-01_edited.png",
//     link: "/Rill",
//   },
//   {
//     id: 9,
//     name: "Rotary Airlock",
//     desc: "Controls flow of powders and granules while maintaining air pressure — crucial for dust collection systems.",
//     img: "https://anval.net/wp-content/uploads/2020/01/RH-Series.png",
//     link: "/rotary",
//   },
//   {
//     id: 10,
//     name: "Blower Machine",
//     desc: "Moves air or gases through ducts or pipes — essential in dust collection and material handling systems.",
//     img: "https://5.imimg.com/data5/SELLER/Default/2023/12/373127974/WA/PI/GQ/27056827/mild-steel-industrial-air-blower-500x500.png",
//     link: "/blower",
//   },
// ];

// const AdvancedMachinesPage = () => {
//   return (
//     <section className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-12 px-6 md:px-12">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="max-w-6xl mx-auto"
//       >
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 border-b-4 border-green-600 inline-block pb-2">
//             National Engineering Works
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             We invest in state-of-the-art food processing machinery that
//             combines innovation, durability, and precision to deliver superior
//             performance across industries.
//           </p>
//         </div>

//         {/* Intro Card */}
//         <div className="rounded-2xl bg-white/70 shadow-md backdrop-blur-sm p-8 mb-16">
//           <div className="grid md:grid-cols-2 gap-10 items-center">
//             <motion.img
//               whileHover={{ scale: 1.05 }}
//               src="https://anval.net/wp-content/uploads/2020/01/RH-Series.png"
//               alt="Advanced Machines"
//               className="rounded-lg shadow-lg"
//             />
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-green-700 pb-2">
//                 Why Choose Our Machines?
//               </h3>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   <strong>Precision Engineering:</strong> Built for complex
//                   industrial tasks with accuracy.
//                 </li>
//                 <li>
//                   <strong>Durability:</strong> High-quality materials withstand
//                   heavy-duty usage.
//                 </li>
//                 <li>
//                   <strong>Energy Efficiency:</strong> Lower energy usage without
//                   performance loss.
//                 </li>
//                 <li>
//                   <strong>User-Friendly Design:</strong> Easy controls and
//                   intuitive operation.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Machines List */}
//         <div className="space-y-12">
//           {machines.map((m, i) => (
//             <motion.div
//               key={m.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.05 }}
//               className={`flex flex-col md:flex-row items-center gap-8 border-b border-gray-300 pb-8 ${
//                 i % 2 === 1 ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               <a href={m.link} className="w-full md:w-1/3 flex justify-center">
//                 <motion.img
//                   whileHover={{ scale: 1.05 }}
//                   src={m.img}
//                   alt={m.name}
//                   className="w-60 h-60 object-cover rounded-xl shadow-md"
//                 />
//               </a>
//               <div className="w-full md:w-2/3">
//                 <h3 className="text-2xl font-semibold text-gray-900 border-b-2 border-green-700 inline-block mb-3">
//                   {m.name}
//                 </h3>
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   {m.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Team Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="bg-white/70 mt-16 p-8 rounded-2xl shadow-md"
//         >
//           <h3 className="text-3xl font-bold text-gray-900 border-b-2 border-green-700 pb-2 mb-4">
//             Meet Our Expert Team
//           </h3>
//           <p className="text-gray-700 mb-4">
//             Our team of certified engineers and technicians ensures seamless
//             operation and continuous innovation across every project.
//           </p>
//           <ul className="list-disc list-inside text-gray-700 space-y-2">
//             <li>Certified Engineers specializing in precision machinery.</li>
//             <li>Innovative thinkers improving industrial efficiency.</li>
//             <li>Customer-first approach for tailored solutions.</li>
//             <li>Rapid problem-solving with proven strategies.</li>
//           </ul>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           className="text-center mt-16"
//         >
//           <h3 className="text-3xl font-bold text-gray-900 mb-4">
//             Experience Excellence with Our Machines
//           </h3>
//           <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//             Discover how our technology and expertise can redefine your
//             operations. Contact us to learn more.
//           </p>
//           <a href="/quote">
//             <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300">
//               Learn More
//             </button>
//           </a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default AdvancedMachinesPage;
"use client";
import { motion } from "framer-motion";

export default function AdvancedMachinesPage() {
  // const machines = [
  //   {
  //     id: 1,
  //     name: "De-Stoner",
  //     desc: "Removes impurities like stones with precision airflow separation.",
  //     img: "https://satake-usa.com/wp-content/uploads/2021/04/Destoner-SGA-B.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Fatka Machine",
  //     desc: "Cleans and separates pulses efficiently for perfect grain quality.",
  //     img: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/plastic-film-jhatka-fatka-machine-3-hp-capacity-20-50-20230819060549.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Buff Polisher",
  //     desc: "Gives grains a uniform, market-ready shine with minimal power use.",
  //     img: "https://5.imimg.com/data5/SELLER/Default/2023/8/336872681/DM/NV/KM/3370644/dal-polisher-1-500x500.png",
  //   },
  // ];
const machines = [
  {
    id: 1,
    name: "De-Stoner",
    desc: "The De-Stoner efficiently removes stones and other foreign materials from grains, ensuring product purity and improving final output quality.",
    img: "/Images/destoner.jpg",
    link: "/destoner",
  },
  {
    id: 2,
    name: "Elevators",
    desc: "Used for vertical transportation of bulk materials in processing plants, ensuring smooth handling and reliable operation.",
    img: "/Images/bucket-elevator.png",
    link: "/elevator",
  },
  {
    id: 3,
    name: "Horizontal Cyclone",
    desc: "High-efficiency dust collection ensuring clean production environments and safer workplaces.",
    img: "/Images/horizontal-cyclone.png",
    link: "/Cyclone",
  },
  {
    id: 4,
    name: "Fatka Machine",
    desc: "Separates and cleans pulses and grains by removing impurities, providing high-quality output for further processing.",
    img: "/Images/Fatka.jpg",
    link: "/fatka",
  },
  {
    id: 5,
    name: "Buff Polisher",
    desc: "Enhances grain appearance by polishing them to a uniform shine, ensuring premium finish for processed products.",
    img: "/Images/Buff.jpg",
    link: "/buff",
  },
  {
    id: 6,
    name: "Dal Polisher",
    desc: "Improves texture and marketability of pulses by polishing and refining them with precision.",
    img: "/Images/Dal.jpg",
    link: "/dal",
  },
  {
    id: 7,
    name: "Screw Conveyor",
    desc: "Transports bulk materials like grains and powders efficiently, making it a vital part of the production line.",
    img: "/Images/screw-Conveyor.jpg",
    link: "/conveyor",
  },
  {
    id: 8,
    name: "Rill Machine",
          desc: "Separates and grades grains by size, ensuring uniformity and improving overall product quality.",
          img: "/Images/rill-machine.png",
    link: "/Rill",
  },
  {
    id: 9,
    name: "Rotary Airlock",
    desc: "Controls flow of powders and granules while maintaining air pressure — crucial for dust collection systems.",
    img: "/Images/Rotary.jpg",
    link: "/rotary",
  },
  {
    id: 10,
    name: "Blower Machine",
    desc: "Moves air or gases through ducts or pipes — essential in dust collection and material handling systems.",
    img: "/Images/Blower.jpg",
    link: "/blower",
  },
  {
    id: 11,
    name: "Multi-Purpose Cleaner",
    desc: "Combines high-volume aspiration with multi-deck vibrating sieves for grain pre-cleaning and fine separation.",
    img: "/Images/multi-purpose-cleaner.jpg",
    link: "/Cleaning-separating",
  },
  {
    id: 12,
    name: "Round Separator",
    desc: "Circular vibro sifter and grader for precision multi-fraction particle classification and dedusting.",
    img: "/Images/round-separator.jpg",
    link: "/Cleaning-separating",
  },
  {
    id: 13,
    name: "Rice Silky Polisher",
    desc: "Water-mist atomized friction polisher creating an export-grade silky shine and clean kernel finish.",
    img: "/Images/rice-silky.jpg",
    link: "/Milling",
  },
  {
    id: 14,
    name: "Mixer Machine",
    desc: "Heavy-duty horizontal ribbon blender for uniform batch mixing of grains, pulses, flours, and seasonings.",
    img: "/Images/mixer-machine.jpg",
    link: "/Milling",
  },
  {
    id: 15,
    name: "Plan Swifter",
    desc: "Multi-deck gyratory sifting machine delivering high-capacity size separation and grading across milling lines.",
    img: "/Images/plan-swifter.jpg",
    link: "/Finishing",
  },
];
  return (
    <div className="text-zinc-800 overflow-hidden">
      {/* HERO SECTION */}
      <section className="h-full p-4 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl border-b-2 border-green-700 p-2 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-700"
        >
          Engineering The Future Of Machinery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-700 max-w-2xl"
        >
          Combining innovation, design, and performance to deliver next-generation industrial solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className=""
        >
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599577180879-5b2e2d292b0a')] bg-cover bg-center blur-sm"
        ></motion.div>
      </section>

      {/* HORIZONTAL MACHINE SCROLL */}
      <section className="py-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-center mb-12"
        >
          Our Cutting-Edge Machines
        </motion.h2>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 px-8">
            {machines.map((m, i) => (
              <a key={m.id} href={m.link}>
              <motion.div
                key={m.id}
                className="min-w-[300px] bg-white p-6 rounded-2xl shadow-md backdrop-blur-md  transition"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-56 object-contain rounded-lg hover:scale-105 transition mb-4"
                />
                <h3 className="text-xl font-semibold text-zinc-900 mb-2 border-b-2 border-green-700 inline-block ">
                  {m.name}
                </h3>
                <p className="text-gray-700 text-sm">{m.desc}</p>
              </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-4 px-8 text-center">
        <h2 className="text-4xl  text-zinc-800 bg-clip-text mb-12">
          Our Precision Process
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          {["Design", "Prototype", "Test", "Deliver"].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-200/50 p-6 rounded-xl shadow-md transition"
            >
              <div className="text-5xl font-extrabold text-cyan-500 mb-4">
                {i + 1}
              </div>
              <h4 className="text-xl font-semibold mb-2">{step}</h4>
              <p className="text-gray-700 text-sm">
                Step {i + 1} in our process to ensure every product meets
                engineering perfection.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 text-center bg-zinc-200/80">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Build With Precision. Build With Us.
        </motion.h2>
        <p className="max-w-2xl mx-auto text-zinc-900/90 mb-8">
          Partner with our engineers to design solutions that define the next
          generation of industrial efficiency.
        </p>
        <button className="bg-white text-zinc-9 00 font-semibold py-3 px-10 rounded-full hover:bg-gray-100 transition">
          Get In Touch
        </button>
      </section>
    </div>
  );
}
