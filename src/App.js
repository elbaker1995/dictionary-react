import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer>
          <p>
            Coded by Eleanor Baker{" "}
            <a
              href="https://github.com/elbaker1995/dictionary-react"
              target="blank"
              className="icon"
            >
              <i className="fab fa-github-square"></i>
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
