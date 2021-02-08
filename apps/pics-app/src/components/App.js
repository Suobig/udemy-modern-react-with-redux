import "./App.css";
import SearchBar from "./SearchBar";
import React from 'react';

class App extends React.Component {
  onSearchSumbit(term) {
    console.log(`Got ${term} from a child`);
  }

  render() {
    return (
      <div className="App ui container">
        <SearchBar onSubmit={this.onSearchSumbit} placeholder="Search images..." />
      </div>
    );
  }
}

export default App;
