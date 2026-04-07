import "./CourseCard.css";

export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      {/* img */}
      <img src={course.img} alt={course.title} className="course-image" />
      {/* content */}
      <div className="course-content">
        <h2 className="course-title">{course.title}</h2>
        <p className="course-desc">{course.desc}</p>
        {/* info */}
        <div className="course-info">
          <span>
            <i class="fa-regular fa-clock"></i> {course.duraction}
          </span>
          <span>
            <i class="fa-solid fa-book"></i>
            {course.mode}
          </span>
        </div>
        <button className="enroll-btn">Enroll Now</button>
      </div>
    </div>
  );
}

// export default function CourseCard({ img, title, desc, duraction, mode }) {
//   return (
//     <div className="course-card">
//       {/* img */}
//       <img src={img} alt={title} className="course-image" />
//       {/* content */}
//       <div className="course-content">
//         <h2 className="course-title">{title}</h2>
//         <p className="course-desc">{desc}</p>
//         {/* info */}
//         <div className="course-info">
//           <span>
//             <i class="fa-regular fa-clock"></i> {duraction}
//           </span>
//           <span>
//             <i class="fa-solid fa-book"></i>
//             {mode}
//           </span>
//         </div>
//         <button className="enroll-btn">Enroll Now</button>
//       </div>
//     </div>
//   );
// }
