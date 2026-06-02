import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropDwonOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-600 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src="logo/logo.png" className="h-10" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 font-medium">
              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                <Link to="/"> Home </Link>
              </li>

              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                <Link to="/course">Courses</Link>
              </li>
              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                <Link to="/contact"> Contact</Link>
              </li>
              {/* more DropDown */}
              <li className="relative">
                <button
                  className="flex items-center gep-1 hover:text-amber-300 text-xl"
                  onClick={() => setIsDropDwonOpen(!isDropdownOpen)}
                >
                  More
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full mt-5 w-48 bg-white  text-black rounded-lg ">
                    <Link
                      to="/placement"
                      className="block px-4 py-3 hover:bg-gray-400"
                    >
                      Placements
                    </Link>
                  </div>
                )}
              </li>
            </ul>

            {/* Button */}
            <button className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition duration-200">
              Get Admission
            </button>

            <button className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition duration-200">
              <Link to="/login">Login</Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-700 px-6 py-5">
            <ul className="flex flex-col gap-4 font-medium">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-amber-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/course"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-amber-300"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-amber-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-amber-300"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/placement"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-amber-300"
                >
                  Placements
                </Link>
              </li>
            </ul>

            <div className="flex flex-col gap-3 mt-6">
              <button className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold">
                Get Admission
              </button>

              <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
                <Link to="/login">Login</Link>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
