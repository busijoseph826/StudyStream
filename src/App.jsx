import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CourseProvider } from './context/CourseContext';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer'
import './App.css'
function App() {
  return (
    <CourseProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer/>
      </Router>
    </CourseProvider>
  );
}

export default App;
