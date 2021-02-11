import React from 'react';

const ImageList = (props) => {
  const images = props.images.map(image => <li><img src={image.thumbnailUrl}/></li>)
  return <div>ImageList</div>
}

export default ImageList;