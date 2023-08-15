import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const WritingExercise = (props) => {
  const exerciseWords = props.words;
  const wordToLearn = props.currentWordToLearn;
  const [wordInput, setWordInput] = useState("");
  const changeCurrentWordToLearn = props.changeCurrentWordToLearn;
  const updateWords = props.updateWords;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateWordInformation();
    setWordInput("");
  };

  const updateWordInformation = () => {
    // let correct = 0;
    // let incorrect = 0;
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

    // exerciseWords[wordToLearn].percentage =
    //   (exerciseWords[wordToLearn].times_seen -
    //     exerciseWords[wordToLearn].times_wrong) /
    //   exerciseWords[wordToLearn].times_seen;

    // if (exerciseWords[wordToLearn].last_five_array.length == 5) {
    //   for (
    //     let i = 0;
    //     i < exerciseWords[wordToLearn].last_five_array.length;
    //     i++
    //   ) {
    //     if (exerciseWords[wordToLearn].last_five_array[i] == true) {
    //       correct++;
    //     } else {
    //       incorrect++;
    //     }
    //   }
    // }

    exerciseWords[wordToLearn].times_seen++;
    // exerciseWords[wordToLearn].last_studied_date =
    // new Date().toLocaleDateString() + "";
    // exerciseWords[wordToLearn].last_studied_date =""
    // exerciseWords[wordToLearn].last_five_percentage = (correct * 100) / 5;

    console.log(exerciseWords[wordToLearn]);
    changeCurrentWordToLearn(1);
    updateWords(exerciseWords);
  };

  return (
    <div>
      <div>Write this in english</div>
      <div> {exerciseWords[wordToLearn].portuguese}</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setWordInput(e.target.value)}
            type="text"
            name="wordInput"
            value={wordInput}
          ></input>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default WritingExercise;
