import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Candidates from './pages/Candidates.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import Profile from './pages/Profile.jsx';
import Jobs from './pages/Jobs.jsx';
import Tests from './pages/Tests.jsx';
import TakeTest from './pages/TakeTest.jsx';

function Home() {
  return (
    <div className="home">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          Hire<span>Sense</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/student-dashboard">Dashboard</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/tests">Tests</Link>
          <span>About</span>

          <Link to="/login">
            <button className="nav-login">Login</button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="hero-text">

          <div className="small-badge">
            ✨ AI-Powered Hiring Platform
          </div>

          <h1>
            Find the right job.
            <br />
            <span>Build your future.</span>
          </h1>

          <p>
            HireSense uses AI to understand your resume, skills and
            performance to find opportunities that actually match you.
          </p>

          <div className="hero-buttons">
            <Link to="/jobs">
              <button className="primary-btn">
                Find Matching Jobs →
              </button>
            </Link>

            <Link to="/student-dashboard">
              <button className="secondary-btn">
                Explore Dashboard
              </button>
            </Link>
          </div>

          <div className="hero-trust">
            <div>
              <strong>10K+</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>Jobs</span>
            </div>

            <div>
              <strong>92%</strong>
              <span>Match Accuracy</span>
            </div>
          </div>

        </div>

        {/* AI CARD */}
        <div className="hero-visual">

          <div className="floating-card card-one">
            <span>📄</span>
            <div>
              <strong>Resume Analysed</strong>
              <small>Skills detected successfully</small>
            </div>
          </div>

          <div className="ai-card">

            <div className="ai-card-top">
              <div>
                <small>YOUR AI MATCH</small>
                <h3>Java Developer</h3>
              </div>

              <div className="ai-icon">✦</div>
            </div>

            <div className="match-circle">
              <div>
                <strong>92%</strong>
                <span>Match</span>
              </div>
            </div>

            <div className="skills">
              <span>Java ✓</span>
              <span>Spring Boot ✓</span>
              <span>SQL ✓</span>
              <span>React</span>
            </div>

            <div className="match-bottom">
              <span>Excellent match</span>
              <button>View Job →</button>
            </div>

          </div>

          <div className="floating-card card-two">
            <span>🎯</span>
            <div>
              <strong>3 New Matches</strong>
              <small>Based on your skills</small>
            </div>
          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="features-section">

        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>Your career journey, made smarter.</h2>
          <p>
            Everything you need to discover opportunities and prove your skills.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon purple">📄</div>
            <h3>Upload Resume</h3>
            <p>
              Upload your resume and let AI understand your education,
              skills and experience.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon blue">🤖</div>
            <h3>AI Job Matching</h3>
            <p>
              Get personalized job recommendations based on your actual
              skills and profile.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon green">📝</div>
            <h3>Take Hiring Tests</h3>
            <p>
              Test your knowledge through online assessments and track
              your performance.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange">🚀</div>
            <h3>Track Your Progress</h3>
            <p>
              See your strengths, missing skills, test results and
              overall job readiness.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">
        <div>
          <span>READY TO START?</span>
          <h2>Your next opportunity could be closer than you think.</h2>
          <p>
            Build your profile, discover matching jobs and show what you can do.
          </p>
        </div>

        <Link to="/student-dashboard">
          <button className="primary-btn">
            Get Started →
          </button>
        </Link>
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
      <Route path="/take-test" element={<TakeTest />} />
    </Routes>
  );
}

export default App;ok hogya
