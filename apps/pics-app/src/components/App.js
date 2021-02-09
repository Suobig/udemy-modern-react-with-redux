import React from 'react';
import rapidapi from '../api/rapidapi';

import "./App.css";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: []   }

  onSearchSumbit = async (term) => {
    const options = {
      url: 'https://bing-image-search1.p.rapidapi.com/images/search',
      params: {q: term}
    };
    
    const response = await rapidapi.request(options);
    this.setState({ images: response.data.value.map(it => it.thumbnailUrl) });
  }

  render() {
    return (
      <div className="App ui container">
        <SearchBar onSubmit={this.onSearchSumbit} placeholder="Search images..." />
        <ImageList images = {this.state.images}/>
      </div>
    );
  }
}

export default App;
