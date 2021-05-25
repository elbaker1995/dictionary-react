import React, { useState } from "react";
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <div className="dictionarySearch">
        <h1>Dictionary</h1>
        <form onSubmit={search}>
          <input
            className="searchBar"
            type="search"
            onChange={handleKeywordChange}
          />
        </form>
      </div>
    </div>
  );
}
