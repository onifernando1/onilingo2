import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import WritingExercise from "./WritingExercise";

function Lesson(props) {
  const [words, setWords] = useState("");
  const wordToLearn = 1;
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
          <WritingExercise words={words} currentWordToLearn={wordToLearn} />
        </div>
      ) : null}
    </div>
  );
}

export default Lesson;
