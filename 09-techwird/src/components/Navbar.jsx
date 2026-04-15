function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="text-3xl font-bold">Teachwird</div>

        <ul className="flex space-between space-x-20 text-lg">
          <li className="hover:text-yellow-400 cursor-pointer hover:font-bold">
            Home
          </li>
          <li className="hover:text-yellow-400 cursor-pointer hover:font-bold">
            Courses
          </li>
          <li className="hover:text-yellow-400 cursor-pointer hover:font-bold">
            About
          </li>
          <li className="hover:text-yellow-400 cursor-pointer hover:font-bold">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
