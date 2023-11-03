import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
