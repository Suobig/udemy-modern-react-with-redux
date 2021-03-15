import React, { useState } from 'react';
import youtube from '../apis/youtube';

import './AppStyle.css'

import MainSection from './MainSection';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

export default class App extends React.Component { 
  state = { videos: [] };

  onSearchFormSubmit = async (term) => {
    const response = await youtube.get('/search', {params: {q: term, maxResults: 12}});
    const videos = response?.data?.items.map(item => ({
      id: item.id?.videoId,
      video: item.snippet
    }));
    this.setState({ videos: videos })
  }

  render() {
    return (<div id="root-section">
      <SearchBar onFormSubmit={ this.onSearchFormSubmit } />
      <MainSection>
        <VideoDetails />
        <VideoList videos={ this.state.videos } />
      </MainSection>
    </div>)
  }
}