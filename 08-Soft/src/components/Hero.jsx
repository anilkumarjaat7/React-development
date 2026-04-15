function Hero() {
  return (
    <section className="bg-gray-600 text-white flex items-center min-h-screen">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center ">
        {/* left */}
        <div className="space-y-6 px-20">
          <h1 className="text-4xl font-bold md:text-5xl">
            Build your Futur with
            <span className="text-blue-500">TechWired</span>
          </h1>

          <p className="text-gray-300 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            similique a officiis obcaecati fugit nisi sequi sed facilis
          </p>

          <div className="space-x-6">
            <button className="bg-blue-500 font-bold hover:bg-blue-700 px-6 py-3 rounded-lg">
              Get Started
            </button>
            <button className="bg-blue-500 font-bold hover:bg-blue-700 px-6 py-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        {/* Right side */}

        <div className="flex justify-center mt-10 md:mt-0">
          <img src="hero.png" alt="hero img" className="w-80 md:w-96" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
