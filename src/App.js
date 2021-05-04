import { useState } from "react";
import "./App.css";

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
    <div className="container row" style={{ background: "" }}>
      <div className="col-lg-5"></div>
      <div
        className="app"
        style={{
          borderRadius: "10%",
          padding: "5%",
          marginTop: "10%",
          background: "#E0FFFF",
          height: "20%",
          width: "40%",
        }}
      >
        {showScore ? ( //if showScore=true then show the scores.... else show the questions
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <div>
            <div>
              <div>
                <span style={{ fontFamily: "cursive" }}>
                  Question {currentQuestion + 1}
                </span>
                /{questions.length}{" "}
              </div>
              <div style={{ fontFamily: "cursive" }}>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="row" style={{ marginTop: "10%" }}>
              <div className="col-lg-4"></div>
              <div style={{ marginTop: "0%" }}>
                {questions[currentQuestion].answerOptions.map((
                  answerOption ///map through the array of questions showing answerOptions alongSide
                ) => (
                  <div>
                    <button
                      style={{ margin: "10px", height: "40px", width: "100px" }}
                      className="btn btn-primary"
                      onClick={
                        () => handleAnswerButtonClick(answerOption.isCorrect) //handleAnswerButtonClick function takes an argument of isCorrect to check the answer is correct or not
                      } //if answer is correct increment score
                    >
                      {answerOption.answerText}
                    </button>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
