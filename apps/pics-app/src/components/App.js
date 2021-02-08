import "./App.css";
import SearchBar from "./SearchBar";
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App ui container">
        <SearchBar placeholder="Search images..." />
      </div>
    );
  }
}

export default App;
