function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold mb-2 md:mb-0">TechWired</div>

        {/* Links */}
        <ul className="flex space-x-6 text-sm">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Courses</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>

        {/* Copyright */}
        <div className="text-sm mt-2 md:mt-0">
          © 2026 TechWired. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
