import React from 'react';

import './style.css';

import VideoListItem from '../VideoListItem';

const VideoList = ({ videos }) => {
  const listItems = videos.map((item) => <VideoListItem item={item} />);
  return <ul className="video-list">
    { listItems }
  </ul>
}

export default VideoList;