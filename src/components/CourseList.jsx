import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CourseContext } from '../context/CourseContext';
import CourseItem from './CourseItem';
import '../styles/course-list.css';

const CourseList = () => {
  const { courses } = useContext(CourseContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="course-list-container">
      <h2>Course List</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="course-list">
        {filteredCourses.map((course) => (
          <Link to={`/courses/${course.id}`} key={course.id} className="course-link">
            <CourseItem course={course} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
