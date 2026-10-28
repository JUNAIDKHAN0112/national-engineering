const DalPolisherPage = () => {
    return (
      <div className="bg-gray-200 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
          Dal Polisher Machine
          </h2>
            <p className="text-lg text-gray-600 mt-4">
              Enhancing the quality and finish of dal with precision and
              efficiency. Trusted by industry leaders for outstanding results.
            </p>
          </div>
  
          {/* About Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
            {/* Description */}
            <div>
              <h2 className="text-xl border-b border-black font-medium text-gray-900 mb-4">
                About the Dal Polisher Machine
              </h2>
              <p className="text-gray-700 mb-6">
                The **Dal Polisher Machine** is designed to give pulses a smooth,
                shiny, and appealing finish, making them ready for market. This
                machine efficiently removes the outer layer and polishes the dal
                while maintaining its nutritional value.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>High-capacity operation to handle bulk production.</li>
                <li>
                  Precision polishing technology ensuring uniform quality across
                  batches.
                </li>
                <li>
                  Easy-to-operate controls with advanced safety mechanisms.
                </li>
                <li>Energy-efficient design, minimizing operational costs.</li>
              </ul>
            </div>
  
            {/* Image */}
            <div>
              <img
                src="https://hindustanagro.in/wp-content/themes/hindustan/assets/images/product/dal-polisher.webp"
                alt="Dal Polisher Machine"
                className="h-80"
              />
            </div>
          </div>
  
          {/* Usage Section */}
          <div className="mt-16">
            <h2 className="text-xl  border-b border-black font-medium text-gray-900  mb-6">
              How to Use the Dal Polisher Machine
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Instructions */}
              <div>
                <p className="text-gray-700 mb-6">
                  Using the **Dal Polisher Machine** is a seamless process
                  designed to maximize efficiency and minimize effort. Follow
                  these steps for optimal performance:
                </p>
                <ul className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>
                    Feed the pre-cleaned and graded dal into the input hopper.
                  </li>
                  <li>
                    Adjust the polishing settings according to the desired
                    finish.
                  </li>
                  <li>
                    Start the machine and monitor the operation through the
                    control panel.
                  </li>
                  <li>
                    Collect the polished dal from the output chute, ensuring
                    uniform quality.
                  </li>
                  <li>
                    Clean the machine after use to maintain hygiene and
                    efficiency.
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
  
  export default DalPolisherPage;
  