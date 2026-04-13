function Hero() {
  return (
    <section className="bg-gray-600 text-white flex items-center min-h-screen">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* left */}
        <div className="">
          <h1>
            Build your Futur with
            <span>TechWired</span>
          </h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            similique a officiis obcaecati fugit nisi sequi sed facilis
          </p>

          <div className="">
            <button>Get Started</button>
            <button>Learn More</button>
          </div>
        </div>
        {/* Right side */}

        <div className="">
          <img src="hero.png" alt="hero img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
