import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const WritingExercise = (props) => {
  const words = props.words;
  const wordToLearn = props.currentWordToLearn;
  const [wordInput, setWordInput] = useState("");
  const changeCurrentWordToLearn = props.changeCurrentWordToLearn;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wordInput == words[wordToLearn].english) {
      alert("correct");
      changeCurrentWordToLearn(2);
    } else {
      alert("incorrect");
    }
  };
  return (
    <div>
      <div>Write this in english</div>
      <div> {words[wordToLearn].portuguese}</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setWordInput(e.target.value)}
            type="text"
            name="wordInput"
          ></input>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default WritingExercise;
