import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
const images = [
  "https://5.imimg.com/data5/SELLER/Logo/2021/9/CO/YC/GQ/28130970/jpg-90x90.jpeg",
  "http://www.tirupathiagro.com/wp-content/uploads/2020/12/cropped-logoColor.png",
  "https://5.imimg.com/data5/SZ/LA/FG/SELLER-19129554/samarth-logo-120x120.jpg",
  "https://www.zaubacorp.com/public/static/images/logo-Zauba.png?UrGoWW",
  "https://www.nathtrading.com//images/logo-img.png",
  "https://5.imimg.com/data5/SELLER/Logo/2023/12/366453459/CZ/HY/EO/27984629/irie-120x120.jpeg",
  
];
const OurValuableClientsSection = () => {
  const galleryRef = useRef(null);
  
  useEffect(() => {
    const gallery = galleryRef.current;
    let scrollAmount = 0;
    let scrollSpeed = 1; // Speed of scrolling
  
    const scrollGallery = () => {
      if (gallery) {
        gallery.scrollLeft += scrollSpeed;
        scrollAmount += scrollSpeed;
        if (scrollAmount >= gallery.scrollWidth / 2) {
          gallery.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    };
  
    const interval = setInterval(scrollGallery, 20); // Adjust interval for scroll speed
  
    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      setInterval(scrollGallery, 20);
    };
  
    gallery.addEventListener("mouseenter", handleMouseEnter);
    gallery.addEventListener("mouseleave", handleMouseLeave);
  
    return () => {
      clearInterval(interval);
      gallery.removeEventListener("mouseenter", handleMouseEnter);
      gallery.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  // const clientLogos = [
  //   "https://5.imimg.com/data5/SELLER/Logo/2021/9/CO/YC/GQ/28130970/jpg-90x90.jpeg", // Replace with actual logo paths
  //   "/images/client2-logo.png",
  //   "/images/client3-logo.png",
  //   "/images/client4-logo.png",
  //   "/images/client5-logo.png",
  // ];

  // const logoContainerRef = useRef(null);

  // Auto-scroll effect
  // useEffect(() => {
  //   const scrollInterval = setInterval(() => {
  //     if (logoContainerRef.current) {
  //       const container = logoContainerRef.current;
  //       container.scrollBy({
  //         left: container.clientWidth,
  //         behavior: "smooth",
  //       });
  //     }
  //   }, 3000);
     // Scroll every 3 seconds

    // Cleanup interval on component unmount
  //   return () => clearInterval(scrollInterval);
  // }, []);

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-2xl text-left py-2 md:text-4xl  border-b-2 border-green-600 mb-4">
      Our Valuable Clients
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We take pride in the relationships we've built with our trusted clients. 
          Over the years, we've worked with industry leaders and innovators, 
          delivering top-notch engineering solutions and ensuring their success.
        </p>

<div className="w-full my-8 relative overflow-hidden">
<motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
  ref={galleryRef}
  className=" w-full justify-evenly border-b border-black  p-4 shadow-xl shadow-zinc-800 flex overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar"
>
  {images.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Gallery Image ${index + 1}`}
      className="w-28 h-28 p-2 shadow-xl object-cover m-2"
    />
  ))}
</motion.div>
</div>
      </div>
    </section>
  );
};

export default OurValuableClientsSection;


