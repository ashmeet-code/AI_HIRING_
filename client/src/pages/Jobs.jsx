function Jobs() {
  const jobs = [
    {
      title: "Java Developer",
      company: "Tech Solutions",
      match: "92%",
      skills: "Java, Spring Boot, SQL"
    },
    {
      title: "Frontend Developer",
      company: "Creative Labs",
      match: "86%",
      skills: "React, JavaScript, HTML, CSS"
    },
    {
      title: "Software Developer",
      company: "Digital Works",
      match: "78%",
      skills: "Java, Python, Git"
    }
  ];

  return (
    <div className="jobs-page">

      <h1>Matching Jobs</h1>

      <p>
        Jobs matched with your skills and resume.
      </p>

      <div className="jobs-list">

        {jobs.map((job, index) => (
          <div className="job-card" key={index}>

            <div>
              <h2>{job.title}</h2>
              <h4>{job.company}</h4>
              <p>Required Skills: {job.skills}</p>
            </div>

            <div className="job-match">
              <strong>{job.match}</strong>
              <span>Match</span>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Jobs;