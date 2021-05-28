import React from "react";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);

  function handleClick() {
    audio.play();
  }

  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <button type="button" className="PhoneticButton" onClick={handleClick}>
          <i className="fas fa-volume-up"></i>
        </button>
        <span className="PhoneticText"> {props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
