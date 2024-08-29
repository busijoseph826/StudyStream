import { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import '../styles/dash-board.css';

const Dashboard = () => {
  const { enrolledCourses } = useContext(CourseContext);

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">My Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p className="no-courses">You are not enrolled in any courses.</p>
      ) : (
        <div className="course-list">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="course-item">
              <img src={course.thumbnail} alt={course.name} className="course-thumbnail" />
              <h3 className="course-name">{course.name}</h3>
              <p className="course-instructor">Instructor: {course.instructor}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
