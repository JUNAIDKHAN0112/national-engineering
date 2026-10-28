const DestonerMachine = () => {
    return (
      <div className="bg-gray-300 py-4 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-10">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
          Advanced Destoner Machine
          </h2>
            <p className="text-lg text-gray-600">
              Streamline your grain processing with precision and efficiency. The Destoner Machine is engineered for superior performance, removing stones and impurities effectively to ensure product quality.
            </p>
          </div>
  
          {/* Machine Over view Section */}
          <div className=" p-2 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Description */}
            <div className="w-full p-4" > 
              <h2 className="text-2xl border-b border-red-600 font-medium text-gray-900 mb-4">
                What is a Destoner Machine?
              </h2>
              <p className="text-gray-700 mb-4">
                A **Destoner Machine** is a critical piece of equipment used in industries like agriculture and food processing to separate stones, dirt, and other heavy impurities from grains, pulses, and seeds. This machine ensures cleaner, safer, and higher-quality outputs by leveraging advanced gravity separation and air suction techniques.
              </p>
              <p className="text-gray-700">
                With state-of-the-art technology, our Destoner Machines are designed to handle a wide range of materials, from cereals to coffee beans, enhancing productivity while reducing operational costs.
              </p>
            </div>
  
            {/* Image */}
            <div className="h-60 flex justify-center">
              <img
                src="https://satake-usa.com/wp-content/uploads/2021/04/Destoner-SGA-B.png"
                alt="Destoner Machine"
                className=""
              />
            </div>
          </div>
  
          {/* How It Works Section */}
          <div className="mb-12  p-4 bg-gray-200">
            <h2 className=" p-2 text-2xl border-b border-red-600 font-medium text-gray-900 mb-6 text-center">
              How Does the Destoner Machine Work?
            </h2>
            <div className="">
              <div>
                <p className="text-gray-700 p-4">
                  The Destoner Machine uses a combination of **airflow** and **vibration technology** to segregate heavier impurities like stones from lighter grains or seeds. The process involves:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Feeding materials into the machine through a calibrated hopper.
                  </li>
                  <li>
                    Utilizing a vibrating deck that adjusts based on the material's weight and density.
                  </li>
                  <li>
                    Employing suction fans to remove lighter impurities and dust.
                  </li>
                  <li>
                    Outputting clean grains and seeds ready for further processing or packaging.
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
  
          {/* Experts Section */}
          <div className="bg-gray-200 py-8 px-6 rounded-lg mb-12">
            <div className="">
              {/* Content */}
              <div>
                <h2 className=" text-2xl font-medium border-b border-red-600 text-gray-900 mb-4">
                  Why Choose Our Experts?
                </h2>
                <p className="text-gray-700 mb-4">
                  Our team of experienced professionals ensures that every Destoner Machine meets the highest standards of efficiency and reliability. From consultation to installation, we provide end-to-end support to optimize your operations.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Expert engineers with extensive industry knowledge.
                  </li>
                  <li>
                    Comprehensive training and guidance for your team.
                  </li>
                  <li>
                    Customizable machine settings to suit specific materials.
                  </li>
                  <li>
                    Reliable after-sales service and maintenance.
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
  
  export default DestonerMachine;
  