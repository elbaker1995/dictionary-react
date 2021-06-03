import React, { useState } from "react";
import "./dictionary.css";
import axios from "axios";
import DefinitionResults from "./Definition-results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePixelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
    axios.get(apiURL).then(handleResponse);

    let pixelsApiKey =
      "563492ad6f917000010000016bc05ffaeb54477ba1c9932959cf946c";
    let pixelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${pixelsApiKey}` };
    axios.get(pixelsApiUrl, { headers: headers }).then(handlePixelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
