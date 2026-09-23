import { Link } from 'react-router-dom';

function RoleSelect() {
  return (
    <div className="role-page">

      <h1>Welcome to HireSense</h1>

      <p>Choose how you want to continue</p>

      <div className="role-cards">

        <Link to="/candidate-login" className="role-card">
          <h2>👨‍🎓 Candidate</h2>
          <p>Upload your resume, take tests and find matching jobs.</p>
        </Link>

        <Link to="/recruiter-login" className="role-card">
          <h2>🏢 Recruiter</h2>
          <p>Create jobs, conduct tests and find matching candidates.</p>
        </Link>

      </div>

    </div>
  );
}

export default RoleSelect;