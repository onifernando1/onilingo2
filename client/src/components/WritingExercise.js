import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/styles/writing-exercise.css";
import "../assets/styles/body.css";

const WritingExercise = (props) => {
  // const exerciseWords = props.words;
  const exerciseWords = [
    {
      id: 34,
      english: "hi",
      portuguese: "olá",
      times_seen: 0,
      times_wrong: 0,
      status: "learning",
      last_studied_date: null,
      to_be_studied_date: null,
      percentage: 0,
      last_five_array: [],
      last_five_percentage: 0,
      image: null,
      sound: null,
      lesson_id: 1,
    },
    {
      id: 35,
      english: "what's up?",
      portuguese: "e então?",
      times_seen: 0,
      times_wrong: 0,
      status: "learning",
      last_studied_date: null,
      to_be_studied_date: null,
      percentage: 0,
      last_five_array: [],
      last_five_percentage: 0,
      image: null,
      sound: null,
      lesson_id: 1,
    },
  ];
  const [wordToLearn, setWordToLearn] = useState(props.currentWordToLearn);
  const [wordInput, setWordInput] = useState("");
  const changeCurrentWordToLearn = props.changeCurrentWordToLearn;
  const updateWords = props.updateWords;
  const [initialExercisesLeft, setInitialExercisesLeft] = useState(
    exerciseWords.length * 5
  );
  const [exercisesLeft, setExercisesLeft] = useState(exerciseWords.length * 5);
  const [progressBar, setProgressBar] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [initialRender, setInitialRender] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [lessonComplete, setLessonComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    displayCorrect();
    setWordInput("");
  };

  const updateLastFiveArray = (bool) => {
    if (exerciseWords[wordToLearn].last_five_array.length < 5) {
      exerciseWords[wordToLearn].last_five_array.push(bool);
    } else if (exerciseWords[wordToLearn].last_five_array.length == 5) {
      exerciseWords[wordToLearn].last_five_array[4] = bool;
    }
  };

  const moveToNextExercise = () => {
    if (exercisesLeft <= 0) {
      alert("done");
      setLessonComplete(true);
      updateWordDataForBackend();
    } else if (wordToLearn < exerciseWords.length - 1) {
      setWordToLearn(wordToLearn + 1);
    } else if (wordToLearn >= exerciseWords.length - 1) {
      setWordToLearn(0);
    }
  };

  const updateWordInformation = () => {
    if (wordInput == exerciseWords[wordToLearn].portuguese) {
      setCorrect(correct + 1);
      updateLastFiveArray(true);
    } else {
      setIncorrect(incorrect + 1);
      updateLastFiveArray(false);
      exerciseWords[wordToLearn].times_wrong++;
    }

    exerciseWords[wordToLearn].times_seen++;

    moveToNextExercise();

    setProgressBar(100 - (exercisesLeft / initialExercisesLeft) * 100);
  };

  const updatePercentage = () => {
    exerciseWords[wordToLearn].percentage =
      (exerciseWords[wordToLearn].times_seen -
        exerciseWords[wordToLearn].times_wrong) /
      exerciseWords[wordToLearn].times_seen;
  };

  const updateLastFivePercentage = () => {
    let correct = 0;
    let incorrect = 0;
    if (exerciseWords[wordToLearn].last_five_array.length == 5) {
      for (
        let i = 0;
        i < exerciseWords[wordToLearn].last_five_array.length;
        i++
      ) {
        if (exerciseWords[wordToLearn].last_five_array[i] == true) {
          correct++;
        } else {
          incorrect++;
        }
      }
      exerciseWords[wordToLearn].last_five_percentage = (correct * 100) / 5;
    }
  };

  const updateLastStudiedDate = () => {
    exerciseWords[wordToLearn].last_studied_date =
      new Date().toLocaleDateString() + "";
    exerciseWords[wordToLearn].last_studied_date = "";
  };

  const updateWordDataForBackend = () => {
    updatePercentage();

    updateLastFivePercentage();

    updateLastStudiedDate();

    updateWords(exerciseWords);
  };

  const displayCorrect = () => {
    if (wordInput == exerciseWords[wordToLearn].portuguese) {
      setIsCorrect(true);
    } else {
      setIsIncorrect(true);
    }
  };

  const handleAnswer = () => {
    if (isCorrect) {
      setIsCorrect(false);
    }
    if (isIncorrect) {
      setIsIncorrect(false);
    }
    updateWordInformation();
    setExercisesLeft(exercisesLeft - 1);
  };

  return (
    <>
      {!lessonComplete ? (
        <>
          <div className="writing-exercise-container">
            <div className="progress-bar">
              <div className="close">X</div>
              <div className="background-bar"></div>
              <div
                className="coloured-bar"
                style={{ width: `${progressBar}%` }}
              ></div>
            </div>
            <div>Exercises left {exercisesLeft}</div>
            <div>Word To learn {wordToLearn}</div>
            <div>Progress Bar: {progressBar}</div>
            <div>Correct: {correct}</div>
            <div>Incorrect: {incorrect}</div>

            <div className="individual-exercise-container">
              {!isIncorrect ? (
                <>
                  {" "}
                  <div className="prompt">Write this in portuguese</div>
                  <div className="image-and-word-container">
                    <img
                      className="evil-duo"
                      src={require("../assets/images/evilDuo.jpg")}
                    ></img>
                    <div className="test-word">
                      {exerciseWords[wordToLearn].english}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="prompt">The answer was</div>
                  <div className="image-and-word-container">
                    <img
                      className="evil-duo"
                      src={require("../assets/images/duoKnife.jpg")}
                    ></img>
                    <div className="test-word">
                      {exerciseWords[wordToLearn].portuguese}
                    </div>
                  </div>{" "}
                </>
              )}

              <div className="exercise-form">
                <form onSubmit={handleSubmit}>
                  {!isIncorrect ? (
                    <>
                      <input
                        className="word-input"
                        onChange={(e) => setWordInput(e.target.value)}
                        type="text"
                        name="wordInput"
                        value={wordInput}
                      ></input>
                    </>
                  ) : (
                    <></>
                  )}

                  <div
                    className={`bottom-buttons-container correct-${isCorrect}`}
                  >
                    {isCorrect ? (
                      <>
                        <div>Yay!</div>
                        <div className="success">Correct!</div>
                        <button onClick={handleAnswer} className="check">
                          Next
                        </button>
                      </>
                    ) : (
                      <>
                        {isIncorrect ? (
                          <>
                            <div>Uh Oh!</div>
                            <div className="incorrect">Incorrect!</div>
                            <button
                              style={{ backgroundColor: "red" }}
                              onClick={handleAnswer}
                              className="check"
                            >
                              Next
                            </button>
                          </>
                        ) : (
                          <>
                            <div className="skip">SKIP</div>
                            <input
                              className="check"
                              type="submit"
                              value="CHECK"
                            />
                          </>
                        )}
                      </>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Lesson Complete!</div>
      )}
    </>
  );
};

export default WritingExercise;
