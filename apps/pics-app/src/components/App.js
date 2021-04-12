import React from "react";
import rapidapi from "../api/rapidapi";

import "./App.css";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSumbit = async (term) => {
    console.log("async search");
    const options = {
      url: "https://bing-image-search1.p.rapidapi.com/images/search",
      params: { q: term },
    };

    const response = await rapidapi.request(options);
    console.log(response);
    this.setState({ images: response.data.value.map(responseValueMapper) });

    function responseValueMapper(value) {
      return {
        shortName: value.hostPageDomainFriendlyName || value,
        name: value.name,
        id: value.imageId,
        thumbnailUrl: value.thumbnailUrl,
        imageUrl: value.contentUrl,
        hostUrl: value.hostPageUrl,
      };
    }
  };

  render() {
    return (
      <div className="App ui container">
        <SearchBar
          onSubmit={this.onSearchSumbit}
          placeholder="Search images..."
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
