import "../assets/styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">onilingo</div>

      <div className="navbar-section-container">
        <img
          className="navbar-image"
          src={require("../assets/images/home.jpg")}
        ></img>
        <div>LEARN</div>
      </div>
      <div className="navbar-section-container">
        <img
          className="navbar-image"
          src={require("../assets/images/leaderboards.jpg")}
        ></img>
        <div>LEADERBOARDS</div>
      </div>
      <div className="navbar-section-container">
        <img
          className="navbar-image"
          src={require("../assets/images/quests.jpg")}
        ></img>
        <div>QUESTS</div>
      </div>
      <div className="navbar-section-container">
        <img
          className="navbar-image"
          src={require("../assets/images/shop.jpg")}
        ></img>
        <div>SHOP</div>
      </div>
      <div className="navbar-section-container">
        <img
          className="navbar-image"
          src={require("../assets/images/profile.jpg")}
        ></img>
        <div>PROFILE</div>
      </div>
      <div className="navbar-section-container">
        <img
          className="navbar-image"
          src={require("../assets/images/more.jpg")}
        ></img>
        <div>MORE</div>
      </div>
    </div>
  );
};

export default Navbar;
