import "./App.css";
import SearchBar from "./SearchBar";
import React from 'react';

export default function App() {
  return (
    <div className="App ui container">
      <SearchBar placeholder="Search images..." />
    </div>
  );
}
