const RotaryAirlockPage = () => {
    return (
      <div className="bg-gray-300 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-10">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
          Rotary Airlock Machine
          </h2>
            <p className="text-lg text-gray-600">
              Precision engineering for controlled material handling and enhanced operational efficiency.
            </p>
          </div>
  
          {/* Description Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="text-2xl border-b border-black font-medium text-gray-900 mb-4">
                What is a Rotary Airlock Machine?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A **Rotary Airlock Machine** is a crucial component in material handling systems, designed to regulate and control the flow of materials between two environments while maintaining an airlock. It is widely used in industries such as food processing, pharmaceuticals, power generation, and more.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Facilitates efficient transfer of bulk materials like powders, granules, and grains.
                </li>
                <li>
                  Maintains pressure equilibrium between different chambers or environments.
                </li>
                <li>
                  Ensures minimal leakage of air or dust during operations.
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://anval.net/wp-content/uploads/2020/01/RH-Series.png"
                alt="Rotary Airlock Machine"
                className=""
              />
            </div>
          </div>
  
          {/* How It Works Section */}
          <div className="items-center mb-16">
         
            <div>
              <h2 className="text-2xl  border-b border-black font-medium text-gray-900 mb-4">
                How Does a Rotary Airlock Work?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The machine consists of a rotating rotor with vanes that move material through a housing. Its primary function is to maintain an airtight seal while materials are transferred, ensuring that air pressure is controlled between the systems.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Material enters the airlock chamber through an inlet.
                </li>
                <li>
                  The rotor rotates, transferring material to the outlet side.
                </li>
                <li>
                  Simultaneously, the seal prevents air from escaping or entering the chamber.
                </li>
                <li>
                  Customizable designs allow for use with abrasive, sticky, or fragile materials.
                </li>
              </ul>
            </div>
          </div>
  
          {/* Applications Section */}
          <div className=" shadow-lg rounded-lg p-8">
            <h2 className="text-2xl border-b border-black font-medium text-gray-900 mb-4">
              Applications of Rotary Airlock Machines
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Rotary Airlock Machines are versatile and serve a wide range of industries, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-4">
              <li>
                **Food Industry**: Handling flour, sugar, grains, and spices while maintaining hygiene standards.
              </li>
              <li>
                **Pharmaceuticals**: Managing powdered chemicals with high precision.
              </li>
              <li>
                **Cement and Mining**: Transporting abrasive materials like cement powder and minerals.
              </li>
              <li>
                **Power Generation**: Feeding coal, ash, and other materials in a controlled manner.
              </li>
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
  
  export default RotaryAirlockPage;
  