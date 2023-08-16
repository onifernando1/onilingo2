import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/styles/writing-exercise.css";
import "../assets/styles/body.css";

const WritingExercise = (props) => {
  const exerciseWords = props.words;
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
  const [isCorrect, setIsCorrect] = useState(true);

  useEffect(() => {
    if (!initialRender) {
      updateWordInformation();
    }
    setInitialRender(false);
  }, [exercisesLeft]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setExercisesLeft(exercisesLeft - 1);
    // updateWordInformation();
  };

  const updateWordInformation = () => {
    console.log(wordInput);
    if (wordInput == exerciseWords[wordToLearn].portuguese) {
      if (exerciseWords[wordToLearn].last_five_array.length < 5) {
        setCorrect(correct + 1);
        exerciseWords[wordToLearn].last_five_array.push(true);
      } else if (exerciseWords[wordToLearn].last_five_array.length == 5) {
        exerciseWords[wordToLearn].last_five_array[4] = true;
      }
    } else {
      setIncorrect(incorrect + 1);
      if (exerciseWords[wordToLearn].last_five_array.length < 5) {
        exerciseWords[wordToLearn].last_five_array.push(false);
      } else if (exerciseWords[wordToLearn].last_five_array.length == 5) {
        exerciseWords[wordToLearn].last_five_array[4] = false;
      }
      exerciseWords[wordToLearn].times_wrong++;
    }

    exerciseWords[wordToLearn].times_seen++;

    if (exercisesLeft == 0) {
      alert("done");
      updateAllWordInformation();
    } else if (wordToLearn < exerciseWords.length - 1) {
      setWordToLearn(wordToLearn + 1);
      // setExercisesLeft(exercisesLeft - 1);
    } else if (wordToLearn >= exerciseWords.length - 1) {
      setWordToLearn(0);
      // setExercisesLeft(exercisesLeft - 1);
    }
    updateWords(exerciseWords);
    console.log(exercisesLeft);
    console.log(initialExercisesLeft);
    setProgressBar(100 - (exercisesLeft / initialExercisesLeft) * 100);
    setWordInput("");
  };

  const updateAllWordInformation = () => {
    let correct = 0;
    let incorrect = 0;
    exerciseWords[wordToLearn].percentage =
      (exerciseWords[wordToLearn].times_seen -
        exerciseWords[wordToLearn].times_wrong) /
      exerciseWords[wordToLearn].times_seen;

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
      correct = 0;
      incorrect = 0;
    }
    exerciseWords[wordToLearn].last_studied_date =
      new Date().toLocaleDateString() + "";
    exerciseWords[wordToLearn].last_studied_date = "";

    if (wordToLearn < exerciseWords.length - 1) {
      console.log("if");
      changeCurrentWordToLearn(wordToLearn + 1);
    } else {
      console.log("else");
      changeCurrentWordToLearn(0);
    }

    setProgressBar((exercisesLeft / wordToLearn.length) * 100);
    updateWords(exerciseWords);
  };
  return (
    <div className="writing-exercise-container">
      <div className="progress-bar">
        <div className="close">X</div>
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
        <div className="prompt">Write this in portuguese</div>
        <div className="image-and-word-container">
          <img
            className="evil-duo"
            src={require("../assets/images/evilDuo.jpg")}
          ></img>
          <div className="test-word">{exerciseWords[wordToLearn].english}</div>
        </div>

        <div className="exercise-form">
          <form onSubmit={handleSubmit}>
            <input
              className="word-input"
              onChange={(e) => setWordInput(e.target.value)}
              type="text"
              name="wordInput"
              value={wordInput}
            ></input>
            <div className="bottom-buttons-container">
              <div className="skip">SKIP</div>
              <input className="check" type="submit" value="CHECK" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WritingExercise;
