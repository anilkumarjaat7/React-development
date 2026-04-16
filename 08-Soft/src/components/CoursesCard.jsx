import "./CoursesCard.css";
export default function CourseCard() {
  const courses = [
    {
      id: 1,
      img: "c.png",
      title: "c++ full stack development",
      desc: "c++ most trending language in 2026",
      duration: "5 month",
      mode: "online",
    },
    {
      id: 2,
      img: "java.png",
      title: "java full stack development",
      desc: "java most trending language in 2026",
      duration: "5 month",
      mode: "online",
    },
    {
      id: 3,
      img: "python.png",
      title: "python full stack development",
      desc: "python most trending language in 2026",
      duration: "5 month",
      mode: "online",
    },
    {
      id: 4,
      img: "js.png",
      title: "js full stack development",
      desc: "js most trending language in 2026",
      duration: "2 month",
      mode: "online",
    },
  ];

  return (
    <div className="course-container">
      {courses.map((course) => (
        <div className="course-card" key={course.id}>
          <img src={course.img} alt={course.title} className="course-image" />

          <div className="course-content">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-desc">{course.desc}</p>

            <div className="course-info">
              <span>
                <i className="fa-regular fa-clock"></i> {course.duration}
              </span>
              <span>
                <i className="fa-solid fa-book"></i> {course.mode}
              </span>
            </div>

            <button className="enroll-btn">Enroll Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}
