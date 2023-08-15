import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import WritingExercise from "./WritingExercise";

const Lesson = (props) => {
  const [words, setWords] = useState("");
  const [currentWordToLearn, setCurrentWordToLearn] = useState(1);
  const changeCurrentWordToLearn = (exerciseResponse) => {
    setCurrentWordToLearn(exerciseResponse);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/lessons/1").then((response) => {
      setWords(response.data.words);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      {words ? (
        <div>
          <div>{currentWordToLearn}</div>
          <WritingExercise
            words={words}
            currentWordToLearn={currentWordToLearn}
            changeCurrentWordToLearn={changeCurrentWordToLearn}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Lesson;
