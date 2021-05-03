import { useState } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (               //if showScore=true then show the scores.... else show the questions
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div>
          <div>
            <div>
              <span>Question {currentQuestion + 1}</span>/{questions.length}  //questions
            </div>
            <div>{questions[currentQuestion].questionText}</div>
          </div>
          <div>
            {questions[currentQuestion].answerOptions.map((answerOption) => (         ///map through the array of questions showing answerOptions alongSide
              <div>
                <button
                  style={{ margin: "10px" }}
                  className="btn btn-primary"
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)       //handleAnswerButtonClick function takes an argument of isCorrect to check the answer is correct or not
                  }                                                       //if answer is correct increment score
                >
                  {answerOption.answerText}
                </button>
                <br />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
