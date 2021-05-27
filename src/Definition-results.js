import React from "react";
import Meaning from "./Meaning";

export default function DefinitionResults(props) {
  if (props.results) {
    return (
      <div>
        <h2>{props.results.word}</h2>
        {/* <p>/ˈsʌnsɛt/</p>
        <h3>noun</h3> */}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}

        {/* 
        
        <ul>
          <li>nightfall</li>
          <li>twilight</li>
          <li>dusk</li>
        </ul>
        <img src="./image/sunset.jpg" alt="sunset" />
        <img src="./image/sunset.jpg" alt="sunset" />
        <img src="./image/sunset.jpg" alt="sunset" />
        <img src="./image/sunset.jpg" alt="sunset" />
        <img src="./image/sunset.jpg" alt="sunset" />
        <img src="./image/sunset.jpg" alt="sunset" />

        <p>Learn more at the official page</p> */}
      </div>
    );
  } else {
    return null;
  }
}
