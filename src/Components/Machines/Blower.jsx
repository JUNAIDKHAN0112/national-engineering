const BlowerMachine = () => {
    return (
      <div className="bg-gray-200 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-10">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
          Blower Machine: Essential Equipment for Mill Operations

          </h2>
            <p className="text-lg text-gray-600">
              Discover how blower machines streamline mill processes, ensuring efficiency and reliability in material handling and airflow management.
            </p>
          </div>
  
          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Image */}
            <div>
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2023/12/373127974/WA/PI/GQ/27056827/mild-steel-industrial-air-blower-500x500.png"
                alt="Blower Machine"
                className=""
              />
            </div>
  
            {/* Right: Description */}
            <div>
              <h2 className="text-xl border-b border-black font-medium text-gray-800 mb-4">
                About the Blower Machine
              </h2>
              <p className="text-gray-700 mb-6">
                The blower machine is a critical component in modern mills,
                designed to efficiently manage airflow, separate materials, and
                ensure smooth operations. It plays a pivotal role in maintaining
                consistent performance across various mill processes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  **Efficient Airflow Management**: Ensures controlled air
                  circulation for improved process stability.
                </li>
                <li>
                  **Material Separation**: Facilitates the separation of fine
                  particles from coarse materials.
                </li>
                <li>
                  **Low Energy Consumption**: Designed for energy efficiency,
                  reducing operational costs.
                </li>
                <li>
                  **Durable and Reliable**: Built with high-grade materials to
                  withstand long-term use in industrial environments.
                </li>
              </ul>
            </div>
          </div>
  
          {/* Usage Section */}
          <div className="mt-12">
            <h2 className="text-xl border-b border-black font-medium text-gray-800 mb-6">
              How We Use Blower Machines in Mills
            </h2>
            <p className="text-gray-700 mb-6">
              Blower machines are versatile and integral to various mill
              operations. Here's how they are typically utilized:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Use Case 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-8 w-8 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h11m0 0l-4-4m4 4l-4 4m5 5H7m0 0l-4-4m4 4l-4-4"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    Grain Processing
                  </h3>
                  <p className="text-gray-700">
                    Used to separate husk, dust, and impurities from grains
                    through controlled air suction.
                  </p>
                </div>
              </div>
  
              {/* Use Case 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-8 w-8 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v18m9-9H3"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    Ventilation and Cooling
                  </h3>
                  <p className="text-gray-700">
                    Helps regulate temperature and airflow for efficient milling
                    operations.
                  </p>
                </div>
              </div>
  
              {/* Use Case 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-8 w-8 text-yellow-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18V6m12 12V6m-6 6h12"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    Dust Extraction
                  </h3>
                  <p className="text-gray-700">
                    Removes fine dust and debris to maintain cleanliness and
                    compliance with safety regulations.
                  </p>
                </div>
              </div>
  
              {/* Use Case 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-8 w-8 text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11H5m7 7v-4M5 11l7-7m0 14l7-7"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    Pneumatic Conveying
                  </h3>
                  <p className="text-gray-700">
                    Efficiently moves materials like flour and grains through
                    controlled airflow.
                  </p>
                </div>
              </div>
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
  
  export default BlowerMachine;
  