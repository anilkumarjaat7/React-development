import { ArrowRight, PlayCircle } from "lucide-react";

function Hero() {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <p className="text-yellow-400 font-semibold text-lg mb-4">
              Best IT Training Institute
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Learn <span className="text-yellow-400">Modern Tech Skills</span>
              <br />& Build Your Career
            </h1>

            <p className="text-gray-300 mt-6 text-lg leading-8">
              Master Java Full Stack, React JS, Spring Boot, MERN Stack, UI/UX,
              and other industry-demand technologies with practical projects and
              expert mentorship.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <button className="bg-yellow-400 text-black px-7 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-yellow-500 transition duration-300">
                Get Started
                <ArrowRight size={20} />
              </button>

              <button className="border border-gray-500 px-7 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition duration-300">
                <PlayCircle size={22} />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h2 className="text-3xl font-bold text-yellow-400">10K+</h2>
                <p className="text-gray-300 mt-2">Students</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-yellow-400">50+</h2>
                <p className="text-gray-300 mt-2">Courses</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-yellow-400">95%</h2>
                <p className="text-gray-300 mt-2">Placements</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="./banner/hero.webp"
              alt="hero"
              className="w-full max-w-lg h-100"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
