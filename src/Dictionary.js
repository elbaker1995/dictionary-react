import React, { useState } from "react";
import "./dictionary.css";
import axios from "axios";
import DefinitionResults from "./Definition-results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

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
      <DefinitionResults results={results} />
    </div>
  );
}
