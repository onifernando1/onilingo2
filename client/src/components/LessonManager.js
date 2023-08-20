import { Link } from "react-router-dom";
import "../assets/styles/lesson-manager.css";
import axios from "axios";
import { useState, useEffect } from "react";

const LessonManager = (props) => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/lessons").then((response) => {
      console.log(response.data);
      setLessons(response.data);
    });
  }, []);

  return (
    <div className="lessons-container">
      <div className="unit-container">
        <div className="unit-info-container">
          <div className="unit-title">Unit 1</div>
          <div>Form basic sentences, great people</div>
        </div>
        <div className="guidebook-container">
          <div>GUIDEBOOK</div>
        </div>
      </div>
      {lessons ? (
        <div className="individual-lesson-circles-container">
          {lessons.map((lesson) => {
            return (
              <div className="lesson-circle-container">
                <Link
                  className="individual-lesson"
                  to={`lesson/${lesson.id}`}
                  key={lesson.id}
                >
                  <div className="start">START</div>
                  <div className="circle-container">
                    <div className="outer-grey"></div>
                    <div className="outer-white"></div>
                    <div className="circle">{lesson.number}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <>Null</>
      )}
      <div>
        <img
          className="evil-duo manager"
          src={require("../assets/images/evilDuo.jpg")}
        ></img>
      </div>
    </div>
  );
};

export default LessonManager;
