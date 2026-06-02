import {
  Users,
  Building2,
  TrendingUp,
  Trophy,
  GraduationCap,
} from "lucide-react";

const stats = [
  {
    icon: <Users size={28} />,
    value: "500+",
    label: "TOTAL PLACED",
  },
  {
    icon: <Building2 size={28} />,
    value: "20+",
    label: "HIRING PARTNERS",
  },
  {
    icon: <TrendingUp size={28} />,
    value: "94%",
    label: "PLACEMENT RATE",
  },
  {
    icon: <Trophy size={28} />,
    value: "50 LPA",
    label: "HIGHEST PACKAGE",
  },
];

const achievers = [
  {
    id: 1,
    name: "Varun Gupta",
    course: "Digital Marketing",
    package: "10 LPA",
    company: "Xonier",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Nitish Sharma",
    course: "Digital Marketing",
    package: "8 LPA",
    company: "SoftCrayons",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Rajat Agrawal",
    course: "Digital Marketing",
    package: "12 LPA",
    company: "TWG Handricraft",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Subham Kumar",
    course: "AutoCAD",
    package: "7 LPA",
    company: "Amptech",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Utkarsh Kaushik",
    course: "Digital Marketing",
    package: "12 LPA",
    company: "AHM Education",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Samir Kumar Das",
    course: "AutoCAD",
    package: "10 LPA",
    company: "N Johnsons",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

export default function Placements() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="bg-white rounded-xl border p-10 mb-10">
          <span className="inline-block px-4 py-1 text-xs tracking-widest uppercase rounded-full bg-orange-100 text-orange-600 font-semibold">
            Success Stories
          </span>

          <h1 className="text-5xl font-bold mt-5 leading-tight">
            Our Students
            <span className="text-slate-500"> Placement Records</span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-3xl text-lg">
            We don't just teach; we build careers. Join thousands of students
            who have secured their dream jobs at top-tier product and service
            based companies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-8 text-center"
            >
              <div className="flex justify-center text-blue-700 mb-4">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold">{item.value}</h3>

              <p className="text-xs tracking-widest text-gray-500 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">Top Achievers</h2>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Placement Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {achievers.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-lg border overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Card Header */}
              <div className="h-32 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 relative">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-24 h-24 rounded-full border-4 border-white absolute left-1/2 -bottom-12 -translate-x-1/2 object-cover"
                />
              </div>

              {/* Content */}
              <div className="pt-16 px-5 pb-5">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">{student.name}</h3>

                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    {student.package}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                  <GraduationCap size={15} />
                  {student.course}
                </div>

                <p className="text-xs italic text-gray-500 mt-4">
                  "{student.name} successfully placed at {student.company}"
                </p>

                <div className="mt-6 pt-4 border-t flex justify-between items-center">
                  <span className="font-bold text-orange-500">SOFTCRAYONS</span>

                  <span className="font-semibold text-blue-800">
                    {student.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
