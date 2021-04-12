import React, { useState, useEffect, useCallback } from "react";

export default function Search() {
  const [term, setTerm] = useState("");

  useEffect(() => {
    console.log("searching for", term);
  }, [term]);

  return (
    <div className="ui segment">
      <div className="ui form">
        <label htmlFor="searchbar">Search</label>
        <input
          className="field"
          type="text"
          id="searchbar"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </div>
    </div>
  );
}
