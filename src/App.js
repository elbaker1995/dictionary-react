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
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/eleanorbaker5595/"
              target="blank"
              className="icon"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/elb_5/"
              target="blank"
              className="icon"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
