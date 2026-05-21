import { Search } from "lucide-react";
import { courses } from "../data/courses";

export default function Course() {
  return (
    <>
      <section className="Max-w-7xl mx-auto px-6 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Find Your Course</h2>

            <p className="text-slate-400 mt-2">
              Filter by Category or search for a specific Course
            </p>
          </div>
          <div className="relative w-full lg:w-116">
            <Search className="absolute left-4 tap-1/2 text-slate-400" />
            <input
              placeholder="Search for a course"
              className="w-full rounded-full bg-white/5 border-white/10 px-12 py-3 text-sm text-yellow-800 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Card */}

        <div className="">
          {courses.map((course) => (
            <div key={course.id}>
              <div className="">
                <img src={course.thumbnail} />
                <span>{course.badge}</span>
                <div className="">
                  <div className="">
                    <span>{course.category}</span>
                    <span>{course.level}</span>
                    <span>{course.format}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
