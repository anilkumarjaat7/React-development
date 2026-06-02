// src/pages/Courses.jsx
// (Ya agar file ka naam CoursesPage.jsx hai toh wahi rakhna)

import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "../components/courses/CourseCard";

const categories = ["All", ...new Set(courses.map((c) => c.category))];

const CoursesPage = () => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQ, setSearchQ] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filtered = useMemo(() => {
    let list = [...courses];

    if (activeCategory !== "All") {
      list = list.filter((c) => c.category === activeCategory);
    }

    if (searchQ.trim()) {
      const q = searchQ.toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.summary.toLowerCase().includes(q),
      );
    }

    if (sortBy === "popular") list.sort((a, b) => b.students - a.students);
    if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);
    if (sortBy === "price-low") list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") list.sort((a, b) => b.price - a.price);

    return list;
  }, [activeCategory, searchQ, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">
          18 Courses · All Skill Levels
        </p>
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-xl"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Skills sharpen karo.{" "}
          <span className="text-orange-500">Career launch karo.</span>
        </h1>
        <p className="mt-4 text-base text-gray-500 max-w-lg leading-relaxed">
          Industry experts ke saath hands-on courses. Weeks mein seekho, saalon
          mein nahi.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-6 mt-8">
          {[
            { label: "Courses", value: "18+" },
            { label: "Students", value: "14,000+" },
            { label: "Avg Rating", value: "4.6★" },
            { label: "Certifications", value: "100%" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span
                className="text-2xl font-extrabold text-gray-900"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {s.value}
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 h-10 min-w-[200px] flex-1 max-w-xs shadow-sm">
            <span className="text-gray-400 text-sm">🔍</span>
            <input
              type="text"
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
              placeholder="Search courses…"
              className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
            />
            {searchQ && (
              <button
                onClick={() => setSearchQ("")}
                className="text-gray-400 hover:text-gray-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category tags */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-150 border
                  ${
                    activeCategory === cat
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 flex items-center justify-between">
        <p className="text-sm text-gray-400">
          <span className="font-semibold text-gray-700">{filtered.length}</span>{" "}
          courses
        </p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-xs text-gray-600 bg-white border border-gray-200 rounded-lg px-3 py-2 outline-none cursor-pointer shadow-sm"
        >
          <option value="popular">Most Popular</option>
          <option value="rating">Top Rated</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
        </select>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3
              className="text-xl font-bold text-gray-800 mb-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Koi course nahi mila
            </h3>
            <p className="text-gray-400 text-sm">
              Alag search ya category try karo.
            </p>
            <button
              onClick={() => {
                setSearchQ("");
                setActiveCategory("All");
              }}
              className="mt-4 text-sm text-orange-500 hover:underline font-medium"
            >
              Filters clear karo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                // ✅ useNavigate se /course/:id par jaata hai
                onClick={() => navigate(`/course/${course.id}`)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CoursesPage;
