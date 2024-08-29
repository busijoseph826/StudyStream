import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CourseContext } from '../context/CourseContext';
import '../styles/course-details.css';

const CourseDetails = () => {
  const { courses, enrolledCourses, enrollCourse } = useContext(CourseContext);
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    // Check if the course is already enrolled
    const enrolled = enrolledCourses.some(enrolledCourse => enrolledCourse.id === parseInt(id));
    setIsEnrolled(enrolled);
  }, [enrolledCourses, id]);

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleEnroll = () => {
    enrollCourse(course.id);
    setIsEnrolled(true);
  };

  return (
    <div className="course-details">
      <h2 className="course-title">{course.name}</h2>
      {isEnrolled && <p className="enrolled-message">You are enrolled in this course.</p>}
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Status:</strong> {course.status}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Prerequisites:</strong> {course.prerequisites}</p>
      <div>
        <strong>Syllabus:</strong>
        <ul className="syllabus-list">
          {course.syllabus.map((item, index) => (
            <li key={index} className="syllabus-item">{item}</li>
          ))}
        </ul>
      </div>
      <button
        className={`enroll-button ${isEnrolled ? 'enrolled' : ''}`}
        onClick={handleEnroll}
        disabled={isEnrolled}
      >
        {isEnrolled ? 'You are enrolled' : 'Enroll'}
      </button>
    </div>
  );
};

export default CourseDetails;
