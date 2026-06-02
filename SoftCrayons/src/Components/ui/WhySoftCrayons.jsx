import {
  Award,
  Briefcase,
  Users,
  Laptop,
  BookOpen,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: <Award size={40} />,
    title: "Industry Expert Trainers",
    description:
      "Learn from experienced professionals working in top companies.",
  },
  {
    icon: <Briefcase size={40} />,
    title: "100% Placement Assistance",
    description:
      "Dedicated placement support with interview preparation and job referrals.",
  },
  {
    icon: <Laptop size={40} />,
    title: "Live Project Training",
    description:
      "Work on real-world projects to gain practical industry experience.",
  },
  {
    icon: <Users size={40} />,
    title: "Small Batch Size",
    description: "Personalized attention and mentorship for every student.",
  },
  {
    icon: <BookOpen size={40} />,
    title: "Updated Curriculum",
    description:
      "Latest industry-oriented syllabus designed according to market demand.",
  },
  {
    icon: <Building2 size={40} />,
    title: "Hiring Network",
    description:
      "Strong connections with companies for internships and placements.",
  },
];

export default function WhySoftCrayons() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 text-slate-900">
            Why SoftCrayons?
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-lg">
            We focus on practical learning, industry exposure, and career growth
            to help students achieve their dream jobs.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white p-6 rounded-xl text-center border">
            <h3 className="text-3xl font-bold text-orange-500">500+</h3>
            <p className="text-gray-600 mt-2">Students Placed</p>
          </div>

          <div className="bg-white p-6 rounded-xl text-center border">
            <h3 className="text-3xl font-bold text-orange-500">20+</h3>
            <p className="text-gray-600 mt-2">Hiring Partners</p>
          </div>

          <div className="bg-white p-6 rounded-xl text-center border">
            <h3 className="text-3xl font-bold text-orange-500">94%</h3>
            <p className="text-gray-600 mt-2">Placement Rate</p>
          </div>

          <div className="bg-white p-6 rounded-xl text-center border">
            <h3 className="text-3xl font-bold text-orange-500">50 LPA</h3>
            <p className="text-gray-600 mt-2">Highest Package</p>
          </div>
        </div>
      </div>
    </section>
  );
}
