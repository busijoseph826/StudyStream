import { createContext, useState } from 'react';
import data from '../data/data.json';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses] = useState(data);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (courseId) => {
    const course = courses.find((course) => course.id === courseId);
    if (course && !enrolledCourses.includes(course)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  return (
    <CourseContext.Provider value={{ courses, enrolledCourses, enrollCourse }}>
      {children}
    </CourseContext.Provider>
  );
};
