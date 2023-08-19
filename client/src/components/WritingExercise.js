import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/styles/writing-exercise.css";
import "../assets/styles/body.css";
import { Link } from "react-router-dom";

const WritingExercise = (props) => {
  const [exerciseWords, setExerciseWords] = useState(props.words);
  // const [exerciseWords, setExerciseWords] = useState([
  //   {
  //     id: 34,
  //     english: "hi",
  //     portuguese: "olá",
  //     times_seen: 0,
  //     times_wrong: 0,
  //     status: "learning",
  //     last_studied_date: null,
  //     to_be_studied_date: null,
  //     percentage: 0,
  //     last_five_array: [],
  //     last_five_percentage: 0,
  //     image: null,
  //     sound: null,
  //     lesson_id: 1,
  //   },
  //   {
  //     id: 35,
  //     english: "what's up?",
  //     portuguese: "e então?",
  //     times_seen: 0,
  //     times_wrong: 0,
  //     status: "learning",
  //     last_studied_date: null,
  //     to_be_studied_date: null,
  //     percentage: 0,
  //     last_five_array: [],
  //     last_five_percentage: 0,
  //     image: null,
  //     sound: null,
  //     lesson_id: 1,
  //   },
  // ]);
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
    let tempArray = [...exerciseWords];
    if (exerciseWords[wordToLearn].last_five_array.length < 5) {
      tempArray[wordToLearn].last_five_array.push(bool);
      setExerciseWords(tempArray);
    } else if (exerciseWords[wordToLearn].last_five_array.length == 5) {
      tempArray[wordToLearn].last_five_array[4] = bool;
      setExerciseWords(tempArray);
    }
  };

  const moveToNextExercise = () => {
    if (exercisesLeft <= 0) {
      alert("done");
      setLessonComplete(true);
      updateWordDataForBackend();
      updateWordsAxios();
    } else if (wordToLearn < exerciseWords.length - 1) {
      setWordToLearn(wordToLearn + 1);
    } else if (wordToLearn >= exerciseWords.length - 1) {
      setWordToLearn(0);
    }
  };

  const removeAnyPunctuation = (word) => {
    const ignore = [".", ",", "!", "?", "/"];
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
      if (!ignore.includes(word[i])) {
        newWord += word[i];
      }
    }
    console.log(newWord);
    return newWord;
  };

  const checkForCorrectWord = (wordInput, desiredWord) => {
    let formattedWordInput = wordInput.toLowerCase();
    formattedWordInput = removeAnyPunctuation(formattedWordInput);
    let desiredWordArray = [];
    desiredWordArray.push(removeAnyPunctuation(desiredWord.toLowerCase()));

    if (formattedWordInput == desiredWordArray[0]) {
      return true;
    } else {
      return false;
    }
  };

  const updateWordInformation = () => {
    if (checkForCorrectWord(wordInput, exerciseWords[wordToLearn].portuguese)) {
      setCorrect(correct + 1);
      updateLastFiveArray(true);
    } else {
      setIncorrect(incorrect + 1);
      updateLastFiveArray(false);
      let tempArray = [...exerciseWords];
      tempArray[wordToLearn].times_wrong++;
      setExerciseWords(tempArray);
    }

    let tempArray = [...exerciseWords];

    tempArray[wordToLearn].times_seen++;

    setExerciseWords(tempArray);

    console.log(exerciseWords[wordToLearn]);

    moveToNextExercise();

    setProgressBar(100 - (exercisesLeft / initialExercisesLeft) * 100);
  };

  const updatePercentage = () => {
    let tempArray = [...exerciseWords];
    tempArray[wordToLearn].percentage =
      (tempArray[wordToLearn].times_seen - tempArray[wordToLearn].times_wrong) /
      tempArray[wordToLearn].times_seen;
    setExerciseWords(tempArray);
  };

  const updateLastFivePercentage = () => {
    console.log("called");
    let correct = 0;
    let incorrect = 0;
    let tempArray = [...exerciseWords];
    if (tempArray[wordToLearn].last_five_array.length == 5) {
      for (let i = 0; i < tempArray[wordToLearn].last_five_array.length; i++) {
        if (tempArray[wordToLearn].last_five_array[i] == true) {
          correct++;
        } else {
          incorrect++;
        }
      }
      tempArray[wordToLearn].last_five_percentage = (correct * 100) / 5;
      setExerciseWords(tempArray);
    }
  };

  const updateLastStudiedDate = () => {
    let tempArray = [...exerciseWords];
    tempArray[wordToLearn].last_studied_date =
      new Date().toLocaleDateString() + "";
    setExerciseWords(tempArray);
  };

  const updateWordDataForBackend = () => {
    updatePercentage();
    updateLastFivePercentage();
    updateLastStudiedDate();
    console.log(exerciseWords);
    updateWords(exerciseWords);
  };

  const displayCorrect = () => {
    if (checkForCorrectWord(wordInput, exerciseWords[wordToLearn].portuguese)) {
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

  const updateWordsAxios = () => {
    console.log("called");
    exerciseWords.forEach((word) => {
      console.log(word.times_seen);
      axios
        .put(`http://localhost:3000/words/${word.id}`, {
          timesSeen: word.times_seen,
          timesWrong: word.times_wrong,
          status: word.status,
          lastStudiedDate: word.last_studied_date,
          toBeStudiedDate: word.to_be_studied_date,
          percentage: word.percentage,
          lastFiveArray: word.last_five_array,
          lastFivePercentage: word.last_five_percentage,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <>
      {!lessonComplete ? (
        <>
          <div className="writing-exercise-container">
            <div className="progress-bar">
              <Link to="/">
                <div className="close">X</div>
              </Link>
              <div className="background-bar"></div>
              <div
                className="coloured-bar"
                style={{ width: `${progressBar}%` }}
              ></div>
            </div>
            {/* <div>Exercises left {exercisesLeft}</div>
            <div>Word To learn {wordToLearn}</div>
            <div>Progress Bar: {progressBar}</div>
            <div>Correct: {correct}</div>
            <div>Incorrect: {incorrect}</div> */}

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
                  {isIncorrect || isCorrect ? (
                    <></>
                  ) : (
                    <>
                      {" "}
                      <input
                        className="word-input"
                        onChange={(e) => setWordInput(e.target.value)}
                        type="text"
                        name="wordInput"
                        value={wordInput}
                      ></input>
                    </>
                  )}

                  <div
                    className={`bottom-buttons-container correct-${isCorrect} incorrect-${isIncorrect}`}
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
        <div className="lesson-complete-container">
          <div className="complete-title">Lesson Complete!</div>
          <div>
            <img src={require("../assets/images/duoKnife.jpg")}></img>
          </div>
          <div className="incorrect-correct-container">
            <div className="correct-container">Correct: {correct}</div>
            <div className="incorrect-container">Incorrect:{incorrect}</div>
            <Link to="/">
              <div className="next">Home</div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default WritingExercise;
