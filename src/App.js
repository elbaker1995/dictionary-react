import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer>
          <p>
            Coded by{" "}
            <a
              href="https://thirsty-meitner-3450ed.netlify.app/#"
              target="blank"
              className="portfolioLink"
            >
              Eleanor Baker
            </a>{" "}
            <a
              href="https://github.com/elbaker1995/dictionary-react"
              target="blank"
              className="icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/eleanorbaker5595/"
              target="blank"
              className="icon"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/elb_5/"
              target="blank"
              className="icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://objective-haibt-b80dac.netlify.app/"
              target="blank"
              className="icon"
            >
              <i className="fas fa-cloud-sun"></i>
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
