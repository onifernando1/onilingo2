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
  const [exercisesLeft, setExercisesLeft] = useState(exerciseWords.length * 5);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateWordInformation();
    setWordInput("");
  };

  const updateWordInformation = () => {
    if (wordInput == exerciseWords[wordToLearn].english) {
      alert("correct");
      if (exerciseWords[wordToLearn].last_five_array.length < 5) {
        exerciseWords[wordToLearn].last_five_array.push(true);
      } else if (exerciseWords[wordToLearn].last_five_array.length == 5) {
        exerciseWords[wordToLearn].last_five_array[4] = true;
      }
    } else {
      alert("incorrect");
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
      setExercisesLeft(exercisesLeft - 1);
    } else if (wordToLearn >= exerciseWords.length - 1) {
      setWordToLearn(0);
      setExercisesLeft(exercisesLeft - 1);
    }
    updateWords(exerciseWords);
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
    updateWords(exerciseWords);
  };
  return (
    <div className="writing-exercise-container">
      <div className="individual-exercise-container">
        <div className="prompt">Write this in english</div>
        <div>Exercises left {exercisesLeft}</div>
        <div>Word To learn {wordToLearn}</div>
        <div className="test-word">{exerciseWords[wordToLearn].portuguese}</div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setWordInput(e.target.value)}
              type="text"
              name="wordInput"
              value={wordInput}
            ></input>
            <input type="submit" value="check" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default WritingExercise;
