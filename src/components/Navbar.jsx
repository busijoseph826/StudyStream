import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        StudyStream
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Courses</Link>
          <Link to="/dashboard" className="navbar-link">My Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
