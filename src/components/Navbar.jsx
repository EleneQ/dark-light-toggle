import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img
        className="nav__logo-icon"
        src="https://scrimba.com/blobs/sha1:cf9b33f3181326753d7d67c8b9afb9c2aeee2880.png"
      ></img>
      <h3 className="nav__logo-text">ReactFacts</h3>
      {/* <h4 className="nav__title">React Course - Project 1</h4> */}
      <p className="nav__light">Light</p>
      <div className="nav__toggle-slider" onClick={props.toggleDarkMode}>
        <div className="nav__toggle-circle"></div>
      </div>
      <p className="nav__dark">Dark</p>
    </nav>
  );
}

export default Navbar;
