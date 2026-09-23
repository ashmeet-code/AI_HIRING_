import { Link } from 'react-router-dom';
function Candidates() {
  return (
    <div className="candidates-page">
        <Link to="/" className="back-home">
  ← Back to Home
</Link>

      <h1>AI Candidate Matching</h1>

      <p>
        Find candidates that match your job requirements.
      </p>

      <div className="candidate-box">
        <h2>Java Developer</h2>

        <p>
  Enter the job requirements and let HireSense
  find suitable candidates.
</p>

<textarea
  className="job-input"
  placeholder="Example: Looking for a Java Developer with skills in Java, Spring Boot, SQL and React..."
  rows="6"
></textarea>

<button className="primary-btn">
  Find Matching Candidates
</button>
      </div>

    </div>
  );
}

export default Candidates;