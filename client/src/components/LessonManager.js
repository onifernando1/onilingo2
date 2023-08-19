import { Link } from "react-router-dom";
import "../assets/styles/lesson-manager.css";

const LessonManager = (props) => {
  return (
    <div className="lessons-container">
      <div className="unit-container">
        <div className="unit-info-container">
          <div className="unit-title">Unit 1</div>
          <div>Form basic sentences, great people</div>
        </div>
        <div className="guidebook-container">
          {/* <div>Guidebook image</div> */}
          <div>GUIDEBOOK</div>
        </div>
      </div>
      <div className="lesson-circle-container">
        <Link to="lesson">
          <div className="start">START</div>
          <div className="circle-container">
            <div className="outer-grey"></div>
            <div className="outer-white"></div>
            <div className="circle">1</div>
          </div>
        </Link>
      </div>
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
