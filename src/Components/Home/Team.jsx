const OurTeamSection = () => {
    return (
      <section className="bg-gray-50 py-8">
        <div className="w-full mx-auto px-6 text-center">
        <h2 className="text-2xl py-2 md:text-4xl text-left  border-b-2 border-green-600 mb-4">
            Team 
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At <span className="font-semibold text-red-600">National Engineering Works</span>, 
            we pride ourselves on a team of highly skilled professionals, including 
            experienced engineers, innovative thinkers, and passionate problem solvers. 
            Together, we strive to deliver excellence, innovation, and tailored solutions 
            for every challenge.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-gray-700">
              <h3 className="text-xl text-zinc-700 border-b border-black py-2 mb-2">
                Industry Experts
              </h3>
              <p>
                With years of expertise, our team specializes in designing and executing 
                engineering solutions that drive success.
              </p>
            </div>
            <div className="text-gray-700">
            <h3 className="text-xl text-zinc-700 border-b border-black py-2 mb-2">
            Innovative Thinkers
              </h3>
              <p>
                We embrace cutting-edge technologies and creative approaches to 
                revolutionize food processing and manufacturing processes.
              </p>
            </div>
            <div className="text-gray-700">
            <h3 className="text-xl text-zinc-700 border-b border-black py-2 mb-2">
            Client-Centric Focus
              </h3>
              <p>
                Committed to understanding client needs, we deliver customized 
                solutions that exceed expectations and foster long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OurTeamSection;
  