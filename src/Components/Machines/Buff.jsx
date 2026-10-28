const BuffPolisherPage = () => {
    return (
      <div className="bg-gray-300 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-4">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
          Buff Polisher Machine

          </h2>
            <p className="text-lg text-gray-600">
              Achieve professional-grade finishes with our versatile and efficient Buff Polisher Machine. Built for precision and reliability, it's the perfect tool for all your polishing needs.
            </p>
          </div>
  
          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-xl border-b border-black font-medium text-gray-900 mb-6">
                What is a Buff Polisher Machine?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                A Buff Polisher Machine is a powerful tool used to polish surfaces to a smooth, high-gloss finish. It's widely utilized in industries such as automotive, manufacturing, and woodworking to enhance the appearance and longevity of materials.
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Delivers precise polishing for metal, wood, and stone.</li>
                <li>Adjustable speed settings for varied applications.</li>
                <li>Durable construction for intensive use.</li>
                <li>Easy-to-handle design for user comfort.</li>
              </ul>
            </div>
  
            {/* Image Content */}
            <div className="flex justify-center">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2023/8/336872681/DM/NV/KM/3370644/dal-polisher-1-500x500.png"
                alt="Buff Polisher Machine"
                className="h-96"
              />
            </div>
          </div>
  
        </div>
          {/* How to Use Section */}
          <div className="w-full  mt-12">
            <h2 className="text-xl border-b border-black font-medium text-gray-900 mb-6">
              How to Use a Buff Polisher Machine
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Using a Buff Polisher Machine is simple and safe when following these steps:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Select the appropriate pad for the material (foam, wool, or microfiber).</li>
              <li>Apply a polishing compound or wax to the pad or surface.</li>
              <li>Start the machine at a low speed to spread the compound evenly.</li>
              <li>Increase speed gradually and polish the surface using consistent pressure.</li>
              <li>Wipe the surface clean with a microfiber cloth for a flawless finish.</li>
            </ol>
          </div>
  
             {/* Call to Action */}
             <div className="text-center">
            <h2 className="text-2xl font-medium text-gray-900 mb-4 p-4">
              Experience Unmatched Efficiency with Our Advanced Machines
            </h2>
            <p className="text-gray-700 mb-6">
              Get in touch with us today to learn more about our  Advanced Machines and how they can enhance your production process.
            </p>
            <a href="/quote" >
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition">
              Contact Us
            </button>
            </a>
          </div>
      </div>
    );
  };
  
  export default BuffPolisherPage;
  