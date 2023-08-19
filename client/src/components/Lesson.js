import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import WritingExercise from "./WritingExercise";

const Lesson = (props) => {
  const [words, setWords] = useState("");
  const [currentWordToLearn, setCurrentWordToLearn] = useState(0);
  const changeCurrentWordToLearn = (exerciseResponse) => {
    setCurrentWordToLearn(exerciseResponse);
  };
  const updateLessonWords = (exerciseResponse) => {
    setWords(exerciseResponse);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/lessons/1").then((response) => {
      setWords(response.data.words);
      console.log(response.data);
    });
  }, []);

  // useEffect(() => {
  //   if (words) {
  //     words.forEach((word) => {
  //       axios
  //         .post(`http://localhost:3000/words/${word.id}`, {
  //           timesSeen: word.timesSeen,
  //           timesWrong: word.timesWrong,
  //           status: word.status,
  //           lastStudiedDate: word.lastStudiedDate,
  //           toBeStudiedDate: word.toBeStudiedDate,
  //           percentage: word.percentage,
  //           lastFiveArray: word.lastFiveArray,
  //           lastFivePercentage: word.lastFivePercentage,
  //         })
  //         .then((response) => {
  //           console.log(response);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     });
  //   }
  // }, [words]);

  return (
    <div>
      {/* <div>Test</div>
      <div>TEST WORD TO LEARN {currentWordToLearn}</div> */}
      {words.length >= 1 ? (
        <div>
          <WritingExercise
            words={words}
            currentWordToLearn={currentWordToLearn}
            changeCurrentWordToLearn={changeCurrentWordToLearn}
            updateWords={updateLessonWords}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Lesson;
