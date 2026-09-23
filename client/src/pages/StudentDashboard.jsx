import { Link } from 'react-router-dom';

function StudentDashboard() {
  return (
    <div className="student-dashboard">

      <h1>Student Dashboard</h1>

      <p className="dashboard-subtitle">
        Build your profile, find matching jobs and complete hiring tests.
      </p>

      <div className="student-cards">

        <Link to="/profile" className="student-card">
          <h2>📄 My Resume</h2>
          <p>Upload and manage your resume.</p>
        </Link>

        <Link to="/jobs" className="student-card">
          <h2>💼 Matching Jobs</h2>
          <p>Find jobs that match your skills.</p>
        </Link>

        <Link to="/tests" className="student-card">
          <h2>📝 Hiring Tests</h2>
          <p>Take tests and check your performance.</p>
        </Link>

      </div>

      <div className="match-section">
        <h2>🤖 Your AI Job Match</h2>

        <div className="match-score">
          87%
        </div>

        <p>
          Complete your profile and upload your resume
          to get more accurate job matches.
        </p>
      </div>

    </div>
  );
}

export default StudentDashboard;
