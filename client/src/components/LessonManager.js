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
      <div>
        <Link to="lesson">
          <div className="start">START</div>
          <div className="circle">Star shape</div>
        </Link>
      </div>
    </div>
  );
};

export default LessonManager;
