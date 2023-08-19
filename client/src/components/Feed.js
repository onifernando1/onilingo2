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
      <div>
        <div>Daily Quests</div>
        <div>VIEW ALL</div>
        <div>Earn 20 XP</div>
        <div>zigzag image</div>
        <div>
          <div>20/20</div>
          <div>Trasure image</div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
