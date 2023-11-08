import React from "react";

function Search({ searchAuthor, setSearchAuthor, searchByAuthor }) {
  return (
    <div className="search-box">
      <input
        className="search-input"
        type="text"
        placeholder="Search by Author"
        value={searchAuthor}
        onChange={(e) => setSearchAuthor(e.target.value)}
      />
      <button className="search-button" onClick={searchByAuthor}>
        Search
      </button>
    </div>
  );
}

export default Search;
