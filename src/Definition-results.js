import React from "react";
import Definition from "./Definition";
import Phonetic from "./Phonetic";
import "./Definition-results.css";

export default function DefinitionResults(props) {
  if (props.results) {
    return (
      <div className="results">
        <p className="WordSearched">{props.results.word}</p>
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
      </div>
    );
  } else {
    return null;
  }
}
