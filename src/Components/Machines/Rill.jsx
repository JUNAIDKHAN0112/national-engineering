const RillMachine = () => {
    return (
      <div className="bg-gray-300 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-10">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
          Understanding the Rill Machine
          </h2>
            <p className="text-lg text-gray-600">
              Explore the functionality, applications, and operational techniques of the Rill Machine—an essential tool for precision and efficiency in various industries.
            </p>
          </div>
  
          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div>
              <img
                src="https://static.wixstatic.com/media/5f1a7b_1bd890a7f6f04fcbb414e2cec26ede91~mv2.png/v1/crop/x_476,y_157,w_2024,h_1379/fill/w_620,h_412,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01-01_edited.png"
                alt="Rill Machine"
                className=""
              />
            </div>
  
            {/* Description Section */}
            <div>
              <h2 className="text-2xl  border-b border-black font-medium text-gray-900 mb-4">
                What is a Rill Machine?
              </h2>
              <p className="text-gray-700 mb-6">
                The Rill Machine is a highly specialized piece of equipment designed for precise shaping, grooving, and cutting tasks. It is widely used in industries such as manufacturing, construction, and materials processing for its ability to create uniform, high-quality results with minimal manual intervention.
              </p>
              <p className="text-gray-700">
                Equipped with advanced technology, the Rill Machine ensures accuracy, durability, and efficiency, making it an indispensable tool in modern industrial applications.
              </p>
            </div>
          </div>
  
          {/* Features Section */}
          <div className="mt-12">
            <h2 className="text-2xl border-b border-black font-medium text-gray-900 mb-6 text-center">
              Key Features and Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="list-disc list-inside space-y-4 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-800">Precision:</span> Delivers high-accuracy results, ensuring minimal errors and material wastage.
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Versatility:</span> Suitable for a wide range of materials including metal, plastic, and composites.
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Durability:</span> Built with robust materials for long-lasting performance in demanding environments.
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Automation:</span> Advanced controls for automated operation, reducing labor costs and increasing efficiency.
                </li>
              </ul>
  
              <ul className="list-disc list-inside space-y-4 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-800">Safety:</span> Integrated safety mechanisms to protect operators during use.
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Cost-Effective:</span> Reduces operational costs by enhancing production speed and quality.
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Compact Design:</span> Optimized for space efficiency without compromising functionality.
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Customizable:</span> Modular options to tailor the machine to specific industry needs.
                </li>
              </ul>
            </div>
          </div>
  
          {/* Usage Section */}
          <div className="mt-16">
            <h2 className="text-2xl  border-b border-black font-medium text-gray-900 mb-6 text-center">
              How to Use the Rill Machine
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-6">
                  Operating the Rill Machine involves the following steps:
                </p>
                <ul className="list-decimal list-inside space-y-4 text-gray-700">
                  <li>
                    <span className="font-semibold text-gray-800">Preparation:</span> Ensure the machine is set up correctly, with the appropriate tooling and material loaded securely.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">Calibration:</span> Adjust settings such as speed, depth, and angle according to the specific task requirements.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">Operation:</span> Begin the process, monitoring the machine for smooth functioning and consistent output.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">Inspection:</span> Check the final output for quality assurance and make adjustments if needed.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">Maintenance:</span> Regularly clean and inspect the machine to ensure optimal performance over time.
                  </li>
                </ul>
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
  
  export default RillMachine;
  