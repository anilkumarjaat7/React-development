import "./App.css";
import Footer from "./Components/Comon/Footer";
import Navbar from "./Components/Comon/Navbar";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Placement from "./pages/Placements";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
