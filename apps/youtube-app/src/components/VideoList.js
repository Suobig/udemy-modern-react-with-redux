import React from 'react';

class VideoList extends React.Component {
  render() {
    const videos = this.props.videos;
    const listItems = videos.map(({ id, video }) => {
      return <li key={ id }>{ video.title }</li>
    });
    return <ul className="video-list">
      { listItems }
    </ul>
  }
}

export default VideoList;