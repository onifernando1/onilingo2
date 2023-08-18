import Navbar from "../components/Navbar";
import LessonManager from "../components/LessonManager";
import "../assets/styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <Navbar />
      </div>
      <div>
        <LessonManager />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
