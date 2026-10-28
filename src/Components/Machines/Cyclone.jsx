const HorizontalCycloneMachine = () => {
    return (
      <div className="bg-gray-300 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-10">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
          Horizontal Cyclone Machine
          </h2>
            <p className="text-lg text-gray-600 mt-4">
              Advanced technology for superior material separation and high-performance efficiency, built for industrial excellence.
            </p>
          </div>
  
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-2xl border-b border-black font-medium text-gray-800 mb-4">
                About the Horizontal Cyclone Machine
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The **Horizontal Cyclone Machine** is engineered to provide efficient material separation and dust control in industrial processes. 
                This cutting-edge equipment operates using advanced centrifugal force principles to separate particles with unmatched precision.
                It's ideal for industries requiring enhanced filtration and material management.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>Optimized for high-speed particle separation.</li>
                <li>Reduces dust emissions and ensures a cleaner workspace.</li>
                <li>Durable build for long-lasting performance in industrial environments.</li>
                <li>Efficient energy consumption for cost-effectiveness.</li>
              </ul>
            </div>
  
            {/* Image Section */}
            <div>
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2023/8/336868120/LF/CB/CT/3370644/horizontal-cyclone-400-2-500x500.png" 
                alt="Horizontal Cyclone Machine"
                className="h-80 "
              />
            </div>
          </div>
  
          {/* How We Use It */}
          <div className="mt-16">
            <h2 className="text-2xl border-b border-black font-medium text-gray-800 mb-4">
              How We Use the Horizontal Cyclone Machine
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Horizontal Cyclone Machine is seamlessly integrated into industrial workflows, ensuring minimal disruption and maximum productivity. 
              Our experts calibrate the machine according to the specific requirements of each project, making it versatile and adaptable to various applications.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>**Step 1**: Initial setup with material-specific configurations.</li>
              <li>**Step 2**: Continuous monitoring for optimized operation.</li>
              <li>**Step 3**: Regular maintenance to ensure consistent performance.</li>
              <li>**Step 4**: Data collection and analysis for operational improvements.</li>
            </ul>
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
  
  export default HorizontalCycloneMachine;
  