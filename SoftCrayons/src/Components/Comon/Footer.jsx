// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Youtube,
//   Phone,
//   Mail,
//   MapPin,
// } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-14 pb-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <img src="logo/logo.png" alt="logo" className="h-12 mb-4" />

            <p className="text-gray-300 leading-7">
              We provide high-quality training in Web Development, Java Full
              Stack, React, Spring Boot, and other modern technologies.
            </p>

            {/* Social Icons */}
            {/* <div className="flex gap-4 mt-6">
              <div className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer">
                <Facebook size={20} />
              </div>

              <div className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer">
                <Instagram size={20} />
              </div>

              <div className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer">
                <Linkedin size={20} />
              </div>

              <div className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer">
                <Youtube size={20} />
              </div>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">
              Quick Links
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
                Home
              </li>

              <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
                Courses
              </li>

              <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
                About Us
              </li>

              <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
                Placements
              </li>

              <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
                Contact
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">
              Popular Courses
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
                Java Full Stack
              </li>

              <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
                React JS
              </li>

              <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
                Spring Boot
              </li>

              <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
                MERN Stack
              </li>

              <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
                UI/UX Design
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">
              Contact Info
            </h2>

            <div className="space-y-5 text-gray-300">
              <div className="flex items-start gap-3">
                {/* <MapPin className="text-yellow-400 mt-1" size={20} /> */}
                <p>Gurgaon, Haryana, India</p>
              </div>

              <div className="flex items-center gap-3">
                {/* <Phone className="text-yellow-400" size={20} /> */}
                <p>+91 9876543210</p>
              </div>

              <div className="flex items-center gap-3">
                {/* <Mail className="text-yellow-400" size={20} /> */}
                <p>info@yourwebsite.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 px-6">
          <p>© 2026 All Rights Reserved | Designed & Developed By TechWired</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
