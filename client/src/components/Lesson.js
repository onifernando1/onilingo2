import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Lesson(props) {
  const [words, setWords] = useState("");
  // useEffect(() => {
  //   axios.get("http://localhost:3000/lessons/1").then((response) => {
  //     setWords(response.data.words);
  //     console.log(response.data);
  //   });
  // }, []);
  return <div>lesson</div>;
}

export default Lesson;
