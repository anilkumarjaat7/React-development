import Badge from "./Badge";

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

const CourseCard = ({ course, onClick }) => {
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

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer 
                 hover:-translate-y-1 hover:shadow-xl transition-all duration-200 flex flex-col"
    >
      {/* Thumbnail */}
      <div
        className={`relative h-36 bg-gradient-to-br ${bg} flex items-center justify-center`}
      >
        <span className="text-5xl opacity-40 group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </span>
        <div className="absolute top-3 left-3">
          <Badge text={badge} />
        </div>
        <div
          className={`absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide ${
            levelColors[level] || "bg-gray-100 text-gray-600"
          }`}
        >
          {level}
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        {/* Category */}
        <span className="text-[10px] uppercase tracking-widest font-bold text-orange-500">
          {category}
        </span>

        {/* Title */}
        <h3
          className="text-sm font-bold text-gray-900 leading-snug line-clamp-2"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {title}
        </h3>

        {/* Summary */}
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">
          {summary}
        </p>

        {/* Meta pills */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          <span className="flex items-center gap-1 text-[11px] text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-0.5 rounded-full">
            📅 {duration}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-0.5 rounded-full">
            📚 {lessons} lessons
          </span>
          <span className="flex items-center gap-1 text-[11px] text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-0.5 rounded-full">
            💻 {format}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
        <div>
          <span
            className="text-lg font-extrabold text-gray-900"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            ₹{price.toLocaleString("en-IN")}
          </span>
          <span className="text-[11px] text-gray-400 ml-1">/ course</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <span className="text-amber-400 text-sm">★</span>
          <span className="font-semibold text-gray-700">{rating}</span>
          <span className="text-gray-400">({students.toLocaleString()})</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
