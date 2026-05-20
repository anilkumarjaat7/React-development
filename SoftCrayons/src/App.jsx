import "./App.css";
import Footer from "./Components/Comon/Footer";
import Navbar from "./Components/Comon/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Placement from "./pages/Placements";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/placement" element={<Placement />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
