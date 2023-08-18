import Navbar from "../components/Navbar";
import LessonManager from "../components/LessonManager";
import "../assets/styles/home.css";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <Navbar />
      </div>
      <div>
        <LessonManager />
      </div>
      <div>
        <Feed />
      </div>
    </div>
  );
};

export default Home;
