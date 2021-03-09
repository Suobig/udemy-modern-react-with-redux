import React, { useState } from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';

export default class App extends React.Component { 
  state = { videos: [] };

  onSearchFormSubmit = async (term) => {
    const response = await youtube.get('/search', {params: {q: term}});
    const videos = response?.data?.items.map(item => ({
      id: item.id?.videoId,
      video: item.snippet
    }));
    this.setState({ videos: videos })
  }

  render() {
    return (<div>
      <h1>Youtube App</h1>
      <SearchBar onFormSubmit={ this.onSearchFormSubmit } />
      <VideoList videos={ this.state.videos } />
    </div>)
  }
}