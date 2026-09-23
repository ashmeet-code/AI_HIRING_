import { useState } from 'react';

function Profile() {
  const [resume, setResume] = useState(null);

  const handleResume = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div className="profile-page">

      <h1>My Profile</h1>

      <p>
        Complete your profile and upload your resume
        to get personalized job matches.
      </p>

      <div className="profile-box">

        <h2>Student Information</h2>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="text"
          placeholder="Education"
        />

        <input
          type="text"
          placeholder="Skills (Java, Python, React...)"
        />

        <h2>Upload Resume</h2>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleResume}
        />

        {resume && (
          <p className="resume-name">
            Selected: {resume.name}
          </p>
        )}

        <button className="primary-btn">
          Save Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;