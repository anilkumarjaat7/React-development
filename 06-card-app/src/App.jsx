import CourseCard from "./components/CourseCard";
import "./App.css";
function App() {
  const course = [
    {
      img: "c.png",
      title: "c++ full stack development",
      desc: "c++ most tranding language in 2026",
      duraction: "5 month",
      mode: "online",
    },
    {
      img: "java.png",
      title: "java full stack development",
      desc: "java most tranding language in 2026",
      duraction: "5 month",
      mode: "online",
    },
    {
      img: "python.png",
      title: "python full stack development",
      desc: "python most tranding language in 2026",
      duraction: "5 month",
      mode: "online",
    },

    {
      img: "js.png",
      title: "js full stack development",
      desc: "js most tranding language in 2026",
      duraction: "2 month",
      mode: "online",
    },

    {
      img: "c.png",
      title: "c++ full stack development",
      desc: "c++ most tranding language in 2026",
      duraction: "5 month",
      mode: "online",
    },
  ];

  return (
    <div>
      <h1>Courses</h1>

      <div className="courses-cards">
        <CourseCard course={course[0]} />

        <CourseCard course={course[1]} />
        <CourseCard course={course[2]} />
        <CourseCard course={course[3]} />

        <CourseCard course={course[4]} />
        {/* <CourseCard
          img="python.png"
          title="python full stack development"
          desc="python most tranding language in 2026"
          duraction="8 month"
          mode="online"
        />
        <CourseCard
          img="java.png"
          title="java full stack development"
          desc="java most tranding language in 2026"
          duraction="8 month"
          mode="offline"
        />
        <CourseCard
          img="js.png"
          title="js full stack development"
          desc="js most tranding language in 2026"
          duraction="1 month"
          mode="online"
        /> */}
      </div>
    </div>
  );
}

export default App;

// nums = [21, 23, 56, 89];
