import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container flex justify-between items-center mx-auto">
        {/* logo */}
        <div className="text-3xl font-bold">TechWired</div>

        {/* menu */}
        <ul className="flex space-x-20 text-lg">
          <li className="text-blue-200  hover:text-yellow-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className=" hover:text-yellow-400 cursor-pointer">
            <Link to="courses">Course</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer">
            <Link to="about">About</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
