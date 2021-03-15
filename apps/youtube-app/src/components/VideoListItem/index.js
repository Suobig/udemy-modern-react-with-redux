import React from 'react';

import './style.css';

const VideoListItem = ({ item }) => {
  const { id, video } = item
  return <li className="video-list-item" key={id}>
    <img src={ video.thumbnails?.medium?.url } />
    <div>{ video.title }</div>
  </li>
}

export default VideoListItem;