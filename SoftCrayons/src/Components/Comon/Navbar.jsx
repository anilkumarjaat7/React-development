import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-xl">
                <Link to="/placement">Placements</Link>
              </li>
            </ul>

            {/* Button */}
            <button className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition duration-200">
              Get Admission
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
          <div className="md:hidden bg-gray-700 px-6 pb-5">
            <ul className="flex flex-col gap-5 font-medium pt-4">
              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-lg">
                <Link to="/"> Home </Link>
              </li>
              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-lg">
                <Link to="/course">Courses</Link>
              </li>
              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-lg">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-lg">
                <Link to="/contact"> Contact</Link>
              </li>
              <li className="hover:text-amber-300 cursor-pointer transition duration-300 text-lg">
                <Link to="/placement">Placements</Link>
              </li>
            </ul>

            <button className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition duration-200 mt-5 w-full">
              Get Admission
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
