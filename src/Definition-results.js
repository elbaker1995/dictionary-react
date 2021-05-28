import React from "react";
import Definition from "./Definition";
import Phonetic from "./Phonetic";
import "./Definition-results.css";

export default function DefinitionResults(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Definition definition={meaning} />
            </div>
          );
        })}

        {/* 
       
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
