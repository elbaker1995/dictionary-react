import React, { useState } from "react";
import "./dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword} definition`);

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
    axios.get(apiURL).then(handleResponse);
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
