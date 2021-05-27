import React from "react";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);

  function handleClick() {
    audio.play();
  }

  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <span className="Phonetic-text">{props.phonetic.text}</span>
        <br />{" "}
        <button type="button" className="Phonetic-button" onClick={handleClick}>
          Listen
        </button>
      </div>
    );
  } else {
    return null;
  }
}
