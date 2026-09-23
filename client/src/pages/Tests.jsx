import { Link } from 'react-router-dom';

function Tests() {
  const tests = [
    {
      title: "Java Developer Assessment",
      company: "Tech Solutions",
      duration: "30 Minutes",
      questions: 20
    },
    {
      title: "Frontend Developer Assessment",
      company: "Creative Labs",
      duration: "25 Minutes",
      questions: 15
    }
  ];

  return (
    <div className="tests-page">

      <h1>Hiring Tests</h1>

      <p>
        Complete hiring tests to improve your chances of getting selected.
      </p>

      <div className="tests-list">

        {tests.map((test, index) => (
          <div className="test-card" key={index}>

            <div>
              <h2>{test.title}</h2>
              <h4>{test.company}</h4>
              <p>
                {test.questions} Questions • {test.duration}
              </p>
            </div>

            <Link to="/take-test">
              <button className="primary-btn">
                Start Test
              </button>
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Tests;