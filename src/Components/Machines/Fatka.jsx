const FatkaMachinePage = () => {
  return (
    <div className="bg-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-10">
        <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
        Fatka Machine: Precision Engineering at Its Best

          </h2>
          <p className="text-lg text-gray-600">
            Discover the cutting-edge technology behind the Fatka Machine, 
            engineered for accuracy, efficiency, and reliability.
          </p>
        </div>

        {/* About Fatka Machine - Content and Image Row */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Text Section */}
          <div className=" p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              What is the Fatka Machine?
            </h2>
            <p className="text-gray-700 mb-6">
              The Fatka Machine is a highly specialized industrial tool 
              designed for efficient and precise operations in manufacturing 
              and assembly. Its robust design and high-speed capabilities 
              make it an invaluable asset in industries such as textiles, 
              automotive, and heavy machinery.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Highly efficient and reduces manual labor.</li>
              <li>Provides unparalleled accuracy in operations.</li>
              <li>Built for durability and long-term usage.</li>
              <li>Compatible with various industrial applications.</li>
            </ul>
          </div>

          {/* Image Section */}
          <div>
            <img
              src="https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/plastic-film-jhatka-fatka-machine-3-hp-capacity-20-50-20230819060549.png" // Placeholder image
              alt="Fatka Machine"
              className="ml-5 h-96"
            />
          
          </div>
        </div>

        {/* How It's Used - Content and Image Row */}
        <div className=" items-center">
       

          {/* Text Section */}
          <div className=" p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              How Do We Use the Fatka Machine?
            </h2>
            <p className="text-gray-700 mb-6">
              The Fatka Machine is utilized across various industries to 
              achieve precision and efficiency. Some common uses include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>High-speed fabric cutting in textile manufacturing.</li>
              <li>Precise alignment of components in assembly lines.</li>
              <li>Streamlining operations for better productivity.</li>
              <li>Reducing errors through automated processes.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              By integrating advanced techniques, the Fatka Machine ensures 
              consistent quality and reliability in all its applications.
            </p>
          </div>
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
    </div>
  );
};

export default FatkaMachinePage;
