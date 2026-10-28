const ElevatorMachine = () => {
    return (
      <div className="bg-gray-300 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-4">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
          Elevator Machines: Precision and Efficiency
          </h2>
            <p className="text-lg text-gray-600">
              Explore the innovative technology behind elevator machines, their role in modern infrastructure, and the expertise required to ensure seamless operations.
            </p>
          </div>
  
          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Section: Text Content */}
            <div>
              <h2 className="text-2xl font-medium border-b border-black text-gray-900 mb-4">
                What is an Elevator Machine?
              </h2>
              <p className="text-gray-700 mb-4">
                Elevator machines are the heart of vertical transportation systems, responsible for lifting and lowering elevators with precision. These machines are powered by advanced motor systems and designed to ensure passenger safety and comfort.
              </p>
              <h2 className="text-2xl font-medium  border-b border-black text-gray-900 mb-4">
                How We Use Elevator Machines
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  **Gearless Machines**: Ideal for high-speed elevators in tall buildings, offering smooth operations and energy efficiency.
                </li>
                <li>
                  **Geared Machines**: Commonly used in mid-rise buildings, delivering reliable performance at moderate speeds.
                </li>
                <li>
                  **Hydraulic Machines**: Designed for low-rise applications, these machines use fluid pressure for lifting operations.
                </li>
                <li>
                  **Machine Room-Less (MRL) Systems**: Compact and space-efficient, suitable for modern building designs.
                </li>
              </ul>
            </div>
  
            {/* Right Section: Image */}
            <div className="flex justify-center">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2022/8/JF/YF/WC/16395088/mild-steel-bucket-elevator.png"
                alt="Elevator Machine"
                className="h-80"
              />
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
  
  export default ElevatorMachine;
  