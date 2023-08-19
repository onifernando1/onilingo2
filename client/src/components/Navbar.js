import "../assets/styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">onilingo</div>

      <div className="navbar-section-container active">
        <img
          className="navbar-image"
          src={require("../assets/images/home.jpg")}
        ></img>
        <div className="navbar-title">LEARN</div>
      </div>
      <div className="navbar-section-container">
        <img
          className="navbar-image"
          src={require("../assets/images/leaderboards.jpg")}
        ></img>
        <div className="navbar-title">LEADERBOARDS</div>
      </div>
      <div className="navbar-section-container">
        <img
          className="navbar-image"
          src={require("../assets/images/quests.jpg")}
        ></img>
        <div className="navbar-title">QUESTS</div>
      </div>
      <div className="navbar-section-container">
        <img
          className="navbar-image"
          src={require("../assets/images/shop.jpg")}
        ></img>
        <div className="navbar-title">SHOP</div>
      </div>
      <div className="navbar-section-container">
        <img
          className="navbar-image"
          src={require("../assets/images/profile.jpg")}
        ></img>
        <div className="navbar-title">PROFILE</div>
      </div>
      <div className="navbar-section-container">
        <img
          className="navbar-image"
          src={require("../assets/images/more.jpg")}
        ></img>
        <div className="navbar-title">MORE</div>
      </div>
    </div>
  );
};

export default Navbar;
