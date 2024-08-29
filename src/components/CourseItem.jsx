import '../styles/course-item.css';

const CourseItem = ({ course }) => {
  return (
    <div className="course-item">
      <img src={course.thumbnail} alt={course.name} className="course-thumbnail" />
      <h3>{course.name}</h3>
      <p className="course-instructor">Instructor: {course.instructor}</p>
      <p className="course-status">Status: {course.status}</p>
    </div>
  );
};

export default CourseItem;
