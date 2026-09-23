import { useState } from 'react';

function TakeTest() {
  const questions = [
    {
      question: "Which keyword is used to create a class in Java?",
      options: ["function", "class", "struct", "object"],
      answer: "class"
    },
    {
      question: "Which method is the entry point of a Java program?",
      options: ["start()", "run()", "main()", "execute()"],
      answer: "main()"
    },
    {
      question: "Which of these is not a Java primitive data type?",
      options: ["int", "float", "String", "char"],
      answer: "String"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
      setSelected("");
    }
  };

  if (finished) {
    return (
      <div className="test-page">
        <div className="result-box">
          <h1>Test Completed 🎉</h1>
          <h2>
            Score: {score} / {questions.length}
          </h2>
          <p>Your test has been submitted successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="test-page">

      <div className="test-header">
        <h1>Java Developer Assessment</h1>
        <span>⏱ 30:00</span>
      </div>

      <div className="test-warning">
        ⚠️ Do not switch tabs during the test.
      </div>

      <div className="question-box">

        <p className="question-number">
          Question {current + 1} of {questions.length}
        </p>

        <h2>{questions[current].question}</h2>

        <div className="options">
          {questions[current].options.map((option, index) => (
            <label className="option" key={index}>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selected === option}
                onChange={(e) => setSelected(e.target.value)}
              />
              {option}
            </label>
          ))}
        </div>

        <button
          className="primary-btn"
          onClick={handleNext}
          disabled={!selected}
        >
          {current === questions.length - 1
            ? "Submit Test"
            : "Next Question"}
        </button>

      </div>

    </div>
  );
}

export default TakeTest;