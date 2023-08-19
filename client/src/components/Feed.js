import "../assets/styles/feed.css";

const Feed = () => {
  return (
    <div className="feed-container">
      <div className="super-container">
        <div className="super-left">
          <div>
            <img
              className="super-title"
              src={require("../assets/images/super.jpg")}
            ></img>
          </div>
          <div>
            <strong>Try Super for free</strong>
          </div>
          <div className="super-info">
            No ads, personalized practice, and unlimited Legendary!
          </div>
          <button className="super-button">FREE</button>
        </div>
        <div>
          <img
            className="double-duo"
            src={require("../assets/images/doubleDuo.jpg")}
          ></img>
        </div>
      </div>
      <div className="league-container">
        <div className="league-title">
          <div>
            <strong>Sapphire League</strong>
          </div>
          <div className="view-league">VIEW LEAGUE</div>
        </div>
        <div className="league-body-container">
          <div>
            <img
              className="sapphire"
              src={require("../assets/images/sapphire.jpg")}
            ></img>
          </div>
          <div>
            <div>
              <strong>You're ranked #3</strong>
            </div>
            <div className="ranked-quote">Keep it up to stay in the top 3!</div>
          </div>
        </div>
      </div>
      <div className="daily-quests-container">
        <div className="quest-title">
          <div>
            <strong>Daily Quests</strong>
          </div>
          <div className="view-all">VIEW ALL</div>
        </div>
        <div className="individual-quest-container">
          <div>
            <img
              className="quest-image"
              src={require("../assets/images/zigzag.jpg")}
            ></img>
          </div>
          <div>
            <div className="quest-text">Earn 30 XP</div>
            <div className="bar-container">
              <div className="quest-progress-bar">30/30 </div>
              <div>
                <img
                  className="treasure"
                  src={require("../assets/images/chest.jpg")}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="individual-quest-container">
          <div>
            <img
              className="quest-image"
              src={require("../assets/images/target.jpg")}
            ></img>
          </div>
          <div>
            <div className="quest-text">Score 80% or higher in 4 lessons</div>
            <div className="bar-container">
              <div className="quest-progress-bar">4/4</div>
              <div>
                <img
                  className="treasure"
                  src={require("../assets/images/chest.jpg")}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="individual-quest-container">
          <div>
            <img
              className="quest-image"
              src={require("../assets/images/quest-duo.jpg")}
            ></img>
          </div>
          <div>
            <div className="quest-text">
              Get 10 in a row correct in 3 lessons
            </div>
            <div className="bar-container">
              <div className="quest-progress-bar">3/3 </div>
              <div>
                <img
                  className="treasure"
                  src={require("../assets/images/chest.jpg")}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
