const ScrewConveyorPage = () => {
    return (
      <div className="bg-gray-200 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-10">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
          Screw Conveyor Machine
          </h2>
            <p className="text-lg text-gray-600">
              An innovative solution for material handling across industries, offering efficient and reliable operations for bulk material transport.
            </p>
          </div>
  
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Description */}
            <div>
              <h2 className="border-b border-black text-2xl font-medium text-gray-900 mb-4">
                What is a Screw Conveyor Machine?
              </h2>
              <p className="text-gray-700 mb-4">
                A **Screw Conveyor Machine** is a mechanical device used for the efficient transport of bulk materials such as grains, powders, and other granular substances. It utilizes a rotating helical screw blade (commonly referred to as a flight) housed within a tube or trough to move materials in a controlled and continuous manner.
              </p>
              <p className="text-gray-700 mb-4">
                This versatile machine is widely used in industries such as agriculture, manufacturing, and food processing due to its ability to handle various materials effectively.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Designed for efficient transport of bulk materials.</li>
                <li>Can operate horizontally, vertically, or at an angle.</li>
                <li>Customizable for specific industry requirements.</li>
                <li>Low maintenance with robust and durable construction.</li>
              </ul>
            </div>
  
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://www.cimbria.com/content/dam/public/grain-and-protein/cimbria/conveying/screw-conveyors/screw-conveyor-cu.png"
                alt="Screw Conveyor Machine"
                className=""
              />
            </div>
          </div>
  
          {/* Usage Section */}
          <div className="mt-12">
            <h2 className="text-2xl border-b border-black font-medium text-gray-900 mb-6 text-center">
              How is a Screw Conveyor Machine Used?
            </h2>
            <div className="">
              {/* Text Content */}
              <div>
                <p className="text-gray-700 mb-4">
                  Screw conveyor machines are integral to material handling operations. They are used to transport materials across short or long distances efficiently. Here are some common applications:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li>
                    <strong>Industrial Use:</strong> Transporting cement, ash, or other bulk materials in construction and manufacturing industries.
                  </li>
                  <li>
                    <strong>Agriculture:</strong> Moving grains, seeds, or fertilizers for storage and processing.
                  </li>
                  <li>
                    <strong>Food Industry:</strong> Conveying powdered ingredients, grains, or processed foods during production.
                  </li>
                  <li>
                    <strong>Waste Management:</strong> Moving waste materials for recycling or disposal operations.
                  </li>
                </ul>
              </div>
  
            
            </div>
          </div>
  
          {/* Benefits Section */}
          <div className="mt-12">
            <h2 className="text-2xl border-b border-black font-medium text-gray-900 mb-6 text-center">
              Key Benefits of Using Screw Conveyor Machines
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Versatility:</strong> Suitable for handling a wide range of materials, from fine powders to granular and irregular substances.
              </li>
              <li>
                <strong>Efficiency:</strong> Ensures continuous, controlled material flow with minimal energy consumption.
              </li>
              <li>
                <strong>Space-Saving Design:</strong> Can be customized for horizontal, inclined, or vertical configurations to suit your workspace.
              </li>
              <li>
                <strong>Durability:</strong> Constructed with high-quality materials for long-term, low-maintenance operations.
              </li>
              <li>
                <strong>Cost-Effective:</strong> Reduces labor and operational costs by automating material transport.
              </li>
            </ul>
          </div>
               {/* Call to Action */}
               <div className="text-center">
            <h2 className="text-2xl font-medium text-gray-900 mb-4 p-4">
              Experience Unmatched Efficiency with Our Advanced Machines
            </h2>
            <p className="text-gray-700 mb-6">
              Get in touch with us today to learn more about our Advanced Machines and how they can enhance your production process.
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
  
  export default ScrewConveyorPage;
  