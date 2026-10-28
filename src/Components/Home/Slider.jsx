
const ServicesSection = () => {
  const services = [
    {
      title: "Consultation Services",
      description:
        "Expert guidance to help you choose the right machinery and optimize your food processing operations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Design & Construction",
      description:
        "Our professional designers create 2d and 3d model of the plant and provide realistic access .",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Installation Services",
      description:
        "Seamless and professional installation to get your equipment up and running efficiently from day one.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h11M9 21V3m6 18l6-6m0 0l-6-6m6 6H9"
          />
        </svg>
      ),
    },
    {
      title: "Repair Services",
      description:
        "Reliable and efficient repair services to ensure minimal downtime and maximum productivity.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 16l-2.9 2.9a2 2 0 01-2.83 0L2 17.65a2 2 0 010-2.83L5 12m13 7v1a3 3 0 01-3 3h-4a3 3 0 01-3-3v-1m6-11V4a2 2 0 10-4 0v3m6 2h6m-6 0l1-6m-1 6l-1-6m-6 6H6m0 0L7 9m-1 3l-1-6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-t from-gray-300 to-zinc-200 to-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-2xl py-2 md:text-4xl  border-b-2 border-green-600 mb-4">
          Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl  text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center m-4 ">
            
            <a href="/services" >
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition">
            For More ....
            </button>
            

            </a>
          </div>
      </div>
    </section>
  );
};

export default ServicesSection;
