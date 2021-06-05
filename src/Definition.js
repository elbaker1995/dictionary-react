import React from "react";
import Synonyms from "./Synonyms";
import "./definition.css";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h3>{props.definition.partOfSpeech}</h3>
      {props.definition.definitions.map(function (definition, index) {
        return (
          <div className="definition-results" key={index}>
            <p className="definition-definition">{definition.definition}</p>
            <em className="definition-example">"{definition.example}"</em>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
