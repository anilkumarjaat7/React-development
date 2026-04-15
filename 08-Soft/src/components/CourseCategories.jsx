const categories = [
  {
    name: "Web Development",
    img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
  {
    name: "Data Science",
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
  },
  {
    name: "Machine Learning",
    img: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
  },
  {
    name: "Cyber Security",
    img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
  },
  {
    name: "Cloud Computing",
    img: "https://cdn-icons-png.flaticon.com/512/4144/4144515.png",
  },
  {
    name: "Mobile Development",
    img: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
  },
  {
    name: "DevOps",
    img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  },
  {
    name: "UI/UX Design",
    img: "https://cdn-icons-png.flaticon.com/512/1827/1827933.png",
  },
  {
    name: "Blockchain",
    img: "https://cdn-icons-png.flaticon.com/512/6001/6001361.png",
  },
];

function CourseCategories() {
  return (
    <div className="py-12 px-6 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Explore Courses
      </h2>

      {/* card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div
            className="bg-white rounded-2xl shadow-md p-6 flex items-center flex-col hover:shadow-xl"
            key={index}
          >
            <img src={cat.img} alt={cat.name} className="w-20 h-20 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCategories;
