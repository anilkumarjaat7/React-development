function Navbar() {
  return (
    <>
      <nav className="bg-gray-600 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* logo */}
          <div className="">
            <img src="logo/logo.png" className="h-10" />
          </div>
          {/* menu */}
          <div className="flex">
            <ul className="hidden md:flex items-center gap-8 font-medium">
              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                Home
              </li>
              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                Courses
              </li>
              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                About
              </li>
              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                Contact
              </li>
              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                Placements
              </li>
            </ul>

            {/* Button */}
            <button className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-yellow-800 transition duration-200 ml-10">
              Get Admission
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
