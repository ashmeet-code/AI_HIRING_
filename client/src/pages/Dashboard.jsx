import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <div className="dashboard">
    <Link to="/" className="back-home">
  ← Back to Home
</Link>  

      <h1>Recruiter Dashboard</h1>

      <p className="dashboard-subtitle">
        Manage your hiring process with HireSense
      </p>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h3>Total Jobs</h3>
          <h2>12</h2>
          <p>Active job openings</p>
        </div>

        <div className="dashboard-card">
          <h3>Applicants</h3>
          <h2>48</h2>
          <p>Total applications</p>
        </div>

        <div className="dashboard-card">
          <h3>Shortlisted</h3>
          <h2>16</h2>
          <p>AI matched candidates</p>
        </div>

      </div>

      <div className="dashboard-section">
        <h2>AI Candidate Matching</h2>

        <p>
          Find suitable candidates using AI-powered
          skill and job matching.
        </p>

        <button
  className="primary-btn"
  onClick={() => window.location.href = '/candidates'}
>
  Find Candidates
</button>
      </div>

    </div>
  );
}

export default Dashboard;