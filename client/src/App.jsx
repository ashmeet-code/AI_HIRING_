import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Candidates from './pages/Candidates.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import Profile from './pages/Profile.jsx';
import Jobs from './pages/Jobs.jsx';
import Tests from './pages/Tests.jsx';
function Home() {
  return (
    <div className="home">

      <nav className="navbar">
        <div className="logo">HireSense</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/student-dashboard">Dashboard</Link>
          <span>Jobs</span>
          <span>About</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </nav>

      <section className="hero">

        <div className="hero-text">
          <h1>Smart Hiring.<br />Better Careers.</h1>

          <p>
            Find the right job with AI-powered matching
            and make hiring faster and easier.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Find Jobs</button>
            <button className="secondary-btn">Hire Talent</button>
          </div>
        </div>

        <div className="hero-card">
          <h3>AI Job Match</h3>

          <div className="match-circle">92%</div>

          <p>Java Developer</p>
          <span>Excellent Match</span>
        </div>

      </section>

    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/candidates" element={<Candidates />} />
    <Route path="/student-dashboard" element={<StudentDashboard />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/jobs" element={<Jobs />} />
    <Route path="/tests" element={<Tests />} />
    </Routes>
  );
}

export default App;