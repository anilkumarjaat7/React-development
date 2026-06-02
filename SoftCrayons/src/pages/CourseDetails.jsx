// src/pages/CourseDetailPage.jsx

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses, LEARN_POINTS } from "../data/courses";

const levelColors = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
};

const thumbBg = {
  "Full Stack": "from-orange-100 to-amber-50",
  Frontend: "from-cyan-100 to-blue-50",
  Design: "from-pink-100 to-rose-50",
  Data: "from-indigo-100 to-violet-50",
  Cloud: "from-sky-100 to-blue-50",
  Mobile: "from-teal-100 to-emerald-50",
  AI: "from-purple-100 to-violet-50",
  Programming: "from-yellow-100 to-amber-50",
  Security: "from-red-100 to-orange-50",
  Blockchain: "from-gray-100 to-slate-50",
  Marketing: "from-fuchsia-100 to-pink-50",
};

const FEATURES = [
  { icon: "📚", label: (c) => `${c.lessons} structured lessons` },
  { icon: "📅", label: (c) => `${c.duration} guided curriculum` },
  { icon: "💻", label: (c) => c.format },
  { icon: "🏆", label: () => "Certificate of completion" },
  { icon: "♾️", label: () => "Lifetime course access" },
  { icon: "👥", label: () => "Community & mentor support" },
];

const CourseDetails = () => {
  // ✅ useParams se URL ka :id milta hai
  const { id } = useParams();
  // ✅ useNavigate se back button kaam karta hai
  const navigate = useNavigate();

  const [enrolled, setEnrolled] = useState(false);

  // URL id se course dhundo
  const course = courses.find((c) => c.id === id);

  // Agar course nahi mila
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
        <div className="text-6xl">😕</div>
        <h2
          className="text-2xl font-extrabold text-gray-800"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Course nahi mila
        </h2>
        <p className="text-gray-400 text-sm">
          URL check karo ya wapas courses page par jao.
        </p>
        <button
          onClick={() => navigate("/course")}
          className="mt-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          ← Back to Courses
        </button>
      </div>
    );
  }

  const {
    title,
    category,
    level,
    duration,
    lessons,
    price,
    rating,
    students,
    format,
    badge,
    summary,
    emoji,
  } = course;

  const bg = thumbBg[category] || "from-gray-100 to-slate-50";
  const learnPoints = LEARN_POINTS[category] || LEARN_POINTS["Programming"];

  const requirement =
    level === "Beginner"
      ? "Koi prior experience nahi chahiye. Basic computer literacy kaafi hai."
      : level === "Intermediate"
        ? "Basic programming concepts aur ek language ka familiarity zaruri hai."
        : "Strong programming foundation aur relevant tools ka prior experience chahiye.";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
        <button
          onClick={() => navigate("/course")}
          className="flex items-center gap-2 text-sm text-gray-500 bg-white border border-gray-200 hover:bg-gray-100 transition-colors px-4 py-2 rounded-full font-medium shadow-sm"
        >
          ← All Courses
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero Card */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-6">
          <div
            className={`h-40 bg-gradient-to-br ${bg} flex items-center justify-center relative`}
          >
            <span className="text-8xl opacity-30">{emoji}</span>
            <div className="absolute inset-0 flex items-end p-5">
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-gray-900 text-white">
                  {badge}
                </span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wide ${levelColors[level] || "bg-gray-100 text-gray-600"}`}
                >
                  {level}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wide bg-white/80 text-gray-600">
                  {category}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <h1
              className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {title}
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-5 max-w-2xl">
              {summary}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400 text-lg tracking-tight">
                  {"★".repeat(Math.floor(rating))}
                </span>
                <span className="font-bold text-gray-800 text-sm">
                  {rating}
                </span>
              </div>
              <span className="text-sm text-gray-400">
                {students.toLocaleString()} students enrolled
              </span>
              <span className="text-sm text-gray-400">By SkillSpark Team</span>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-gray-100 rounded-xl overflow-hidden border border-gray-100">
              {[
                { label: "Duration", value: duration },
                { label: "Lessons", value: lessons },
                { label: "Format", value: format },
                { label: "Level", value: level },
                {
                  label: "Students",
                  value:
                    students >= 1000
                      ? (students / 1000).toFixed(1) + "k"
                      : students,
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white px-4 py-3 flex flex-col gap-1"
                >
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                    {s.label}
                  </span>
                  <span
                    className="text-sm font-bold text-gray-900"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lower 2-col */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* What you'll learn */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">
                Aap kya seekhenge
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {learnPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-green-50 border-2 border-green-400 flex items-center justify-center flex-shrink-0 text-[9px] font-bold text-green-600">
                      ✓
                    </span>
                    <span className="text-sm text-gray-600 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-3">
                Course ke baare mein
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {summary} Yeh course{" "}
                <span className="font-semibold text-gray-800">
                  {level.toLowerCase()}
                </span>{" "}
                learners ke liye design kiya gaya hai jo real-world skills aur
                ek standout portfolio banana chahte hain. Structured projects,
                mentor feedback, aur completion certificate milega.
              </p>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-3">
                Requirements
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {requirement}
              </p>
            </div>
          </div>

          {/* Sticky price card */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6">
              <span
                className="text-4xl font-extrabold text-gray-900 tracking-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                ₹{price.toLocaleString("en-IN")}
              </span>
              <p className="text-xs text-gray-400 mt-1 mb-5">
                One-time payment · Lifetime access
              </p>

              <ul className="flex flex-col gap-3 mb-6">
                {FEATURES.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <span className="text-base">{f.icon}</span>
                    {f.label(course)}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setEnrolled(true)}
                className={`w-full py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 ${
                  enrolled
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-gray-900 hover:bg-orange-500 text-white"
                }`}
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {enrolled ? "✓ Enrolled Successfully!" : "Enroll Now →"}
              </button>

              <p className="text-[11px] text-gray-400 text-center mt-3">
                30-day money-back guarantee
              </p>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-4">
                <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                  🔗 Share
                </button>
                <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                  🎁 Gift
                </button>
                <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                  ♥ Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
